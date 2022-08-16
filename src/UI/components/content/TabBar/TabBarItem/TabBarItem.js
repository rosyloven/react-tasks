import React from "react";
import styled from "styled-components";

const StyledTabBarItem = styled.div`
  display: inline-block;
  width: 145px;
  height: 40px;
  font-size: 16px;
  border: solid 1px;
  border-radius: 20px;
`;

const StyledTabBarButton = styled.button`
  color: #24305E;
  background: none;
  &:focus {
    color: #7ca0ff;
  }
`

const TabBarItem = (props) => {
  return (
    <StyledTabBarButton
      onClick={() => props.setContent(props.content)}
    >
      <StyledTabBarItem>{props.name}</StyledTabBarItem>
    </StyledTabBarButton>
  );
};

export default TabBarItem;
