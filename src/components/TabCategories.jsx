import { useState } from "react";
import useMenu from "../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuTab from "./MenuTab";
import { useParams } from "react-router-dom";

const TabCategories = () => {
      const [items] = useMenu();
      const categories = ['salad','pizza','soup','desserts','drinks','offered'];
      const {category} =useParams();
      const initialIndex = categories.indexOf(category);
      const [tabindex,setTabIndex] =useState(initialIndex);
      const salad = items.filter(item => item.category === 'salad');
      const pizza = items.filter(item => item.category === 'pizza');
      const soup = items.filter(item => item.category === 'soup');
      const desserts = items.filter(item => item.category === 'dessert');
      const drinks = items.filter(item => item.category === 'drinks');
      const offered = items.filter(item => item.category === 'offered');
      return (
        <div className="w-11/14 mx-auto my-8">
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                 <div className="flex justify-center items-center">
                    <TabList>
                    <Tab><span className="uppercase">salad</span></Tab>
                    <Tab><span className="uppercase">pizza</span></Tab>
                    <Tab><span className="uppercase">soup</span></Tab>
                    <Tab><span className="uppercase">dessert</span></Tab>
                    <Tab><span className="uppercase">drinks</span></Tab>
                    <Tab><span className="uppercase">offered</span></Tab>
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
                <TabPanel><MenuTab
                    items={offered}></MenuTab></TabPanel>
                </Tabs>
        </div>
    );
};

export default TabCategories;