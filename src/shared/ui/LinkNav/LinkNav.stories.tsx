import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinkNav } from './LinkNav';
import { AppTheme } from '../../types/Theme';
import { ContentKeyType } from '../../types/CommonTypes';
import {StorybookDecorator} from "../../providers/StorybookDecorator/StorybookDecorator";

const meta = {
    title: 'Shared/LinkNav',
    component: LinkNav,
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
        isActive: {
            control: 'boolean',
            description: 'Активное состояние ссылки',
        },
        isLoading: {
            control: 'boolean',
            description: 'Состояние загрузки (показывает скелетон)',
        },
        linkKey: {
            table: { disable: true },
        },
        href: {
            control: 'text',
            description: 'URL ссылки',
        },
    },
    decorators: [
        (Story) => (
            <StorybookDecorator mode={'size-small'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
} satisfies Meta<typeof LinkNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        href: '#',
        linkKey: ContentKeyType.POST,
        children: 'Заголовок',
        isActive: false,
    },
};

export const ActiveWithLightTheme: Story = {
    name: 'Selected',
    args: {
        href: '#',
        linkKey: ContentKeyType.POST,
        children: 'Заголовок',
        isActive: true,
    },
};


export const LoadingWithLightTheme: Story = {
    name: 'Loading',
    args: {
        href: '#',
        linkKey: ContentKeyType.POST,
        children: 'Заголовок',
        isLoading: true,
    },
};
