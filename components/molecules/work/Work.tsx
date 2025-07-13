import { FC } from "react";
import { Card, CardProps } from "./Card";
import { useIsMobile } from "@/hooks/usIsMobile";

// Componente griglia integrato
const ProjectsGrid: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`
      w-full
      ${
        isMobile
          ? "flex flex-col gap-4"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};

const cards: CardProps[] = [
  {
    title: "Pillinder",
    description:
      "A React Native project to help my wife manage her medications, It's my first attempt at a mobile app.",
    href: "https://github.com/Silvano14/Pillinder",
  },
  {
    title: "Portfolio",
    description:
      "This website is my portfolio, I built it using Next.js and Tailwind CSS.",
    href: "https://github.com/Silvano14/vercel-portfolio",
  },
  {
    title: "Pillinder",
    description:
      "A React Native project to help my wife manage her medications, It's my first attempt at a mobile app.",
    href: "https://github.com/Silvano14/Pillinder",
  },
  {
    title: "Portfolio",
    description:
      "This website is my portfolio, I built it using Next.js and Tailwind CSS.",
    href: "https://github.com/Silvano14/vercel-portfolio",
  },
  {
    title: "Pillinder",
    description:
      "A React Native project to help my wife manage her medications, It's my first attempt at a mobile app.",
    href: "https://github.com/Silvano14/Pillinder",
  },
  {
    title: "Portfolio",
    description:
      "This website is my portfolio, I built it using Next.js and Tailwind CSS.",
    href: "https://github.com/Silvano14/vercel-portfolio",
  },
];

function Work() {
  return (
    <div className="relative min-h-screen px-4 sm:px-8 md:px-14 lg:px-32 py-4 gap-4 flex flex-col">
      {/* Header */}
      <div className="justify-center flex flex-shrink-0">
        <h1 className="text-3xl font-Inconsolata">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="z-10 flex-1" style={{ isolation: "isolate" }}>
        <ProjectsGrid>
          {cards.map((c, index) => (
            <Card
              key={`${c.title}-${index}`} // Migliore key per elementi duplicati
              title={c.title}
              description={c.description}
              href={c.href}
            />
          ))}
        </ProjectsGrid>
      </div>
    </div>
  );
}

export default Work;
