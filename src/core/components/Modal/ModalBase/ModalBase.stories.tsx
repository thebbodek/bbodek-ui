import { Meta } from "@storybook/react";
import clsx from "clsx";
import { useState } from "react";

import Section from "../../Section";
import ModalBase from "./index";
import { ModalBaseProps } from "./types";

const meta = {
  title: "core/Modal/ModalBase",
  component: ModalBase,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    target: {
      control: "text",
      defaultValue: "modal",
      description: "Modal Render Position Element id",
    },
    variants: {
      control: "select",
      options: [ "modal", "drawer" ],
      description: "Modal Variants",
    },
    isOpen: {
      control: "boolean",
      defaultValue: false,
      description: "Open Modal",
    },
    dimmed: {
      control: "boolean",
      defaultValue: true,
      description: "use Modal Component with dimmed",
    },
    onClose: {
      action: "clicked",
      description: "Modal Close Function",
    },
  },
} satisfies Meta<typeof ModalBase>;

export default meta;

export const Default = (props: ModalBaseProps) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div id = {props.target ?? "modal"} />
      <ModalBase
        variants = {props.variants ?? "modal"}
        isOpen = {props.isOpen || isOpen}
        target = {props.target}
        dimmed = {props.dimmed}
      >
        <Section
          element = {"div"}
          className = {clsx("w-[20rem] h-[20rem]",
              props.variants === "modal" ? "animate-popup" : "animate-drawer",
            )}
        />
      </ModalBase>
      <button onClick = {() => setIsOpen(true)}>
        Modal Open!!
      </button>
    </>
  );
};
