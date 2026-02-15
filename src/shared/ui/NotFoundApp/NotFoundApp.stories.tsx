import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NotFoundApp } from './NotFoundApp';

const meta = {
    title: 'Shared/NotFoundApp',
    component: NotFoundApp,
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
} satisfies Meta<typeof NotFoundApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
};
