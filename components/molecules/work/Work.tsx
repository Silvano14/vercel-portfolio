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
    <div className="relative h-screen px-14 py-4 md:px-32 gap-4 flex flex-col overflow-x-hidden">
      <div className="justify-center flex">
        <h1 className="text-3xl font-Inconsolata">Projects</h1>
      </div>
      <div className="z-10 flex md:flex-row flex-col gap-4 h-full w-full">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            description={c.description}
            href={c.href}
          ></Card>
        ))}
        <div
          className="-z-10 absolute top-0 left-0 w-full h-full bg-black"
          style={{ clipPath: "polygon(100% 0, 100% 35%, 0 100%, 0 65%)" }}
        ></div>
      </div>
    </div>
  );
}

export default Work;
