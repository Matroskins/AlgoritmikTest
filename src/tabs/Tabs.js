import React from "react";
import { Tab, Container, Wrapper } from "./style";

const Tabs = ({ tabs }) => (
  <Wrapper>
    <Container>
      {tabs.map(tab => (
        <Tab disabled={tab.disabled} key={tab.displayName}>
          {tab.displayName}
        </Tab>
      ))}
    </Container>
  </Wrapper>
);

export default Tabs;
