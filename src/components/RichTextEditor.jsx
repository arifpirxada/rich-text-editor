import { useState, useCallback } from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history';

import handleKeyDown from '../lib/handleKeyDown'
import { renderElement } from './render/RenderElement'
import { Controls } from './Controls'
import { renderLeaf } from './render/RenderLeaf';
import { useEffect } from 'react';

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
    const [editor] = useState(() => {
        const e = withHistory(withReact(createEditor()));

        const { normalizeNode } = e;

        // normalizeNode
        e.normalizeNode = ([node, path]) => {
            if (Element.isElement(node) && e.isInline(node) && node.align) {
                Transforms.unsetNodes(e, 'align', { at: path });
                return;
            }

            normalizeNode([node, path]);
        };

        return e;
    });

    const renderElementCb = useCallback(renderElement, []);
    const renderLeafCb = useCallback(renderLeaf, []);

    const getSavedValue = () => {
        const saved = localStorage.getItem("rich-content");
        if (!saved) return initialValue;
        try {
            const parsed = JSON.parse(saved);
            return parsed || initialValue;
        } catch (e) {
            console.error("Could not load saved content");
            return initialValue;
        }
    };

    const handleOnChange = (newValue) => {
        // Save to localStorage
        const isAstChange = editor.operations.some(
            op => op.type !== 'set_selection'
        );

        if (isAstChange) {
            localStorage.setItem("rich-content", JSON.stringify(newValue));
        }
    }

    return (
        <>
            <Controls editor={ editor } />
            <Slate editor={ editor } initialValue={ getSavedValue() } onChange={ handleOnChange } >
                <Editable
                    className='border-2 border-gray-300 p-4 rounded outline-none'
                    renderElement={ renderElementCb }
                    renderLeaf={ renderLeafCb }
                    onKeyDown={ (event) => handleKeyDown(event, editor) }
                />
            </Slate>
        </>
    )
}

export { RichTextEditor };