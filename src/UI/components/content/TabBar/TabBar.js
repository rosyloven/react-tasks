import React, { useState } from "react";
import TabBarItem from "./TabBarItem/TabBarItem";
import { StyledContent } from "./views";
import { StyledTabContainer } from "./views";
import { StyledTabItems } from "./views";
import tabNames from "../../../../constants/TabBar";
import { tabContent } from "../../../../constants/TabBar";

const TabBar = (props) => {
  const [content, setContent] = useState("");

  return (
    <StyledTabContainer>
      <StyledTabItems>
        <TabBarItem
          name={tabNames[0]}
          setContent={setContent}
          content={tabContent[0]}
        />
        <TabBarItem
          name={tabNames[1]}
          setContent={setContent}
          content={tabContent[1]}
        />
        <TabBarItem
          name={tabNames[2]}
          setContent={setContent}
          content={tabContent[2]}
        />
      </StyledTabItems>
      <StyledContent>{content}</StyledContent>
    </StyledTabContainer>
  );
};

export default TabBar;
