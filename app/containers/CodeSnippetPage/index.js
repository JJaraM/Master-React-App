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
import BootstrapModal from 'components/BootstrapModal';

import {
  makeAllItems,
  makeSelectionItem,
  makeLoading,
  makeRenderAddView,
  makeSelectionId,
  makeRenderDeleteView,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  loadAllItems,
  selection,
  loadAddView,
  remove,
  edit,
  renderDeletePopup,
} from './actions';

export function CodeSnippetPage({
  onLoadPage,
  onClickView,
  onClickAdd,
  onClickDelete,
  onClickEdit,
  onClickDeletePopup,
  onClickViewClose,
  items,
  item,
  loading,
  renderAddView,
  renderDeleteView,
  id,
}) {
  useInjectReducer({ key: 'codeSnippetPage', reducer });
  useInjectSaga({ key: 'codeSnippetPage', saga });

  useEffect(() => {
    onLoadPage();
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
              <FormattedMessage {...messages.table_delete} />,
              <FormattedMessage {...messages.table_edit} />,
            ]}
            viewActionTitle={<FormattedMessage {...messages.table_view} />}
            viewAction={onClickView}
            deleteAction={onClickDeletePopup}
            editAction={onClickEdit}
            items={items}
            loading={loading}
            footer={<RolesFooter />}
          />
        </RowSection12>

        <RowSection12>
          <CodeSnippetSelection item={item} onClose={onClickViewClose} />
        </RowSection12>

        <RowSection12>
          <CodeSnippetAdd render={renderAddView} update={id !== 0} />
        </RowSection12>

        <BootstrapModal
          show={renderDeleteView}
          onYes={onClickDelete}
          onNo={onClickDeletePopup}
          title={<FormattedMessage {...messages.popup_title_delete} />}
          body={<FormattedMessage {...messages.popup_body_delete} />}
        />
      </ContentWrapper>
    </>
  );
}

CodeSnippetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadPage: PropTypes.func,
  onClickView: PropTypes.func,
  onClickAdd: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDeletePopup: PropTypes.func,
  onClickViewClose: PropTypes.func,
  items: PropTypes.array,
  item: PropTypes.any,
  loading: PropTypes.number,
  renderAddView: PropTypes.bool,
  id: PropTypes.number,
  renderDeleteView: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items: makeAllItems(),
  item: makeSelectionItem(),
  loading: makeLoading(),
  renderAddView: makeRenderAddView(),
  renderDeleteView: makeRenderDeleteView(),
  id: makeSelectionId(),
});

let isRenderDeletePopup = false;
let deleteItem = 0;

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(loadAllItems()),
    onClickView: option => dispatch(selection(option)),
    onClickViewClose: () => dispatch(selection(0)),
    onClickAdd: () => dispatch(loadAddView()),
    onClickEdit: id => dispatch(edit(id)),
    onClickDelete: () => dispatch(remove(deleteItem)),
    onClickDeletePopup: id => {
      deleteItem = id;
      isRenderDeletePopup = !isRenderDeletePopup;
      dispatch(renderDeletePopup(isRenderDeletePopup));
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
