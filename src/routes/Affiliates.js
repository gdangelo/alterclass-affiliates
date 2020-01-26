import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useEventListener } from '../hooks';
import styled from 'styled-components';
// Components
import {
  MdMenu,
  MdSettings, 
  MdHome,
  MdThumbUp,
  MdVisibility,
  MdCreditCard,
  MdImage
} from 'react-icons/md';
import Sidebar from '../components/Sidebar';
import Text from '../components/Text';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './Dashboard';
import Customers from './Customers';

const Main = styled.main`
  margin-left: ${props => props.offset};
  transition: margin-left .2s ease-in-out,margin-right .2s ease-in-out;
`;

const NavbarStyled = styled(Navbar)`
  background: #fff;
  border-bottom: 1px solid #dbe2e8;
  box-shadow: 0 0 40px rgba(0,0,0,.25);
  height: 57px;
  padding: 0 30px;
`;

const MenuIcon = styled(MdMenu)`
  font-size: 2em;
  margin-right: 15px;
  cursor: pointer;
`;

const Affiliates = ({ match, location }) => {
  const breakpoint = 768;

  const [lastWidth, setLastWidth] = useState(window.innerWidth);
  const [showMenuIcon, toggleMenuIcon] = useState(window.innerWidth < breakpoint);
  const [showSidebar, toggleSidebar] = useState(window.innerWidth >= breakpoint);

  // Event handler
  const handler = ({ srcElement }) => {
    const currentWidth = srcElement.innerWidth;
    if (currentWidth >= breakpoint) {
      toggleSidebar(true);
    }
    if (lastWidth >= breakpoint && currentWidth < breakpoint) {
      toggleSidebar(false);
    }
    setLastWidth(currentWidth);
    
    toggleMenuIcon(currentWidth < breakpoint);
  };

  // Add event listener using our hook
  useEventListener('resize', handler);

  // Offset and sidebar style
  const minimize = !match.isExact;
  const offset = !showSidebar ? "0rem" : minimize ? "4rem" : "16rem";

  // Navbar title
  const pathname = location.pathname.split('/').pop();
  let title = "";
  switch(pathname) {
    case "": 
      title = "dashboard";
      break;
    default: 
      title = pathname;
  }

  // Sidebar links
  const topLinks = [
    { 
      icon: MdHome,
      name: "Dashboard",
      path: "/",
      active: pathname === ""
    },
    { 
      icon: MdThumbUp,
      name: "Referred customers",
      path: "/referred-customers",
      active: pathname === "referred-customers"
    },
    { 
      icon: MdVisibility,
      name: "Referred visitors",
      path: "/referred-visitors",
      active: pathname === "referred-visitors",
    },
    { 
      icon: MdCreditCard,
      name: "Payments",
      path: "/payments",
      active: pathname === "payments",
    },
    { 
      icon: MdImage,
      name: "Promo material",
      path: "/material",
      active: pathname === "material",
    }
  ];

  const bottomLinks = [
    { 
      icon: MdSettings,
      name: "Settings",
      path: "/settings",
      active: pathname === "settings",
    }
  ];

  return (
    <div>
      <Sidebar 
        minimize={minimize} 
        show={showSidebar}
        topLinks={topLinks}
        bottomLinks={bottomLinks}
      />
      <Main offset={offset}>
        <NavbarStyled>
          { showMenuIcon && <MenuIcon onClick={() => toggleSidebar(!showSidebar)} /> }
          <Text capitalize>{title}</Text>
        </NavbarStyled>
        <Switch>
          <Route exact path={`${match.path}/referred-customers`} component={Customers} />
          <Route exact path={`${match.path}/referred-visitors`} component={Customers} />
          <Route exact path={`${match.path}/payments`} component={Customers} />
          <Route exact path={`${match.path}/material`} component={Customers} />
          <Route exact path={`${match.path}/settings`} component={Customers} />
          <Route exact path={`${match.path}`} component={Dashboard} />
        </Switch>
      </Main>
    </div>
  );
};

export default withRouter(Affiliates);
