import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputComp from "./Input.component";

export default {
  title: "Example/Input",
  component: InputComp,
  // parameters: {
  //   variant: {
  //       values: [{name: 'filled', value: 'filled'}]
  //   }
  // }
} as ComponentMeta<typeof InputComp>;

const Template: ComponentStory<typeof InputComp> = (args) => {
  return (
    <>
      <InputComp
        {...args}
        label="Filled TextField"
        variant="filled"
        onChange={(e: string) => {
          console.log(e);
        }}
      />

      <br />

      <InputComp
        {...args}
        label="Outlined TextField"
        variant="outlined"
        onChange={(e: string) => {
          console.log(e);
        }}
      />

      <br />

      <InputComp
        {...args}
        label="Standard TextField"
        variant="standard"
        disabled={true}
        defaultValue={'test'}
        onChange={(e: string) => {
          console.log(e);
        }}
      />
    </>
  );
};

export const Input = Template.bind({});
