export interface ArticleType {
  source: { id: number | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publisedAt: string;
  content: string;
}

export interface NewsType {
  status?: string;
  totalResults?: number;
  articles?: Array<ArticleType>;
}

export interface StateType {
  news: NewsType;
  status: string;
  error?: string;
  currentCountry: string;
}
