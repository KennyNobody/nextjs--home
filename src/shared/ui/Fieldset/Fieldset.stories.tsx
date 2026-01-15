import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Fieldset } from './Fieldset';

const meta = {
    title: 'Shared/Fieldset',
    component: Fieldset,
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
    argTypes: {},
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetStory: Story = {
    name: 'Props children',
    args: {
        title: 'Title',
        children: (
            <>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </>
        )
    },
};
