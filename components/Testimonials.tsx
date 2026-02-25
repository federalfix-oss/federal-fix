
import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const AUTOPLAY_MS = 5000;

const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const setView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
        return;
      }
      if (window.innerWidth >= 768) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(1);
    };

    setView();
    window.addEventListener('resize', setView);
    return () => window.removeEventListener('resize', setView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0 || !isVisible) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, isVisible]);

  const goNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section ref={elementRef} className="relative overflow-hidden bg-gradient-to-b from-white to-[#fbfbfb] py-24">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-8 h-56 w-56 rounded-full bg-[#bd1920]/10 blur-3xl animate-[floatGentle_9s_ease-in-out_infinite]" />
        <div className="absolute right-[8%] bottom-6 h-64 w-64 rounded-full bg-[#bd1920]/10 blur-3xl animate-[driftX_11s_ease-in-out_infinite]" />
        <div className="fx-grid absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#bd1920]">Reviews</h2>
            <h3 className="text-4xl font-bold text-gray-900 md:text-5xl">What Our Clients Say</h3>
            <p className="mx-auto mt-5 max-w-2xl text-gray-600 md:mx-0">
              Feedback from clients across Dubai fit-out, renovation, and turnkey delivery projects.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 md:justify-end">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#bd1920] hover:text-[#bd1920]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#bd1920] hover:text-[#bd1920]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={`${isVisible ? 'animate-[slideUp_0.75s_ease-out_forwards]' : 'opacity-0'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="-mx-3 flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={`${testimonial.author}-${testimonial.type}`}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to testimonial slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-[#bd1920]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{
  testimonial: (typeof TESTIMONIALS)[0];
}> = ({ testimonial }) => {
  return (
    <article className="group fx-sheen relative flex h-full flex-col rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#fafafa] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-xl">
      <Quote className="mb-4 h-10 w-10 text-[#bd1920]/20 opacity-60 transition-opacity group-hover:opacity-100" />

      <div className="mb-6 flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-700">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="border-t border-gray-200 pt-6">
        <span className="block font-bold text-gray-900">{testimonial.author}</span>
        <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#bd1920]">{testimonial.type}</span>
        <span className="mt-1 block text-xs text-gray-500">{testimonial.location}</span>
      </div>
    </article>
  );
};

export default Testimonials;
