import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* ヒーローセクション */}
            <section className="relative h-[80vh]">
                <div className="container mx-auto px-6 absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="max-w-2xl bg-white/90 dark:bg-gray-900/90 p-8 rounded-lg shadow-lg mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-accent">東京での新生活、始めましょう！</h2>
                        <p className="text-lg mb-6">上京して社会人1年目を迎える方のための完全ガイド。住まい探しから財布事情、キャリアのコツまで。</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/getting-started" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold transition-colors text-center">
                                ガイドを見る
                            </Link>
                            <Link href="/checklist" className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-bold transition-colors text-center">
                                準備チェックリスト
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-10 tokyo-scene">
                    <Image
                        src="/images/tokyo-skyline.svg"
                        alt="東京の街並み"
                        fill
                        className="tokyo-skyline"
                        priority
                    />

                    {/* 動く雲 */}
                    <div className="cloud cloud-1">
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="60" cy="40" rx="40" ry="25" fill="white" />
                            <ellipse cx="90" cy="35" rx="35" ry="20" fill="white" />
                            <ellipse cx="110" cy="45" rx="30" ry="18" fill="white" />
                            <ellipse cx="75" cy="50" rx="45" ry="20" fill="white" />
                        </svg>
                    </div>

                    <div className="cloud cloud-2">
                        <svg width="180" height="90" viewBox="0 0 180 90" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="70" cy="45" rx="50" ry="30" fill="white" />
                            <ellipse cx="110" cy="40" rx="40" ry="25" fill="white" />
                            <ellipse cx="140" cy="55" rx="35" ry="22" fill="white" />
                            <ellipse cx="90" cy="60" rx="55" ry="25" fill="white" />
                        </svg>
                    </div>

                    <div className="cloud cloud-3">
                        <svg width="120" height="70" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="50" cy="35" rx="35" ry="20" fill="white" />
                            <ellipse cx="75" cy="30" rx="30" ry="18" fill="white" />
                            <ellipse cx="90" cy="40" rx="25" ry="15" fill="white" />
                            <ellipse cx="60" cy="45" rx="40" ry="18" fill="white" />
                        </svg>
                    </div>

                    {/* 太陽 */}
                    <div className="sun"></div>

                    {/* 走る電車 */}
                    <div className="train">
                        <Image
                            src="/images/train.svg"
                            alt="電車"
                            width={200}
                            height={80}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* カテゴリーセクション */}
            <section className="py-16 bg-gray-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">あなたをサポートするガイド</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                                <div className="h-48 relative">
                                    {index === 0 ? (
                                        <div className="housing-animation">
                                            <object
                                                type="image/svg+xml"
                                                data="/images/housing-animation.svg"
                                                className="w-full h-full"
                                                aria-label={category.title}
                                            />
                                        </div>
                                    ) : index === 1 ? (
                                        <div className="finance-animation">
                                            <object
                                                type="image/svg+xml"
                                                data="/images/finance-animation.svg"
                                                className="w-full h-full"
                                                aria-label={category.title}
                                            />
                                        </div>
                                    ) : (
                                        <div className="lifestyle-animation">
                                            <object
                                                type="image/svg+xml"
                                                data="/images/lifestyle-animation.svg"
                                                className="w-full h-full"
                                                aria-label={category.title}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                                    <Link href={category.link} className="text-primary hover:text-primary-hover font-semibold flex items-center">
                                        詳しく見る
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// カテゴリーデータ
const categories = [
    {
        title: "住まい探し",
        description: "家賃相場、おすすめエリア、契約時の注意点など、東京での住まい探しをサポートします。",
        image: "/images/housing.jpg",
        link: "/housing"
    },
    {
        title: "お金の管理",
        description: "初任給の使い方、節約術、投資の始め方など、社会人としての資産管理を学びましょう。",
        image: "/images/finance.jpg",
        link: "/finance"
    },
    {
        title: "東京生活のコツ",
        description: "通勤ラッシュの乗り切り方、おすすめスポット、一人暮らしの知恵など、東京生活を快適に。",
        image: "/images/lifestyle.jpg",
        link: "/lifestyle"
    }
];
