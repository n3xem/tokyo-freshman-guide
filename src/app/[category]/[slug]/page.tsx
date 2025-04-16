import { getArticleBySlug, getAllArticleSlugs, getAllCategories } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { Metadata } from 'next';

// ページパラメータの型定義
interface PageProps {
    params: {
        category: string;
        slug: string;
    };
}

// 動的メタデータの生成
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const category = params.category;
    const slug = params.slug;

    try {
        const { frontMatter } = await getArticleBySlug(category, slug);

        return {
            title: `${frontMatter.title} - 東京フレッシュマンガイド`,
            description: frontMatter.description,
        };
    } catch (error: unknown) {
        console.error(`メタデータ生成エラー: ${category}/${slug}`, error);
        return {
            title: '記事が見つかりません - 東京フレッシュマンガイド',
            description: 'お探しの記事は見つかりませんでした。',
        };
    }
}

// 静的パラメータを生成（ビルド時に全ての記事ページを生成）
export async function generateStaticParams() {
    try {
        const categories = getAllCategories();

        const paths = await Promise.all(
            categories.map(async (category) => {
                try {
                    const slugs = getAllArticleSlugs(category);
                    return slugs;
                } catch (error) {
                    console.error(`カテゴリー "${category}" のスラッグ取得エラー:`, error);
                    return [];
                }
            })
        );

        return paths.flat();
    } catch (error) {
        console.error("generateStaticParamsエラー:", error);
        return [];
    }
}

// カスタムコンポーネント
type ComponentProps = {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
};

const components = {
    h1: (props: ComponentProps) => <h1 className="text-3xl font-bold mb-6" {...props} />,
    h2: (props: ComponentProps) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
    h3: (props: ComponentProps) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
    p: (props: ComponentProps) => <p className="mb-4" {...props} />,
    ul: (props: ComponentProps) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
    ol: (props: ComponentProps) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
    li: (props: ComponentProps) => <li {...props} />,
    a: (props: ComponentProps) => (
        <a className="text-primary hover:text-primary-hover underline" {...props} />
    ),
    img: (props: ComponentProps) => (
        <div className="my-6">
            <Image
                src={props.src}
                alt={props.alt || ''}
                className="rounded-lg mx-auto"
                width={700}
                height={400}
                {...props}
            />
        </div>
    ),
};

// カテゴリー名を日本語に変換
function getCategoryName(category: string): string {
    const categoryMap: { [key: string]: string } = {
        housing: '住まい',
        finance: 'お金',
        lifestyle: '生活',
        career: 'キャリア',
        community: 'コミュニティ',
    };

    return categoryMap[category] || category;
}

export default async function ArticlePage({ params }: PageProps) {
    const { category, slug } = params;

    try {
        const { frontMatter, content } = await getArticleBySlug(category, slug);

        return (
            <div className="min-h-screen flex flex-col">
                <Header />

                {/* ページヘッダー */}
                <div className="bg-gray-light py-8">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Link href="/" className="hover:underline">ホーム</Link>
                            <span className="mx-2">/</span>
                            <Link href={`/${category}`} className="hover:underline">{getCategoryName(category)}</Link>
                            <span className="mx-2">/</span>
                            <span>{frontMatter.title}</span>
                        </div>
                        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
                        <div className="flex items-center mt-4 text-sm text-gray-600">
                            <span className="mr-4">
                                <time dateTime={frontMatter.date}>{frontMatter.date}</time>
                            </span>
                            <span>著者: {frontMatter.author}</span>
                        </div>
                    </div>
                </div>

                {/* メインコンテンツ */}
                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* サイドバー */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-6">
                                <h2 className="text-xl font-bold mb-4">このカテゴリーの記事</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href={`/${category}/${slug}`} className="text-primary hover:text-primary-hover flex items-center font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            {frontMatter.title}
                                        </Link>
                                    </li>
                                    {/* 他の記事リンクはカテゴリーの記事一覧からマッピングする */}
                                </ul>

                                <div className="mt-8 bg-gray-light dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="text-lg font-bold mb-2">お役立ちチェックリスト</h3>
                                    <p className="text-sm mb-3">住まい探しに役立つチェックリストをダウンロードできます。</p>
                                    <a href="#" className="bg-primary hover:bg-primary-hover text-white text-sm px-4 py-2 rounded-full inline-block">
                                        ダウンロード
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 記事本文 */}
                        <div className="lg:col-span-2">
                            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 prose prose-lg dark:prose-invert max-w-none">
                                {/* サムネイル画像 */}
                                {frontMatter.thumbnail && (
                                    <div className="relative h-80 mb-8 -mt-2 -mx-2 sm:-mx-6 overflow-hidden rounded-t-lg">
                                        <Image
                                            src={frontMatter.thumbnail}
                                            alt={frontMatter.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* MDXコンテンツ */}
                                <div className="mdx-content">
                                    <MDXRemote source={content} components={components} />
                                </div>

                                {/* 記事フッター */}
                                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                カテゴリー: {getCategoryName(category)}
                                            </span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* 関連記事 */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold mb-6">関連記事</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <a href="#" className="flex items-start space-x-3 group">
                                        <div className="w-20 h-20 relative flex-shrink-0">
                                            <Image
                                                src="/images/placeholder.svg"
                                                alt="関連記事サムネイル"
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold group-hover:text-primary transition-colors">上京前に知っておきたい東京の公共交通機関ガイド</h3>
                                            <p className="text-sm text-gray-500 mt-1">2024.05.01</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-start space-x-3 group">
                                        <div className="w-20 h-20 relative flex-shrink-0">
                                            <Image
                                                src="/images/placeholder.svg"
                                                alt="関連記事サムネイル"
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold group-hover:text-primary transition-colors">初任給で揃えるべき家具・家電リスト</h3>
                                            <p className="text-sm text-gray-500 mt-1">2024.04.15</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    } catch (error: unknown) {
        console.error(`記事ページ表示エラー: ${category}/${slug}`, error);
        notFound();
    }
} 
