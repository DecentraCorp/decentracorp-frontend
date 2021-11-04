import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import Topbar from '../../pages/homepage/topbar';
import {
  headerTextstyle,
  routerTextstyle,
  routerBoxStyle,
  navbarstyle,
} from '../../styles';
import React from 'react';
export function Header() {
  return (
    <nav style={navbarstyle as React.CSSProperties}>
      <NavLink style={headerTextstyle} exact activeClassName="active" to="/">
        Home Page &nbsp;
      </NavLink>
      <NavLink
        style={headerTextstyle}
        exact
        activeClassName="active"
        to="/bank"
      >
        DecentraBank &nbsp;
      </NavLink>
      <NavLink
        style={routerTextstyle}
        exact
        activeClassName="active"
        to="/membership"
      >
        Membership
      </NavLink>
      <NavLink style={routerTextstyle} exact activeClassName="active" to="/dao">
        DecentraCorp DAO
      </NavLink>

      <Topbar />
    </nav>
  );
}
