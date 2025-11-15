import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">WDS Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <div className="p-4">Main Content Area</div>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Settings</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <div className="p-4">Footer Area</div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome to WDS Jobs</h1>
          <p>Your main content goes here.</p>
        </main>
      </AppSidebarClient>

    </SidebarProvider>
  )
}
