import { Component, PropTypes } from 'react';
import r, { div } from 'r-dom';

import css from './ArrowDropdown.css';
import inboxEmptyIcon from './images/inboxEmptyIcon.svg';
import profileIcon from './images/profileIcon.svg';
import settingsIcon from './images/settingsIcon.svg';

class ProfileActionCard extends Component {
  render() {
    return div({ className: css.profileAction, onClick: this.props.action }, [
      div({ className: css.profileActionIcon, dangerouslySetInnerHTML: { __html: this.props.icon } }),
      div({ className: css.profileActionLabel }, this.props.label),
    ]);
  }
}

ProfileActionCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  action: PropTypes.func,
};

class ArrowDropdown extends Component {
  render() {
    return div({
      className: css.arrowDropdown,
    }, [
      div({ className: css.rootArrow }),
      div({ className: css.box }, [
        div({ className: css.profileActions }, [
          r(ProfileActionCard, { label: 'Inbox', icon: inboxEmptyIcon, action: this.props.actions.inboxAction }),
          r(ProfileActionCard, { label: 'Profile', icon: profileIcon, action: this.props.actions.profileAction }),
          r(ProfileActionCard, { label: 'Settings', icon: settingsIcon, action: this.props.actions.settingsAction }),
        ]),
        div({ className: css.logoutArea }, [
          div({
            className: css.adminLink,
            style: { color: this.props.customColor },
            onClick: this.props.actions.adminDashboardAction,
          }, 'Admin dashboard'),
          div({
            className: css.logoutLink,
            onClick: this.props.actions.logoutAction,
          }, 'Logout'),
        ]),
      ]),
    ]);
  }
}

ArrowDropdown.propTypes = {
  actions: PropTypes.shape({
    inboxAction: PropTypes.func,
    profileAction: PropTypes.func,
    settingsAction: PropTypes.func,
    adminDashboardAction: PropTypes.func,
    logoutAction: PropTypes.func,
  }),
  customColor: PropTypes.string.isRequired,
};

export default ArrowDropdown;