import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// Components
import Text from './Text';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Container = styled.nav`
  width: ${props => props.minimize ? "4rem" : "16rem"};
  background: #1f2932;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  height: 100%;
  color: #fff;
  z-index: 10;
  transform: ${props => props.show ? "translateX(0)" : "translateX(-100%)"};
  transition: all .2s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LogoContainer = styled.div`
  height: auto;
  padding: 15px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 10px 0;
  background-color: ${props => props.active ? "rgb(254, 92, 92)" : null};

  &:hover {
    color: #fff;
    background-color: rgb(254, 92, 92);
  }
`;

const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: ${props => props.minimize ? "center" : null};

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const iconStyles = css`
  font-size: 1.6em;
  margin-right: ${props => props.minimize ? "0" : "10px"};
  color: #fff;
`;

const Sidebar = ({ 
  minimize = false, 
  show = true,
  topLinks = [],
  bottomLinks = []
}) => {

  const renderLinks = (links) => (
    links.map((link, i) => {
      const Icon = link.icon ? styled(link.icon)`${iconStyles}` : null;

      if (minimize) {
        return (
          <NavListItem key={i} active={link.active}>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 200 }}
              overlay={<Tooltip>{link.name}</Tooltip>}
            >
              <LinkStyled to={link.path} minimize={minimize ? 1 : 0}>
                { link.icon && <Icon minimize={minimize ? 1 : 0} /> }
              </LinkStyled>
            </OverlayTrigger>
          </NavListItem>
        );
      }

      return (
        <NavListItem key={i} active={link.active}>
          <LinkStyled to={link.path} minimize={minimize ? 1 : 0}>
            { link.icon && <Icon minimize={minimize ? 1 : 0} /> }
            <Text light={true}>{link.name}</Text>
          </LinkStyled>
        </NavListItem>
      );
    })
  );

  return (
    <Container 
      minimize={minimize ? 1 : 0}
      show={show ? 1 : 0}
    >
      <Content>
        <LogoContainer />
        <Menu>
          <NavList>{renderLinks(topLinks)}</NavList>
          <NavList>{renderLinks(bottomLinks)}</NavList>
        </Menu>
      </Content>
    </Container>
  );
};

export default Sidebar;
