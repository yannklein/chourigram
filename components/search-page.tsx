'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import users from '@/lib/generated-users.json';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('top');

  const filteredUsers = users.filter(user =>
    user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen">
      {/* Search Header */}
      <div className="sticky top-16 bg-white dark:bg-black z-30 border-b border-gray-100 dark:border-gray-800">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-gray-100 dark:bg-gray-900 border-0 focus-visible:ring-1 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="flex border-b border-gray-100 dark:border-gray-800">
            {['top', 'accounts', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-medium capitalize ${
                  activeTab === tab
                    ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="pb-20">
        {!searchQuery ? (
          // Explore Grid when no search
          <div className="p-1">
            <div className="grid grid-cols-3 gap-1">
              {users.filter( u => u.videoThumbnail ).map((user, index) => (
                <div key={`${user.id}-${index}`} className="aspect-square bg-gray-100 dark:bg-gray-900 relative">
                  <Image
                    src={user.videoThumbnail || ""}
                    alt=""
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Search Results
          <div>
            {(activeTab === 'top' || activeTab === 'accounts') && filteredUsers.length > 0 && (
              <div className="border-b border-gray-100 dark:border-gray-800">
                <h3 className="px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Accounts</h3>
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-gray-900 dark:text-white">{user.username}</span>
                        {user.isVerified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{user.displayName}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{user.followers.toLocaleString()} followers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {(activeTab === 'top' || activeTab === 'videos') && filteredUsers.length > 0 && (
              <div>
                <h3 className="px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Videos</h3>
                <div className="grid grid-cols-3 gap-1 px-1">
                  {filteredUsers.filter( u => u.videoThumbnail).map((user) => (
                    <div key={user.id} className="aspect-square bg-gray-100 dark:bg-gray-900 relative">
                      <Image
                        src={user.videoThumbnail || ""}
                        alt=""
                        fill
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredUsers.length === 0 && searchQuery && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Try searching for something else</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}