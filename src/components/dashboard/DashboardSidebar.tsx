import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderPlus,
  FolderOpen,
  BookOpen,
  PenSquare,
  Menu,
  X,
  User,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function DashboardSidebar({
  user,
}: {
  user: { name: string; email: string };
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathName = usePathname();

  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      badge: null,
      href: "/dashboard",
    },
    {
      id: "add-project",
      icon: FolderPlus,
      label: "Add Project",
      badge: null,
      href: "/dashboard/add-project",
    },
    {
      id: "view-projects",
      icon: FolderOpen,
      label: "View Projects",
      badge: null,
      href: "/dashboard/view-projects",
    },
    {
      id: "add-blog",
      icon: PenSquare,
      label: "Add Blog",
      badge: null,
      href: "/dashboard/add-blog",
    },
    {
      id: "blogs",
      icon: BookOpen,
      label: "Blogs",
      badge: null,
      href: "/dashboard/blogs",
    },
  ];

  return (
    <div className="bg-background flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-card border-border text-foreground hover:bg-primary/10 fixed top-4 left-4 z-50 rounded-lg border p-2 transition-colors lg:hidden"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="bg-background/80 fixed inset-0 z-30 backdrop-blur-sm lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-sidebar border-sidebar-border fixed inset-y-0 left-0 z-40 w-72 transform border-r transition-transform duration-300 ease-in-out lg:static ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="border-sidebar-border border-b p-6">
          <div className="flex items-center gap-3">
            <div className="from-primary to-accent flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-sidebar-foreground text-lg font-bold">
                Portfolio
              </h1>
              <p className="text-sidebar-foreground/60 text-xs">
                Admin Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="border-sidebar-border border-b p-4">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="hover:bg-sidebar-accent group flex w-full items-center gap-3 rounded-lg p-3 transition-colors"
          >
            <div className="from-primary/20 to-accent/20 border-primary/30 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gradient-to-br">
              <User className="text-primary h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sidebar-foreground text-sm font-semibold">
                {user?.name}
              </p>
              <p className="text-sidebar-foreground/60 text-xs">
                {user?.email}
              </p>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 overflow-y-auto p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => {
                  setActiveLink(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`group relative flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                  pathName === item.href
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                } `}
              >
                {/* Active indicator */}
                {pathName === item.href && (
                  <div className="bg-primary absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-r-full"></div>
                )}

                <item.icon
                  className={`h-5 w-5 ${
                    pathName === item.href
                      ? "scale-110"
                      : "group-hover:scale-110"
                  } transition-transform`}
                />
                <span className="flex-1 text-left font-medium">
                  {item.label}
                </span>

                {/* Badge */}
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      activeLink === item.id
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    } `}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}
