import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookDecorator } from 'shared/providers/StorybookDecorator/StorybookDecorator';
import { ArticleDev } from './ArticleDev';
import { data } from './../../mocks/data';

const meta = {
    title: 'Entities/ArticleDev',
    component: ArticleDev,
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
            <StorybookDecorator mode={'size-full'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof ArticleDev>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        data: data,
    },
};
