// constants/processData.ts
interface ServiceStep {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  steps: ServiceStep[];
}

export const services: Service[] = [

  {
    slug: 'consultation',
    name: 'consultation',
    description: 'We strive for professionalism by using the latest technolgoies for your web application',
    imageUrl: '/meet.png',
    steps: [
      {
        title: '30 Minute Consultation',
        description: 'Within our consultation, we will meet and greet with the client, understand project requirements, and explain our process.',
        imageUrl: '/meet.png',
      },
    
      {
        title: 'User Research',
        description: "We'll conduct thorough user research to understand your target audience, their needs, preferences, and behavior.",
        imageUrl: '/frontend.png',
      },


     
    ],
  },


  {
    slug: 'design',
    name: 'Design',
    description: "Welcome to the UI/UX design stage of your website!",
    imageUrl: '/design.png',
    steps: [
      {
        title: 'User Research',
        description: "We'll conduct thorough user research to understand your target audience, their needs, preferences, and behavior.",
        imageUrl: '/userresearch.png',
      },
      {
        title: 'Wireframing',
        description: "Our team will create wireframes to outline the layout, structure, and functionality of each page, focusing on usability and user flow.",
        imageUrl: '/wireframing.png',
      },

      {
        title: 'Visual Design',
        description: "We'll work on the visual aspects of your website, including color schemes, typography, imagery, and overall aesthetics.",
        imageUrl: '/visualDesign.png',
      },
    ],
  },


  {
    slug: 'front-end',
    name: 'Front-end Development',
    description: 'Build modern and responsive user interfaces',
    imageUrl: '/frontEnd.png',
    steps: [
      {
        title: 'Component Development',
        description: 'Well create reusable components using React, ensuring a modular and maintainable codebase.',
        imageUrl: '/webComponent.png',
      },
      {
        title: 'Responsive Design',
        description: 'Our team will ensure your website looks great and functions smoothly across various devices and screen sizes.',
        imageUrl: '/responsive.png',
      },

      {
        title: 'Interactivity',
        description: "We'll add interactive elements such as animations, transitions, and user-friendly features to enhance the user experience. (depending on complexity, can integrate 3D animation's)",
        imageUrl: '/interactivityIcon.png',
      },
      // Add more steps as needed
    ],
  },

  {
    slug: 'back-end',
    name: 'Back-end Development',
    description: 'Build scalable and secure server-side applications',
    imageUrl: '/backend.png',
    steps: [
      {
        title: 'Server-Side Development',
        description: "We'll develop the server-side logic using technologies such as Node.js, Express.js, or other frameworks, depending on your project requirements.",
        imageUrl: '/serversideicon.png',
      },
      {
        title: 'Database Design',
        description: "Our team will design and set up the database architecture, including creating tables, defining relationships, and optimizing performance.",
        imageUrl: '/databaseIcon.png',
      },

      {
        title: 'API Integration',
        description: "We'll integrate APIs to connect your backend with external services or third-party platforms, enabling seamless data exchange and functionality.",
        imageUrl: '/API.png',
      },
    ],
  },

 
  {
    slug: 'seo',
    name: 'SEO',
    description: "Ensure your website ranks well in search engine results and drives organic traffic!",
    imageUrl: '/seo.png',
    steps: [
    {
    title: 'Keyword Research',
    description: "We'll conduct thorough keyword research to identify relevant and high-traffic keywords for your website's content.",
    imageUrl: '/keywordResearchIcon.png',
    },
    {
    title: 'On-Page Optimization',
    description: "Our team will optimize your website's content, meta tags, headers, and URLs to improve search engine visibility.",
    imageUrl: '/optimizationIcon.png',
    },
    {
    title: 'Link Building',
    description: "We'll implement link building strategies to acquire high-quality backlinks from authoritative websites, boosting your website's authority.",
    imageUrl: '/linkBuildingIcon.png',
    },
    ],
    },
    {
      slug: 'dashboard',
      name: 'Dashboard',
      description: "Creating a custom CMS dashboard for advanced content management and analytics",
      imageUrl: '/dashboard.png',
      steps: [
      {
      title: 'Custom CMS Development',
      description: "We'll develop a custom Content Management System (CMS) using C# on the backend and TypeScript on the frontend, tailored to your specific requirements.",
      imageUrl: '/customizationIcon.png',
      },
      {
      title: 'Advanced Analytics',
      description: "Our team will integrate advanced analytics features into the dashboard, providing valuable insights into user behavior, content performance, and key metrics.",
      imageUrl: '/advancedAnalytics.png',
      },
      {
      title: 'Content Management',
      description: "The custom CMS will allow you to easily create, edit, and manage your website's content, including pages, blog posts, images, and more.",
      imageUrl: '/ContentManagment.png',
      },
    ],
    },
    ];