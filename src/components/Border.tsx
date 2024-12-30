import { Component, JSX } from "solid-js";
import { Flex } from "./ui/flex";
import { twMerge } from "tailwind-merge";

interface BorderProps {
  children: JSX.Element;
  class?: string;
}

const Border: Component<BorderProps> = (props) => {
  return (
    <Flex
      justifyContent="start"
      alignItems="start"
      flexDirection="col"
      class={twMerge(
        "dark:bg-[black]/5 gap-4 dark:border-[#74c1f2] border-[1px] backdrop-filter backdrop-blur-sm p-4 rounded-md",
        props.class
      )}
    >
      {props.children}
    </Flex>
  );
};

export default Border;
