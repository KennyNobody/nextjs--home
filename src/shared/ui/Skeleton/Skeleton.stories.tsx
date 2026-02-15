import { AppTheme } from 'shared/types/Theme';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton, SkeletonMode } from './Skeleton';
import {StorybookDecorator} from "../../providers/StorybookDecorator/StorybookDecorator";

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
        (Story) => (
            <StorybookDecorator mode={'size-medium'}>
                <Story />
            </StorybookDecorator>
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
