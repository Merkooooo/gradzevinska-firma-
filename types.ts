export interface MaterialType {
  id: string;
  name: string;
  pricePerSqm: number;
  description: string;
}

export interface BuildType {
  id: string;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}