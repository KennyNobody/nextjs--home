import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switcher } from './Switcher';

const meta = {
    title: 'Shared/Switcher',
    component: Switcher,
    parameters: {
        layout: 'fullscreen',
        nextjs: {
            appDirectory: true,
            router: {
                pathname: '#',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isChecked: {
            control: 'boolean',
            defaultValue: true,
            description: 'Отметить',
        },
    },
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default',
    args: {
        isChecked: false,
        label: 'Toggle',
        changeEvent: () => console.log('Toggled'),
    },
};
