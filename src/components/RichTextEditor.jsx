import { useState, useCallback } from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history';

import handleKeyDown from '../lib/handleKeyDown'
import { renderElement } from './RenderElement'
import { Controls } from './Controls'

const initialValue = [
    {
        type: 'blockquote',
        children: [{ text: 'Use ctrl + / to view shortcuts' }],
    },
    {
        type: 'heading',
        children: [{ text: 'Heading' }],
    },
    {
        type: 'heading-2',
        children: [{ text: 'Heading 2' }],
    },
    {
        type: 'heading-3',
        children: [{ text: 'Heading 3\n' }],
    },
    {
        type: 'paragraph',
        children: [{ text: 'Paragraph...\n' }],
    },
    {
        type: 'bullet-list',
        children: [
            {
                type: 'list-item',
                children: [{ text: 'I am bullet' }]
            }
        ]
    },
    {
        type: 'ordered-list',
        children: [
            {
                type: 'ordered-list-item',
                children: [{ text: 'I am ordered list Item' }]
            }
        ]
    },
    {
        type: 'check-list',
        children: [
            {
                type: 'check-list-item',
                checked: true,
                id: "item-1",
                children: [{ text: 'I am check list Item' }]
            },
            {
                type: 'check-list-item',
                checked: false,
                id: "item-2",
                children: [{ text: 'I am check list Item 2' }]
            }
        ]
    },
    {
        type: 'blockquote',
        children: [{ text: 'This is a quote ...' }],
    },
    {
        type: 'code',
        children: [{ text: 'let a = 3;' }],
    },
    {
        type: 'link-element',
        url: "https://www.google.com/",
        children: [{ text: 'Google' }],
    },
    {
        type: 'paragraph',
        children: [
            { text: 'Checkout Google: ' },
            {
                type: 'link-element',
                url: "https://www.google.com/",
                children: [{ text: 'Google' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [{ text: 'Type Here ...\n' }],
    },
]

const RichTextEditor = () => {
    const [editor] = useState(() => withHistory(withReact(createEditor())));

    const renderElementCb = useCallback(renderElement, []);

    const renderLeaf = useCallback(({ attributes, children, leaf }) => {
        if (leaf.bold) children = <strong>{ children }</strong>;
        if (leaf.italic) children = <em>{ children }</em>;
        if (leaf.underline) children = <u>{ children }</u>;
        if (leaf.strikethrough) children = <s>{ children }</s>;
        return <span { ...attributes }>{ children }</span>;
    }, []);

    return (
        <>
            <Controls editor={ editor } />
            <Slate editor={ editor } initialValue={ initialValue } >
                <Editable
                    className='border-2 border-gray-300 p-4 rounded outline-none'
                    renderElement={ renderElementCb }
                    renderLeaf={ renderLeaf }
                    onKeyDown={ (event) => handleKeyDown(event, editor) }
                />
            </Slate>
        </>
    )
}

export { RichTextEditor };