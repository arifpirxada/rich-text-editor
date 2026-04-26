const Blockquote = props => {
    const { element, attributes, children } = props;
    return (
        <div
            { ...attributes }
            style={ { textAlign: element.align || 'left' } }
            className="p-4 rounded m-4 bg-gray-200"
        >
            { children }
        </div>
    )
}

export { Blockquote }