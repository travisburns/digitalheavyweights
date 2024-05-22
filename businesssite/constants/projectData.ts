export interface Project {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  keyProcess: string;
  details: string;
}


export const projects: Project[] = [
    {
      slug: 'interactive-map',
      title: 'InteractiveMap',
      description: 'Fantasy interactive map that displays location data',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Developed a custom interactive map system using React and D3.js',
      details: 'The InteractiveMap project involved creating a fantasy-themed interactive map that allows users to explore and view location data. The map was built using React for the user interface and D3.js for data visualization. The key process of this project was developing a custom interactive map system that dynamically renders map elements based on data retrieved from an API. The map supports zooming, panning, and clicking on locations to view additional details. Throughout the development process, various challenges were encountered, such as optimizing performance for large datasets and ensuring a smooth user experience. The project provided valuable learnings in data visualization, React component architecture, and integrating third-party libraries effectively.',
    },
    {
      slug: 'muse-find',
      title: 'MuseFind',
      description: 'Display weather data based on OpenWeatherAPI',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Integrated OpenWeatherAPI to fetch and display weather data',
      details: 'MuseFind is a web application that allows users to search for and view weather information based on location. The project utilizes the OpenWeatherAPI to fetch real-time weather data. The key process involved integrating the API, handling user input for location search, and displaying the retrieved weather data in a user-friendly format. The application also incorporates geocoding to convert user-entered locations into coordinates for accurate weather retrieval. Throughout the development process, skills such as API integration, data manipulation, and error handling were enhanced. The project provided valuable experience in working with external APIs and creating intuitive user interfaces.',
    },
    {
      slug: 'rw-engineering',
      title: 'R&WEngineering',
      description: 'Engineering website showcasing company services and projects',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Developed a responsive and informative website for an engineering company',
      details: 'R&WEngineering is a website developed for an engineering company to showcase their services and projects. The key process involved designing and implementing a responsive and user-friendly website that effectively communicates the company\'s expertise and capabilities. The website features a modern and professional design, with clear navigation and engaging content. It includes sections for company information, services offered, portfolio of past projects, and a contact form for potential clients. Throughout the development process, skills such as web design, HTML/CSS, and content management were utilized. The project provided an opportunity to create a compelling online presence for the engineering company and enhance their brand visibility.',
    },
    {
      slug: 'gem-shop',
      title: 'GemShop',
      description: 'E-commerce website for purchasing gemstones and jewelry',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Implemented a secure and user-friendly e-commerce platform',
      details: 'GemShop is an e-commerce website that allows users to browse and purchase a wide range of gemstones and jewelry. The key process involved developing a secure and user-friendly online shopping platform. The website features a responsive design, product catalog, shopping cart functionality, and secure payment integration. Users can easily navigate through different categories, view product details, and add items to their cart. The project also incorporated user authentication and account management features. Throughout the development process, skills such as e-commerce development, payment gateway integration, and database management were utilized. The project provided valuable experience in creating a functional and appealing online store.',
    },
    {
      slug: 'boundless',
      title: 'Boundless',
      description: 'Travel blog and photography portfolio website',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Created a visually appealing and content-rich travel blog',
      details: 'Boundless is a travel blog and photography portfolio website that showcases the adventures and experiences of a passionate traveler. The key process involved designing and developing a visually stunning website that effectively presents travel stories, photographs, and tips. The website features a clean and intuitive layout, with engaging blog posts and captivating images. It includes sections for destination guides, travel itineraries, and a gallery of breathtaking photographs. The project also incorporated SEO optimization and social media integration to increase visibility and engagement. Throughout the development process, skills such as web design, content creation, and image optimization were utilized. The project provided an opportunity to create an inspiring and informative platform for travel enthusiasts.',
    },
    {
      slug: 'ecommerce-dashboard',
      title: 'EcommerceDashboard',
      description: 'Dashboard application for managing an e-commerce store',
      imageSrc: '/webportfolio.png',
      keyProcess: 'Developed a comprehensive dashboard for e-commerce store management',
      details: 'EcommerceDashboard is a web application that provides a centralized platform for managing various aspects of an e-commerce store. The key process involved designing and implementing a feature-rich dashboard that enables store owners to efficiently handle operations such as inventory management, order tracking, customer data, and sales analytics. The dashboard offers a user-friendly interface with intuitive navigation and real-time data updates. It integrates with the e-commerce platform\'s API to fetch and display relevant information. The project also included data visualization components to present key metrics and trends. Throughout the development process, skills such as API integration, data management, and user interface design were enhanced. The project provided valuable experience in creating a powerful tool for streamlining e-commerce store management.',
    },
  ];