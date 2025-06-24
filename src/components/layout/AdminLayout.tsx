'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Static sidebar for desktop, hidden on mobile */}
      <aside className="hidden w-64 flex-shrink-0 lg:block">
        <Sidebar />
      </aside>

      {/* Mobile sidebar as a dismissible overlay */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", isSidebarOpen ? "block" : "hidden")}>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black/60" 
          aria-hidden="true"
          onClick={toggleSidebar}
        />
        {/* Sidebar content */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 w-64 transform transition-transform duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar />
        </aside>
      </div>

      {/* Main content area */}
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <header className="flex-shrink-0">
          <Header onToggleSidebar={toggleSidebar} />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
