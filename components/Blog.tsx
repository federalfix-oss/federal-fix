import React from 'react';
import { BLOG_POSTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0">
        <div className="absolute left-[9%] top-10 h-64 w-64 rounded-full bg-[#bd1920]/10 blur-3xl animate-[floatGentle_10s_ease-in-out_infinite]" />
        <div className="fx-grid absolute inset-0 opacity-35" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bd1920] mb-4 animate-[fadeIn_0.6s_ease-out_forwards]">
              Insights & Updates
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold animate-[slideUp_0.8s_ease-out_forwards]">
              Latest Blog Posts
            </h3>
          </div>
          <a
            href="/blog"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#bd1920] px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#a1151a] active:scale-95 md:w-auto md:justify-start"
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <BlogCard
              key={post.id}
              post={post}
              isVisible={isVisible}
              delay={idx}
            />
          ))}
        </div>

        {/* Newsletter signup */}
        <div
          className={`mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 ${
            isVisible ? 'animate-[slideUp_1.1s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights, design trends, and Dubai renovation updates.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full flex-1 rounded-full border border-gray-300 px-6 py-4 transition-all focus:border-[#bd1920] focus:ring-2 focus:ring-[#bd1920]/20"
              />
              <button className="whitespace-nowrap rounded-full bg-[#bd1920] px-8 py-4 font-bold text-white transition-all hover:bg-[#a1151a]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard: React.FC<{
  post: (typeof BLOG_POSTS)[0];
  isVisible: boolean;
  delay: number;
}> = ({ post, isVisible, delay }) => {
  return (
    <div
      className={`${isVisible ? `animate-[slideUp_${0.5 + delay * 0.1}s_ease-out_forwards]` : 'opacity-0'}`}
    >
      <div className="group fx-sheen flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#bd1920]/55 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#bd1920] text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#bd1920] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold text-[#bd1920] transition-all group-hover:bg-[#bd1920] group-hover:text-white">
            Read More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
