export interface Project {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  skills: string[];
  keyProcess: string;
  keyProcess2: string;
  keyProcess3: string;
  goals1: string;
  goals2: string;
  goals3: string;
  goals4: string;
  goals5: string;
  goals6: string;
  details: string;
  projectLearnings: string[];
  githubLink: string;
}


export const projects: Project[] = [
    {
      slug: 'interactive-map',
      title: 'InteractiveMap',
      description: 'Fantasy interactive map that displays location data',
      imageSrc: '/interactiveMapCover.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'leaflet.js', 'chart.js'],
      keyProcess: 'Developed a custom interactive map system using html, css, javascript, leaflet.js and chart.js',
      keyProcess2: 'Using webpack, created a production build of the project and deployed it to a live server',
      keyProcess3: 'Created a custom API with fantasy location data and Integrated to fetch location data and dynamically render map elements',
      goals1: "Create an engaging and interactive fantasy map experience:Develop a visually appealing and immersive fantasy map interface that captures the user's attention and encourages exploration. Utilize leaflet.js to provide smooth and responsive map navigation and interaction.",
      goals2: "Integrate custom API with fantasy location data: Design and develop a custom API that serves fantasy location data to the application. Implement data fetching mechanisms to retrieve location data from the API and dynamically render map elements based on the retrieved data.",
      goals3: "Enhance user experience through data visualization: Incorporate chart.js to display location data in a visually appealing and informative manner. Present location statistics, demographics, and other relevant information using interactive charts and graphs.",
      goals4: "Optimize performance and ensure cross-platform compatibility: Utilize webpack to create a production build of the project, optimizing assets and improving loading times. Ensure the interactive map system is responsive and compatible across various devices and browsers.",
      goals5: "Deploy the project to a live server: Configure and deploy the project to a live server, making it accessible to users via a web URL. Ensure smooth deployment and seamless functionality in the production environment.",
      goals6: "Enhance skills in web development and data visualization: Gain hands-on experience in using technologies such as HTML, CSS, JavaScript, leaflet.js, and chart.js. Improve proficiency in API integration, data visualization, and user interface design.",
      details: 'Using leaflet.js and chart.js, created a interactive fantasy map that allows users to click on a specific map icon on the map that displays that locations information. The key process involved creating a custom API with fantasy location data and integrating it to fetch location data and dynamically render map elements. The project also included a chart.js component that displays the location data in a visually appealing way. Throughout the development process, skills such as API integration, data visualization, and user interface design were enhanced. The project provided valuable experience in creating an interactive map system that engages users and presents information in an interactive and engaging way.',
      projectLearnings: [ 
        'Learned how to create an interactive map using leaflet.js and chart.js', 
        'Gained experience in API integration and data visualization', 
        'JSON Data handling and manipulation',
        'Custom API Development',
        'Modular Code Design using ES6 classes to encapsulate functionality',
        'AJAX Requests, implementing AJAX GET requests to fetch and display data dynamically',
        'Debugging Leaflet Icons and Popups',
        'Dynamic Data Binding to UI elements with Chart.js',
        'Learning to use Webpack for creating optimized production builds of the project', 
      ],
      githubLink: 'https://github.com/travisburns/interactiveMap',
    },
    {
      slug: 'muse-find',
      title: 'MuseFind',
      description: 'A mobile application for storing and discovering music',
      imageSrc: '/musefindcover.png',
      skills: ['React Native Expo', 'MongoDB', 'Ngrok', 'Express', 'Node.js', 'Bcrypt', 'JSON Web Tokens (JWT)'],
      keyProcess: 'Implemented secure user registration and authentication using Ngrok for password hashing and salting',
      keyProcess2: 'Created a personalized music feed with sorting and filtering capabilities',
      keyProcess3: 'IIntegrated audio playback functionality for a seamless music listening experience',
      goals1: "Develop a user-friendly mobile application for music storage and discovery: Create an intuitive and visually appealing user interface using React Native and Expo, enabling users to easily navigate and interact with the application. Implement smooth transitions and responsive design to enhance the overall user experience.",
      goals2: "Implement secure user registration and authentication: Integrate user registration and login functionality with secure password hashing and salting using Ngrok. Ensure that user data is protected and that only authorized users can access their personal music entries.",
      goals3: "Enable users to create and manage music entries: Provide a seamless interface for users to create music entries by entering track name, artist, genre, and uploading audio files and images. Allow users to edit and delete their music entries as needed.",
      goals4: "Design and implement a personalized music feed: Develop a dynamic music feed that displays music entries sorted by genre. Implement pagination or infinite scrolling to load entries efficiently. Allow users to filter music entries based on genre, track name, artist, or other relevant criteria.",
      goals5: "Utilize MongoDB for efficient data storage and retrieval: Design and implement a MongoDB database schema to store user information, music entries, and associated metadata. Optimize database queries and indexing to ensure fast and efficient data retrieval.",
      goals6: "Implement error handling and user feedback: Handle potential errors gracefully and provide meaningful error messages to users. Display loading indicators and success/failure notifications to keep users informed about the status of their actions.",
      details: 'MuseFind is a React Native application built with Expo that allows users to create music entries, browse their music feed, and play tracks. It provides a seamless and intuitive user experience for music enthusiasts to store and discover their favorite music. The application leverages MongoDB for efficient data storage and retrieval, while Ngrok is utilized for secure password hashing and salting. The key features of MuseFind include user registration and login with secure authentication, the ability to create music entries with track name, artist, genre, audio file, and image, and a personalized music feed sorted by genre. Users can easily play tracks directly from the app and filter music entries based on various criteria. Throughout the development process, skills such as React Native development, API integration, data management, and user authentication were enhanced. MuseFind provides a comprehensive solution for users to organize and explore their music collection in a user-friendly and visually appealing manner.',
      projectLearnings: [ 
        'Enhance skills in mobile app development and backend integration: Gain hands-on experience in using technologies such as React Native, Expo, MongoDB, Ngrok, Express, Node.js, Bcrypt, and JSON Web Tokens (JWT). Improve proficiency in mobile app development, API integration, data management, and user authentication.', 
        'Developed a full-stack mobile application using React Native, Expo, MongoDB, Express, and Node.js', 
        'Implemented secure user registration and authentication using Ngrok for password hashing and salting',
        'Created a personalized music feed with sorting and filtering capabilities',
        'Utilized MongoDB for efficient data storage and retrieval',
        'Gained proficiency in developing mobile applications using React Native and Expo',
        'Learned how to integrate backend technologies such as MongoDB, Express, and Node.js',
        'Implemented secure user authentication using Ngrok for password hashing and salting',
        'Acquired knowledge of data modeling and database management with MongoDB', 
        'Enhanced skills in API development and integration',
        'Learned how to handle audio playback and streaming in a mobile application',
        'Improved understanding of state management and data flow in React Native applications',
        'Gained experience in implementing search and filtering functionality',
        'Developed skills in error handling and providing user feedback in a mobile app context',
      ],


    









      githubLink: 'https://github.com/Mobile-Apps-at-LCC/MuseFind',
    },
    {
      slug: 'rw-engineering',
      title: 'R&WEngineering',
      description: 'Engineering website showcasing company services and projects',
      imageSrc: '/webportfolio.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'leaflet.js', 'chart.js'],
      keyProcess: 'Developed a responsive and informative website for an engineering company',
      keyProcess2: 'Using webpack, created a production build of the project and deployed it to a live server',
      keyProcess3: 'Integrated an API to fetch location data and dynamically render map elements',
      goals1: "Create an engaging and interactive fantasy map experience:Develop a visually appealing and immersive fantasy map interface that captures the user's attention and encourages exploration. Utilize leaflet.js to provide smooth and responsive map navigation and interaction.",
      goals2: "Integrate custom API with fantasy location data: Design and develop a custom API that serves fantasy location data to the application. Implement data fetching mechanisms to retrieve location data from the API and dynamically render map elements based on the retrieved data.",
      goals3: "Enhance user experience through data visualization: Incorporate chart.js to display location data in a visually appealing and informative manner. Present location statistics, demographics, and other relevant information using interactive charts and graphs.",
      goals4: "Optimize performance and ensure cross-platform compatibility: Utilize webpack to create a production build of the project, optimizing assets and improving loading times. Ensure the interactive map system is responsive and compatible across various devices and browsers.",
      goals5: "Deploy the project to a live server: Configure and deploy the project to a live server, making it accessible to users via a web URL. Ensure smooth deployment and seamless functionality in the production environment.",
      goals6: "Enhance skills in web development and data visualization: Gain hands-on experience in using technologies such as HTML, CSS, JavaScript, leaflet.js, and chart.js. Improve proficiency in API integration, data visualization, and user interface design.",
      details: 'R&WEngineering is a website developed for an engineering company to showcase their services and projects. The key process involved designing and implementing a responsive and user-friendly website that effectively communicates the company\'s expertise and capabilities. The website features a modern and professional design, with clear navigation and engaging content. It includes sections for company information, services offered, portfolio of past projects, and a contact form for potential clients. Throughout the development process, skills such as web design, HTML/CSS, and content management were utilized. The project provided an opportunity to create a compelling online presence for the engineering company and enhance their brand visibility.',
      projectLearnings: [ 
        'Learned how to create an interactive map using leaflet.js and chart.js', 
        'Gained experience in API integration and data visualization', 
        'JSON Data handling and manipulation',
        'Custom API Development',
        'Modular Code Design using ES6 classes to encapsulate functionality',
        'AJAX Requests, implementing AJAX GET requests to fetch and display data dynamically',
        'Debugging Leaflet Icons and Popups',
        'Dynamic Data Binding to UI elements with Chart.js',
        'Learning to use Webpack for creating optimized production builds of the project', 
      ],
      githubLink: 'https://github.com/travisburns/interactiveMap',
    },
    {
      slug: 'gem-shop',
      title: 'GemShop',
      description: 'E-commerce website for purchasing gemstones and jewelry',
      imageSrc: '/webportfolio.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'leaflet.js', 'chart.js'],
      keyProcess: 'Implemented a secure and user-friendly e-commerce platform',
      keyProcess2: 'Using webpack, created a production build of the project and deployed it to a live server',
      keyProcess3: 'Integrated an API to fetch location data and dynamically render map elements',
      goals1: "Create an engaging and interactive fantasy map experience:Develop a visually appealing and immersive fantasy map interface that captures the user's attention and encourages exploration. Utilize leaflet.js to provide smooth and responsive map navigation and interaction.",
      goals2: "Integrate custom API with fantasy location data: Design and develop a custom API that serves fantasy location data to the application. Implement data fetching mechanisms to retrieve location data from the API and dynamically render map elements based on the retrieved data.",
      goals3: "Enhance user experience through data visualization: Incorporate chart.js to display location data in a visually appealing and informative manner. Present location statistics, demographics, and other relevant information using interactive charts and graphs.",
      goals4: "Optimize performance and ensure cross-platform compatibility: Utilize webpack to create a production build of the project, optimizing assets and improving loading times. Ensure the interactive map system is responsive and compatible across various devices and browsers.",
      goals5: "Deploy the project to a live server: Configure and deploy the project to a live server, making it accessible to users via a web URL. Ensure smooth deployment and seamless functionality in the production environment.",
      goals6: "Enhance skills in web development and data visualization: Gain hands-on experience in using technologies such as HTML, CSS, JavaScript, leaflet.js, and chart.js. Improve proficiency in API integration, data visualization, and user interface design.",
      details: 'GemShop is an e-commerce website that allows users to browse and purchase a wide range of gemstones and jewelry. The key process involved developing a secure and user-friendly online shopping platform. The website features a responsive design, product catalog, shopping cart functionality, and secure payment integration. Users can easily navigate through different categories, view product details, and add items to their cart. The project also incorporated user authentication and account management features. Throughout the development process, skills such as e-commerce development, payment gateway integration, and database management were utilized. The project provided valuable experience in creating a functional and appealing online store.',
      projectLearnings: [ 
        'Learned how to create an interactive map using leaflet.js and chart.js', 
        'Gained experience in API integration and data visualization', 
        'JSON Data handling and manipulation',
        'Custom API Development',
        'Modular Code Design using ES6 classes to encapsulate functionality',
        'AJAX Requests, implementing AJAX GET requests to fetch and display data dynamically',
        'Debugging Leaflet Icons and Popups',
        'Dynamic Data Binding to UI elements with Chart.js',
        'Learning to use Webpack for creating optimized production builds of the project', 
      ],
      githubLink: 'https://github.com/travisburns/interactiveMap',
    },
    {
      slug: 'boundless',
      title: 'Boundless',
      description: 'Travel blog and photography portfolio website',
      imageSrc: '/webportfolio.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'leaflet.js', 'chart.js'],
      keyProcess: 'Created a visually appealing and content-rich travel blog',
      keyProcess2: 'Using webpack, created a production build of the project and deployed it to a live server',
      keyProcess3: 'Integrated an API to fetch location data and dynamically render map elements',
      goals1: "Create an engaging and interactive fantasy map experience:Develop a visually appealing and immersive fantasy map interface that captures the user's attention and encourages exploration. Utilize leaflet.js to provide smooth and responsive map navigation and interaction.",
      goals2: "Integrate custom API with fantasy location data: Design and develop a custom API that serves fantasy location data to the application. Implement data fetching mechanisms to retrieve location data from the API and dynamically render map elements based on the retrieved data.",
      goals3: "Enhance user experience through data visualization: Incorporate chart.js to display location data in a visually appealing and informative manner. Present location statistics, demographics, and other relevant information using interactive charts and graphs.",
      goals4: "Optimize performance and ensure cross-platform compatibility: Utilize webpack to create a production build of the project, optimizing assets and improving loading times. Ensure the interactive map system is responsive and compatible across various devices and browsers.",
      goals5: "Deploy the project to a live server: Configure and deploy the project to a live server, making it accessible to users via a web URL. Ensure smooth deployment and seamless functionality in the production environment.",
      goals6: "Enhance skills in web development and data visualization: Gain hands-on experience in using technologies such as HTML, CSS, JavaScript, leaflet.js, and chart.js. Improve proficiency in API integration, data visualization, and user interface design.",
      details: 'Boundless is a travel blog and photography portfolio website that showcases the adventures and experiences of a passionate traveler. The key process involved designing and developing a visually stunning website that effectively presents travel stories, photographs, and tips. The website features a clean and intuitive layout, with engaging blog posts and captivating images. It includes sections for destination guides, travel itineraries, and a gallery of breathtaking photographs. The project also incorporated SEO optimization and social media integration to increase visibility and engagement. Throughout the development process, skills such as web design, content creation, and image optimization were utilized. The project provided an opportunity to create an inspiring and informative platform for travel enthusiasts.',
      projectLearnings: [ 
        'Learned how to create an interactive map using leaflet.js and chart.js', 
        'Gained experience in API integration and data visualization', 
        'JSON Data handling and manipulation',
        'Custom API Development',
        'Modular Code Design using ES6 classes to encapsulate functionality',
        'AJAX Requests, implementing AJAX GET requests to fetch and display data dynamically',
        'Debugging Leaflet Icons and Popups',
        'Dynamic Data Binding to UI elements with Chart.js',
        'Learning to use Webpack for creating optimized production builds of the project', 
      ],
      githubLink: 'https://github.com/travisburns/interactiveMap',
    },
    {
      slug: 'ecommerce-dashboard',
      title: 'EcommerceDashboard',
      description: 'Dashboard application for managing an e-commerce store',
      imageSrc: '/webportfolio.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'leaflet.js', 'chart.js'],
      keyProcess: 'Developed a comprehensive dashboard for e-commerce store management',
      keyProcess2: 'Using webpack, created a production build of the project and deployed it to a live server',
      keyProcess3: 'Created a custom API with fantasy location data and Integrated to fetch location data and dynamically render map elements',
      goals1: "Create an engaging and interactive fantasy map experience:Develop a visually appealing and immersive fantasy map interface that captures the user's attention and encourages exploration. Utilize leaflet.js to provide smooth and responsive map navigation and interaction.",
      goals2: "Integrate custom API with fantasy location data: Design and develop a custom API that serves fantasy location data to the application. Implement data fetching mechanisms to retrieve location data from the API and dynamically render map elements based on the retrieved data.",
      goals3: "Enhance user experience through data visualization: Incorporate chart.js to display location data in a visually appealing and informative manner. Present location statistics, demographics, and other relevant information using interactive charts and graphs.",
      goals4: "Optimize performance and ensure cross-platform compatibility: Utilize webpack to create a production build of the project, optimizing assets and improving loading times. Ensure the interactive map system is responsive and compatible across various devices and browsers.",
      goals5: "Deploy the project to a live server: Configure and deploy the project to a live server, making it accessible to users via a web URL. Ensure smooth deployment and seamless functionality in the production environment.",
      goals6: "Enhance skills in web development and data visualization: Gain hands-on experience in using technologies such as HTML, CSS, JavaScript, leaflet.js, and chart.js. Improve proficiency in API integration, data visualization, and user interface design.",
      details: 'EcommerceDashboard is a web application that provides a centralized platform for managing various aspects of an e-commerce store. The key process involved designing and implementing a feature-rich dashboard that enables store owners to efficiently handle operations such as inventory management, order tracking, customer data, and sales analytics. The dashboard offers a user-friendly interface with intuitive navigation and real-time data updates. It integrates with the e-commerce platform\'s API to fetch and display relevant information. The project also included data visualization components to present key metrics and trends. Throughout the development process, skills such as API integration, data management, and user interface design were enhanced. The project provided valuable experience in creating a powerful tool for streamlining e-commerce store management.',
      projectLearnings: [ 
        'Learned how to create an interactive map using leaflet.js and chart.js', 
        'Gained experience in API integration and data visualization', 
        'JSON Data handling and manipulation',
        'Custom API Development',
        'Modular Code Design using ES6 classes to encapsulate functionality',
        'AJAX Requests, implementing AJAX GET requests to fetch and display data dynamically',
        'Debugging Leaflet Icons and Popups',
        'Dynamic Data Binding to UI elements with Chart.js',
        'Learning to use Webpack for creating optimized production builds of the project', 
      ],
      githubLink: 'https://github.com/travisburns/interactiveMap',
    },
  ];