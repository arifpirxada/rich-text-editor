const Heading = (props) => {
    return (
        <h1 className="text-3xl" { ...props.attributes }>{ props.children }</h1>
    )
}

const Heading2 = (props) => {
    return (
        <h1 className="text-2xl" { ...props.attributes }>{ props.children }</h1>
    )
}

const Heading3 = (props) => {
    return (
        <h1 className="text-xl" { ...props.attributes }>{ props.children }</h1>
    )
}

export { Heading, Heading2, Heading3 }