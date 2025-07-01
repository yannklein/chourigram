'use client';

import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import users from '@/lib/generated-users.json';
import { AvatarVideo } from './avatar-video';

export function StoryBar() {
  return (
    <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-md mx-auto pl-4 pt-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
              Your Story
            </span>
          </div>

          {/* Other Stories */}
          {users.filter(u => u.videoThumbnail).map((user) => (
            <AvatarVideo key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
