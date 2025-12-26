
export type Category = 'Opinion' | 'Latest' | 'Technology' | 'Management' | 'Society' | 'Culture' | 'Video';

export interface Reporter {
  id: string;
  name: string;
  image: string;
  bio: string;
}

export interface Article {
  id: string;
  title: string;
  category: Category;
  content: string;
  imageUrl: string;
  publishDate: string;
  updateDate: string;
  reporterId: string;
  isFeatured?: boolean;
}

export interface VideoItem {
  id: string;
  youtubeUrl: string;
  title: string;
  thumbnailType: 'default' | 'text';
  thumbnailText?: string;
  thumbnailImageUrl?: string;
}

export interface AdConfig {
  id: string;
  type: 'floating' | 'banner';
  imageUrl: string;
  linkUrl: string;
  width: string;
  height: string;
  isActive: boolean;
}

export interface ReportData {
  name: string;
  email: string;
  phone: string;
  title: string;
  contents: string;
  file?: File;
}
