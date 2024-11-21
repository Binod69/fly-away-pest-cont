'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What kind of pests do you handle?',
      answer:
        'We handle a wide range of pests, including ants, termites, rodents, bed bugs, cockroaches, and more.',
    },
    {
      question: 'Are your pest control methods safe for pets?',
      answer:
        'Yes, our methods are pet-friendly and environmentally safe. We ensure the safety of your loved ones.',
    },
    {
      question: 'How quickly can you respond to a pest issue?',
      answer:
        'We offer same-day or next-day service for urgent pest control needs, depending on availability.',
    },
    {
      question: 'Do you offer free inspections?',
      answer:
        'Yes, we provide free inspections to assess your pest control needs before recommending a solution.',
    },
    {
      question: 'Are your services guaranteed?',
      answer:
        'Yes, we offer a satisfaction guarantee with follow-up visits if needed.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10  sm:py-20">
      <h2 className="text-pink text-sm md:text-lg font-normal mb-3 tracking-widest uppercase ls-51 text-center">
        Got Any Doubts?
      </h2>
      <h3 className="text-3xl lg:text-5xl font-semibold text-black text-center mb-10">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-bgpink rounded-lg p-4 shadow-sm transition duration-200 m-2"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className=" md:text-lg font-medium text-darkgrey">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-pink" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-pink" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-textmuted text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
