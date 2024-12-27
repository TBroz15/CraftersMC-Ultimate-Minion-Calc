import { Component, JSX } from "solid-js";
import { Flex } from "./ui/flex";

interface BorderProps {
  children: JSX.Element;
}

const Border: Component<BorderProps> = (props) => {
  return (
    <Flex
      justifyContent="start"
      alignItems="start"
      flexDirection="col"
      class="dark:bg-[black]/10 gap-4 dark:border-[#74c1f2] border-[1px] backdrop-filter backdrop-blur-sm overflow-x-auto p-4 rounded-md"
    >
      {props.children}
    </Flex>
  );
};

export default Border;
