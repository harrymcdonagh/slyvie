import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  Cat,
  User,
  Calendar,
  Settings,
  MessageCircle,
  ChevronDown,
  PlusIcon,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./button";

const items = [
  {
    title: "Account",
    url: "/account",
    icon: User,
  },
  {
    title: "Timetable",
    url: "/timetable",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const chats = [
  {
    title: "Where is Lecture Theatre 1?",
    url: "#",
  },
  {
    title: "Best place to eat in Norwich",
    url: "#",
  },
  {
    title: "How to get to the library",
    url: "#",
  },
  {
    title: "Sportspark!",
    url: "#",
  },
  {
    title: "Group project discussion",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Cat className="text-orange-400" />
            <h1 className="text-lg font-semibold text-foreground ml-2">Sylvie</h1>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Button variant="ghost" className="mx-2">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Chat
        </Button>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Recent Conversations
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {chats.map((chat) => (
                    <SidebarMenuItem key={chat.title}>
                      <SidebarMenuButton asChild>
                        <a href={chat.url}>
                          <MessageCircle />
                          <span>{chat.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
