import React from 'react';

// Layout Component
import AdminLayout from '@/components/layout/AdminLayout';

// Dashboard Components
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import RevenueChart from '@/components/Dashboard/RevenueChart';
import SalesMap from '@/components/Dashboard/SalesMap';

/**
 * The main index page for the application, serving as the dashboard overview.
 * It utilizes AdminLayout to provide the common sidebar and header structure,
 * and composes the primary dashboard widgets like PageHeader, StatsCardGrid,
 * RevenueChart, and SalesMap in the main content area.
 */
const IndexPage: React.FC = () => {
  return (
    <AdminLayout>
      {/* 1. Page Header: Displays greetings and primary actions */}
      <PageHeader />

      {/* 2. Statistics Cards Grid: Shows key performance indicators.
           It is spaced correctly due to the margin-bottom on the PageHeader component. */}
      <StatsCardGrid />

      {/* 
        3. Charts and Maps Section
        - A container with `mt-6` to create vertical space below the stats grid.
        - Uses a 5-column grid on large screens (`lg:grid-cols-5`) to correctly place the
          RevenueChart (which takes `lg:col-span-3`) and SalesMap (which takes `lg:col-span-2`)
          side-by-side as per their internal styling.
        - `gap-6` ensures consistent spacing between grid items.
      */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <RevenueChart />
        <SalesMap />
      </div>
    </AdminLayout>
  );
};

export default IndexPage;
