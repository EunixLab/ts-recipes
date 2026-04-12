export interface Recipe {
  id: string;
  imgUrl: string;
  videoUrl: string;
  title: string;
  chef: string;
  category: string;
  sourceUrl: string;
  ingredients: string[];
  steps: string[];
  seasonings?: string[]; // ✅ optional
}