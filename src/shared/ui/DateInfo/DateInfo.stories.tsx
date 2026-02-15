import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DateInfo } from './DateInfo';

const meta = {
    title: 'Shared/DateInfo',
    component: DateInfo,
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
    argTypes: {},
} satisfies Meta<typeof DateInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumericRu: Story = {
    name: 'Numeric',
    args: {
        mode: 'numeric',
        date: '2024-02-28T15:05:45.021Z',
    },
};

export const TextRu: Story = {
    name: 'Text RU',
    args: {
        lang: 'ru',
        mode: 'text',
        date: '2024-02-28T15:05:45.021Z',
    },
};

export const TextEn: Story = {
    name: 'Text En',
    args: {
        lang: 'en',
        mode: 'text',
        date: '2024-02-28T15:05:45.021Z',
    },
};
