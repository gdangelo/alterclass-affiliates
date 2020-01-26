import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useEventListener } from '../hooks';
import styled from 'styled-components';
// Components
import { MdMenu } from 'react-icons/md';
import Sidebar from '../components/Sidebar';
import Text from '../components/Text';
import Navbar from 'react-bootstrap/Navbar';

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

  return (
    <div>
      <Sidebar 
        minimize={minimize} 
        show={showSidebar}
      />
      <Main offset={offset}>
        <NavbarStyled>
          { showMenuIcon && <MenuIcon onClick={() => toggleSidebar(!showSidebar)} /> }
          <Text capitalize>{title}</Text>
        </NavbarStyled>
        <Switch>
          <Route exact path={`${match.path}/referred-customers`} component={null} />
          <Route exact path={`${match.path}/referred-visitors`} component={null} />
          <Route exact path={`${match.path}/payments`} component={null} />
          <Route exact path={`${match.path}/material`} component={null} />
          <Route exact path={`${match.path}/settings`} component={null} />
        </Switch>
      </Main>
    </div>
  );
};

export default withRouter(Affiliates);
