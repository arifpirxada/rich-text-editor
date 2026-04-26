import { useState, useCallback } from "react";
import { ICON } from "../utils/icons";
import ControlHandler from "../lib/controlHandler";


const ToolbarButton = ({ icon: Icon, label, active, onClick, disabled }) => (
    <button
        type="button"
        aria-label={ label }
        aria-pressed={ active }
        disabled={ disabled }
        onClick={ onClick }
        title={ label }
        className={ [
            "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-100",
            active
                ? "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-200 dark:hover:border-neutral-700",
            disabled && "opacity-30 pointer-events-none",
        ]
            .filter(Boolean)
            .join(" ") }
    >
        <Icon />
    </button>
);

const Divider = () => (
    <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-700 mx-1 shrink-0" />
);

const Controls = ({ editor }) => {
    const [activeFormats, setActiveFormats] = useState(new Set());
    const [blockType, setBlockType] = useState("paragraph");

    const toggle = useCallback(
        (format) => {
            setActiveFormats((prev) => {
                const next = new Set(prev);
                next.has(format) ? next.delete(format) : next.add(format);
                return next;
            });
        },
        []
    );

    const handleBlockType = (e) => {
        setBlockType(e.target.value);

        switch (e.target.value) {
            case 'paragraph':
                ControlHandler.insertParagraph(editor);
                break;
            case 'h1':
                ControlHandler.insertHeading(editor, 1);
                break;
            case 'h2':
                ControlHandler.insertHeading(editor, 2);
                break;
            case 'h3':
                ControlHandler.insertHeading(editor, 3);
                break;
            default:
                break;
        }
    }

    const isActive = (format) => activeFormats.has(format);

    return (
        <div
            role="toolbar"
            aria-label="Text formatting"
            className="flex mb-4 flex-wrap items-center gap-1 p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl"
        >
            {/* Block type */ }
            <select
                value={ blockType }
                onChange={ handleBlockType }
                className="h-8 text-[13px] px-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 cursor-pointer"
            >
                <option value="paragraph">Paragraph</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
            </select>

            <Divider />

            {/* Inline formatting */ }
            <ToolbarButton icon={ ICON.Bold } label="Bold" active={ isActive("bold") } onClick={ () => toggle("bold") } />
            <ToolbarButton icon={ ICON.Italic } label="Italic" active={ isActive("italic") } onClick={ () => toggle("italic") } />
            <ToolbarButton icon={ ICON.Underline } label="Underline" active={ isActive("underline") } onClick={ () => toggle("underline") } />
            <ToolbarButton icon={ ICON.Strikethrough } label="Strikethrough" active={ isActive("strikethrough") } onClick={ () => toggle("strikethrough") } />

            <Divider />

            {/* Lists */ }
            <ToolbarButton icon={ ICON.BulletList } label="Bullet list" onClick={ () => { ControlHandler.insertBulletList(editor) } } />
            <ToolbarButton icon={ ICON.NumberList } label="Numbered list" onClick={ () => { ControlHandler.insertOrderedList(editor) } } />
            <ToolbarButton icon={ ICON.Checklist } label="Checklist" onClick={ () => { ControlHandler.insertCheckList(editor) } } />

            <Divider />

            {/* Alignment */ }
            <ToolbarButton icon={ ICON.AlignLeft } label="Align left" active={ isActive("left") } onClick={ () => toggle("left") } />
            <ToolbarButton icon={ ICON.AlignCenter } label="Align center" active={ isActive("center") } onClick={ () => toggle("center") } />
            <ToolbarButton icon={ ICON.AlignRight } label="Align right" active={ isActive("right") } onClick={ () => toggle("right") } />

            <Divider />

            {/* Blocks */ }
            <ToolbarButton icon={ ICON.Blockquote } label="Blockquote" active={ isActive("blockquote") } onClick={ () => ControlHandler.insertBlockQuote(editor) } />
            <ToolbarButton icon={ ICON.Code } label="Code block" active={ isActive("code") } onClick={ () => ControlHandler.insertCode(editor) } />

            {/* Insert */ }
            <ToolbarButton icon={ ICON.Link } label="Insert link" active={ false } onClick={ () => ControlHandler.insertLink(editor) } />

            <Divider />

            {/* History */ }
            <ToolbarButton icon={ ICON.Undo } label="Undo" active={ false } onClick={ (e) => { e.preventDefault(); editor.undo(); } } />
            <ToolbarButton icon={ ICON.Redo } label="Redo" active={ false } onClick={ (e) => { e.preventDefault(); editor.redo(); } } />
        </div>
    );
};

export { Controls };