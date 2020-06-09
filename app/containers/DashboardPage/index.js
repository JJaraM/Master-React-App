import React, { useEffect, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import TopMenu from 'components/TopMenu';
import SideMenu from 'components/SideMenu';
import Dashboard from 'components/Dashboard';
import { changeTheme } from 'containers/ThemePage/actions';
import ThemePage from 'containers/ThemePage';
import ExamPage from 'containers/ExamPage';
import CodeSnippetPage from 'containers/CodeSnippetPage';
import CodeSnippetApp from 'containers/CodeSnippetApp';
import WebServicePage from 'containers/WebServicePage';

import AlertMessage from 'components/AlertMessage';
import RowSection12 from 'components/RowSection12';
import { loadMenuOptions, actionCollapse } from './actions';
import {
  makeItems,
  makeSelectionSideBarBig,
  makeSelectAlertMessages,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles/scrollbar.scss';
import './styles/dashboard.scss';
import './styles/checkbox.scss';
import './styles/buttons.scss';
import './styles/card.scss';
import './styles/customPrism.scss';
import './styles/form.scss';
import './styles/home.scss';
import './styles/navbar.scss';
import './styles/topMenu.scss';
import './styles/table.scss';
import './styles/prism-okaida.scss';
import './styles/icons.scss';
import './styles/tooltip.scss';
import './styles/modal.scss';

export function DashboardPage({
  items,
  onChangeTheme,
  getMenuItems,
  sidebarBig,
  onCollapse,
  alertMessages,
}) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  useEffect(() => {
    onChangeTheme();
    getMenuItems();
  }, []);

  const itemsProps = {
    items,
    sidebarBig,
  };

  let AlertMessageSection = () => null;

  if (alertMessages && alertMessages.length > 0) {
    AlertMessageSection = () => (
      <RowSection12>
        <AlertMessage messages={alertMessages} />
      </RowSection12>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of DashboardPage" />
      </Helmet>
      <TopMenu onClick={onCollapse} />
      <div className="container-fluid page-body-wrapper">
        <SideMenu {...itemsProps} />
        <Dashboard sidebarBig={sidebarBig}>
          <Switch>
            <Route path="/dashboard/exam" component={ExamPage} />
            <Route path="/dashboard/codeSnippet" component={CodeSnippetPage} />
            <Route path="/dashboard/webservices" component={WebServicePage} />
            <Route path="/dashboard/settings/themes" component={ThemePage} />
            <Route path="/dashboard/codeSnippetApp" component={CodeSnippetApp}
            />
          </Switch>
          <AlertMessageSection />
        </Dashboard>
      </div>
    </>
  );
}

DashboardPage.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onChangeTheme: PropTypes.func,
  getMenuItems: PropTypes.func,
  sidebarBig: PropTypes.bool,
  onCollapse: PropTypes.func,
  alertMessages: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
  sidebarBig: makeSelectionSideBarBig(),
  alertMessages: makeSelectAlertMessages(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMenuItems: () => dispatch(loadMenuOptions()),
    onChangeTheme: () => {
      dispatch(changeTheme());
    },
    onCollapse: evt => {
      if (evt !== undefined) {
        dispatch(actionCollapse());
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashboardPage);
