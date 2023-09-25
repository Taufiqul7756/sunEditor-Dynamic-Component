import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

function MyComponent(props) {
  const [contents, setContents] = useState(props.propsValue);

  const handleChange = useCallback(
    (content) => {
      setContents(content);
      props.valueChange(content);
    },
    [props]
  );

  return (
    <div>
      <SunEditor
        showToolbar={true}
        setContents={contents}
        onChange={handleChange}
        setOptions={{
          height: 82,
          buttonList: [
            ["undo", "redo"],
            [
              "fontSize",
              "formatBlock",
              ":p-More Paragraph-default.more_paragraph",
            ],
            ["paragraphStyle", "blockquote"],
            ["bold", "underline", "italic", "strike"],
            ["textStyle"],
            ["outdent", "indent", "link"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table"],
            ["fullScreen", "codeView"],
          ],
        }}
      />
    </div>
  );
}

export default MyComponent;
