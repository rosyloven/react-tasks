import React from "react";
import styled from "styled-components";

const StyledTabBarItem = styled.div`
  display: inline-block;
  width: 145px;
  height: 40px;
  font-size: 16px;
  border-bottom: solid 1px;
`;

const StyledTabBarButton = styled.button`
  color: #24305E;
  background: none;
  &:focus {
    color: #7ca0ff;
  }
`

const TabBarItem = ({ setContent, name, content }) => {

  const setContentValue = () => setContent(content)

  return (
    <StyledTabBarButton
      onClick={() => setContentValue()}
    >
      <StyledTabBarItem>{name}</StyledTabBarItem>
    </StyledTabBarButton>
  );
};

export default TabBarItem;
