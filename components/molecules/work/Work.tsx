import { Card } from "./Card";

function Work() {
  return (
    <div className="md:bg-green-300 h-screen md:p-8 p-4 gap-4 flex flex-col">
      <div className="justify-center flex">
        <h1 className="text-3xl">Projects</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-4 h-full w-full ">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Work;
