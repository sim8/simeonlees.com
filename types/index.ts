import { StaticImageData } from 'next/image';

export type PostType = {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  previewUrl: StaticImageData;
  link: string;
};
