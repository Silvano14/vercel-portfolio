import { Card } from "./Card";

const cards = [
  {
    title: "Pillinder",
    description:
      "A React Native project to help my wife manage her medications, It&apos;s my first attempt at a mobile app.",
  },
  {
    title: "Portfolio",
    description:
      "A React Native project to help my wife manage her medications, It&apos;s my first attempt at a mobile app.",
  },
];

function Work() {
  return (
    <div className="border-t-2 h-screen md:p-8 md:px-32 gap-4 flex flex-col">
      <div className="justify-center flex">
        <h1 className="text-3xl">Projects</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-4 h-full w-full">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            description={c.description}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default Work;
