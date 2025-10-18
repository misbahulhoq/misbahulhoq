export type FormData = {
  title: string;
  tagline: string;
  thumbnail: string;
  frontendRepo: string;
  backendRepo?: string;
  liveSiteLink?: string;
  description: string;
  features: string;
  technologies: string; // user enters comma-separated
  duration: string;
  displayOrder: number;
};

export type Project = {
  _id: string;
  title: string;
  tagline: string;
  thumbnail: string[];
  repoLinks: {
    frontend: string;
    backend?: string;
  };
  liveSiteLink?: string;
  description: string;
  features: string[];
  technologies: string[];
  duration: string;
  displayOrder: number;
};
