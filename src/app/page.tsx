import { ThemeToggle } from "@/components/theme-toggle";
import Timeline from "@/components/timeline";

const Home = async () => {
  return (
    <main className="bg-white dark:bg-backgroundDark-0 text-bg-backgroundDark-0 dark:text-textWhite min-h-screen">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <Timeline />
    </main>
  );
};

export default Home;
