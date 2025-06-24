import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  ShoppingCart,
  Calendar,
  Mail,
  BarChart3,
  FileText,
  Users,
  Component,
  Map,
  ChevronDown,
  BadgeInfo,
} from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  isNew?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: 'Dashboards',
    icon: LayoutDashboard,
    href: '#',
    children: [
      { label: 'Analytics', href: '#', icon: BarChart3 },
      { label: 'CRM', href: '#', icon: Users },
      { label: 'Ecommerce', href: '#', icon: ShoppingCart },
    ],
  },
  {
    label: 'Apps',
    icon: Component,
    href: '#',
    children: [
      { label: 'Calendar', href: '#', icon: Calendar, badge: '5' },
      { label: 'Chat', href: '#', icon: Mail },
      { label: 'File Manager', href: '#', icon: FileText },
    ],
  },
  {
    label: 'Authentication',
    icon: Users,
    href: '#',
  },
  {
    label: 'Pages',
    icon: FileText,
    href: '#',
  },
  {
    label: 'Landing',
    icon: Map,
    href: '#',
  },
];

const SidebarNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Analytics');

  const renderNavItem = (item: NavItem, isSubItem = false) => {
    const Icon = item.icon;
    const isActive = activeLink === item.label;

    if (item.children) {
      return (
        <AccordionItem value={item.label} className="border-b-0">
          <AccordionTrigger
            className={cn(
              'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/70 hover:bg-white/10 hover:text-sidebar-foreground',
              ' [&[data-state=open]>svg]:rotate-180'
            )}
          >
            <div className="flex items-center">
              <Icon className="mr-3 h-4 w-4" />
              <span>{item.label}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-0 pl-6">
            <div className="flex flex-col space-y-1 py-1">
              {item.children.map((child) => renderNavItem(child, true))}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <Button
        key={item.label}
        variant="ghost"
        onClick={() => setActiveLink(item.label)}
        className={cn(
          'w-full justify-start px-3 py-2 text-sidebar-foreground/70 hover:bg-white/10 hover:text-sidebar-foreground',
          isActive && 'bg-primary/90 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
          isSubItem && 'pl-5'
        )}
      >
        <Icon className="mr-3 h-4 w-4" />
        <span className="flex-grow text-left">{item.label}</span>
        {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
        {item.isNew && (
          <Badge variant="destructive" className="ml-2">
            New
          </Badge>
        )}
      </Button>
    );
  };

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center px-6">
        <BadgeInfo className="h-8 w-8 text-primary" />
        <h1 className="ml-2 text-2xl font-bold text-white">Velzon</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="mb-2 px-3 text-xs font-semibold uppercase text-sidebar-foreground/50">Menu</h2>
        <Accordion type="multiple" className="w-full space-y-1">
          {navItems.map((item) => renderNavItem(item))}
        </Accordion>
      </div>
      <div className="p-4">
        <div className="rounded-lg bg-primary/10 p-4 text-center text-sidebar-foreground">
          <h4 className="mb-2 font-semibold">Unlimited Access</h4>
          <p className="mb-4 text-sm text-sidebar-foreground/70">Upgrade your plan to get access to all features.</p>
          <Button size="sm" className="w-full bg-primary/90 text-primary-foreground hover:bg-primary">Upgrade</Button>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
