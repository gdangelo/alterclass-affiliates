import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// Components
import Text from './Text';
import { 
  MdSettings, 
  MdHome,
  MdThumbUp,
  MdVisibility,
  MdCreditCard,
  MdImage
} from 'react-icons/md';

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
  margin-bottom: 15px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgb(254, 92, 92);
  }
`;

const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const iconStyles = css`
  font-size: 1.3em;
  margin-right: ${props => props.minimize ? "0" : "15px"};
  color: #fff;
`;

const Sidebar = ({ minimize = false, show = true }) => {
  const renderLinks = (links) => (
    links.map((link, i) => {
      const Icon = link.icon ? styled(link.icon)`${iconStyles}` : null;
      return (
        <NavListItem key={i}>
          <LinkStyled to={link.path}>
            { link.icon && <Icon minimize={minimize ? 1 : 0} /> }
            { !minimize && <Text light={true}>{link.name}</Text> }
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
          <NavList>
            { 
              renderLinks([
                { 
                  icon: MdHome,
                  name: "Dashboard",
                  path: "/"
                },
                { 
                  icon: MdThumbUp,
                  name: "Referred customers",
                  path: "/referred-customers"
                },
                { 
                  icon: MdVisibility,
                  name: "Referred visitors",
                  path: "/referred-visitors"
                },
                { 
                  icon: MdCreditCard,
                  name: "Payments",
                  path: "/payments"
                },
                { 
                  icon: MdImage,
                  name: "Promo material",
                  path: "/material"
                }
              ])
            }
          </NavList>
          <NavList>
          { 
            renderLinks([
              { 
                icon: MdSettings,
                name: "Settings",
                path: "/settings"
              }
            ])
          }
        </NavList>
        </Menu>
      </Content>
    </Container>
  );
};

export default Sidebar;
