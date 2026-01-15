import { AppTheme } from 'shared/types/Theme';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton, SkeletonMode } from './Skeleton';

const meta = {
    title: 'Shared/Skeleton',
    component: Skeleton,
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
        themeProp: {
            control: 'select',
            options: [AppTheme.LIGHT, AppTheme.DARK, undefined],
            description: 'Тема компонента',
        },
        mode: {
            control: 'select',
            options: [SkeletonMode.BLOCK, SkeletonMode.LINES],
            description: 'Режим отображения',
        },

    },
    decorators: [
        // TODO: Вынести в компонент
        (Story) => (
            <div style={{ maxWidth: '100%', width: '480px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
    name: 'Block',
    args: {
        mode: SkeletonMode.BLOCK,
    },
    render: (args) => (
        <div style={{ height: '200px' }}>
            <Skeleton {...args} />
        </div>
    ),
};

export const Lines: Story = {
    name: 'Lines',
    args: {
        mode: SkeletonMode.LINES,
    },
};
