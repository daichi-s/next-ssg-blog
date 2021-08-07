import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { ArticleData, ArticleMetaData } from '../types/article';

const articlesDirectory = path.join(process.cwd(), 'src/articles');

/**
 * mdxのメタデータを取得する
 *
 * @returns {ArticlesData}
 */
export function getSortedArticlesMetaData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    } as ArticleMetaData;
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

/**
 * mdxのファイル名(ID)を取得する
 */
export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

/**
 * 対象のmdxのメタデータと記事(HTML)を取得する
 *
 * @param id
 * @returns
 */
export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as ArticleData;
}
