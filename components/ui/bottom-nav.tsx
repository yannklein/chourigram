'use client';

import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'activity', icon: Heart, label: 'Activity' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="max-w-md mx-auto fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-md mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {tabs.map(({ id, icon: Icon, label }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center gap-1 p-2 h-auto min-h-[48px] ${
                activeTab === id
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Icon className={`w-6 h-6 ${activeTab === id ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}