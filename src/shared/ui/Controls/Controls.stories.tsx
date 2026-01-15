import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Controls } from './Controls';

const meta = {
    title: 'Shared/Controls',
    component: Controls,
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
    // decorators: [
    //     (Story) => (
    //         <div style={{ maxWidth: '100%', width: '360px' }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
} satisfies Meta<typeof Controls>;

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
