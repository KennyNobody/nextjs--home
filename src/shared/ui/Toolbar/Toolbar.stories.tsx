import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toolbar } from './Toolbar';

const meta = {
    title: 'Shared/Toolbar',
    component: Toolbar,
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
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    name: 'Default',
    args: {
        children: (
            <>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </>
        ),
    },
};
