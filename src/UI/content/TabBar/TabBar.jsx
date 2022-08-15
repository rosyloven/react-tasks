import React, {useState} from 'react';
import TabBarItem from "./TabBarItem/TabBarItem";
import styled from 'styled-components';

const StyledTabContainer = styled.div`
  font-family: Arial;
  color: #05386B;
  height: 300px;
  width: 500px;
  border: 1px solid #05386B;
  border-radius: 30px;
  box-shadow: 1px 1px #05386B;
`
const StyledTabItems = styled.div`
  margin: 30px;
  border-bottom: 1px solid #05386B;
  text-align: center;
`
const StyledContent = styled.div`
  margin-left: 30px;
`

const TabBar = (props) => {
  const [content, setContent] = useState('');

  return (
    <StyledTabContainer>
      <StyledTabItems>
        <TabBarItem name='ItemOne' setContent={setContent} content={props.tabContent.content1} />
        <TabBarItem name='ItemTwo' setContent={setContent} content={props.tabContent.content2} />
        <TabBarItem name='ItemThree' setContent={setContent} content={props.tabContent.content3} />
      </StyledTabItems>
      <StyledContent>
        {content}
      </StyledContent>
    </StyledTabContainer>
  );
};

export default TabBar;

