import { Project } from "@/utils/types";

export const projects: Project[] = [
  {
    title: "PuzzleVerse",
    slug: "puzzleverse",

    description:
      "Mobile puzzle game platform featuring multiple daily challenges and engaging gameplay mechanics.",
    longDescription:
      "Puzzleverse is a mobile puzzle game built using React Native, designed to provide users with a variety of engaging daily challenges in a clean and intuitive interface. The goal of the project was to explore how multiple puzzle mechanics could coexist within a single application while maintaining a consistent user experience. The application includes different puzzle modes and a daily challenge system, encouraging repeat engagement and long-term retention. A strong emphasis was placed on designing a smooth and responsive UI, ensuring that interactions feel natural across both iOS and Android devices.From an engineering perspective, the project required careful handling of state management to support different game types, each with its own rules and logic. Structuring the code in a scalable way was important so that new puzzle modes could be added without breaking existing functionality.This project represents an ongoing effort to build a polished mobile product, with future plans including App Store deployment, improved animations, and expanded game modes.",

    tech: ["React Native", "Firebase", "Expo", "TypeScript"],

    github: "",
    demo: "",

    images: [
      "/projects/puzzleverse/1.png",
      "/projects/puzzleverse/2.png",
      "/projects/puzzleverse/3.png",
    ],
  },

  {
    title: "AI PDF Document Reader",
    slug: "ai-pdf-summarizer",

    description:
      "AI-powered tool that enables users to query and extract insights from PDF documents using vector search.",

    longDescription:
      "The AI PDF Document Summarizer is a tool built to simplify the process of extracting meaningful information from large and complex PDF files. Instead of manually searching through documents, users can upload a PDF and ask natural language questions about its content.The system works by parsing the PDF and breaking it into manageable text chunks, which are then converted into vector embeddings and stored in a vector database using Weaviate. When a user submits a query, the system retrieves the most relevant chunks based on semantic similarity and passes them to a language model to generate a contextual response.This approach allows the application to go beyond simple keyword search and provide answers that are contextually aware of the document's content. The project highlights the integration of modern AI workflows, including document processing, vector search, and LLM-based response generation.One of the main challenges was determining the optimal way to chunk and index document content to ensure accurate retrieval without losing context. Another challenge was maintaining response relevance while keeping latency low.Overall, this project demonstrates practical use of AI in building tools that improve productivity and information accessibility.",
    tech: ["Angular", "OpenAI", "Weaviate", "FastAPI", "Docker", "Python"],

    github: "https://github.com/jaitlimaye/Ai-doc-reader",
    demo: "",

    images: [
      "/projects/aidocreader/1.jpg",
      "/projects/aidocreader/2.jpg",
      "/projects/aidocreader/3.jpg",
    ],
  },

  {
    title: "Project Management Tool",
    slug: "pm-tool",

    description:
      "Internal project management system designed to help teams track tasks and manage workflows efficiently.",

    longDescription:
      "This project was developed as part of a service-based startup to address the need for a centralized system to manage projects, tasks, and team workflows for an Engineering company. The tool was designed to improve visibility across ongoing work and streamline collaboration within the organization. The application included features for task tracking, project organization, and progress monitoring, enabling teams to better coordinate their efforts. The system was intended to replace fragmented workflows using Excel documents and provide a single source of truth for project-related information. Since the project was an internal tool, access to the final deployed version is restricted. However, the development process involved working closely with real-world requirements, iterating on features, and building components that could scale with the needs of the organization. This project demonstrates experience in building practical business tools and working within a team environment to deliver functional software solutions.",
    tech: ["React", ".NET", "Microsoft SQL Server", "Azure"],

    github: "",
    demo: "",

    images: [
      "/projects/njspm/1.jpeg",
      "/projects/njspm/3.jpeg",
      "/projects/njspm/4.jpeg",
      "/projects/njspm/5.jpeg",
    ],
  },

  {
    title: "Fixxi CRM",
    slug: "fixxi-crm",

    description:
      "Internal CRM system designed to manage customer relationships, track interactions, and support business operations.",
    tech: ["React", "Node.JS", "Figma", "AWS"],
    longDescription:
      "The Fixxi CRM project was focused on building an internal system to manage customer relationships and streamline business operations. The goal was to create a centralized platform where teams could track leads, monitor customer interactions, and maintain organized records. The system involved designing interfaces that could handle complex datasets, including customer information, communication history, and workflow tracking. A key focus was on usability, ensuring that the interface remained intuitive despite the underlying complexity of the data. This project required collaboration with design and product teams, working with Figma designs and translating them into functional user interfaces. It also involved understanding real business processes and adapting the system to fit those workflows effectively. As the project was developed within a company environment, access to the codebase and deployment is restricted. However, the experience provided valuable exposure to building scalable business tools and designing systems that support real operational needs. This project highlights the ability to work on enterprise-style applications and contribute to systems that handle complex user and data interactions.",

    github: "",
    demo: "",

    images: [
      "/projects/fixxicrm/1.png",
      "/projects/fixxicrm/2.png",
      "/projects/fixxicrm/3.png",
      "/projects/fixxicrm/4.png",
    ],
  },

  {
    title: "Fixxi Client Platform",
    slug: "fixxi-client",

    description:
      "Client-facing web platform enabling users to interact with services, manage requests, and communicate with the company.",

    longDescription:
      "The Fixxi Client Platform was designed as a customer-facing interface that allowed users to interact directly with the company's services. The goal was to create a seamless experience where clients could manage requests, track progress, and communicate with the business in a structured way. The platform focused heavily on usability and clarity, ensuring that users could easily navigate through different features without confusion. This required careful attention to layout, information hierarchy, and responsiveness across devices. Development involved translating design concepts from Figma into functional components and ensuring consistency across the application. The platform needed to integrate with backend systems while maintaining a smooth and responsive frontend experience. One of the challenges was balancing simplicity for end users with the complexity of underlying service workflows. The interface needed to abstract technical details while still providing enough functionality for users to manage their interactions effectively. This project demonstrates experience in building user-facing applications and designing interfaces that prioritize usability and accessibility.",
    tech: ["React", "Express.JS", "Figma"],

    github: "",
    demo: "",

    images: ["/projects/fixxiclient/1.jpg", "/projects/fixxiclient/2.jpg"],
  },

  {
    title: "The Ring Method ",
    slug: "fish-market",

    description:
      "Responsive single-page application built for a local fish selling business to showcase products and improve online presence.",

    longDescription:
      "This project was developed as a freelance solution for a local fish selling business that lacked an online presence. The goal was to create a simple yet effective platform where customers could view available products and easily get in touch with the seller. The application was built as a single-page application using React, with a strong focus on responsiveness and usability, especially for mobile users who form the majority of the customer base. The interface was designed to be clean and straightforward, allowing users to quickly browse products without unnecessary complexity. The project involved translating real-world business needs into a digital experience, including organizing product listings, presenting information clearly, and ensuring that navigation remained intuitive. Performance and load times were also considered to ensure accessibility even on slower networks. One of the key challenges was balancing simplicity with functionality, ensuring that the application remained lightweight while still providing enough value to the business. This project highlights the ability to deliver practical solutions tailored to real clients and real-world constraints.",

    tech: ["React", "Tailwind", "Vercel"],

    github: "https://github.com/jaitlimaye/the-ring-method",
    demo: "https://the-ring-method.vercel.app",

    images: ["/projects/theringmethod/1.jpg"],
  },
  {
    title: "Developer Portfolio",
    slug: "portfolio",

    description:
      "This personal developer portfolio showcasing projects, case studies, and technical experience.",

    longDescription:
      "This portfolio was built to serve as a central platform for showcasing development work, projects, and technical capabilities. The goal was to create a clean, modern, and easily navigable interface that presents projects in a structured and professional manner. The site is built using Next.js and Tailwind CSS, with a focus on performance, responsiveness, and scalability. Projects are managed through a data-driven approach, allowing new entries to be added easily without modifying core components. The design emphasizes clarity and simplicity, with subtle animations and consistent styling to create a polished user experience. Additional features such as dynamic routing for project pages and image galleries enhance the overall presentation.This project reflects both frontend development skills and the ability to design systems that are maintainable and scalable over time.",
    tech: ["Next.js", "Tailwind"],

    github: "",
    demo: "",

    images: ["/projects/portfolio/1.jpg"],
  },
];
