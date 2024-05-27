import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import {
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Olivia Resume',
  description: "resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Olivia Wong`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       <strong className="text-stone-100 text-2xl">Finance and Tech</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Results-driven business and finance support professional with over a decade of experience specializing in FP&A, Budgeting/Forecasting, MIS control, and Cost Management & Analytics across banking, education, and tech sectors. Proven track record of implementing cost-saving initiatives, optimizing financial processes, and delivering measurable business value. Skilled in leveraging technology like SQL to extract actionable insights and support data-driven decision-making. A collaborative team player adept at working with technical and non-technical stakeholders to achieve strategic objectives. Excited to apply finance expertise and software development skills to drive success in a dynamic setting.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Finance/Business Support',
    skills: [
      {
        name: 'Budgeting/Forecasting',
      },
      {
        name: 'Business Partnering',
      },
      {
        name: 'Cash Management',
      },
      {
        name: 'Cost Management',
      },
      {
        name: 'Financial Modelling',
      },
      {
        name: 'FP&A',
      },
      {
        name: 'Microsoft Power BI',
      },
      {
        name: 'Microsoft Excel',
      },
      {
        name: 'Microsoft Powerpoint',
      },
      {
        name: 'MIS Control',
      },
      {
        name: 'Orcale Hyperion Essbase',
      },
    ],
  },
  {
    name: 'FrameWork/Libraries',
    skills: [
      {
        name: 'Ajax',
      },
      {
        name: 'Axios',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Express',
      },
      {
        name: 'jQuery',
      },
      {
        name: 'Node JS',
      },
      {
        name: 'Rails',
      },
      {
        name: 'React JS',
      },
      {
        name: 'Sass',
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Javascript',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'PHP',
      },
      {
        name: 'Ruby',
      },
      {
        name: 'CSS',
      },
    ],
  },
  {
    name: 'Database/Tools/Others',
    skills: [
      {
        name: 'Chrome Dev Tool',
      },
      {
        name: 'Git',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'Postgres',
      },
      {
        name: 'RESTFUL API',
      },
      {
        name: 'Docker',
      },
      {
        name: 'Postman',
      },
      {
        name: 'Datadog',
      },
      {
        name: 'Bitbucket',
      },
    ],
  },
  {
    name: 'Testing',
    skills: [
      {
        name: 'react-testing-library',
      },
      {
        name: 'Chai',
      },
      {
        name: 'Cypress',
      },
      {
        name: 'Jest',
      },
      {
        name: 'Mocha',
      },
      {
        name: 'Storybook',
      },
      {
        name: 'PHPUnit',
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
      },
      {
        name: 'Chinese',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'passwordb',
    description: 'a password storing app that allows multiple authorized users to access all passwords of the organization',
    url: 'https://github.com/katy-arushi/passwordb',
    image: porfolioImage1,
  },
  {
    title: 'Interview Scheduler',
    description: 'a single page app for scheduling technical interviews between students and mentors',
    url: 'https://github.com/OliviaWong-dev/scheduler',
    image: porfolioImage2,
  },
  {
    title: 'Tweeter',
    description: ' a single page app that allows users to create short posts up to 140 words',
    url: 'https://github.com/OliviaWong-dev/tweeter',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    location: 'Master of Management: Concentration in Financial Management',
    title: 'MACQUARIE UNIVERSITY',
  },
  {
    location: 'Bachelor of Arts: Major in Economics; Minor in Commerce',
    title: 'UNIVERSITY OF BRITISH COLUMBIA',
  },
  {
    location: 'Diploma: Web Development Bootcamp',
    title: 'LIGHTHOUSE LABS',
  },
  {
    location: 'Micro-credential: Digital Transformation',
    title: 'BCIT',
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - 2023',
    location: 'Coconut Software',
    title: 'Developer',
  },
  {
    date: '2017 - 2021',
    location: 'University of British Columbia',
    title: 'Fiance Analyst, Cash Management',
  },
  {
    date: '2015 - 2017',
    location: 'Bank of America Merrill Lynch',
    title: 'Assistant Vice President, Equity Technology Regional Business Support Lead',
  },
  {
    date: '2009 - 2013',
    location: 'Nomura International Limited',
    title: 'Finance Associate, Financial Planning and Analysis',
  },
];


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/OliviaWong-dev'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/olivia-wy-wong/'},
];
