import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    value: "item-1",
  },
  {
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    value: "item-2",
  },
  {
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    value: "item-3",
  },
];

export default function FrequentlyAskedQtn() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground p-4">
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => {
          <AccordionItem value={item.value} key={index}>
            <AccordionTrigger className="hover:text-orange-400 underline-offset-0">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {/* <p className="text-stone-900 dark:text-orange-400"></p> */}
              {item.answer}
            </AccordionContent>
          </AccordionItem>;
        })}
      </Accordion>
    </section>
  );
}
