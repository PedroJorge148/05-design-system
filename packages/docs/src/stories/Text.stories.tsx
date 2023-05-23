import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quaerat voluptatem tempora labore vero explicabo ab quae iusto ad? Ratione asperiores ea ad iusto quae harum, labore rem repudiandae dolorum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
