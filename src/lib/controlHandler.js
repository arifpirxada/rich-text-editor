import { Transforms } from 'slate';

class ControlHandler {
    static insertBulletList = editor => {
        Transforms.insertNodes(editor, {
            type: 'bullet-list',
            children: [
                {
                    type: 'list-item',
                    children: [{ text: '' }]
                }
            ]
        })
    }
}

export { ControlHandler as default }