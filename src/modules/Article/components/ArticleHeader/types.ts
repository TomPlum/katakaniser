import { NewsFeedDetails } from "modules/Article/hooks/useArticles/types.ts"

export interface ArticleHeaderProps {
    publisher?: string
    publishDate: string
    feed: NewsFeedDetails
}