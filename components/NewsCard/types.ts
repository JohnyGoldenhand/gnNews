import { ArticleType } from "store/news/types";
import { Dispatch, SetStateAction } from "react";

export interface NewsCardType {
  articleData: ArticleType;
  setIsPreviewVisible?: Dispatch<SetStateAction<boolean>>;
}
