"use client";
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
        <div className="px-4 py-3 flex justify-center items-center">
          <div className="flex items-center">
            <div className="p-2">
              <Cat className="text-orange-500 w-6 h-6" strokeWidth={2} />
            </div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Sylvie</h1>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Button variant="ghost" className="mx-2">
          <PlusIcon className="h-4 w-4" />
          New Chat
        </Button>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* <SidebarMenu className="py-3">
              <Button variant="ghost" className="mx-2 border">
              Login
              </Button>
              <Button className="mx-2 border border-orange-400">Register</Button>
            </SidebarMenu> */}
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
