import { robots } from "@/app/data/robotData";
import Image from "next/image";
import Link from "next/link";

export default function RobotPage({ params }: { params: { id: string } }) {
  const robot = robots.find((r) => r.id === params.id);

  if (!robot) {
    return <p>Robot not found.</p>;
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{robot.name}</h1>
        <p className="text-gray-500">{robot.description}</p>
        <div className="relative w-full h-[400px]">
          <Image
            src={robot.image}
            alt={robot.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="list-disc pl-5 text-gray-500">
            {robot.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Build Season</h3>
          <p className="text-gray-500">{robot.buildSeason}</p>
        </div>
        <div className="pt-4">
          <Link href="/robots" className="text-[#7500ff] hover:underline">
            Back to Robots
          </Link>
        </div>
      </div>
    </div>
  );
}