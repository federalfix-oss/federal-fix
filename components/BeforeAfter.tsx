
import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BeforeAfter: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const items = [
    {
      title: 'Office Shell & Core',
      before: '/Images/Commercial-Fitouts-dubai.webp',
      after: '/Images/home-renovation-dubai.webp',
      desc: 'Base build to high-performance workspace'
    },
    {
      title: 'Villa Living Area',
      before: '/Images/home-renovation-dubai.webp',
      after: '/Images/villa-renovation.webp',
      desc: 'Modern layout and luxury finishes'
    },
    {
      title: 'Kitchen Upgrade',
      before: '/Images/home-renovation-dubai.webp',
      after: '/Images/home-renovation-dubai.webp',
      desc: 'Full cabinetry and appliance renewal'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  return (
    <section ref={elementRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bd1920] mb-4">Transformations</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Difference is Federal Fix</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Visual */}
          <div className={`relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group ${isVisible ? 'animate-[slideUp_1s_ease-out_forwards]' : 'opacity-0'}`}>
            <img
              src={showAfter ? items[activeIndex].after : items[activeIndex].before}
              alt={`${items[activeIndex].title} ${showAfter ? 'after' : 'before'} renovation`}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            <div className="absolute top-8 left-8 animate-[slideDown_0.6s_ease-out_forwards]">
              <span className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 ${showAfter ? 'bg-[#bd1920] text-white shadow-lg shadow-red-900/50' : 'bg-white text-black'}`}>
                {showAfter ? 'Finished Result' : 'Base Condition'}
              </span>
            </div>

            <button
              onClick={() => setShowAfter(!showAfter)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:shadow-2xl flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95"
            >
              <ArrowLeftRight className="w-5 h-5 animate-pulse" />
              Toggle View
            </button>
          </div>

          {/* Details & Selectors */}
          <div className={`space-y-8 ${isVisible ? 'animate-[slideUp_1.2s_ease-out_forwards]' : 'opacity-0'}`}>
            <div className="pb-8 border-b border-gray-100">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">{items[activeIndex].title}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{items[activeIndex].desc}</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-6 p-6 rounded-[1.5rem] text-left transition-all transform hover:scale-102 ${
                    activeIndex === idx ? 'bg-[#f8f8f8] border-2 border-[#bd1920] shadow-lg' : 'border border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md group">
                    <img
                      src={item.after}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={`${item.title} preview`}
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider text-[#bd1920] mb-1">Project 0{idx + 1}</span>
                    <span className="block font-bold text-gray-900">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;




