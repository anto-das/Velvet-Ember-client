import { useState } from "react";
import useMenu from "../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuTab from "./MenuTab";

const TabCategories = () => {
      const [items] = useMenu();
      const [tabIdx,setTabIdx] =useState(0);
      const desserts = items.filter(item => item.category === 'dessert');
      const pizza = items.filter(item => item.category === 'pizza');
      const soup = items.filter(item => item.category === 'soup');
      const salad = items.filter(item => item.category === 'salad');
      const drinks = items.filter(item => item.category === 'drinks');
      return (
        <div className="w-11/14 mx-auto my-8">
            <Tabs defaultIndex={tabIdx} onSelect={(index) => setTabIdx(index)}>
                 <div className="flex justify-center items-center">
                    <TabList>
                    <Tab><span className="uppercase">salad</span></Tab>
                    <Tab><span className="uppercase">pizza</span></Tab>
                    <Tab><span className="uppercase">soup</span></Tab>
                    <Tab><span className="uppercase">dessert</span></Tab>
                    <Tab><span className="uppercase">drinks</span></Tab>
                </TabList>
                 </div>
                <TabPanel>
                    <MenuTab
                    items={salad}></MenuTab>
                </TabPanel>
                <TabPanel> <MenuTab
                    items={pizza}></MenuTab></TabPanel>
                <TabPanel> <MenuTab
                    items={soup}></MenuTab></TabPanel>
                <TabPanel><MenuTab
                    items={desserts}></MenuTab></TabPanel>
                <TabPanel><MenuTab
                    items={drinks}></MenuTab></TabPanel>
                </Tabs>
        </div>
    );
};

export default TabCategories;