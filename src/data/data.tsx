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
       <strong className="text-stone-100 text-2xl">Full Stack Software Developer</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Self-motivated and dedicated full-stack software developer with two years of experience in delivering new and enhanced product features for a financial appointment scheduling application within an agile/scrum environment.  Team was responsible for high traffic work in appointment scheduling, calendar sync integration,and more that generated 83% of the company’s overall ARR of 10+ million. A strong collaborator who was able to leverage past finance and business support experience to work effectively with both technical and non technical stakeholders to deliver business value, including close collaboration with product and design, solutioning and pair programming with engineering, testing and code reviews.
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
    location: 'Diploma: Web Development Bootcamp',
    title: 'LIGHTHOUSE LABS',
  },
  {
    location: 'Micro-credential: Digital Transformation',
    title: 'BCIT',
  },
  {
    location: 'Master of Management: Concentration in Financial Management',
    title: 'MACQUARIE UNIVERSITY',
  },
  {
    location: 'Bachelor of Arts: Major in Economics; Minor in Commerce',
    title: 'UNIVERSITY OF BRITISH COLUMBIA',
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - 2023',
    location: 'Coconut Software',
    title: 'Full Stack Developer',
    content: (
      <p>
        Directly involved in planning, full-stack development using Javascript/React, PHP/Laravel and MariaDB, manual and automated testing, code review, and deployment to production, while communicating and demoing progress to key stakeholders
      </p>
    ),
  },
  {
    date: '2017 - 2021',
    location: 'University of British Columbia',
    title: 'Cash Analyst',
  },
  {
    date: '2015 - 2017',
    location: 'Bank of America Merrill Lynch,',
    title: 'Assistant Vice President, Equity Technology Regional Business Support Lead',
  },
];


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/OliviaWong-dev'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/olivia-wy-wong/'},
];
