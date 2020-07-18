import { CourseSection } from './course-section';

export interface Course {
  id: string;
  name: string;
  author: string;
  description: string;
  lecture: { name: string; lecturer: string };
  price: number;
  discountedPrice: number;
  rating: number;
  thumbnail: string;
  duration: number;
  reviewCount: number;
  universityCourse: string;
  sections: CourseSection[];
  previewVideo: string;
  isAvailable: boolean;
}
