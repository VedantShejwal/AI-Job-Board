//import { AsyncIf } from "@/components/AsyncIf"
import { AppSidebar } from "@/components/sidebar/AppSidebarClient"
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { SidebarOrganizationButton } from "@/features/organizations/component/side-bar-organization-button"
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
//import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
import { ClipboardListIcon, PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import { ReactNode, Suspense } from "react"


export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <LayoutSuspense>{children}</LayoutSuspense>
    </Suspense>
  )
}

async function LayoutSuspense({ children }: { children: ReactNode }) {
  const { orgId } = await getCurrentOrganization()
  if (orgId == null) return redirect("/organizations/select")

  return (
    <AppSidebar
      content={
        <>
          <SidebarGroup>
            <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
            {/* <AsyncIf
              condition={() => hasOrgUserPermission("org:job_listings:create")}
            >
              <SidebarGroupAction title="Add Job Listing" asChild>
                <Link href="/employer/job-listings/new">
                  <PlusIcon /> <span className="sr-only">Add Job Listing</span>
                </Link>
              </SidebarGroupAction>
            </AsyncIf> */}
            <SidebarGroupContent className="group-data-[state=collapsed]:hidden">
              <Suspense>
                {/* <JobListingMenu orgId={orgId} /> */}
              </Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarNavMenuGroup
            className="mt-auto"
            items={[
              { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
            ]}
          />
        </>
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  )
}

