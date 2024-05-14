
"use client";
import React, { useState } from 'react';
import Body1 from "@/components/ui/MainBody1";
import Body from "@/components/ui/MainBody";
import Navbar from "@/components/ui/Navbar";
import AccordionDemo from "@/components/ui/Acc";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('mainbody');

  const handleAccordionClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <Navbar/>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3">
          <AccordionDemo onAccordionClick={handleAccordionClick}/>
        </div>
        <div className="w-full sm:w-2/3">
          {activeComponent === 'mainbody'? <Body /> : <Body1 />}
        </div>
      </div>
    </>
  );
}
