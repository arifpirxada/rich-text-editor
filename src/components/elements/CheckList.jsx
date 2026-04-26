const CheckList = props => {
    return (
        <ul className="pl-4" { ...props.attributes }>
            { props.children }
        </ul>
    )
}

const CheckListItem = props => {
    return (
        <li { ...props.attributes }>
            <input type="checkbox" name={ props.id } checked={ props.checked } />
            <label htmlFor={ props.id }> { props.children }</label>
        </li>
    )
}

export { CheckList, CheckListItem }