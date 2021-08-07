import Link from 'next/link';
import Card from '../common/card'

const ArticleList = ({ articlesData }: any) => {

  return (
    <div className="flex flex-col">
      <h2 className="text-gray-500 mb-3">投稿記事一覧</h2>
      {articlesData.map((article: any, index: number) => (
        <div key={index} className="mb-5">
          <Link href={`/article/${article.id}`}>
            <a><Card title={article.title} description={article.description} date={article.date} /></a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;