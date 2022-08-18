import React from "react";
import styled, { css } from "styled-components";

const StyledTabBarItem = styled.div`
  display: inline-block;
  width: 100px;
  height: 40px;
  font-size: 15px;
  border-bottom: solid 1px;
  color: #868686;

  ${(props) =>
    props.isActive &&
    css`
      color: dodgerblue;
      border-bottom: solid 2.5px cornflowerblue;
    `};
`;

const StyledTabBarButton = styled.button`
  color: #3f3f3f;
  background: none;
`;

const TabBarItem = ({ name, onSetActiveTab, isActive }) => (
  <StyledTabBarButton onClick={onSetActiveTab}>
    <StyledTabBarItem isActive={isActive}>{name}</StyledTabBarItem>
  </StyledTabBarButton>
);

export default TabBarItem;
