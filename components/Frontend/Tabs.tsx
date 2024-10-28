"use client"

import React from 'react';
import { Tabs } from "flowbite-react";
import { UserCircle } from 'lucide-react';
import ServicesList from './services/ServicesList';

interface Tab {
  title: string;
  icon: React.ElementType;
  content: any[];
}

export const ComponentsTab: React.FC = () => {
    const tabs = [
        {
            title: "Top Booked",
            icon: UserCircle,
            components: <ServicesList/>,
            content: []
        },
        {
            title: "Doctors",
            icon: UserCircle,
            components: <ServicesList/>,
            content: []
        },
        {
            title: "Specialties",
            icon: UserCircle,
            components: <ServicesList/>,
            content: []
        },
        {
            title: "Symptoms",
            icon: UserCircle,
            components: <ServicesList/>,
            content: []
        }
       
        
    ];

  return (
    <Tabs aria-label="Tabs with icons" variant="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active title={tab.title} 
        //@ts-ignore
        icon={tab.icon} >
        {tab.components}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

