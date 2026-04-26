const Heading = (props) => {
    return (
        <h1 className="text-3xl" style={ { textAlign: props.element.align || 'left' } } { ...props.attributes }>{ props.children }</h1>
    )
}

const Heading2 = (props) => {
    return (
        <h2 className="text-2xl" style={ { textAlign: props.element.align || 'left' } } { ...props.attributes }>{ props.children }</h2>
    )
}

const Heading3 = (props) => {
    return (
        <h3 className="text-xl" style={ { textAlign: props.element.align || 'left' } } { ...props.attributes }>{ props.children }</h3>
    )
}

export { Heading, Heading2, Heading3 }