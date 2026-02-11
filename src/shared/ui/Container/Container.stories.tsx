import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Container } from './Container';
import { AppTheme } from '../../types/Theme';
import { ContentKeyType } from '../../types/CommonTypes';

const meta = {
    title: 'Shared/Container',
    component: Container,
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    name: 'Default',
    args: {
        children: <div>Container</div>,
    },
};
