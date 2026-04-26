const BulletList = props => {
    return (
        <ul
            className={ `${props.ordered ? 'list-decimal' : 'list-disc'} list-inside pl-8` }
            { ...props.attributes }>
            { props.children }
        </ul>
    )
}

const ListItem = props => {
    return (
        <li
            { ...props.attributes }
            style={ { textAlign: props.element.align || 'left' } }
        >
            { props.children }
        </li>
    )
}

export { BulletList, ListItem }