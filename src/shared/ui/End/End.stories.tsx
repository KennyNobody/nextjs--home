import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { End } from './End';

const meta = {
    title: 'Shared/End',
    component: End,
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
} satisfies Meta<typeof End>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
};
