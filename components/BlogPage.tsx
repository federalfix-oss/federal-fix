import React from 'react';
import SEO from './SEO';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <section className="bg-white pb-24 pt-40 md:pb-28 md:pt-44">
      <SEO
        title="Insights and Blog - Federal Fix"
        description="Latest articles on Dubai fit-out trends, regulations, and renovation budgeting from the Federal Fix team."
        canonical="https://federalfix.com/blog"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900">Latest Insights</h1>
          <p className="mt-4 text-gray-600">
            Stay up to date with industry trends, tips, and guides from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <a href={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="p-6">
                <a href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-[#bd1920]">
                    {post.title}
                  </h2>
                </a>
                <p className="mt-3 line-clamp-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#bd1920]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
