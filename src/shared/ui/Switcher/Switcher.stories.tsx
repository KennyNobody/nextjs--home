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

// export const FieldsetStory: Story = {
//     name: 'Props children',
//     args: {
//         isChecked: false,
//         changeEvent: () => console.log('Toggled'),
//     },
// };
