const DefaultElement = props => (
    <p { ...props.attributes } style={ { textAlign: props.element.align || 'left' } }>{ props.children }</p>
)

export { DefaultElement }