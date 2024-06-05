import Header from "@/components/text/Header";
import { Button } from "@nextui-org/react";
import { IconChevronDown } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Button isIconOnly variant="light" size="lg"><IconChevronDown className="size-96" color="white" /></Button>
    </main>
  );
}
