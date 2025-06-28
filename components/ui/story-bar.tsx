'use client';

import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import users from '@/lib/generated-users.json';


export function StoryBar() {
  return (
    <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-md mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {/* Your Story */}
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600">
                <AvatarImage src="dri_avatar.jpg" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-black">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Your Story</span>
          </div>

          {/* Other Stories */}
          {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center gap-2 min-w-[70px]">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
                  <Avatar className="w-full h-full border-2 border-white dark:border-black">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center truncate w-full">
                {user.username}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}