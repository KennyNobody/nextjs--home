import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GridPhoto } from './GridPhoto';
import { data as mock } from './../../mocks/data';

const meta = {
    title: 'Entities/GridPhoto',
    component: GridPhoto,
    parameters: {
        layout: 'fullscreen',
        nextjs: {
            appDirectory: true,
            router: {
                pathname: '#',
            },
        },
    },
    tags: ['autodocs'],
    args: {
        data: [mock, mock, mock, mock, mock, mock],
        showSkeleton: false,
    },
    argTypes: {
        showSkeleton: {
            control: 'boolean',
            description: 'Показать скелетон',
        },
        data: {
            control: false,
            description: 'Массив статей для отображения',
        }
    },
} satisfies Meta<typeof GridPhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lines: Story = {
    name: 'Lines',
};
