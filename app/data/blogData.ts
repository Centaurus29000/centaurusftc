export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Behind the Design: Blackjack",
    excerpt: "An in-depth look at the engineering process behind our latest competition robot.",
    content: `As this was our last season at school, we decided to push the limit of what is possible in FIRST Tech Challenge. Through collaboratively designing a brand new robot, we developed Blackjack, the latest and last creation of the ACE Robotics team.
    
    blackjack consisted of several complicated components, with multiple degrees of freedom and extension. The intake was made with custom-designed polyurethane wheels, driven by a single motor, one of the most complex mechanical parts of our robot. Additionally, our outtake also consisted of horizontal extension, allowing us to score specimens from both sides. Through this, we created an effective robot for the Into The Deep challenge. See below for some cool posters the go further into our robot!`,
     
    date: "2024-12-07",
    readTime: "8 min read",
    category: "Engineering",
    image: "/Blackjack.png?height=200&width=400",
    author: "Bilal Chaudhary",
  },
  {
      id: 2,
      title: "Primary School Robotics Workshops",
      excerpt: "Recap of our recent outreach workshop and the skills we help develop.",
      content: `In September, our team held a workshop at a local primary school, introducing students to the basics of robotics and programming. The workshop was designed to inspire young minds and encourage them to explore the world of technology.
      We covered topics such as basic coding concepts, robot design, and teamwork. The students had the opportunity to build their own simple robots and program them to complete various tasks. It was a rewarding experience for both our team and the students, and we hope to continue these workshops in the future.`,
      date: "2024-09-12",
      readTime: "4 min read",
      category: "Team Events",
      image: "/School.jpg?height=200&width=400",
      author: "Disath Peduruhewa",
    },
    {
      id: 3,
      title: "Raising Money for charity 'Oceana'",
      excerpt: "Our outreach team sold 3D printed items and fundraised AU$250 for the charity Oceana.",
      content: `In October, our outreach team organized a fundraising event to support the charity Oceana. We sold 3D printed items, including keychains and small toys, to raise money for ocean conservation efforts. The event was a great success, and we managed to raise AU$250 for the charity.
      We believe in giving back to the community and supporting important causes, and this event was a great way to combine our passion for robotics with philanthropy. We are grateful to everyone who supported us and contributed to this cause.`,
      date: "2024-10-15",
      readTime: "7 min read",
      category: "Outreach",
      image: "/Oceana.png?height=200&width=400",
      author:"Disath Peduruhewa",
    },
    {
      id: 4,
      title: "Community Outreach: Jacaranda Festival",
      excerpt: "Team Centaurus held a workshop at Brisbane's yearly Jacaranda Festival.",
      content: `In October, our team participated in the Jacaranda Festival in Brisbane, where we held a workshop to engage with the community and promote STEM education. The festival was a fantastic opportunity for us to showcase our robotics projects and inspire young minds to explore the world of technology.
      We set up a booth where festival-goers could interact with our robots, learn about programming, and even try their hand at building simple robotic models. The response from the community was overwhelmingly positive, and we hope to continue participating in such events in the future.`,
      date: "2024-10-24",
      readTime: "6 min read",
      category: "Outreach",
      image: "/Jacaranda.jpg?height=200&width=400",
      author:"Disath Peduruhewa",
    },
    {
    id: 5,
    title: "Nationals Competition Success",
    excerpt: "Our team earned the connect award at nationals, qualifying us for a premiere event.",
    content: `In early December, our former team, ACE Robotics participated in the Australian national FTC competition. 
    
    Though we didn't do the best in the competition, we were awarded the Connect Award for our outreach efforts. The judges truly appreciated our industrial outreach, connecting with industry mentors.`,
    date: "2024-12-09",
    readTime: "5 min read",
    category: "Competitions",
    image: "/NationalsImage.png?height=200&width=400",
    author: "Disath Peduruhewa",
  },
  {
    id: 6,
    title: "Women In Stem Class",
    excerpt: "Explore Layla's self-hosted club, encouraging more females to participate in STEM.",
    content: `In January, our team member Layla started a self-hosted club called Women in STEM. The club aims to encourage more women to participate in STEM fields and provide a supportive environment for people to learn and grow.`,
    date: "2025-01-30",
    readTime: "5 min read",
    category: "Competitions",
    image: "/WIS.png?height=200&width=400",
    author: "Layla Chitoni",
  },
  // Add more blog posts here...
];