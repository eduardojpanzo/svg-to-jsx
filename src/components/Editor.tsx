import React from "react";
import { UnControlled as CodeEditor } from "react-codemirror2";

import debounce from "../utils";

type Props = {
  readOnly?: boolean;
  defaultValue?: string;
  name: string;
  type: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export function Editor({
  name,
  type,
  defaultValue,
  readOnly,
  setValue,
}: Props) {
  const onChange = (editor: any, data: any, value: string) => {
    setValue(value);
  };

  return (
    <div className="flex flex-col flex-1 ">
      <p className="text-white uppercase text-xs font-bold bg-[#282a36] px-4 py-2 tracking-wide">
        {name}
      </p>

      <CodeEditor
        autoScroll
        className="xml-editor"
        value={defaultValue}
        options={{
          mode: type === "editor" ? "xml" : "javascript",
          theme: "dracula",
          lineNumbers: true,
          readOnly: readOnly,
          indentUnit: 2,
          tabSize: 2,
          styleActiveLine: true,
          lineWrapping: true,
          smartIndent: true,
          foldGutter: true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          autoCloseTags: true,
          keyMap: "sublime",
          matchBrackets: true,
          autoCloseBrackets: true,
          viewportMargin: Infinity,
        }}
        onChange={type === "editor" ? debounce(onChange, 500) : null}
      />
    </div>
  );
}
