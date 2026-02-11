import { AppTheme } from 'shared/types/Theme';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookDecorator } from 'shared/providers/StorybookDecorator/StorybookDecorator';
import { data } from './../../mocks/articleCategory';
import { ArticleTag } from './ArticleTag';

const meta = {
    title: 'Entities/ArticleTag',
    component: ArticleTag,
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
            <StorybookDecorator mode={'size-small'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof ArticleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        data: data,
    },
};
