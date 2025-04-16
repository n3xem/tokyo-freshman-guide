import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { getArticlesByCategory } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// ページパラメータの型定義
interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

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

// カテゴリーの説明を取得
function getCategoryDescription(category: string): string {
    const descriptionMap: { [key: string]: string } = {
        housing: '東京での住まい探しに関する情報。家賃相場、おすすめエリア、契約の注意点など。',
        finance: '初任給の管理方法、節約術、投資の始め方など、お金に関する情報。',
        lifestyle: '東京での生活のコツ、通勤事情、おすすめスポットなど、快適な生活に役立つ情報。',
        career: '社会人としてのキャリアの築き方、スキルアップ、転職情報など。',
        community: '東京での友人作り、コミュニティ参加、イベント情報など。',
    };

    return descriptionMap[category] || '';
}

// 動的メタデータの生成
export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const { category } = params;
    const categoryName = getCategoryName(category);

    return {
        title: `${categoryName}ガイド - 東京フレッシュマンガイド`,
        description: getCategoryDescription(category),
    };
}

export default async function CategoryPage(props: PageProps) {
    const params = await props.params;
    const { category } = params;

    // 有効なカテゴリーか確認
    const validCategories = ['housing', 'finance', 'lifestyle', 'career', 'community'];
    if (!validCategories.includes(category)) {
        notFound();
    }

    try {
        const articles = await getArticlesByCategory(category);
        const categoryName = getCategoryName(category);

        return (
            <div className="min-h-screen flex flex-col">
                <Header />

                {/* ページヘッダー */}
                <div className="bg-gray-light py-8">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Link href="/" className="hover:underline">ホーム</Link>
                            <span className="mx-2">/</span>
                            <span>{categoryName}</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">{categoryName}ガイド</h1>
                        <p className="text-gray-600 dark:text-gray-300">{getCategoryDescription(category)}</p>
                    </div>
                </div>

                {/* メインコンテンツ */}
                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <div
                                    key={article.slug}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                                >
                                    <div className="h-48 relative">
                                        <Image
                                            src={article.frontMatter.thumbnail || '/images/placeholder.svg'}
                                            alt={article.frontMatter.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-xs text-gray-500 mb-2">
                                            <time dateTime={article.frontMatter.date}>{article.frontMatter.date}</time>
                                            <span className="mx-2">•</span>
                                            <span>{article.frontMatter.author}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{article.frontMatter.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.frontMatter.description}</p>
                                        <Link href={`/${category}/${article.slug}`} className="text-primary hover:text-primary-hover font-semibold flex items-center">
                                            続きを読む
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="lg:col-span-3 text-center py-12">
                                <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    このカテゴリーの記事はまだ公開されていません。<br />
                                    また後日確認してください。
                                </p>
                                <Link href="/" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold transition-colors inline-block">
                                    トップページに戻る
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        );
    } catch (error: unknown) {
        console.error('カテゴリーページエラー:', error);
        notFound();
    }
} 
