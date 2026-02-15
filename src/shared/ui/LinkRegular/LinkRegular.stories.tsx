import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinkRegular } from './LinkRegular';

const meta = {
    title: 'Shared/LinkRegular',
    component: LinkRegular,
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
        text: {
            control: 'text',
            description: 'Текст ссылки',
        }
    },
} satisfies Meta<typeof LinkRegular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        href: '#',
        text: 'Ссылка',
    },
};
