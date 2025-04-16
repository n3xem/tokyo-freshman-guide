import Image from "next/image";
import Header from "@/components/Header";

export const metadata = {
    title: "住まい探し - 東京フレッシュマンガイド",
    description: "東京での住まい探しのコツ、家賃相場、おすすめエリア情報などをご紹介します。"
};

export default function HousingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* ページヘッダー */}
            <div className="bg-gray-light py-8">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold mb-2">東京での住まい探し</h1>
                    <p className="text-gray-600 dark:text-gray-300">初めての東京での住まい探しをサポートします</p>
                </div>
            </div>

            {/* メインコンテンツ */}
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* サイドバー */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-6">
                            <h2 className="text-xl font-bold mb-4">目次</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#area-guide" className="text-primary hover:text-primary-hover flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        エリア別ガイド
                                    </a>
                                </li>
                                <li>
                                    <a href="#rent-guide" className="text-primary hover:text-primary-hover flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        家賃相場とポイント
                                    </a>
                                </li>
                                <li>
                                    <a href="#contract-tips" className="text-primary hover:text-primary-hover flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        契約時の注意点
                                    </a>
                                </li>
                                <li>
                                    <a href="#recommended-agents" className="text-primary hover:text-primary-hover flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        おすすめ不動産会社
                                    </a>
                                </li>
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

                    {/* メイン記事 */}
                    <div className="lg:col-span-2">
                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                            <h2 id="area-guide" className="text-2xl font-bold mb-6">エリア別ガイド</h2>

                            <div className="mb-8">
                                <div className="relative h-60 mb-4">
                                    <Image
                                        src="/images/placeholder.svg"
                                        alt="東京のエリアマップ"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <p className="mb-4">東京は23区と多摩地域に大きく分けられ、それぞれのエリアで特色が異なります。</p>
                                <p className="mb-4">通勤時間、家賃相場、生活環境を総合的に考慮して選ぶことが大切です。初めての上京では、以下のエリアがおすすめです。</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <h3 className="text-xl font-bold mb-2">池袋・新宿エリア</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">都心へのアクセスが良く、若者向けの飲食店や娯楽施設が充実。</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="mr-3">家賃相場: 8万円〜</span>
                                            <span>通勤: ★★★★☆</span>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <h3 className="text-xl font-bold mb-2">中野・高円寺エリア</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">下町の雰囲気と住みやすさが魅力で、家賃もリーズナブル。</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="mr-3">家賃相場: 7万円〜</span>
                                            <span>通勤: ★★★☆☆</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 id="rent-guide" className="text-2xl font-bold mb-6 mt-12">家賃相場とポイント</h2>
                            <p className="mb-4">東京での家賃は、エリアや駅からの距離、物件の築年数や設備によって大きく変わります。</p>
                            <p className="mb-4">一般的に社会人1年目の方は、手取り収入の3分の1程度を家賃の目安にすると良いでしょう。</p>

                            <div className="bg-gray-light dark:bg-gray-700 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-bold mb-3">家賃の目安</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-2 mt-1">都心部</span>
                                        <span>ワンルーム：8〜12万円、1LDK：12〜18万円</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-accent text-white text-xs px-2 py-1 rounded mr-2 mt-1">準都心</span>
                                        <span>ワンルーム：6〜9万円、1LDK：9〜15万円</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded mr-2 mt-1">郊外</span>
                                        <span>ワンルーム：5〜8万円、1LDK：7〜12万円</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3">初期費用について</h3>
                                <p className="mb-4">東京で部屋を借りる際には、家賃だけでなく以下の初期費用がかかります。</p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>敷金：家賃の1〜2ヶ月分</li>
                                    <li>礼金：家賃の1〜2ヶ月分</li>
                                    <li>仲介手数料：家賃の1ヶ月分+税</li>
                                    <li>前家賃：入居月の日割り+翌月分</li>
                                    <li>火災保険：1〜2万円/2年</li>
                                </ul>
                                <p>合計すると家賃の4〜6ヶ月分程度の初期費用が必要となるため、事前に十分な貯金を準備しておきましょう。</p>
                            </div>

                            {/* 他のセクションも同様に実装 */}
                            <h2 id="contract-tips" className="text-2xl font-bold mb-6 mt-12">契約時の注意点</h2>
                            <p className="mb-4">初めての賃貸契約では、以下の点に注意しましょう。</p>
                            {/* ここに契約時の注意点の詳細を記述 */}

                            <h2 id="recommended-agents" className="text-2xl font-bold mb-6 mt-12">おすすめ不動産会社</h2>
                            <p className="mb-4">東京で部屋探しをする際におすすめの不動産会社をご紹介します。</p>
                            {/* ここにおすすめ不動産会社の詳細を記述 */}
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
} 
