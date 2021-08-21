import Link from 'next/link';
import { ArticleMetaData } from '../../types/article';
import Card from '../common/card';

type Props = {
  articlesMetaData: ArticleMetaData[];
};

const ArticleList = ({ articlesMetaData }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-gray-500 font-bold mb-3">投稿記事一覧</h2>
      {articlesMetaData.map((article: ArticleMetaData, index: number) => (
        <div key={index} className="mb-5">
          <Link href={`/article/${article.id}`}>
            <a><Card title={article.title} description={article.description} date={article.date} thumbnail={article.thumbnail} /></a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;