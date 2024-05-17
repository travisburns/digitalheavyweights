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
        imageUrl: '/css.png',
      },
      {
        title: 'Wireframing',
        description: "Our team will create wireframes to outline the layout, structure, and functionality of each page, focusing on usability and user flow.",
        imageUrl: '/images',
      },

      {
        title: 'Visual Design',
        description: "We'll work on the visual aspects of your website, including color schemes, typography, imagery, and overall aesthetics.",
        imageUrl: '/images',
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
        imageUrl: '/phoneIcon.png',
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
        imageUrl: '/css.png',
      },
      {
        title: 'Database Design',
        description: "Our team will design and set up the database architecture, including creating tables, defining relationships, and optimizing performance.",
        imageUrl: '/step2.jpg',
      },

      {
        title: 'API Integration',
        description: "We'll integrate APIs to connect your backend with external services or third-party platforms, enabling seamless data exchange and functionality.",
        imageUrl: '/step2.jpg',
      },
    ],
  },

 

  {
    slug: 'seo',
    name: 'SEO',
    description: "ensure your website ranks well in search engine results and drives organic traffic!",
    imageUrl: '/seo.png',
    steps: [
      {
        title: 'User Research',
        description: "We'll conduct thorough user research to understand your target audience, their needs, preferences, and behavior.",
        imageUrl: '/css.png',
      },
      {
        title: 'Wireframing',
        description: "Our team will create wireframes to outline the layout, structure, and functionality of each page, focusing on usability and user flow.",
        imageUrl: '/images/step2.jpg',
      },

      {
        title: 'Visual Design',
        description: "We'll work on the visual aspects of your website, including color schemes, typography, imagery, and overall aesthetics.",
        imageUrl: '/images/step2.jpg',
      },
    ],
  },


  {
    slug: 'dashboard',
    name: 'Dashboard',
    description: " Creating Custom Ecommerce Dashboard for advanced Sales Tracking",
    imageUrl: '/dashboard.png',
    steps: [
      {
        title: 'Data Visualization',
        description: "We'll create visually appealing charts, graphs, and reports to provide insights into sales performance, customer behavior, and inventory management.",
        imageUrl: '/public/css.png',
      },
      {
        title: 'User Management',
        description: "Our team will implement user authentication, access control, and role-based permissions to ensure secure access to the dashboard features.",
        imageUrl: '/images/step2.jpg',
      },

      {
        title: 'Integration with Ecommerce Platforms',
        description: "We'll integrate with popular ecommerce platforms such as Shopify, WooCommerce, or Magento to fetch sales data, product information, and order details.",
        imageUrl: '/images/step2.jpg',
      },
    ],
  },
  // Add more services as needed
];