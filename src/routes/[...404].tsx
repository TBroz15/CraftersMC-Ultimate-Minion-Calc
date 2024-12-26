import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found bruh</Title>
      <HttpStatusCode code={404} />
      <h1>Wrong Page Homie</h1>
      <Button as={A} variant={"link"} href="/">
        a
      </Button>
    </main>
  );
}
