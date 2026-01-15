import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Stack, StackSizeType } from './Stack';

const meta = {
    title: 'Shared/Stack',
    component: Stack,
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
        size: {
            control: 'select',
            options: [StackSizeType.MEDIUM, StackSizeType.LARGE],
        }
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
    name: 'Medium',
    args: {
        size: StackSizeType.MEDIUM,
        children: (
            <>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </>
        ),
    },
};

export const Large: Story = {
    name: 'Large',
    args: {
        size: StackSizeType.LARGE,
        children: (
            <>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </>
        ),
    },
};
