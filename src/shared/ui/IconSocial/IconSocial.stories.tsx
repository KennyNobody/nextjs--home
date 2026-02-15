import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconKey, IconSocial } from './IconSocial';
import { AppTheme } from '../../types/Theme';
import { ContentKeyType } from '../../types/CommonTypes';
import { StorybookDecorator } from '../../providers/StorybookDecorator/StorybookDecorator';

const meta = {
    title: 'Shared/IconSocial',
    component: IconSocial,
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
            options: [IconKey.VK, IconKey.INST, IconKey.TG, IconKey.FB, IconKey.GH, IconKey.X],
            description: 'Социальная сеть',
        },
    },
    decorators: [
        (Story) => (
            <StorybookDecorator mode={'size-small'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof IconSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        iconKey: IconKey.GH,
    },
};
