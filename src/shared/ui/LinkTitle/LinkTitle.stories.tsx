import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinkTitle } from './LinkTitle';

const meta = {
    title: 'Shared/LinkTitle',
    component: LinkTitle,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
            router: {
                pathname: '#',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Текст ссылки',
        }
    },
} satisfies Meta<typeof LinkTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    name: 'Regular',
    args: {
        children: 'Link title',
    },
};
