
export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  category: string;
  features?: string[];
  techStack?: string[];
  achievements?: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  // Added icon property to fix Error in components/Timeline.tsx
  icon: string;
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  // Added icon property to fix Error in components/Services.tsx
  icon: string;
}

export interface Poster {
  id: number;
  url: string;
  title: string;
}