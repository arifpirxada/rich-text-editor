import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import handleKeyDown from '../lib/handleKeyDown'
import { renderElement } from './RenderElement'
import { useCallback } from 'react'
import { Controls } from './Controls'

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Type Here...' }],
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
    }
]

const RichTextEditor = () => {
    const [editor] = useState(() => withReact(createEditor()));

    const renderElementCb = useCallback(renderElement, [])

    return (
        <>
            <Controls editor={ editor } />
            <Slate editor={ editor } initialValue={ initialValue } >
                <Editable
                    renderElement={ renderElementCb }
                    onKeyDown={ handleKeyDown }
                />
            </Slate>
        </>
    )
}

export { RichTextEditor };