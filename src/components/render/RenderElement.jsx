import { Blockquote } from '../elements/Blockquote'
import { BulletList, ListItem } from '../elements/BulletList'
import { CheckList, CheckListItem } from '../elements/CheckList'
import { Code } from '../elements/Code'
import { DefaultElement } from '../elements/DefaultElement'
import { Heading, Heading2, Heading3 } from '../elements/Headings'
import { LinkElement } from '../elements/LinkElement'

const renderElement = props => {
    switch (props.element.type) {
        case 'heading':
            return <Heading { ...props } />
        case 'heading-2':
            return <Heading2 { ...props } />
        case 'heading-3':
            return <Heading3 { ...props } />
        case 'bullet-list':
            return <BulletList { ...props } />
        case 'list-item':
            return <ListItem { ...props } />
        case 'ordered-list':
            return <BulletList ordered={ true} { ...props } />
        case 'ordered-list-item':
            return <ListItem { ...props } />
        case 'check-list':
            return <CheckList { ...props } />
        case 'check-list-item':
            return <CheckListItem { ...props } />
        case 'blockquote':
            return <Blockquote { ...props } />
        case 'code':
            return <Code { ...props } />
        case 'link-element':
            return <LinkElement { ...props } />
        default:
            return <DefaultElement { ...props } />
    }
}

export { renderElement };