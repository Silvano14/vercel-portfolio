import Header from "@/components/text/Header";
import Text from "@/components/text/Text";
import Work from "@/components/work/Work";
import { Button } from "@nextui-org/react";
import { IconChevronDown } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="relative">
      <div className="-z-1 bg-fixed flex min-h-screen items-center w-full flex-col justify-between bg-[url('/desk.jpg')] bg-no-repeat bg-cover">
        <div className="fixed w-full px-16 pt-8">
          <Header />
        </div>
        <div></div>
        <Text className={"text-5xl "} >Silvano Norberti</Text>
        <Button isIconOnly variant="light" size="lg">
          <IconChevronDown className="size-96" color="white" />
        </Button>
      </div>
      <Work></Work>
    </main>
  );
}
