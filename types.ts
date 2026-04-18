
export type Language = 'pt' | 'en' | 'de';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  longDescription: string;
}

export interface Testimonial {
  name: string;
  company: string;
  content: string;
  image: string;
}
