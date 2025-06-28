export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isVerified: boolean;
  followers: number;
  following: number;
}

export interface Video {
  id: string;
  user: User;
  videoUrl: string;
  thumbnail: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  createdAt: string;
  duration: number;
}

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'alice_creates',
    displayName: 'Alice Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 145200,
    following: 892
  },
  {
    id: '2',
    username: 'mike_adventures',
    displayName: 'Mike Chen',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: false,
    followers: 89400,
    following: 1205
  },
  {
    id: '3',
    username: 'sarah_fitness',
    displayName: 'Sarah Miller',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 267800,
    following: 445
  },
  {
    id: '4',
    username: 'david_cooking',
    displayName: 'David Rodriguez',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: false,
    followers: 56300,
    following: 789
  },
  {
    id: '5',
    username: 'emma_travel',
    displayName: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 198700,
    following: 623
  }
];

export const mockVideos: Video[] = [
  {
    id: '1',
    user: mockUsers[0],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: 'Creating magic with everyday objects ✨ What do you think of this transformation? #diy #creative #art',
    likes: 12450,
    comments: 284,
    shares: 89,
    isLiked: false,
    createdAt: '2024-01-20T10:30:00Z',
    duration: 30
  },
  {
    id: '2',
    user: mockUsers[1],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_2mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: 'Epic mountain hiking adventure! The view from the top was absolutely breathtaking 🏔️ #hiking #adventure #nature',
    likes: 8765,
    comments: 156,
    shares: 67,
    isLiked: true,
    createdAt: '2024-01-19T15:45:00Z',
    duration: 45
  },
  {
    id: '3',
    user: mockUsers[2],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: '30-minute HIIT workout that will change your life! 💪 Who\'s ready to sweat with me? #fitness #workout #health',
    likes: 15230,
    comments: 432,
    shares: 156,
    isLiked: false,
    createdAt: '2024-01-18T08:20:00Z',
    duration: 60
  },
  {
    id: '4',
    user: mockUsers[3],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_2mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: 'Secret recipe for the perfect chocolate cake! 🍰 Tag someone who needs to try this #cooking #recipe #chocolate',
    likes: 9876,
    comments: 298,
    shares: 123,
    isLiked: true,
    createdAt: '2024-01-17T14:10:00Z',
    duration: 90
  },
  {
    id: '5',
    user: mockUsers[4],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: 'Hidden gem in Tokyo! This place is absolutely magical at sunset 🌅 #travel #tokyo #sunset #hidden',
    likes: 18943,
    comments: 567,
    shares: 234,
    isLiked: false,
    createdAt: '2024-01-16T19:30:00Z',
    duration: 40
  },
  {
    id: '6',
    user: mockUsers[0],
    videoUrl: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_2mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2',
    caption: 'DIY room makeover on a budget! Total cost: $50 💸 Which before/after do you prefer? #diy #roomdecor #budget',
    likes: 7654,
    comments: 189,
    shares: 78,
    isLiked: true,
    createdAt: '2024-01-15T12:15:00Z',
    duration: 75
  }
];