import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ErrorApp } from './ErrorApp';

const meta = {
    title: 'Shared/ErrorApp',
    component: ErrorApp,
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
} satisfies Meta<typeof ErrorApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
};
