import { Title } from "@solidjs/meta";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <ThemeToggle />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
