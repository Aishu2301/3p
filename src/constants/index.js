const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.jpg",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];


const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
   
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "Frontend Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },

    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Aishwarya’s work on the Carbon Calculator has been exceptional; she tackles complex full-stack challenges with creativity and precision.",
        logoPath: "/images/logo1.png",
        title: "Junior web Developer",
        date: "February 2026 - Present",
        responsibilities: [
            "Designed and developed a full-stack Carbon Calculator along with API integration, and deployment.",
            "Built responsive and interactive user interfaces using modern web technologies to enhance user experience.",
            "Implemented file processing, data transformation, and real-time result generation.",
            "Ensured seamless frontend-backend integration and resolved performance issues.",
            "Applied security best practices for data handling, API protection, and user interactions.",
            "Collaborated with cross-functional teams to continuously enhance features and user experience.",
        ],
    },
    {
        review:
            "Aishwarya consistently delivered accurate data pipelines and scripts, demonstrating strong technical skills and a collaborative attitude.",
        logoPath: "/images/logo2.png",
        title: "Coding Assistant",
        date: "May 2025 - December 2025",
        responsibilities: [
            "Built and maintained data pipelines to process, clean, and organize large-scale food and nutrition datasets for accurate carbon calculations.",
            "Developed Python scripts for data extraction, transformation, and validation, improving efficiency and reliability of calculations.",
            "Assisted in creating the carbon footprint calculator, supporting sustainability initiatives for campus dining programs.",
        ],
    },
    {
        review:
            "Aishwarya contributed high-quality code and automation solutions, showing initiative and a clear understanding of modern software engineering practices.",
        logoPath: "/images/logo3.png",
        title: "Software Engineering Intern",
        date: "June 2023 - December 2023",
        responsibilities: [
            "Engineered full-stack applications with React.js and Node.js, focusing on responsive interfaces and high-performance functionality.",
            "Built and integrated RESTful APIs with MongoDB, enabling seamless data flow and real-time updates.",
            "Assisted in API development, database interactions, and backend logic for core application functionality.",
            "Learned and applied software engineering best practices, including version control, agile workflows, and code optimization."
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Jorge Reinso-Zegarra",
        review:
            "Aishwarya’s attention to detail and problem-solving skills are remarkable. She built a robust and scalable platform for us, all while maintaining excellent communication.",
    },
    {
        name: "Collin Hames",
        review:
            "Working with Aishwarya was an absolute delight. She quickly understood our project requirements and delivered a sleek, intuitive web solution that exceeded our expectations.",
    },  
    {
        name: "Sijavi Cheni",
        review:
            "Collaborating with Aishwarya was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Aishwarya's enthusiasm for every facet of development truly stands out.",
       
    },
    {
        name: "Pallavi Sharma",
        review:
            "Aishwarya was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend and backend dev are top-notch.", 
    },
    {
        name: "Mahesh Kumar",
        review:
            "Aishwarya’s expertise in web development is truly impressive. I was impressed with how Aishwarya transformed our ideas into a functional, modern website. Her professionalism and expertise made the entire process smooth and enjoyable.",
    },
    {
        name: "Pavithra Gupta",
        review:
            "Aishwarya delivered an outstanding web application on time and with exceptional quality. Her coding skills and design sensibilities truly stand out.",
    },
];

const socialImgs = [
    {
        name: "github",
        url: "https://github.com/Aishu2301/",
        imgPath: "/images/github.png",
    },
    {
        name: "mail",
        url: "mailto:aishwaryae02@gmail.com",
        imgPath: "/images/mail.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/aishu2301/",
        imgPath: "/images/linkedin.png",
    },
];


export {
    words,
    logoIconsList,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};