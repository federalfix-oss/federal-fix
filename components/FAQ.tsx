import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';
import { FAQ_GUIDE_LINKS } from '../data/internalLinks';

const FAQ: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={elementRef} className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#fff7f7] to-white">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl animate-[floatGentle_9s_ease-in-out_infinite]" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl animate-[driftX_10s_ease-in-out_infinite]" />
        <div className="fx-grid absolute inset-0 opacity-30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bd1920] mb-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            FAQs
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 animate-[slideUp_0.8s_ease-out_forwards] text-gray-900">
            Common Questions Answered
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-[slideUp_1s_ease-out_forwards]">
            Get answers to frequently asked questions about our services, processes, and pricing.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,1fr)] items-start">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                isVisible={isVisible}
                delay={idx}
              />
            ))}
          </div>

          <div
            className={`lg:sticky lg:top-28 ${
              isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'
            }`}
          >
            <div className="fx-sheen p-8 md:p-10 rounded-3xl bg-white border border-[#bd1920]/15 shadow-[0_12px_50px_rgba(189,25,32,0.12)] relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#bd1920] via-[#e53a40] to-[#bd1920]" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Our team is ready to discuss your project requirements in detail. Contact us today for a free consultation.
              </p>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#bd1920] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a1151a] hover:shadow-lg hover:shadow-[#bd1920]/25 active:scale-95 sm:w-auto"
              >
                Schedule Consultation
              </a>
              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#bd1920]">Helpful Guides</p>
                <div className="mt-3 space-y-2">
                  {FAQ_GUIDE_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-semibold text-gray-700 transition-colors hover:text-[#bd1920]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isVisible: boolean;
  delay: number;
}> = ({ question, answer, isOpen, onClick, isVisible, delay }) => {
  return (
    <div
      className={`${isVisible ? `animate-[slideUp_${0.45 + delay * 0.08}s_ease-out_forwards]` : 'opacity-0'}`}
    >
      <div
        className={`fx-sheen rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'border-[#bd1920]/30 bg-white shadow-[0_10px_35px_rgba(189,25,32,0.12)]'
            : 'border-gray-200 bg-white hover:border-[#bd1920]/20 hover:shadow-md'
        }`}
      >
        <button
          onClick={onClick}
          className={`w-full text-left px-6 py-5 md:px-7 md:py-6 ${isOpen ? 'bg-[#bd1920] text-white' : 'bg-white text-gray-900'}`}
          aria-expanded={isOpen}
        >
          <div className="flex items-center justify-between gap-4 ">
            <h4 className="font-semibold text-lg pr-4">{question}</h4>
            <span
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-[#bd1920] text-white' : 'bg-[#bd1920]/10 text-[#bd1920]'
              }`}
            >
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </span>
          </div>
        </button>

        <div
          className={`grid transition-all duration-400 ease-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 md:px-7 md:pb-7 text-gray-600 leading-relaxed border-t border-gray-100">
              <p className="pt-4">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
