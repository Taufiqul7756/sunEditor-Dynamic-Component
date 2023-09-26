import React from "react";
import SunEditor from "./sunEditor-FB";

const callSunEditor = () => {
  return (
    <div>
      <h1>SunEditor Dynamic Component - Reusable </h1>
      <SunEditor
        propsValue={discussionDetails}
        // propsValue={initialChatValue}
        valueChange={setDiscussionDetails}
      />
    </div>
  );
};

export default callSunEditor;
