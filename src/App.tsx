import React, {useEffect} from 'react';
import FolderIndex from './folder-file-app';
import {mockData} from "./folder-file-app/data";
import SearchImageIndex from "./search-image-and-display";
import Tabs, {Tab, TabList, TabPanel, TabPanels} from "./Components/Tabs";

const FirstTab = () => {
    useEffect(() => {
        console.log("First")
    }, [])
    console.log("many times")
    return(
        <div>
            <h1>I am first one</h1>
        </div>
    )
}

const SecondTab = () => {
    useEffect(() => {
        console.log("second")
    }, [])
    return(
        <div>
            <h1>I am second tab - hehe</h1>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      {/*<FolderIndex fileData={mockData}/>*/}
      <SearchImageIndex />
        <Tabs title="some title">
            <TabList>
                <Tab>Tacos</Tab>
                <Tab>Burritos</Tab>
                <Tab>Coconut Korma</Tab>
                <Tab>Tacos</Tab>
                <Tab>Burritos</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <FirstTab />
                </TabPanel>
                <TabPanel>
                    <SecondTab />
                </TabPanel>
                <TabPanel>
                    <p>Might be your best option.</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  );
}

export default App;
