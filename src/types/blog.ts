export type BlogFormData = {
  title: string; //would be unique and come from a input
  slug: string; // auto generated
  content: string; // would come from a React quill
  excerpt: string; // would come from a React quill
  tags: string[]; // would come from a textarea input
  status: "draft" | "published" | "archived"; // would come from a dropdown
  //featuredImage?: string; //
};
