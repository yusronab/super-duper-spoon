import Hero from "@/components/Home/Hero";
import ListMenu from "@/components/Home/ListMenu";
import ListResto from "@/components/Home/ListResto";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ListResto title="Restaurant" />
      <ListMenu title="Menu terbaru" />
    </main>
  );
};
