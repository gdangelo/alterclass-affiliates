import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: ${props => props.light ? "#fff" : "#000"};
  text-align: ${props => props.center ? "center" : "inherit"};
  margin: auto;
  margin-left: 0;
  margin-right: 0;
  font-weight: ${props => props.bold ? 700 : null};
  text-transform: ${props => {
    if (props.uppercase) return "uppercase";
    if (props.capitalize) return "capitalize";
    return null;
  }};
  font-size: ${props => {
    switch(props.size) {
      case "xs": return "0.85em";
      case "sm": return "1em";
      case "md": return "1.5em";
      case "lg": return "2em";
      default: return "1em";
    }
  }};
  ${props => props.containerStyle ? props.containerStyle : null};
`;

const Text = ({
  bold = false, 
  uppercase = false,
  capitalize = false,
  light = false, 
  size="sm", 
  center = false,
  containerStyle = {},
  children 
}) => (
  <Container 
    bold={bold ? 1 : 0} 
    uppercase={uppercase ? 1 : 0}
    capitalize={capitalize ? 1 : 0}
    light={light ? 1 : 0}
    size={size}
    center={center ? 1 : 0}
    containerStyle={containerStyle}
  >
    { children }
  </Container>
);

export default Text;
