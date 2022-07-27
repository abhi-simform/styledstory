import Button from "./Button";

export default {
  title: "Styled Button",
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    outline: {control: "boolean"},
    children: {control: "text"}
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  outline: false,
  children: "Coral Button",
}

export const Secondary = Template.bind({});
Secondary.args =  {
  primary: false,
  outline: false,
  children: "Black Button",
}

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  primary: true,
  outline: true,
  children: "Coral Outline",
}

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  primary: false,
  outline: true,
  children: "Black Outline",
}