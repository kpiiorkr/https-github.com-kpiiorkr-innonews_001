
import { Article, Reporter, VideoItem, AdConfig } from './types';

export const CATEGORIES = [
  { name: '오피니언', key: 'Opinion' },
  { name: '최신기사', key: 'Latest' },
  { name: '기술', key: 'Technology' },
  { name: '경영', key: 'Management' },
  { name: '사회', key: 'Society' },
  { name: '문화', key: 'Culture' },
  { name: '영상', key: 'Video' },
  { name: '제보하기', key: 'Report' }
];

export const MOCK_REPORTERS: Reporter[] = [
  {
    id: 'rep1',
    name: '김이노 기자',
    image: 'https://picsum.photos/seed/reporter1/200/200',
    bio: '디지털 전환 및 프로세스 혁신 전문 기자입니다. 세상을 바꾸는 기술에 관심이 많습니다.'
  },
  {
    id: 'rep2',
    name: '박혁신 기자',
    image: 'https://picsum.photos/seed/reporter2/200/200',
    bio: '경영 전략 및 시장 분석을 담당하며 미래 성장 동력을 탐구합니다.'
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: '한국프로세스혁신협회, 차세대 제조 공정 세미나 성료',
    category: 'Technology',
    content: '한국프로세스혁신협회(KPIA)는 지난 15일 서울 강남구 소재 세미나홀에서 ‘2025 제조 공정 혁신 세미나’를 성공적으로 개최했다. 이번 행사는 국내 제조 기업들의 생산성을 비약적으로 향상시킬 수 있는 다양한 디지털 트랜스포메이션 사례들이 발표되었다.',
    imageUrl: 'https://picsum.photos/seed/tech1/1200/600',
    publishDate: '2025.05.20 10:00',
    updateDate: '2025.05.20 14:30',
    reporterId: 'rep1',
    isFeatured: true
  },
  {
    id: '2',
    title: '지속 가능한 경영을 위한 탄소 배출 관리 솔루션 도입 확산',
    category: 'Management',
    content: 'ESG 경영이 기업의 핵심 가치로 자리 잡으면서 탄소 배출을 정밀하게 관리할 수 있는 소프트웨어 솔루션 도입이 전 산업군으로 확산되고 있다. 특히 중견 기업들의 참여가 눈에 띄게 늘고 있다.',
    imageUrl: 'https://picsum.photos/seed/mgmt1/800/500',
    publishDate: '2025.05.19 09:15',
    updateDate: '2025.05.19 11:20',
    reporterId: 'rep2'
  },
  {
    id: '3',
    title: '[오피니언] 인공지능 시대, 인간의 역할은 어떻게 변화하는가',
    category: 'Opinion',
    content: '생성형 AI의 등장은 우리 삶의 방식을 뿌리째 흔들고 있다. 하지만 기술의 진보 속에서도 인간만이 가진 창의성과 공감 능력은 더욱 중요해질 것이다.',
    imageUrl: 'https://picsum.photos/seed/opinion1/800/500',
    publishDate: '2025.05.18 16:40',
    updateDate: '2025.05.18 16:40',
    reporterId: 'rep1'
  }
];

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: '혁신의 시작, KPIA 홍보 영상',
    thumbnailType: 'default'
  },
  {
    id: 'v2',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    title: '에너지 인사이트: 미래 에너지의 향방',
    thumbnailType: 'text',
    thumbnailText: '미래 에너지 톺아보기'
  }
];

export const INITIAL_ADS: AdConfig[] = [
  {
    id: 'ad1',
    type: 'floating',
    imageUrl: 'https://picsum.photos/seed/ad_side/160/600',
    linkUrl: 'https://askinno.com',
    width: '160px',
    height: '600px',
    isActive: true
  },
  {
    id: 'ad2',
    type: 'banner',
    imageUrl: 'https://picsum.photos/seed/ad_top/728/90',
    linkUrl: 'https://askinno.com',
    width: '728px',
    height: '90px',
    isActive: true
  }
];
