import { BulletList, ListItem } from './elements/BulletList'
import { DefaultElement } from './elements/DefaultElement'

const renderElement = props => {
    switch (props.element.type) {
        case 'bullet-list':
            return <BulletList { ...props } />
        case 'list-item':
            return <ListItem { ...props } />
        case 'ordered-list':
            return <BulletList ordered={ true} { ...props } />
        case 'ordered-list-item':
            return <ListItem { ...props } />
        default:
            return <DefaultElement { ...props } />
    }
}

export { renderElement };