import { Transforms } from 'slate';

class ControlHandler {
    static insertParagraph = editor => {
        Transforms.insertNodes(editor, {
            type: 'paragraph',
            children: [{ text: 'Paragraph' }]
        })
    }
    static insertHeading = (editor, num) => {
        if (num > 3 || num < 1) return;
        const type = num == 1 ? 'heading' : `heading-${num}`;
        Transforms.insertNodes(editor, {
            type: type,
            children: [{ text: `Heading ${num}` }]
        })
    }
    static insertBulletList = editor => {
        Transforms.insertNodes(editor, {
            type: 'bullet-list',
            children: [
                {
                    type: 'list-item',
                    children: [{ text: 'list item' }]
                }
            ]
        })
    }
    static insertOrderedList = editor => {
        Transforms.insertNodes(editor, {
            type: 'ordered-list',
            children: [
                {
                    type: 'ordered-list-item',
                    children: [{ text: 'Ordered list item' }]
                }
            ]
        })
    }
    static insertCheckList = editor => {
        Transforms.insertNodes(editor, {
            type: 'check-list',
            children: [
                {
                    type: 'check-list-item',
                    children: [{ text: 'Check list item' }]
                }
            ]
        })
    }
    static insertBlockQuote = editor => {
        Transforms.insertNodes(editor, {
            type: 'blockquote',
            children: [{ text: 'Quote' }]
        })
    }
    static insertCode = editor => {
        Transforms.insertNodes(editor, {
            type: 'code',
            children: [{ text: '// code here' }]
        })
    }
    static insertLink = editor => {
        const url = prompt("Type Url");
        if (!url) alert("Url can't be empty");

        const t = prompt("Type Text");
        if (!t) alert("Link text can't be empty");

        Transforms.insertNodes(editor, {
            type: 'link-element',
            url,
            children: [{ text: t }]
        })
    }
}

export { ControlHandler as default }