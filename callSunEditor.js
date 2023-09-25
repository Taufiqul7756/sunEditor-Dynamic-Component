import React from "react";
import SunEditor from "./sunEditor-FB";

const callSunEditor = () => {
  return (
    <div>
      <SunEditor
        propsValue={discussionDetails}
        // propsValue={initialChatValue}
        valueChange={setDiscussionDetails}
      />
    </div>
  );
};

export default callSunEditor;
