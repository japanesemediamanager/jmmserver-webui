import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../core/store';
import Events from '../../core/events';
import Header from '../../components/Layout/Header';
import AlertContainer from '../../components/AlertContainer';
import Sidebar from '../../components/Layout/Sidebar';

import DasboardTab from './Tabs/DashboardTab';
import ImportFoldersTab from './Tabs/ImportFoldersTab';

class MainPage extends React.Component<Props> {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  componentWillUnmount() {
    const { autoUpdate, stopPolling } = this.props;
    if (autoUpdate) {
      stopPolling();
    }
  }

  renderContent = () => {
    const { activeTab } = this.props;

    switch (activeTab) {
      case 'dashboard':
        return (<DasboardTab />);
      case 'import-folders':
        return (<ImportFoldersTab />);
      default:
        return (<DasboardTab />);
    }
  };

  render() {
    return (
      <div className="flex flex-grow h-full">
        <AlertContainer />
        <div className="flex h-screen sidebar-container">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-grow h-full">
          <Header />
          <div className="overflow-y-auto">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  activeTab: state.mainpage.activeTab,
  autoUpdate: state.autoUpdate,
});

const mapDispatch = {
  stopPolling: () => ({ type: Events.STOP_API_POLLING, payload: { type: 'auto-refresh' } }),
  load: () => ({ type: Events.MAINPAGE_LOAD }),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export default connector(MainPage);