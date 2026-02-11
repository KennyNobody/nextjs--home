import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GridDev } from './GridDev';
import { data as mock } from './../../mocks/data';

const meta = {
    title: 'Entities/GridDev',
    component: GridDev,
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
            description: 'Массив статей для отображения',
        },
        showEnd: {
            control: 'boolean',
            description: 'Показать финальный текст',
        }
    },
} satisfies Meta<typeof GridDev>;

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
