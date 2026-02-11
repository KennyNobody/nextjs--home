import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { WidgetMobile } from './WidgetMobile';

const meta = {
    title: 'Shared/WidgetMobile',
    component: WidgetMobile,
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
    decorators: [
        // TODO: Вынести в компонент
        (Story) => (
            <div style={{ maxWidth: '100%', width: '360px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof WidgetMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        title: 'Title',
        children: (
            <>
                <div>Child</div>
            </>
        ),
    },
};
