import Layout from '../../components/layouts/layout';
import { getAllArticleIds, getArticleData } from '../../lib/articles';
import { ArticleData } from '../../types/article';

type Props = {
    articleData: ArticleData;
};

export default function Post({ articleData }: Props) {
  return (
    <Layout>
      <div className="text-center">
        <h1>{articleData.title}</h1>
        <div>投稿日：{articleData.date}</div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: {id: string}}) {
    const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}
