export interface CoHostItem {
  id: string;
  name: string;
  avatarType: 'image' | 'initial';
  avatarSrc?: string;
  initial?: string;
  initialBg?: string;
  initialColor?: string;
}

export interface HostInfoData {
  name: string;
  badgeTitle: string;
  avatarUrl: string;
  reviewsCount: string; // e.g. "1,463"
  rating: string; // e.g. "4.68★"
  yearsHosting: number;
  bioFacts: string[];
  coHosts: CoHostItem[];
  responseRate: string;
  responseTime: string;
}
