import Layout from '../components/layouts/layout'
import { getSortedArticlesMetaData } from '../lib/articles'
import ArticleList from '../components/articles/list'
import { ArticleMetaData } from '../types/article';

type Props = {
  allArticlesMetaData: ArticleMetaData[]
};

export default function Home({ allArticlesMetaData }: Props) {
  return (
    <Layout>
        <div>
          <ArticleList articlesMetaData={allArticlesMetaData}/>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allArticlesMetaData = getSortedArticlesMetaData()
  return {
    props: {
      allArticlesMetaData
    }
  }
}
