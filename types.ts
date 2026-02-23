
// Import React to fix 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SecondaryService {
  title: string;
  icon: React.ReactNode;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  type: string;
  location: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface Stat {
  number: number;
  label: string;
  suffix: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}
