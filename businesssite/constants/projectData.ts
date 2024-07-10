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
      imageSrc: '/interactivemapcover.png',
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
      title: 'R&W Engineering Firm Website Redesign',
      description: 'Modern, responsive website showcasing engineering services and projects',
      imageSrc: '/rwcover.jpg',
      skills: ['TypeScript', 'Next.js 14', 'React', 'Tailwind CSS', 'Heroicons'],
      keyProcess: 'Migrated from an older React and React Router-based site to a more performant and SEO-friendly Next.js 14 application',
      keyProcess2: 'Implemented dynamic routing for services and projects, allowing for easy content management',
      keyProcess3: 'Created reusable components like ServicesAccordion for improved user interaction',
      goals1: "Create a modern, responsive website for R&W Engineering: Develop a visually appealing and professional website that adapts seamlessly to various screen sizes and devices. Utilize Next.js 14 and Tailwind CSS to ensure optimal performance and design flexibility.",
      goals2: "Implement dynamic routing and content management: Leverage Next.js dynamic routing capabilities to create intuitive URL structures for services, projects, and other content areas. Develop a modular content structure that allows for easy updates and additions to the site's information.",
      goals3: "Enhance user experience through interactive components: Incorporate custom React components, such as the ServicesAccordion, to improve user engagement and information accessibility. Implement smooth transitions and intuitive navigation throughout the site.",
      goals4: "Optimize for search engines and performance: Utilize Next.js built-in optimizations and best practices to improve the site's SEO performance. Implement image optimization, lazy loading, and other performance enhancements to ensure fast load times.",
      goals5: "Showcase the firm's expertise and project portfolio: Design and implement dedicated sections for services, projects, and team members. Create visually appealing layouts to highlight the firm's accomplishments and capabilities.",
      goals6: "Ensure accessibility and cross-browser compatibility: Implement accessibility best practices to make the site usable for all visitors. Test and optimize the site for various browsers and devices to ensure a consistent experience.",
      details: 'Redesigned the R&W Engineering Firm website using modern web technologies to create a responsive, user-friendly interface that showcases the firm\'s services, projects, and expertise. The key process involved migrating from an older React and React Router-based site to a more performant and SEO-friendly Next.js 14 application. The project includes dynamic routing for services and projects, custom components for improved user interaction, and a modular structure for easier maintenance and scalability. Throughout the development process, skills in TypeScript, Next.js, and responsive design were enhanced. The project provided valuable experience in creating a professional website that effectively communicates the firm\'s capabilities and engages potential clients.',
      projectLearnings: [
        'Gained experience in migrating from React Router to Next.js routing system',
        'Enhanced skills in TypeScript and type-safe development',
        'Learned best practices for SEO optimization in Next.js applications',
        'Improved understanding of responsive design principles using Tailwind CSS',
        'Developed expertise in creating and managing dynamic routes in Next.js',
        'Gained experience in implementing accessibility features in React components',
        'Enhanced skills in performance optimization for web applications',
        'Learned to effectively structure a large-scale web application for maintainability',
      ],
      githubLink: 'https://github.com/travisburns/engineeringsite',
    },
 {
  slug: 'CS233JS',
  title: 'Web Development Portfolio',
  description: 'A comprehensive showcase of web development projects demonstrating a wide range of skills and technologies',
  imageSrc: '/javascriptprojectscover.jpg',
  skills: [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Chart.js',
    'Webpack', 'Babel', 'npm', 'Git', 'Canvas API',
    'AJAX', 'Promises', 'async/await', 'OOP',
    'Regular Expressions', 'Local Storage', 'JSON',
    'API Integration', 'Responsive Design'
  ],
  keyProcess: 'Developed a series of increasingly complex web applications, from basic to-do lists to multi-page event registration systems',
  keyProcess2: 'Implemented various API integrations, including weather data and mapping services',
  keyProcess3: 'Utilized modern build tools and development practices for optimized and maintainable code',
  goals1: "Master core web technologies: Gain proficiency in HTML5, CSS3, and JavaScript, including ES6+ features and DOM manipulation.",
  goals2: "Implement responsive and interactive user interfaces: Create dynamic web applications with smooth user experiences across devices.",
  goals3: "Integrate external APIs and data management: Develop skills in working with various APIs, handling asynchronous operations, and managing data both client-side and server-side.",
  goals4: "Adopt modern development tools and practices: Learn and apply build tools like Webpack and Babel, and use npm for package management.",
  goals5: "Explore advanced web concepts: Implement features such as form validation, data visualization, and multi-page application architectures.",
  goals6: "Enhance project complexity and scope: Progress from simple applications to more complex, feature-rich web systems demonstrating a broad skill set.",
  details: 'This portfolio encompasses a range of web development projects, showcasing a progression from basic HTML/CSS/JavaScript applications to more complex, interactive web systems. Projects include a To-Do List application, a Bookmarker tool, a Meme Creator, a Weather Forecast application, and an Event Registration system. Each project built upon the skills of the previous ones, introducing new concepts and technologies. The portfolio demonstrates proficiency in front-end development, API integration, data management, and modern development practices.',
  projectLearnings: [
    'Mastered HTML5 and CSS3, including responsive design with Bootstrap',
    'Developed strong JavaScript skills, including ES6+ features, DOM manipulation, and OOP concepts',
    'Gained experience in asynchronous programming with Promises, async/await, and AJAX',
    'Implemented various API integrations, including weather data (OpenWeatherMap) and mapping services (Google Maps)',
    'Utilized local storage and JSON for client-side data management',
    'Applied data visualization techniques using Chart.js and Canvas API',
    'Implemented form handling and validation using regular expressions',
    'Developed multi-page application architectures with shared components',
    'Mastered build tools like Webpack and Babel for optimized production builds',
    'Practiced version control using Git throughout all projects',
    'Enhanced error handling and user experience with loading indicators and friendly error messages',
    'Gained experience in third-party library integration and customization'
  ],
  githubLink: 'https://github.com/travisburns/cs233JSProjects'
},
{
  "slug": "cs233-csharp-portfolio",
  "title": "CS233 C# Programming Portfolio",
  "description": "A collection of C# console applications demonstrating various programming concepts",
  "imageSrc": "/csharpprojectscover.jpg",
  "skills": ["C#", ".NET Framework", "Object-Oriented Programming", "Algorithm Design", "Console I/O"],
  "keyProcess": "Developed multiple console applications showcasing different C# programming concepts",
  "keyProcess2": "Implemented robust error handling and input validation across all projects",
  "keyProcess3": "Created modular and reusable code structures for efficient program design",
  "goals1": "Master C# fundamentals: Develop a strong foundation in C# syntax, data types, and control structures through practical application in various console programs.",
  "goals2": "Implement object-oriented programming: Design and develop programs utilizing classes, inheritance, and encapsulation to solve complex problems efficiently.",
  "goals3": "Enhance problem-solving skills: Create algorithms for various mathematical and logical problems, improving analytical thinking and coding proficiency.",
  "goals4": "Improve user interaction in console applications: Implement user-friendly interfaces and robust input validation to enhance the usability of console-based programs.",
  "goals5": "Explore advanced C# concepts: Utilize more complex features such as LINQ, file I/O, and basic multithreading in selected projects to broaden C# expertise.",
  "goals6": "Develop proficiency in Visual Studio: Gain hands-on experience using Visual Studio for C# development, including debugging and project management.",
  "details": "The CS233 C# Programming Portfolio is a comprehensive collection of console applications developed throughout the course. It showcases a range of C# programming concepts, from basic syntax to more advanced topics. Key projects include a temperature converter, prime number checker, loan calculator, and simple games like Rock Paper Scissors and a number guessing game. These applications demonstrate proficiency in C# fundamentals, algorithm design, and console-based user interaction. The portfolio highlights skills in object-oriented programming, error handling, and efficient code organization. Throughout the development process, emphasis was placed on creating clean, well-documented, and modular code. This collection serves as a testament to the learning journey in C# programming and provides a solid foundation for further advancement in software development.",
  "projectLearnings": [
    "Mastered C# syntax, data types, and control structures",
    "Gained proficiency in object-oriented programming principles",
    "Developed skills in algorithm design and implementation",
    "Learned effective error handling and input validation techniques",
    "Improved console I/O operations and user interface design in a text-based environment",
    "Explored file I/O operations for data persistence",
    "Implemented basic sorting and searching algorithms",
    "Utilized .NET Framework classes for enhanced functionality",
    "Gained experience in debugging C# applications using Visual Studio"
  ],
  "githubLink": "https://github.com/travisburns/c-sharpclasswork"
},
    
  ];