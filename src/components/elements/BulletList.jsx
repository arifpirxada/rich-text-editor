const BulletList = props => {
    return (
        <ul className={ `${props.ordered ? 'list-decimal' : 'list-disc'} pl-8` } { ...props.attributes }>
            { props.children }
        </ul>
    )
}

const ListItem = props => {
    return (
        <li { ...props.attributes }>{ props.children }</li>
    )
}

export { BulletList, ListItem }