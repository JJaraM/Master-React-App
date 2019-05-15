import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CodeSnippetLanguagesList from 'components/CodeSnippetLanguagesList';
import CodeSnippetsLanguagesDescriptionList from 'components/CodeSnippetsLanguagesDescriptionList';
import CodeSnippetSelectionInfo from 'components/CodeSnippetSelectionInfo';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCodeSnippetApp, makeSelectLanguages } from './selectors';
import { makeSelectCodeSnippets } from 'containers/CodeSnippetLanguageItem/selectors';
import { makeSelectedCodeSnippet, makeSelectedCodeSnippetContent } from 'containers/CodeSnippetLanguagesDescriptionItem/selectors';
import { selectCodeSnippet } from 'containers/CodeSnippetLanguagesDescriptionItem/actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadLanguages } from './actions';

export function CodeSnippetApp({
  onLoadPage,
  onChangeCodeSnippet,
  languages,
  items,
  selectedItem,
}) {
  useInjectReducer({ key: 'codeSnippetApp', reducer });
  useInjectSaga({ key: 'codeSnippetApp', saga });

  useEffect(() => {
    onLoadPage();
  }, []);


  return (
    <div className="page-body-sub-item-wrapper">
      <Helmet>
        <title>CodeSnippetApp</title>
        <meta name="description" content="Description of CodeSnippetApp" />
      </Helmet>
      <CodeSnippetLanguagesList languages={languages} />
      <CodeSnippetsLanguagesDescriptionList items={items} />
      <CodeSnippetSelectionInfo item={selectedItem} onEdit={onChangeCodeSnippet} />
    </div>
  );
}

CodeSnippetApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  languages: PropTypes.any,
  onLoadPage: PropTypes.func,
  onChangeCodeSnippet: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  codeSnippetApp: makeSelectCodeSnippetApp(),
  languages: makeSelectLanguages(),
  items: makeSelectCodeSnippets(),
  selectedItem: makeSelectedCodeSnippetContent(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(loadLanguages()),
    onChangeCodeSnippet: (item, newValue) => {
      item.content = newValue;
      dispatch(selectCodeSnippet(item));
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
)(CodeSnippetApp);
