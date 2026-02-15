import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookDecorator } from 'shared/providers/StorybookDecorator/StorybookDecorator';
import { data } from './../../mocks/data';
import { ArticlePhoto } from './ArticlePhoto';

const meta = {
    title: 'Entities/ArticlePhoto',
    component: ArticlePhoto,
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
} satisfies Meta<typeof ArticlePhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        data: data,
    },
};
