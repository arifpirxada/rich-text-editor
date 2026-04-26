const LinkElement = (props) => {
    const handleMouseDown = (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.open(props.element.url, '_blank');
        }
    };

    return (
        <a href={ props.element.url } { ...props.attributes }
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
            onMouseDown={ handleMouseDown }
        >
            { props.children }
        </a>
    )
}

export { LinkElement }