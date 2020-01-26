import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 250px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 30px;
  border-radius: .5rem;
  box-shadow: 0 0 8px 0 rgba(17,22,26,.16), 0 4px 8px 0 rgba(17,22,26,.08), 0 8px 16px 0 rgba(17,22,26,.08);
  overflow: hidden;
  -webkit-transition: box-shadow .3s ease-in-out;
  transition: box-shadow .2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px 4px rgba(17,22,26,.16), 0 4px 8px 0 rgba(17,22,26,.08), 0 16px 24px 0 rgba(17,22,26,.08);
  }
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #6c757d;
  margin: 0;
  text-transform: capitalize;
`;

const Card = ({ title = '', subtitle = '' }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default Card;
