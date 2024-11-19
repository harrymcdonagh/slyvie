import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sylvie",
  description: "UEA Support chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <SidebarProvider>
        <body
          className={`
            ${geistSans.variable} 
            ${geistMono.variable} 
            antialiased 
            h-full 
            overflow-hidden 
            grid 
            grid-cols-[280px_1fr]
          `}
        >
          <AppSidebar />
          <main className="overflow-auto">{children}</main>
        </body>
      </SidebarProvider>
    </html>
  );
}
