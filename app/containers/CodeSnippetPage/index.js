import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PageDescriptionContainer from 'components/PageDescriptionContainer';
import LinkButton from 'components/LinkButton';
import ContentWrapper from 'components/ContentWrapper';
import RowSection12 from 'components/RowSection12';
import CodeSnippetTable from 'components/CodeSnippetTable';
import CodeSnippetSelection from 'components/CodeSnippetSelection';
import CodeSnippetAdd from 'components/CodeSnippetAdd';
import {
  makeAllItems,
  makeSelectionItem,
  makeLoading,
  makeRenderAddView,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadAllItems, selection, loadAddView } from './actions';

export function CodeSnippetPage({
  onLoadItems,
  onClickView,
  onClickAdd,
  items,
  item,
  loading,
  renderAddView,
}) {
  useInjectReducer({ key: 'codeSnippetPage', reducer });
  useInjectSaga({ key: 'codeSnippetPage', saga });

  useEffect(() => {
    onLoadItems();
  }, []);

  const RolesFooter = () => (
    <>
      To add a new code snippet press
      <LinkButton onClick={onClickAdd}>here</LinkButton>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Code Snippets</title>
        <meta name="description" content="Description of CodeSnippetPage" />
      </Helmet>

      <PageDescriptionContainer
        title={<FormattedMessage {...messages.title} />}
        description={<FormattedMessage {...messages.description} />}
      />

      <ContentWrapper>
        <RowSection12>
          <CodeSnippetTable
            title={<FormattedMessage {...messages.title} />}
            headers={[
              <FormattedMessage {...messages.table_type} />,
              <FormattedMessage {...messages.table_description} />,
              <FormattedMessage {...messages.table_view} />,
            ]}
            viewActionTitle={<FormattedMessage {...messages.table_view} />}
            viewAction={onClickView}
            items={items}
            loading={loading}
            footer={<RolesFooter />}
          />
        </RowSection12>

        <RowSection12>
          <CodeSnippetSelection item={item} />
        </RowSection12>

        <RowSection12>
          <CodeSnippetAdd render={renderAddView} />
        </RowSection12>
      </ContentWrapper>
    </>
  );
}

CodeSnippetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadItems: PropTypes.func,
  onClickView: PropTypes.func,
  onClickAdd: PropTypes.func,
  items: PropTypes.array,
  item: PropTypes.any,
  loading: PropTypes.number,
  renderAddView: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items: makeAllItems(),
  item: makeSelectionItem(),
  loading: makeLoading(),
  renderAddView: makeRenderAddView(),
});

let preSelection = 0;

function mapDispatchToProps(dispatch) {
  return {
    onLoadItems: () => dispatch(loadAllItems()),
    onClickView: option => {
      let selectedOption = option;
      if (selectedOption === preSelection) {
        selectedOption = 0;
      }
      preSelection = selectedOption;
      return dispatch(selection(selectedOption));
    },
    onClickAdd: () => dispatch(loadAddView()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CodeSnippetPage);
