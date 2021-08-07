import Layout from '../../components/layouts/layout';
import { getAllArticleIds, getArticleData } from '../../lib/articles';

type ArticleData = {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
};

type Props = {
    articleData: ArticleData;
};

export default function Post({ articleData }: Props) {
  return (
    <Layout>
      <h2>{articleData.title}</h2>
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
