import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Node } from "slate";

const Code = ({ element, children, language = "javascript", filename, attributes }) => {
  const [copied, setCopied] = useState(false);
  const codeExtracted = Node.string(element);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExtracted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div {...attributes} className="relative group m-4" spellCheck={false}>
      <div contentEditable={false} className="flex items-center justify-between bg-gray-800 text-gray-300 text-xs px-4 py-2 border border-gray-700 border-b-0 rounded-t-xl">
        <span className="font-mono">{filename || language}</span>
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded-md text-xs"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="relative rounded-b-xl overflow-hidden border border-gray-700 bg-[#1e1e1e]">
        
        <div contentEditable={false} aria-hidden className="absolute inset-0 pointer-events-none select-none">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers={true}
            customStyle={{ margin: 0, background: "transparent", height: "100%" }}
            codeTagProps={{ style: { fontFamily: "monospace", fontSize: "0.9rem" } }}
          >
            {codeExtracted || " "}
          </SyntaxHighlighter>
        </div>

        <div
          style={{
            position: "relative",
            fontFamily: "monospace",
            fontSize: "0.9rem",
            lineHeight: "inherit",
            padding: "1em 1em 1em 2.5em",
            color: "transparent",
            caretColor: "white",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            minHeight: "3em",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { Code };