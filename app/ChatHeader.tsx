import React from "react";
import { Cat } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="text-white p-4 rounded-t-lg flex items-center space-x-2 border-b-2">
      <Cat className="h-6 w-6" />
      <h1 className="text-xl font-semibold">New Chat</h1>
    </div>
  );
};

export default ChatHeader;
