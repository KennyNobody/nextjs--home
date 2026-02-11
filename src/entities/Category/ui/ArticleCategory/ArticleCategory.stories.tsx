import { AppTheme } from 'shared/types/Theme';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookDecorator } from 'shared/providers/StorybookDecorator/StorybookDecorator';
import { data } from './../../mocks/articleCategory';
import { ArticleCategory, ArticleCategoryMode } from './ArticleCategory';

const meta = {
    title: 'Entities/ArticleCategory',
    component: ArticleCategory,
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
        mode: {
            control: 'radio',
            options: Object.values(ArticleCategoryMode),
            description: 'Выбрать тип компонента',
        }
    },
    decorators: [
        (Story) => (
            <StorybookDecorator mode={'size-small'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof ArticleCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
    name: 'Static',
    args: {
        data: data,
        mode: ArticleCategoryMode.STATIC,
    },
};

export const Active: Story = {
    name: 'Active',
    args: {
        data: data,
        mode: ArticleCategoryMode.INPUT,
    },
};
