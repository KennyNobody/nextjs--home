import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconKey } from 'shared/ui/IconSocial/IconSocial';
import { LinkSocial } from './LinkSocial';

const meta = {
    title: 'Shared/LinkSocial',
    component: LinkSocial,
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
        iconKey: {
            control: 'select',
            options: [IconKey.X, IconKey.GH, IconKey.FB, IconKey.TG, IconKey.VK, IconKey.INST],
            description: 'Выбрать иконку',
            defaultValue: IconKey.GH,
        }
    },
} satisfies Meta<typeof LinkSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    name: 'Regular',
    args: {
        iconKey: IconKey.GH,
        href: '#',
    },
};
