import Layout from '../components/layouts/layout'
import { getSortedArticlesData } from '../lib/articles'
import ArticleList from '../components/articles/list'

type Article = {
  id: string;
  title: string;
  date: string;
}

type Props = {
  allArticlesData: Article[]
};

export default function Home({ allArticlesData }: Props) {
  return (
    <Layout>
        <div>
          <ArticleList articlesData={allArticlesData}/>
        </div>
    </Layout>
  )

}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData()
  return {
    props: {
      allArticlesData
    }
  }
}
