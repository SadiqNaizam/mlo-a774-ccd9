import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Download, Globe } from 'lucide-react';

interface CountrySalesData {
  id: number;
  name: string;
  sales: number;
  change: number;
  flagCode: string;
}

const salesByCountry: CountrySalesData[] = [
  {
    id: 1,
    name: 'United States',
    sales: 2500,
    change: 2.5,
    flagCode: 'us',
  },
  {
    id: 2,
    name: 'Brazil',
    sales: 1900,
    change: 1.2,
    flagCode: 'br',
  },
  {
    id: 3,
    name: 'Russia',
    sales: 1100,
    change: -0.5,
    flagCode: 'ru',
  },
  {
    id: 4,
    name: 'India',
    sales: 3200,
    change: 3.8,
    flagCode: 'in',
  },
   {
    id: 5,
    name: 'Canada',
    sales: 1500,
    change: 1.0,
    flagCode: 'ca',
  },
];

const SalesMap: React.FC = () => {
  const totalSales = salesByCountry.reduce((acc, country) => acc + country.sales, 0);

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sales by Locations</CardTitle>
          <CardDescription>Top sales by country</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex h-56 w-full items-center justify-center rounded-md bg-accent/50 mb-6">
          <Globe className="h-32 w-32 text-muted-foreground/30" />
        </div>
        <div className="space-y-4">
          {salesByCountry.map((country) => {
            const percentage = (country.sales / totalSales) * 100;
            return (
              <div key={country.id} className="flex items-center">
                <Avatar className="h-8 w-8 mr-4">
                    <AvatarImage src={`https://flagcdn.com/w40/${country.flagCode}.png`} alt={country.name} />
                    <AvatarFallback>{country.flagCode.toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{country.name}</span>
                    <span className="text-muted-foreground">{country.sales}</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesMap;
