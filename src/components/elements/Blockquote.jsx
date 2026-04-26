const Blockquote = props => {
    return (
        <p className="p-4 rounded m-4 bg-gray-200" { ...props.attributes }>
            { props.children }
        </p>
    )
}

export { Blockquote }