import { img1, img2, img3, img4, img5, orang1, orang2, orang3, orang4, orang5, orang6, post1, post2, project1, project2, project3, project4, project5, signature } from '@/public/images';
import React from 'react'
import { BiArch, BiBulb, BiHardHat, BiLayer, BiNote, BiOutline, BiPaintRoll, BiSolidUser } from 'react-icons/bi';

export const navigationLinks = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Blog",
    hash: "/blog",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
];

export const heroContent = {
  intro: {
    title: "Where Creativity Meets Structural Integrity",
    subTitle: "Welcome",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quod iusto distinctio iure, quae doloremque voluptatem dolores rem magni nam ut eos aperiam numquam veritatis perferendis quibusdam debitis facilis atque.",
    btn: {
      href: "/projects",
      label: "View Project",
    }
  }
}

export const aboutContent = {
  heading: {
    title: 'Where Creative Meets Structural Integrity',
    subTitle: 'About Us'
  },
  content: {
    img: '/images/hero-img-1-min.jpg',
    title: 'Architecture of Innovation, Builders of Beauty',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum. Facere beatae atque praesentium harum, est vero odio quam vel.',
    btn: {
      href: "/projects",
      label: "Learn about us",
    }
  }
}

export const howitworksContent = {
  heading: {
    title: 'Where Creative Meets Structural Integrity',
    subTitle: 'How It Works',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum. Facere beatae atque praesentium harum, est vero odio quam vel.'
  },
  steps: [
    {
      number: '01',
      icon: BiHardHat,
      title: 'Project Initiation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita qui reprehenderit incidunt iste.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
    {
      number: '02',
      icon: BiPaintRoll,
      title: 'Conceptual Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita qui reprehenderit incidunt iste.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
    {
      number: '03',
      icon: BiNote,
      title: 'Construction Document',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita qui reprehenderit incidunt iste.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: 'Design Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
    {
      icon: BiBulb,
      title: 'Constraction Administration',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
    {
      icon: BiOutline,
      title: 'Post-Occupancy Evaluation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
    {
      icon: BiLayer,
      title: 'Schematic Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum.',
      btn: {
        href: '#',
        label: 'Learn More'
      }
    },
  ]
}

export const testiContent = {
  heading: {
    title: 'Hear What Our Customers say',
    subTitle: 'Testimonials',
  },
  testimoninya: [
    {
      img: orang1,
      name: "Kusuma Hadiwijaya",
      titleRole: "Ketua Ngusep",
      message: "Kamu cantiknya terlalu ke selatan, sehingga sulit untuk diutarakan"
    },
    {
      img: orang2,
      name: "Handoko Tjahya",
      titleRole: "Balong Wa icah Developer",
      message: "Ultraman kok nangis? Si cantik hanya gabut. Harusnya lo cabut, jangan ngebadut"
    },
    {
      img: orang3,
      name: "Kuncoro Aditya",
      titleRole: "Layangan Designer",
      message: "Tinta apa yang tidak luntur? Tintatu tatamu jiahhhhhhh"
    },
  ]
}

export const rbContent = {
  heading: {
    title: 'Recent Update',
    subTitle: 'Our Blog',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro quibusdam unde provident repellat itaque tenetur eum eligendi blanditiis voluptatum.'
  },
}

export const SubsContent = {
  heading: {
    title: 'Never Miss an Update, Subscribe Today',
    subTitle: 'Join our community',
    description: 'Join our community of subscribers today and stay connected with all the developments!'
  },
  form: {
    placeholder: 'Enter your email'
  }
}

export const footerContent = {
  footerLinks: [
    {
      heading: "Product",
      links: [
        {
          href: '#',
          label: 'Overview'
        },
        {
          href: '#',
          label: 'Solutions',
          badge: 'New'
        },
        {
          href: '#',
          label: 'Tutorials'
        },
        {
          href: '#',
          label: 'Pricing'
        },
        {
          href: '#',
          label: 'Releases'
        },
      ]
    },
    {
      heading: "Company",
      links: [
        {
          href: '#',
          label: 'About us'
        },
        {
          href: '#',
          label: 'Leadership'
        },
        {
          href: '#',
          label: 'Careers',
          badge: "We're hiring"
        },
        {
          href: '#',
          label: 'Press'
        },
        {
          href: '#',
          label: 'Contact'
        },
        {
          href: '#',
          label: 'Branding'
        },
      ]
    },
    {
      heading: 'Resources',
      links: [
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Events',
        },
        {
          href: '#',
          label: 'Newsletter',
        },
        {
          href: '#',
          label: 'Knowledge base',
        },
        {
          href: '#',
          label: 'Support',
        },
        {
          href: '#',
          label: 'Tutorials',
        },
      ]
    }
  ]
}

export const aboutPageContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "About Us"
  }
}

export const aboutStoryContent = {
  column1: {
    imgs: [
      {
        img: img5,
        alt: 'Team brainstorming',
        width: 1188,
        height: 1413,
        tailwindCSS: 'h-56 lg:h-96'
      },
      {
        img: img1,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
    ]
  },
  column2: {
    imgs: [
      {
        img: img2,
        alt: 'Team meeting',
        width: 1188,
        height: 1413,
        tailwindCSS: 'h-48 lg:h-64'
      },
      {
        img: post2,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindCSS: 'h-56 lg:h-64'
      },
      {
        img: img4,
        alt: 'Kontol hitam pak slamet',
        width: 1188,
        height: 1413,
        tailwindCSS: 'h-56 lg:h-96'
      },
    ]
  },
  column3: {
    imgs: [
      {
        img: post1,
        alt: 'Building',
        width: 1188,
        height: 1413,
      },
      {
        img: img3,
        alt: 'Man writing a plan',
        width: 1188,
        height: 1413,
      },
    ]
  },
  storyText: {
    heading: "Crafting Spaces, Shaping Dreams",
    p1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corrupti numquam quia, est maxime explicabo deserunt? Provident, autem exercitationem, culpa amet animi velit eum doloribus cupiditate expedita cum corporis? Enim.',
    p2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corrupti numquam quia, est maxime explicabo deserunt? Provident, autem exercitationem, culpa amet animi velit eum doloribus cupiditate expedita cum corporis? Enim.',
    signature: signature,
    name: "Handoko Abimana",
    roleTitle: 'CEO and Co-Founder',
  }
}

export const aboutWhyUs = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "Why Us"
  },
  whyUsItems: [
    {
      icon: BiHardHat,
      title: "Unparalled Expertise",
      description: "With over 27 years of experience in the industry, our team of architects and designers brigs a wealth of knowledge to every project."
    },
    {
      icon: BiArch,
      title: "Innovative Deisgn",
      description: "Our portofolio showcases award-winning designs that have earned accolades for their uniqueness and functionally."
    },
    {
      icon: BiSolidUser,
      title: "Client-Centered Approach",
      description: "We believe in collaboration. Your vision and goals are at the forefront of our design process"
    },
  ]
}

export const aboutTeam = {
  heading: {
    title: 'Introducing Our Exceptional Team',
    subTitle: 'Meet our Team',
    description: "At kanabagi we're dedicated to shaping environtments that transcend the structures, weaving stories and experiences into every design"
  },
  team: [
    {
      image: orang1,
      name: 'Kusuma Hadiwijaya',
      titleRole: "Ketua Ngusep",
      twitter: '/',
      linkedin: '/'
    },
    {
      image: orang2,
      name: 'Handoko Tjahya',
      titleRole: "Balong wa icah Developer",
      twitter: '/',
      linkedin: '/'
    },
    {
      image: orang3,
      name: 'Kuncoro Aditya',
      titleRole: "Layangan Designer",
      twitter: '/',
      linkedin: '/'
    },
    {
      image: orang4,
      name: 'Jang Nicole',
      titleRole: "Parking lot management",
      twitter: '/',
      linkedin: '/'
    },
    {
      image: orang5,
      name: 'Ucup Nirin',
      titleRole: "Pengangguran",
      twitter: '/',
      linkedin: '/'
    },
    {
      image: orang6,
      name: 'Engkus Rahmat',
      titleRole: "Kerja apa? Kerja bagus",
      twitter: '/',
      linkedin: '/'
    },
  ]
}


export const metadata = {
    title: 'Projects - Kanabagi by Engkus'
}

export const projectContent = [
  {
    title: 'Modern Eco-Friendly Residence',
    subTitle: 'Interior Design',
    img: project2,
    url: '/'
  },
  {
    title: 'Sustainable Office Building',
    subTitle: 'Interior Design',
    img: project3,
    url: '/'
  },
  {
    title: 'High-Tech Smart Home',
    subTitle: 'Interior Design',
    img: project4,
    url: '/'
  },
  {
    title: 'Urban Loft Renovation',
    subTitle: 'Interior Design',
    img: project5,
    url: '/'
  },
  {
    title: 'Contemporary Beachfront Villa',
    subTitle: 'Interior Design',
    img: project1,
    url: '/'
  },
]