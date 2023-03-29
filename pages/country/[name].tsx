import { useSelector, useDispatch } from "react-redux";
import { SelectNews, changeCurrentCountry } from "store/news/slice";
import { useEffect } from "react";
import { fetchNewsData } from "store/news/thunk";
import { fetchCountries } from "store/countries/thunk";
import { AppDispatch } from "store/store";
import { NewsFeed } from "@/components/NewsFeed/component";
import { useRouter } from "next/router";

const CountryPage = () => {
  const {
    news: { articles },
    currentCountry,
  } = useSelector(SelectNews);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {
    query: { name },
  } = router;

  useEffect(() => {
    dispatch(changeCurrentCountry(name));
    dispatch(fetchCountries());
    dispatch(fetchNewsData());
  }, [currentCountry, name]);

  return <NewsFeed articles={articles} />;
};

export default CountryPage;
