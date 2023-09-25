import React, { Component } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

class MyComponent extends Component {
  render() {
    return (
      <div>
        <SunEditor
          showToolbar={true}
          setContents={this.props.propsValue}
          onChange={this.props.valueChange}
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
}
MyComponent.propTypes = {};
export default MyComponent;
