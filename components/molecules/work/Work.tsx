import { Card, CardProps } from "./Card";

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
];

function Work() {
  return (
    <div className="h-screen md:p-8 md:px-32 gap-4 flex flex-col">
      <div className="justify-center flex">
        <h1 className="text-3xl font-Inconsolata">Projects</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-4 h-full w-full">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            description={c.description}
            href={c.href}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default Work;
