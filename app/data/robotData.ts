export interface RobotComponent {
  name: string;
  summary: string;
  position: { top: string; left: string }; // e.g. { top: "30%", left: "60%" }
  sectionId: string;
  image?: string;
}

export interface Robot {
  id: string;
  name: string;
  team: string;
  description: string;
  image: string;
  buildSeason: string;
  status: "current" | "past";
  components: RobotComponent[];
  robotPageImage: string;
  cadUrl?: string;
  githubUrl?: string;
  disableCad?: boolean;
  disableGithub?: boolean;
}

export const robots: Robot[] = [
  {
    id: "7",
    name: "Chiron Concept Bot",
    team: "29000",
    description: "Showcase CAD robot for team Centaurus.",
    image: "/robot1.png",
    robotPageImage: "/TransBot.png?height=200&width=300",
    buildSeason: "September 2023 - October 2023",
    status: "current",
    components: [
      {
        name: "Intake",
        summary: "The intake of the Chiron robot exhibits several degrees of freedom. For one, there is a compact coaxial turret design, powered by 2 axon minis. This allows us to keep the intake efficient and speedy. Additionally, the wrist is powered by a differential mechanism, which allows the claw to have both a pivot and rotate degree of freedom, allowing us to inake samples at a wide range of orientations. Additionally, the intake is mounted on an MGN rail, allowing us to move the arm across the robot. This entire mechansim is mounted on an extendo, featuring 1.5 metres of extension.",
        position: { top: "35%", left: "20%" },
        sectionId: "intake",
        image: "/RobotImages/ChironIntake.png",
      },
      {
        name: "Outtake",
        summary: "Deposits elements with precision.",
        position: { top: "60%", left: "75%" },
        sectionId: "outtake",
      },
      {
        name: "Drivetrain",
        summary: "Mecanum wheels for omnidirectional movement.",
        position: { top: "80%", left: "50%" },
        sectionId: "drivetrain",
      },
    ],
    cadUrl: "https://cad.onshape.com/documents/...",
    githubUrl: "https://github.com/yourteam/chiron2025",
    disableCad: false,
    disableGithub: false,
  },
  {
    id: "6",
    name: "Blackjack",
    team: "23335",
    description: "Former ACE Robotics robot for the Into The Deep challenge.",
    image: "/Blackjack.png?height=200&width=300",
    buildSeason: "September 2024 - December 2024",
    status: "past",
    robotPageImage: "/TransBot.png?height=200&width=300",
    components: [
      {
        name: "Intake",
        summary: "High-speed intake and scoring.",
        position: { top: "40%", left: "25%" },
        sectionId: "intake",
      },
      {
        name: "Autonomous",
        summary: "Advanced autonomous capabilities.",
        position: { top: "20%", left: "60%" },
        sectionId: "autonomous",
      },
    ],
    cadUrl: "",
    githubUrl: "https://github.com/yourteam/blackjack",
    disableCad: true,
    disableGithub: false,
  },
  {
    id: "5",
    name: "John Doe",
    team: "23332",
    description: "Incognito (23332's) final competition robot. Featuring 6 feet of extension.",
    image: "/IncogBot.png?height=200&width=300",
    buildSeason: "December 2023 - July 2024",
    status: "past",
    robotPageImage: "/TransBot.png?height=200&width=300",
    components: [
      {
        name: "Extension Arm",
        summary: "Extends up to 6 feet for high scoring.",
        position: { top: "30%", left: "50%" },
        sectionId: "extension-arm",
      },
    ],
    cadUrl: "",
    githubUrl: "",
    disableCad: true,
    disableGithub: true,
  },
  {
    id: "4",
    name: "SEPv2A1",
    team: "23335",
    description: "Our robot for the Centrestage APOC challenge. Earned us the design award.",
    image: "/CW3.png?height=200&width=300",
    buildSeason: "January 2024 - March 2024",
    status: "past",
    robotPageImage: "/TransBot.png?height=200&width=300",
    components: [
      {
        name: "Intake",
        summary: "Custom-designed intake and outtake.",
        position: { top: "45%", left: "30%" },
        sectionId: "intake",
      },
      {
        name: "Stability",
        summary: "Enhanced stability for high-speed tasks.",
        position: { top: "70%", left: "60%" },
        sectionId: "stability",
      },
    ],
    cadUrl: "",
    githubUrl: "",
    disableCad: true,
    disableGithub: true,
  },
  {
    id: "3",
    name: "SEPv1",
    team: "23335",
    description: "Our robot for the Centerstage national competition. Nationals Judges award winner.",
    image: "/CW2.png?height=200&width=300",
    buildSeason: "November 2023 - December 2023",
    status: "past",
    robotPageImage: "/TransBot.png?height=200&width=300",
    components: [
      {
        name: "Control System",
        summary: "Advanced control system for precise operation.",
        position: { top: "30%", left: "40%" },
        sectionId: "control-system",
      },
      {
        name: "Navigation",
        summary: "Precision autonomous navigation.",
        position: { top: "60%", left: "70%" },
        sectionId: "navigation",
      },
    ],
    cadUrl: "",
    githubUrl: "",
    disableCad: true,
    disableGithub: true,
  },
  {
    id: "2",
    name: "Liabilities",
    team: "23332",
    robotPageImage: "/TransBot.png?height=200&width=300",
    description: "Rookie robot for the Centerstage Regionals competition.",
    image: "/Liabot.png?height=200&width=300",
    buildSeason: "September 2023 - October 2023",
    status: "past",
    components: [
      {
        name: "Intake",
        summary: "Custom intake mechanism.",
        position: { top: "50%", left: "30%" },
        sectionId: "intake",
      },
    ],
    cadUrl: "",
    githubUrl: "",
    disableCad: true,
    disableGithub: true,
  },
  {
    id: "1",
    name: "Regs",
    team: "23335",
    description: "Our robot for the Centerstage Regionals competition. Earned us the Motivate Award.",
    image: "/CW1.png?height=200&width=300",
    buildSeason: "September 2023 - October 2023",
    robotPageImage: "/TransBot.png?height=200&width=300",
    status: "past",
    components: [
      {
        name: "Drive System",
        summary: "Mecanum wheel drive system.",
        position: { top: "80%", left: "50%" },
        sectionId: "drive-system",
      },
    ],
    cadUrl: "",
    githubUrl: "",
    disableCad: true,
    disableGithub: true,
  },
];