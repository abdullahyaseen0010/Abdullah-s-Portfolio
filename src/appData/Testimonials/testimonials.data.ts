import { Testimonial, TestimonialStats } from './testimonial.types';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Project Manager',
    company: 'AL Hafeez Tech Company',
    rating: 5,
    text: "Abdullah was an exceptional intern at our company. His dedication to learning React and Next.js was impressive. He consistently delivered clean, maintainable code and showed great attention to detail in implementing responsive designs.",
    project: 'Company Website Redesign',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Senior Developer',
    company: 'Tech Solutions Ltd',
    rating: 5,
    text: "Working with Abdullah on our e-commerce platform was a pleasure. His expertise in TailwindCSS and responsive design helped us create a beautiful, user-friendly interface. He's quick to understand requirements.",
    project: 'E-commerce Platform',
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    role: 'CTO',
    company: 'Digital Innovations',
    rating: 5,
    text: "Abdullah's skills in React and Next.js are outstanding. He built our dashboard application with excellent performance optimization and clean architecture. His ability to integrate REST APIs seamlessly made our backend integration smooth.",
    project: 'Analytics Dashboard',
  },
  {
    id: 4,
    name: 'Fatima Malik',
    role: 'UI/UX Designer',
    company: 'Creative Studios',
    rating: 5,
    text: "Abdullah has an excellent eye for design implementation. He translated our Figma designs into pixel-perfect, responsive websites. His understanding of modern CSS and TailwindCSS made the collaboration seamless. Highly recommend!",
    project: 'Portfolio Website',
  },
  {
    id: 5,
    name: 'Omar Siddiqui',
    role: 'Product Owner',
    company: 'StartUp Hub',
    rating: 5,
    text: "Abdullah delivered our landing page ahead of schedule with outstanding quality. His knowledge of Next.js and modern web practices ensured excellent SEO and performance. Communication was clear throughout the project.",
    project: 'SaaS Landing Page',
  },
  {
    id: 6,
    name: 'Ayesha Raza',
    role: 'Marketing Director',
    company: 'Growth Agency',
    rating: 5,
    text: "We needed a fast, responsive website for our marketing campaigns, and Abdullah delivered perfectly. His expertise in React and TailwindCSS resulted in a beautiful, high-performing site that converted visitors effectively.",
    project: 'Marketing Website',
  },
];

export const testimonialStats: TestimonialStats[] = [
  { label: 'Happy Clients', value: '15+' },
  { label: 'Projects Completed', value: '25+' },
  { label: 'Years Experience', value: '2+' },
  { label: 'Client Satisfaction', value: '100%' },
];
