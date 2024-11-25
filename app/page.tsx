import React from "react";
import ChatContainer from "./ChatContainer";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="w-full max-w-7xl">
        <ChatContainer />
      </div>
    </div>
  );
}
