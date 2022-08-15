import React from 'react';
import TabBar from "./TabBar/TabBar";

const Content = (props) => {
  return (
    <div>
      <TabBar tabContent={props.state.content.tabBar} />
    </div>
  );
};

export default Content;