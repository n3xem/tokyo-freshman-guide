import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// コンテンツディレクトリのパス
const contentDirectory = path.join(process.cwd(), 'content');

// カテゴリーごとの記事を取得する
export async function getArticlesByCategory(category: string) {
    const articlesDirectory = path.join(contentDirectory, 'articles', category);

    // ディレクトリが存在するか確認
    if (!fs.existsSync(articlesDirectory)) {
        console.warn(`カテゴリー "${category}" のディレクトリが存在しません: ${articlesDirectory}`);
        return [];
    }

    let fileNames;
    try {
        fileNames = fs.readdirSync(articlesDirectory);
    } catch (error) {
        console.error(`ディレクトリ読み込みエラー: ${articlesDirectory}`, error);
        return [];
    }

    // .mdxファイルのみをフィルタリング
    fileNames = fileNames.filter(fileName => fileName.endsWith('.mdx'));

    const articles = fileNames.map((fileName) => {
        // .mdxの拡張子を削除してスラッグとして使用
        const slug = fileName.replace(/\.mdx$/, '');

        // マークダウンファイルを文字列として読み込む
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // メタデータセクションをパース
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontMatter: data,
            content,
        };
    });

    // 日付でソート（新しい順）
    return articles.sort((a, b) => {
        if (a.frontMatter.date < b.frontMatter.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// 特定の記事を取得する
export async function getArticleBySlug(category: string, slug: string) {
    const fullPath = path.join(contentDirectory, 'articles', category, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`記事が見つかりません: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // フロントマターとコンテンツを分離
    const { data, content } = matter(fileContents);

    return {
        frontMatter: data,
        content
    };
}

// すべてのカテゴリーを取得
export function getAllCategories() {
    const categoriesDirectory = path.join(contentDirectory, 'articles');

    if (!fs.existsSync(categoriesDirectory)) {
        console.warn(`記事ディレクトリが存在しません: ${categoriesDirectory}`);
        return [];
    }

    try {
        return fs.readdirSync(categoriesDirectory);
    } catch (error) {
        console.error(`カテゴリーディレクトリ読み込みエラー: ${categoriesDirectory}`, error);
        return [];
    }
}

// 特定カテゴリーのすべての記事スラッグを取得
export function getAllArticleSlugs(category: string) {
    const articlesDirectory = path.join(contentDirectory, 'articles', category);

    if (!fs.existsSync(articlesDirectory)) {
        console.warn(`カテゴリー "${category}" のディレクトリが存在しません: ${articlesDirectory}`);
        return [];
    }

    let fileNames;
    try {
        fileNames = fs.readdirSync(articlesDirectory);
    } catch (error) {
        console.error(`ディレクトリ読み込みエラー: ${articlesDirectory}`, error);
        return [];
    }

    // .mdxファイルのみをフィルタリング
    fileNames = fileNames.filter(fileName => fileName.endsWith('.mdx'));

    return fileNames.map(fileName => ({
        params: {
            slug: fileName.replace(/\.mdx$/, ''),
            category
        }
    }));
} 
