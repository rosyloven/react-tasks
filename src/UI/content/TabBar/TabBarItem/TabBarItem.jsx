import React from 'react';
import styled from "styled-components";

const TabBarItem = (props) => {

  const StyledTabBarItem = styled.div`
    display: inline-block;
    width: 145px;
    height: 40px;
    font-size: 16px;
    .item:active {
      color:#F76C6C;
    }
  `

  return (
    <a href='#' onClick={() => {props.setContent(props.content)}}>
      <StyledTabBarItem>{props.name}</StyledTabBarItem>
    </a>
  );
};

export default TabBarItem;