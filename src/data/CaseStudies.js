export const CaseStudies = {

  "exam-notes": {
    title: "AI Exam Notes Maker",

    description:
      "AI-powered MERN web application that generates structured exam notes using AI with a credit-based usage model.",

    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth", "Stripe"],

    problem:
      "Students often spend hours preparing exam notes manually. There was a need for a system that could generate concise and structured notes instantly.",

    solution:
      "Built a MERN based AI platform where users input a topic and AI generates structured exam notes. Implemented credit based usage with Stripe payments and Google OAuth authentication.",

    architecture: [
      "React frontend with Tailwind UI",
      "Node.js + Express REST API",
      "MongoDB database",
      "OpenAI API for note generation",
      "Stripe payment gateway",
      "JWT authentication system"
    ],

    features: [
      "AI powered notes generation",
      "Google OAuth authentication",
      "Stripe credit based payments",
      "PDF export functionality",
      "User dashboard with history"
    ],

    apis: [
      "POST /api/auth/google",
      "POST /api/notes/generate",
      "GET /api/notes",
      "POST /api/payment/stripe"
    ],

    database: [
      "Users (id, email, credits, createdAt)",
      "Notes (id, userId, topic, content, createdAt)"
    ]
  },

  "resume-builder": {
    title: "AI Resume Builder",

    description:
      "AI powered resume generator with customizable templates and smart content suggestions.",

    tags: ["React", "Strapi", "SQLite", "Tailwind", "ShadCN"],

    problem:
      "Many students and job seekers struggle to create professional resumes that match industry standards.",

    solution:
      "Developed an AI powered resume builder that generates professional resume content and provides customizable templates with live preview.",

    architecture: [
      "React frontend",
      "Strapi headless CMS backend",
      "SQLite database",
      "Tailwind UI components",
      "AI generated resume suggestions"
    ],

    features: [
      "AI resume content generation",
      "Multiple resume templates",
      "Live resume preview",
      "PDF export",
      "User-friendly resume editor"
    ],

    apis: [
      "POST /api/resume/create",
      "GET /api/resume",
      "PUT /api/resume/update"
    ],

    database: [
      "Users (id, email, createdAt)",
      "Resumes (id, userId, content, template)"
    ]
  },

  "shopez": {
    title: "ShopEZ MERN Ecommerce",

    description:
      "Full stack ecommerce platform built with MERN stack featuring product management and optimized APIs.",

    tags: ["React", "Node.js", "Express", "MongoDB"],

    problem:
      "Small businesses need an easy to use ecommerce platform to manage products, orders and customers.",

    solution:
      "Developed a full stack ecommerce platform with product catalog, shopping cart and optimized backend APIs.",

    architecture: [
      "React ecommerce frontend",
      "Node.js + Express backend APIs",
      "MongoDB database",
      "REST API architecture"
    ],

    features: [
      "Product catalog system",
      "Shopping cart",
      "Checkout system",
      "REST API backend",
      "Admin product management"
    ],

    apis: [
      "GET /api/products",
      "POST /api/cart",
      "POST /api/orders"
    ],

    database: [
      "Users (id, email, password)",
      "Products (id, name, price, stock)",
      "Orders (id, userId, products, total)"
    ]
  },

  "ai-lms": {
    title: "AI Learning Management System",

    description:
      "AI powered LMS platform with role based authentication and course management system.",

    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "OAuth"],

    problem:
      "Traditional LMS systems lack intelligent course recommendations and advanced role based management.",

    solution:
      "Built a MERN LMS platform with role based access for admin, instructors and students along with AI powered course recommendations.",

    architecture: [
      "React LMS dashboard",
      "Node.js + Express API backend",
      "MongoDB database",
      "JWT authentication",
      "AI recommendation engine"
    ],

    features: [
      "Role based access control",
      "Course creation and management",
      "Student enrollment system",
      "AI course recommendations",
      "Progress tracking"
    ],

    apis: [
      "POST /api/auth/login",
      "POST /api/courses",
      "GET /api/courses",
      "POST /api/enroll"
    ],

    database: [
      "Users (id, role, email)",
      "Courses (id, instructorId, title)",
      "Enrollments (id, userId, courseId)"
    ]
  }
};
