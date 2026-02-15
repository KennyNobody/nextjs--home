import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Editor } from './Editor';
import {StorybookDecorator} from "../../providers/StorybookDecorator/StorybookDecorator";

const meta = {
    title: 'Shared/Editor',
    component: Editor,
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
    decorators: [
        (Story) => (
            <StorybookDecorator mode={'padding-small'}>
                <Story />
            </StorybookDecorator>
        ),
    ],
    argTypes: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = `
<h1>Main Heading</h1>
<p>This is a paragraph with <strong>bold text</strong> and <a href="#">a link</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<h2>Subheading Level 2</h2>
<p>Another paragraph with some <b>emphasis</b> and more content to demonstrate the styling.</p>

<h3>Subheading Level 3</h3>
<ul>
  <li>First list item</li>
  <li>Second list item with more text</li>
  <li>Third list item</li>
</ul>

<h4>Subheading Level 4</h4>
<ol>
  <li>Numbered item one</li>
  <li>Numbered item two</li>
  <li>Numbered item three</li>
</ol>

<h5>Subheading Level 5</h5>
<blockquote>
  This is a blockquote. It can contain multiple lines of text and is styled differently from regular paragraphs.
</blockquote>

<pre><code>function example() {
  console.log("Code block example");
  return true;
}</code></pre>

<p>Final paragraph with a very long link to test overflow: <a href="#">https://example.com/very/long/url/that/should/truncate/properly/when/displayed</a></p>
`;

export const Default: Story = {
    name: 'Default',
    args: {
        data: sampleContent,
    },
};
