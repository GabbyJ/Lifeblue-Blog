import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PopularCarousel from './PopularCarousel';

export default function PopularPosts() {
    return (
        <Tabs className="popular-tabs">
            <TabList>
                <Tab>Most Viewed</Tab>
                <Tab>Most Commented</Tab>
                <Tab>Most Shared</Tab>
            </TabList>

            <TabPanel>
                <h2>Most Viewed</h2>
                <PopularCarousel/>
            </TabPanel>
            <TabPanel>
                <h2>Most Commented</h2>
                <PopularCarousel/>
            </TabPanel>
            <TabPanel>
                <h2>Most Shared</h2>
                <PopularCarousel/>
            </TabPanel>
        </Tabs>
    )
}
