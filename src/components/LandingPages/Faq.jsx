import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
    {
      question: "What is Fitcreatives?",
      answer: "Fitcreatives is an online fitness community designed for creatives, offering tailored workout programs, fitness resources, and a supportive community to help you stay fit while pursuing your creative passions.",
      value: "item-1",
    },
    {
      question: "Do I need to be a professional creative to join?",
      answer: "No, Fitcreatives is open to anyone with an interest in fitness and creativity. Whether you're a professional artist, designer, or simply enjoy creative hobbies, you're welcome to join our community.",
      value: "item-2",
    },
    {
      question: "What kind of workouts are available?",
      answer: "Fitcreatives offers a variety of workout programs, including strength training, cardio, yoga, and mobility exercises. The workouts are designed to fit the schedules and needs of busy creatives.",
      value: "item-3",
    },
    {
      question: "Can I participate if I'm a beginner?",
      answer: "Absolutely! Fitcreatives is suitable for all fitness levels, from beginners to advanced. Our programs are flexible, and we provide guidance to help you progress at your own pace.",
      value: "item-4",
    },
    {
      question: "Are there live workout sessions?",
      answer: "Yes, Fitcreatives offers live workout sessions with fitness instructors, as well as recorded classes that you can follow at your convenience.",
      value: "item-5",
    },
    {
      question: "How much does it cost to join Fitcreatives?",
      answer: "We offer a range of membership plans, including a free trial. You can choose from monthly or yearly subscriptions, with access to exclusive content, workouts, and community features.",
      value: "item-6",
    },
    {
      question: "What community features are available?",
      answer: "Fitcreatives has a vibrant community where you can connect with other members, share your fitness journey, participate in challenges, and get support from like-minded creatives.",
      value: "item-7",
    },
    {
      question: "Do you offer personalized fitness plans?",
      answer: "Yes, we offer personalized fitness plans based on your goals, schedule, and fitness level. Our trainers can help you create a plan that works for you.",
      value: "item-8",
    },
    {
      question: "Is there a mobile app for Fitcreatives?",
      answer: "We are currently working on a mobile app to make it even easier for you to access workouts, track progress, and stay connected with the community from your phone.",
      value: "item-9",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up on our website, choose your membership plan, and you'll gain instant access to workouts, resources, and the Fitcreatives community.",
      value: "item-10",
    },
  ];
  

export default function FrequentlyAskedQtn() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground p-4">
        <div className="border rounded-xl mb-4">
            <p className="text-3xl font-medium p-4 text-center">Frequently Asked Questions</p>
        </div>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => {
          return (
            <AccordionItem value={item.value} key={index}>
              <AccordionTrigger className="hover:text-orange-400 underline-offset-0">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
