import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* ヒーローセクション */}
            <section className="relative h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-tokyo.jpg"
                        alt="東京の街並み"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl bg-white/90 dark:bg-gray-900/90 p-8 rounded-lg shadow-lg">
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
            </section>

            {/* カテゴリーセクション */}
            <section className="py-16 bg-gray-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">あなたをサポートするガイド</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                                <div className="h-48 relative">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                    />
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
