import { Project } from '../types';
import learnRegexThumbnail from '../public/images/learn-regex-thumbnail.png';
import isometricJsThumbnail from '../public/images/isometric-js-thumbnail.png';

const projects: Project[] = [
  {
    title: 'Learn Regex',
    slug: 'learn-regex',
    description:
      'An interactive tutorial on the fundamentals of regular expression. Starting out as a small exercise in tutorial development, the site now receives visitors weekly from all over the world.',
    previewUrl: learnRegexThumbnail,
    link: 'https://www.learn-regex.com',
  },
  {
    title: 'Isometric-JS',
    slug: 'isometric-js',
    description:
      'An isometric rendering engine built in JS, complete with camera controls and live updating.',
    previewUrl: isometricJsThumbnail,
    link: 'projects/isometric-js',
  },
];

export default projects;
