import React, { useState } from "react";
import TabBarItem from "./TabBarItem/TabBarItem";
import { StyledContent, StyledTabContainer, StyledTabItems } from "./views";
import { TAB_DATA } from "../../../../constants/TabBar";

const TabBar = () => {
  const [content, setContent] = useState("");

  return (
    <StyledTabContainer>
      <StyledTabItems>
        {TAB_DATA.map((tab) => (
          <TabBarItem
            name={tab.itemName}
            id={tab.id}
            setContent={setContent}
            content={tab.content}
          />
        ))}
      </StyledTabItems>
      <StyledContent>{ content || TAB_DATA[0].content }</StyledContent>
    </StyledTabContainer>
  );
};

export default TabBar;
