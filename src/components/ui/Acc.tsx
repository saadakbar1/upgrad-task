import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo({ onAccordionClick }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex-col py-40 max-h-md max-w-md px-6 bg-gray-100 max-h-sc">
        <h2 className="text-3xl text-center font-bold mb-8">
          Introduction to Supply Chain Management
        </h2>
        <div className="rounded-lg border-2 border-green-500 p-4 ">
          <Accordion type="single" collapsible className="mx-auto text-1xl my-0 max-w-lg p-9">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-bold text-1xl' >Supply Chain Management</AccordionTrigger>
              <AccordionContent className="first accordion-content hover:bg-green-400 hover:rounded-lg p-3 cursor-pointer" onClick={() => onAccordionClick('mainbody')}>
                What is Supply Chain?
              </AccordionContent>
              <AccordionContent className="first accordion-content hover:bg-green-400 hover:rounded-lg p-3 cursor-pointer"onClick={() => onAccordionClick('mainbody1')}>
                Achieve goals and values through Supply Chain?
              </AccordionContent>
              <AccordionContent className="accordion-content hover:bg-green-400 hover:rounded-lg p-3 cursor-pointer">
                What does Supply Chain include?
              </AccordionContent>
              <AccordionContent className="accordion-content hover:bg-green-400 hover:rounded-lg p-3 cursor-pointer">
                Achieving Success through Supply Chain?
              </AccordionContent>
              <AccordionContent className="accordion-content hover:bg-green-400 hover:rounded-lg p-3 cursor-pointer">
                Supply Planning and Strategic Fit
              </AccordionContent>
              <AccordionContent className="accordion-content hover:bg-green-400 hover:rounded-lg p-3 ">
                Aggregate Planning
              </AccordionContent>
              <AccordionContent className="accordion-content hover:bg-green-400 hover:rounded-lg p-3">
                Sales and Operation Planning
              </AccordionContent>
            </AccordionItem>
            {/* Add more AccordionItems as needed */}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
