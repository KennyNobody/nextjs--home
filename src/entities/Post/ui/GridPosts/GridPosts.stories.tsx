import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GridPosts } from './GridPosts';
import { data as mock } from './../../mocks/data';

const meta = {
    title: 'Entities/GridPosts',
    component: GridPosts,
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
        data: [mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock],
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
        },
        showEnd: {
            control: 'boolean',
            description: 'Показать финальный текст',
        }
    },
} satisfies Meta<typeof GridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        showSkeleton: false,
        showEnd: true,
    }
};

export const Loading: Story = {
    name: 'Loading',
    args: {
        showSkeleton: true,
    }
};
