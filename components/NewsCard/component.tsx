import { FC, useState } from "react";
import { NewsTile } from "./NewsTitle/component";
import { NewsReleaseInfo } from "../NewsReleaseInfo/component";

import { NewsPreview } from "./NewsPreview/component";
import { useSelector } from "react-redux";
import { SelectNewsDisplayStyle } from "@/store/newsDisplayStyle/slice";
import { NewsCardType } from "./types";
import { NewsListItem } from "./NewsListItem/component";
import { NewsStyles } from "@/store/newsDisplayStyle/types";

export const NewsCard: FC<NewsCardType> = ({ articleData }) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
  const { newsStyle } = useSelector(SelectNewsDisplayStyle);

  return (
    <>
      <NewsPreview
        isPreviewVisible={isPreviewVisible}
        articleData={articleData}
        setIsPreviewVisible={setIsPreviewVisible}
      />
      <div>
        {newsStyle === NewsStyles.list ? (
          <NewsListItem
            articleData={articleData}
            setIsPreviewVisible={setIsPreviewVisible}
          />
        ) : (
          <NewsTile
            articleData={articleData}
            setIsPreviewVisible={setIsPreviewVisible}
          />
        )}
        <NewsReleaseInfo
          author={articleData.author}
          publishedAt={articleData.publisedAt}
        />
      </div>
    </>
  );
};
