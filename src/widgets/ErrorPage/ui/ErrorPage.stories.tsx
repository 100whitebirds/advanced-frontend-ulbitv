import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ErrorPage } from './ErrorPage';

export default {
  title: 'widget/ErrorPage',
  component: ErrorPage,
} as Meta<typeof ErrorPage>;

type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
