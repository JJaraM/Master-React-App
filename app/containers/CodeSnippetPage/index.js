import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PageDescriptionContainer from 'components/PageDescriptionContainer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CodeSnippetTable from 'components/CodeSnippetTable';
import CodeSnippetSelection from 'components/CodeSnippetSelection';
import { makeAllItems, makeSelectionItem, makeLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadAllItems, selection } from './actions';

export function CodeSnippetPage({
  onLoadItems,
  onClickView,
  items,
  item,
  loading,
}) {
  useInjectReducer({ key: 'codeSnippetPage', reducer });
  useInjectSaga({ key: 'codeSnippetPage', saga });

  useEffect(() => {
    onLoadItems();
  }, []);

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

      <div className="content-wrapper">
        <div className="section row">
          <div className="col-lg-12">
            <CodeSnippetTable
              title="Code Snippets"
              headers={[
                <FormattedMessage {...messages.table_type} />,
                <FormattedMessage {...messages.table_description} />,
                <FormattedMessage {...messages.table_view} />,
              ]}
              viewActionTitle={<FormattedMessage {...messages.table_view} />}
              viewAction={onClickView}
              items={items}
              loading={loading}
            />
            <CodeSnippetSelection item={item} />
          </div>
        </div>
      </div>
    </>
  );
}

CodeSnippetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadItems: PropTypes.func,
  onClickView: PropTypes.func,
  items: PropTypes.array,
  item: PropTypes.any,
  loading: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  items: makeAllItems(),
  item: makeSelectionItem(),
  loading: makeLoading(),
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
