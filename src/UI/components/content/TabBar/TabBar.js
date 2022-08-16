import React, { useState } from "react";
import TabBarItem from "./TabBarItem/TabBarItem";
import { StyledContent, StyledTabContainer, StyledTabItems } from "./views";
import { TAB_CONTENT, TAB_NAMES } from "../../../../constants/TabBar";


const TabBar = () => {
  const [content, setContent] = useState("");

  return (
    <StyledTabContainer>
      <StyledTabItems>
        <TabBarItem
          name={TAB_NAMES[0]}
          setContent={setContent}
          content={TAB_CONTENT[0]}
        />
        <TabBarItem
          name={TAB_NAMES[1]}
          setContent={setContent}
          content={TAB_CONTENT[1]}
        />
        <TabBarItem
          name={TAB_NAMES[2]}
          setContent={setContent}
          content={TAB_CONTENT[2]}
        />
      </StyledTabItems>
      <StyledContent>{content}</StyledContent>
    </StyledTabContainer>
  );
};

export default TabBar;
