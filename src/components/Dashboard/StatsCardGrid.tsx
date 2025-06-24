import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DollarSign, ShoppingBag, Users, Wallet, ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardData {
  id: number;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  description: string;
  icon: React.ElementType;
  iconBgColor: string;
}

const statsData: StatCardData[] = [
  {
    id: 1,
    title: 'Total Earnings',
    value: '$559.25k',
    change: 16.24,
    changeType: 'increase' as const,
    description: 'View net earnings',
    icon: DollarSign,
    iconBgColor: 'bg-green-100 dark:bg-green-900/50',
  },
  {
    id: 2,
    title: 'Orders',
    value: '36,894',
    change: 3.57,
    changeType: 'decrease' as const,
    description: 'View all orders',
    icon: ShoppingBag,
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    id: 3,
    title: 'Customers',
    value: '183.35M',
    change: 29.08,
    changeType: 'increase' as const,
    description: 'See details',
    icon: Users,
    iconBgColor: 'bg-yellow-100 dark:bg-yellow-900/50',
  },
  {
    id: 4,
    title: 'My Balance',
    value: '$165.89k',
    change: 0.00,
    changeType: 'increase' as const,
    description: 'Withdraw money',
    icon: Wallet,
    iconBgColor: 'bg-gray-100 dark:bg-gray-700',
  },
];

const StatCard: React.FC<StatCardData> = ({ title, value, change, changeType, description, icon: Icon, iconBgColor }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-success' : 'text-destructive';
  const ChangeIcon = isIncrease ? ArrowUp : ArrowDown;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
          </div>
          <div className={cn('flex h-12 w-12 items-center justify-center rounded-full', iconBgColor)}>
            <Icon className="h-6 w-6 text-foreground" />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-1 text-sm">
          <span className={cn('flex items-center', changeColor)}>
            {change > 0 && <ChangeIcon className="mr-1 h-4 w-4" />}
            {change.toFixed(2)}%
          </span>
          <span className="text-muted-foreground">vs. previous month</span>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
