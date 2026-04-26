import { Editor } from "slate";
import ControlHandler from "./controlHandler";

const handleKeyDown = (event, editor) => {
    if (event.ctrlKey && event.key.toLowerCase() == '/') {
        event.preventDefault();
        const shortcuts = [
            "Ctrl + /             View shortcuts",
            "Ctrl + B             Bold",
            "Ctrl + I             Italic",
            "Ctrl + U             Underline",
            "Ctrl + Z             Undo",
            "Ctrl + Shift + Z     Redo",
            "Ctrl + Y             Redo",
            "Tab                  Indent (in code block)",
            "Enter                New line (in code block)",
        ].join("\n");
        alert(shortcuts);

    } else if (event.ctrlKey && event.key.toLowerCase() == 'b') {
        event.preventDefault();
        ControlHandler.toggleMark(editor, 'bold');
    } else if (event.ctrlKey && event.key.toLowerCase() == 'i') {
        event.preventDefault();
        ControlHandler.toggleMark(editor, 'italic');
    } else if (event.ctrlKey && event.key.toLowerCase() == 'u') {
        event.preventDefault();
        ControlHandler.toggleMark(editor, 'underline');
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
    } else if ((event.ctrlKey || event.metaKey) && event.key == 'z') {
        event.preventDefault();
        if (event.shiftKey) {
            editor.redo();
        } else {
            editor.undo();
        }
    } else if ((event.ctrlKey || event.metaKey) && event.key == 'y') {
        event.preventDefault();
        editor.redo();
    }
}

export { handleKeyDown as default };