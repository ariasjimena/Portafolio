// data/projects.js
export const projects = [
  {
    id: "menu-qr",
    title: "Menu QR",
    subtitle: "Sistema digital para restaurantes",
    description:
      "Plataforma de menú digital con panel administrativo para gestión de productos en tiempo real, optimizando la experiencia del cliente y reduciendo tiempos de atención.",

    role: "Frontend Developer",
    stack: ["React Native", "Node.js", "MongoDB"],
    impact: [
      "Gestión dinámica de productos",
      "Optimización del flujo de pedidos",
      "Interfaz adaptable a múltiples dispositivos",
    ],

    image: "/projects/menu.png",
    link: "https://www.gladiadorbistro.com/",
    github: "https://github.com/ariasjimena/M_G_Bistro_fron",
    featured: false,
  },

  {
    id: "pluma-estelar",
    title: "Librería Pluma Estelar",
    subtitle: "E-commerce literario moderno",
    description:
      "Plataforma web para exploración y gestión de libros con enfoque en experiencia de usuario limpia, arquitectura modular y rendimiento optimizado con Vite.",

    role: "Full Stack Developer",
    stack: ["React", "Vite", "Bootstrap", "Node.js", "MongoDB"],
    impact: [
      "Arquitectura frontend modular",
      "Integración API REST con Node.js",
      "Gestión dinámica de catálogo",
    ],

    image: "/projects/pluma-estelar.png",
    link: "https://plumaestelar.com",
    github: "https://github.com/ariasjimena/FronLibrary",
    featured: true,
  },
];