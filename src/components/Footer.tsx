import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">東京フレッシュマンガイド</h2>
                        <p className="text-gray-400">上京した社会人1年目の方を応援するウェブサイト</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">ガイド</h3>
                            <ul className="space-y-2">
                                <li><Link href="/housing" className="text-gray-400 hover:text-white">住まい</Link></li>
                                <li><Link href="/finance" className="text-gray-400 hover:text-white">お金</Link></li>
                                <li><Link href="/lifestyle" className="text-gray-400 hover:text-white">生活</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">リソース</h3>
                            <ul className="space-y-2">
                                <li><Link href="/checklist" className="text-gray-400 hover:text-white">チェックリスト</Link></li>
                                <li><Link href="/faq" className="text-gray-400 hover:text-white">よくある質問</Link></li>
                                <li><Link href="/support" className="text-gray-400 hover:text-white">サポート</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">会社情報</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-400 hover:text-white">私たちについて</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white">お問い合わせ</Link></li>
                                <li><Link href="/privacy" className="text-gray-400 hover:text-white">プライバシーポリシー</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
                    <p>&copy; {new Date().getFullYear()} 東京フレッシュマンガイド All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 
