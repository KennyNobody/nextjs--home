import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GridCategory } from './GridCategory';
import { data as mock } from '../../mocks/articleCategory';

const meta = {
    title: 'Entities/GridCategory',
    component: GridCategory,
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
        data: [mock, mock, mock],
        showSkeleton: false,
    },
    argTypes: {
        showSkeleton: {
            control: 'boolean',
            description: 'Показать скелетон',
        },
        data: {
            control: false,
            description: 'Массив записей для отображения',
        },
    },
} satisfies Meta<typeof GridCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        showSkeleton: false,
    }
};

export const Loading: Story = {
    name: 'Loading',
    args: {
        showSkeleton: true,
    }
};
