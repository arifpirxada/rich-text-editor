import { Editor } from "slate";

const handleKeyDown = (event, editor) => {
    if (event.ctrlKey && event.key.toLowerCase() == 'b') {
        event.preventDefault();
        console.log("bold");
    } else if (event.ctrlKey && event.key.toLowerCase() == 'i') {
        event.preventDefault();
        console.log("italic");
    } else if (event.key == "Enter") {
        // For code block
        const [match] = Editor.nodes(editor, {
            match: (n) => n.type === "code",
        });

        if (match) {
            event.preventDefault();
            editor.insertText("\n");
            return;
        }
    } else if (event.key == "Tab") {
        // For code block
        const [match] = Editor.nodes(editor, {
            match: (n) => n.type === "code",
        });
        if (match) {
            event.preventDefault();
            editor.insertText("    ");
            return;
        }
    }
}

export { handleKeyDown as default };