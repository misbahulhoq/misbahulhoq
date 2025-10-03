import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderPlus,
  FolderOpen,
  BookOpen,
  PenSquare,
  LogOut,
  Menu,
  X,
  User,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function DashboardSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

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
      badge: "12",
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
      badge: "8",
      href: "/dashboard/blogs",
    },
  ];

  const bottomMenuItems = [{ id: "logout", icon: LogOut, label: "Logout" }];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg text-foreground hover:bg-primary/10 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">
                Portfolio
              </h1>
              <p className="text-xs text-sidebar-foreground/60">
                Admin Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-sidebar-border">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent transition-colors group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/30">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-sidebar-foreground">
                John Doe
              </p>
              <p className="text-xs text-sidebar-foreground/60">
                john@example.com
              </p>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => {
                  setActiveLink(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 group relative
                  ${
                    pathName === item.href
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }
                `}
              >
                {/* Active indicator */}
                {pathName === item.href && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"></div>
                )}

                <item.icon
                  className={`w-5 h-5 ${
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
                    className={`
                    px-2 py-0.5 text-xs font-semibold rounded-full
                    ${
                      activeLink === item.id
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }
                  `}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-sidebar-border space-y-1">
          {bottomMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveLink(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200 group
                ${
                  activeLink === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }
              `}
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="flex-1 text-left font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
