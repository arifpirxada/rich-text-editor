const CheckList = props => {
    return (
        <ul className="pl-4" { ...props.attributes }>
            { props.children }
        </ul>
    )
}

const CheckListItem = props => {
    return (
        <li
            { ...props.attributes }
            style={ { textAlign: props.element.align || 'left' } }
        >
            <input type="checkbox" name={ props.id } checked={ props.checked } />
            <label htmlFor={ props.id }> { props.children }</label>
        </li>
    )
}

export { CheckList, CheckListItem }