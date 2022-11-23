import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Accordian = ({ items }) => {
  return (
    <div>
      <Accordion>
        {items?.map((item) => (
          <>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><span className="font-semibold">{item?.question}</span></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item?.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
