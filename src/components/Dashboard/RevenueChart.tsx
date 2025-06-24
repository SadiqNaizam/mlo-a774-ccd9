import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: 'Jan', revenue: 4500, orders: 2400 },
  { name: 'Feb', revenue: 2800, orders: 1398 },
  { name: 'Mar', revenue: 9800, orders: 5200 },
  { name: 'Apr', revenue: 3908, orders: 4800 },
  { name: 'May', revenue: 4800, orders: 3900 },
  { name: 'Jun', revenue: 3800, orders: 4300 },
  { name: 'Jul', revenue: 4300, orders: 2100 },
  { name: 'Aug', revenue: 5100, orders: 3200 },
  { name: 'Sep', revenue: 6200, orders: 2800 },
  { name: 'Oct', revenue: 7300, orders: 4100 },
  { name: 'Nov', revenue: 5500, orders: 3500 },
  { name: 'Dec', revenue: 8100, orders: 4900 },
];

type FilterType = 'ALL' | '1M' | '6M' | '1Y';

const RevenueChart: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('1Y');

  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>(+43%) more than last year</CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary p-1">
            {(['ALL', '1M', '6M', '1Y'] as FilterType[]).map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={cn('px-3 py-1 text-xs', activeFilter === filter && 'bg-primary text-primary-foreground shadow-sm')}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pl-2 pr-6">
        <div className="grid grid-cols-2 gap-4 pb-6 md:grid-cols-4">
            <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground">Orders</p>
                <p className="text-lg font-bold">5,643</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm text-muted-foreground">Earnings</p>
                <p className="text-lg font-bold">$7,843</p>
            </div>
             <div className="border-l-4 border-destructive pl-4">
                <p className="text-sm text-muted-foreground">Refunds</p>
                <p className="text-lg font-bold">$1,234</p>
            </div>
             <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-muted-foreground">Conversation Ratio</p>
                <p className="text-lg font-bold">18.92%</p>
            </div>
        </div>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                    <Tooltip 
                        cursor={{ fill: 'hsl(var(--accent))', radius: 4 }}
                        contentStyle={{ 
                            background: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: 'var(--radius)'
                        }}
                    />
                    <Legend iconType="circle" iconSize={8} />
                    <Bar dataKey="orders" name="Orders" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="revenue" name="Revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
