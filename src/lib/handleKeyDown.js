const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() == 'b') {
        event.preventDefault();
        console.log("bold");
    } else if (event.ctrlKey && event.key.toLowerCase() == 'i') {
        event.preventDefault();
        console.log("italic");
    }
}

export { handleKeyDown as default };