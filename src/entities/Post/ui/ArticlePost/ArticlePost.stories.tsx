import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookDecorator } from 'shared/providers/StorybookDecorator/StorybookDecorator';
import { ArticlePost } from './ArticlePost';
import { data } from './../../mocks/data';

const meta = {
    title: 'Entities/ArticlePost',
    component: ArticlePost,
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
        data: data,

    },
    decorators: [
        (Story) => (
            <StorybookDecorator mode={'size-large'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof ArticlePost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        data: data,
    },
};
