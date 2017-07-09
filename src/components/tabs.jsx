import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ExampleTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <p>Any content 1</p>
    </TabPanel>
    <TabPanel>
      <p>Any content 2</p>
    </TabPanel>
  </Tabs>
);

export default ExampleTabs;
