import { ArgTypes, ComponentMeta } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Main>;

export const Primary = function (args: ArgTypes) {
  return <Main {...args} />;
};
Primary.args = {
  title: 'Primário',
  description: 'Descrição Primária',
  variant: 'primary',
};

export const Secondary = function (args: ArgTypes) {
  return <Main {...args} />;
};
Secondary.args = {
  title: 'Secundário',
  description: 'Descrição Secundária',
  variant: 'secondary',
};

export const Default = function (args: ArgTypes) {
  return <Main {...args} />;
};
