import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component that acts as a container for the main navigation.
 * It renders the SidebarNav component.
 * The actual display logic (static on desktop, overlay on mobile) is controlled
 * by the parent AdminLayout component through CSS classes.
 */
const Sidebar: React.FC = () => {
  return (
    // The SidebarNav component is self-contained with its styling 
    // (e.g., bg-sidebar, h-full), so this wrapper can be simple.
    <SidebarNav />
  );
};

export default Sidebar;
