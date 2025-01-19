export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'es' | 'he';