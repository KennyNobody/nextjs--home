import { AppTheme } from 'shared/types/Theme';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticlePhoto } from './ArticlePhoto';
import { data } from './../../mocks/data';
import {StorybookDecorator} from "../../../../shared/providers/StorybookDecorator/StorybookDecorator";

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
