export type FormData = {
  title: string;
  thumbnail: string;
  frontendRepo: string;
  backendRepo?: string;
  liveSiteLink?: string;
  description: string;
  features: string;
  technologies: string; // user enters comma-separated
  displayOrder: number;
};
