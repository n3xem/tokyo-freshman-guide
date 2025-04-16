import CategoryPage from '@/app/[category]/page';

export const metadata = {
    title: "住まい探し - 東京フレッシュマンガイド",
    description: "東京での住まい探しのコツ、家賃相場、おすすめエリア情報などをご紹介します。"
};

// 静的なカテゴリーページを実現するためのラッパー
export default async function HousingPage() {
    // [category]ページを再利用して住まいカテゴリーのコンテンツを表示
    return (
        <CategoryPage params={{ category: 'housing' }} />
    );
} 
