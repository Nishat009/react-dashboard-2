// import React from 'react'
import DashIcon from '../images/Dashboard-icon.svg'
import DashIconInactive from '../images/Dashboard-icon-inactive.svg'
import MarketsIcon from '../images/Markets-active.svg'
import MarketsIconInactive from '../images/Markets-inactive.svg'
import TransactionIcon from '../images/Transaction-active.svg'
import TransactionIconInactive from '../images/Transaction-icon.svg'
import ActiveProfileIcon from '../images/ActiveProfile-icon.svg'
import ProfileIcon from '../images/Profile-icon.svg'
import ActiveSettingsIcon from '../images/ActiveSettings-icon.svg'
import SettingsIcon from '../images/Settings-icon.svg'
import ActiveHelpIcon from '../images/ActiveHelp-icon.svg'
import HelpIcon from '../images/Help-icon.svg'
export const dashboardToSettingsData = [
    {
      id: "dashboard",
      icon: DashIcon,
      inactiveIcon: DashIconInactive,
      link: "/",
      text: "Dashboard",
    },
    {
      id: "markets",
      icon: MarketsIcon,
      inactiveIcon: MarketsIconInactive,
      link: "./markets",
      text: "Markets",
    },
    {
      id: "transaction",
      icon: TransactionIcon,
      inactiveIcon: TransactionIconInactive,
      link: "./transactions",
      text: "Transactions",
    },
    {
      id: "profile",
      icon: ActiveProfileIcon,
      inactiveIcon: ProfileIcon,
      link: "./profile",
      text: "Profile",
    },
    {
      id: "settings",
      icon: ActiveSettingsIcon,
      inactiveIcon: SettingsIcon,
      link: "./setting",
      text: "Setting",
    },
  ];
  
  export const helpData = [
    {
      id: "help",
      icon: ActiveHelpIcon,
      inactiveIcon: HelpIcon,
      link: "./help",
      text: "Help",
    },
  ];
