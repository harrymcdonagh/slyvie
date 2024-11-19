import {
  Calendar,
  Cat,
  Home,
  Inbox,
  Search,
  Settings,
  MessageCircle,
  PlusCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// Placeholder chat history
const chatHistory = [
  { id: 1, title: "Project Discussion", lastMessage: "Let's schedule a meeting..." },
  { id: 2, title: "Team Standup", lastMessage: "Updates on the new feature..." },
  { id: 3, title: "Client Feedback", lastMessage: "The client loved the design..." },
  { id: 4, title: "Bug Report", lastMessage: "We've identified the issue..." },
  { id: 5, title: "Brainstorming Session", lastMessage: "Great ideas for the upcoming..." },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full">
            <Cat className="h-6 w-6 text-amber-600" />
          </div>
          <h1 className="text-2xl font-bold">Sylvie</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <Button className="w-full mb-4" variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-2">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-2">
            Conversation History
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton asChild>
                    <a
                      href="#"
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      <MessageCircle className="h-5 w-5 text-gray-500" />
                      <div className="flex-1 overflow-hidden">
                        <span className="text-sm font-medium block truncate">{chat.title}</span>
                        <span className="text-xs text-gray-500 block truncate">
                          {chat.lastMessage}
                        </span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
