import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Title, TitleModeType } from './Title';

const meta = {
    title: 'Shared/Title',
    component: Title,
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
        mode: {
            control: 'select',
            options: [TitleModeType.MAIN, TitleModeType.REGULAR],
            description: 'Тег заголовка (h1/h2)',
        },
        children: {
            control: 'text',
            description: 'Текст заголовка'
        }
    },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        mode: TitleModeType.MAIN,
        children: 'Title main',
    },
};
