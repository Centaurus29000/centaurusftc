export interface Robot {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  buildSeason: string;
  status: "current" | "past"; // Add status to distinguish robots
}

export const robots: Robot[] = [
  {
    id: "1",
    name: "Regs (October 2023)",
    description: "Our robot for the Centerstage Regionals competition. Earned us the Motivate Award.",
    image: "/CW1.png?height=200&width=300",
    features: [
      "Mecanum wheel drive system",
      "Custom intake mechanism",
      "Autonomous scoring capabilities",
    ],
    buildSeason: "September 2023 - October 2023",
    status: "past",
  },
  {
    id: "2",
    name: "SEPv1 (December 2023)",
    description: "Our robot for the Centerstage national competition. Nationals Judges award winner.",
    image: "/CW2.png?height=200&width=300",
    features: [
      "Advanced control system",
      "High-speed scoring mechanism",
      "Precision autonomous navigation",
    ],
    buildSeason: "November 2023 - December 2023",
    status: "past",
  },
  {
    id: "3",
    name: "SEPv2A1 (APOC 2024)",
    description: "Our robot for the Centrestage APOC challenge. Earned us the design award.",
    image: "/CW3.png?height=200&width=300",
    features: [
      "Omnidirectional movement",
      "Custom-designed intake and outtake",
      "Enhanced stability for high-speed tasks",
    ],
    buildSeason: "January 2024 - March 2024",
    status: "past",
  },
  {
    id: "4",
    name: "Current Robot (2025)",
    description: "Our latest robot for the upcoming competition season. Designed for maximum efficiency.",
    image: "/Blackjack.png?height=200&width=300",
    features: [
      "State-of-the-art control system",
      "High-speed intake and scoring",
      "Advanced autonomous capabilities",
    ],
    buildSeason: "April 2025 - Present",
    status: "current", // Mark this as the current robot
  },
];
