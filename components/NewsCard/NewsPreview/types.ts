import { ArticleType } from "@/store/news/types";
import { Dispatch, SetStateAction } from "react";

export interface ArticlePreviewType {
  articleData: ArticleType;
  isPreviewVisible: boolean;
  setIsPreviewVisible: Dispatch<SetStateAction<boolean>>;
}
