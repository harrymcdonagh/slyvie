import React from "react";
import ChatWindow from "./ChatWindow";

const ChatContainer = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[calc(100vh-1rem)]">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatContainer;
