import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import { getSortedArticlesData } from '../lib/articles'
import styles from '../styles/layouts.module.css'
import Link from 'next/link'

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
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>

        <section>
          <h2>Blog</h2>
          <ul>
            {allArticlesData.map((article: Article) => (
              <li key={article.id}>
                <Link href={`/article/${article.id}`}>
                  <a>{article.title}</a>
                </Link>
                  <p>{article.date}</p>
                <br />
              </li>
            ))}
          </ul>
        </section>
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
