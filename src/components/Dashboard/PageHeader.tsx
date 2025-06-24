import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, Download } from 'lucide-react';

const PageHeader: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Good Morning, Anna!</h1>
        <p className="text-muted-foreground">Here's what's happening with your store today.</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" className="bg-card">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>Jan 01, 2023 - Jan 31, 2023</span>
        </Button>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          <span>Download Report</span>
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
