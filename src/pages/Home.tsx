import React from 'react';
import { AlertCircle, Lightbulb, Lock, MapPin, Users, Clock } from 'lucide-react';
import ARGHeader from '@/components/ARGHeader';
import ARGCard from '@/components/ARGCard';
import WalkthroughTabs from '@/components/WalkthroughTabs';

/**
 * Design Philosophy: Clean, minimal light theme
 * - White background with black text for clarity
 * - Noise effect on tab opening for visual feedback
 * - Simple, professional design
 */

export default function Home() {
  const [isClueListOpen, setIsClueListOpen] = React.useState(false);
  const headerImage = '/manus-storage/スクリーンショット2026-05-03234634_74a2afdc.png';

  const walkthroughTabs = [
    {
      id: 'overview',
      label: '> 人のワンルーム',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="プロジェクト概要"
            variant="info"
            icon={<AlertCircle className="w-5 h-5" />}
          >
            <p>
              これは代替現実ゲーム（ARG）の攻略ポータルです。上記のタブを使用して謎を解き、手がかりを発見し、ストーリーを進めていきます。
            </p>
            <p className="text-blue-600 font-bold">
              ステータス：ゲームは現在アクティブです。新しい手がかりが随時公開されています。
            </p>
          </ARGCard>

          <ARGCard
            title="このガイドの使い方"
            variant="default"
            icon={<Lightbulb className="w-5 h-5" />}
          >
            <ul className="space-y-2">
              <li>• 「概要」タブから始めてください（今ここです）</li>
              <li>• 「手がかり」で発見された証拠を確認</li>
              <li>• 「タイムライン」で時系列イベントをチェック</li>
              <li>• 「関係図」で人物・場所の関係を理解</li>
              <li>• 「解答」で検証済みのパズル答を確認</li>
            </ul>
          </ARGCard>

          <div className="border border-gray-300 rounded-sm">
            <button
              onClick={() => setIsClueListOpen(!isClueListOpen)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-700" />
                <span className="font-bold text-black">手がかり一覧</span>
              </div>
              <span className="text-gray-700 font-bold">{isClueListOpen ? '▼' : '▶'}</span>
            </button>
            {isClueListOpen && (
              <div className="p-4 border-t border-gray-300 bg-white">
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                  {Array.from({ length: 100 }, (_, i) => {
                    const num = i + 1;
                    const clueNum = num === 100 ? '100' : String(num).padStart(3, '0');
                    return (
                      <a
                        key={num}
                        href={`/clue/${clueNum}`}
                        className="aspect-square flex items-center justify-center bg-white border border-gray-300 rounded-sm hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 text-xs font-bold text-black"
                      >
                        {clueNum}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id: 'clues',
      label: '> 手がかり',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="手がかり #001"
            variant="warning"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 5番街の古い倉庫
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 壁に暗号化されたメッセージが見つかった
            </p>
            <p className="font-mono text-blue-600">
              「影と光が出会う場所に答がある」
            </p>
          </ARGCard>

          <ARGCard
            title="手がかり #002"
            variant="warning"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> コミュニティフォーラム投稿（現在削除済み）
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> ユーザー「CIPHER_MASTER」が座標を投稿
            </p>
            <p className="font-mono text-blue-600">
              35.6762°N, 139.6503°E
            </p>
          </ARGCard>

          <ARGCard
            title="手がかり #003"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-green-700 font-bold">場所：</span> 音声ファイルからデコード
            </p>
            <p>
              <span className="text-green-700 font-bold">発見内容：</span> 背景ノイズにモールス信号パターン
            </p>
            <p className="font-mono text-green-600">
              .... . .-.. .-.. --- （こんにちは）
            </p>
          </ARGCard>
        </div>
      ),
    },
    {
      id: 'timeline',
      label: '> タイムライン',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="1日目 - 発見"
            variant="default"
            icon={<Clock className="w-5 h-5" />}
          >
            <p>
              <span className="text-blue-600 font-bold">午前12:00</span> - 最初の手がかりがオンラインに現れる
            </p>
            <p>
              <span className="text-blue-600 font-bold">午後3:45</span> - コミュニティが調査を開始
            </p>
            <p>
              <span className="text-blue-600 font-bold">午後11:30</span> - 最初のパズルが解かれる
            </p>
          </ARGCard>

          <ARGCard
            title="2日目 - エスカレーション"
            variant="warning"
            icon={<Clock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">午前6:00</span> - 物理的な場所が発見される
            </p>
            <p>
              <span className="text-amber-700 font-bold">午後2:15</span> - 第2波の手がかりが公開される
            </p>
            <p>
              <span className="text-amber-700 font-bold">午後9:00</span> - コミュニティが調査チームに分かれる
            </p>
          </ARGCard>

          <ARGCard
            title="3日目 - ブレークスルー"
            variant="success"
            icon={<Clock className="w-5 h-5" />}
          >
            <p>
              <span className="text-green-700 font-bold">午前10:30</span> - 重大な関連性が特定される
            </p>
            <p>
              <span className="text-green-700 font-bold">午後4:00</span> - パターン認識が新しい理論につながる
            </p>
            <p>
              <span className="text-green-700 font-bold">進行中</span> - 調査は続いている...
            </p>
          </ARGCard>
        </div>
      ),
    },
    {
      id: 'connections',
      label: '> 関係図',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="主要人物"
            variant="info"
            icon={<Users className="w-5 h-5" />}
          >
            <div className="space-y-3">
              <div>
                <p className="text-blue-700 font-bold">CIPHER_MASTER</p>
                <p className="text-gray-700">最初に座標を投稿。内部関係者の可能性あり。</p>
              </div>
              <div>
                <p className="text-blue-700 font-bold">THE ARCHITECT</p>
                <p className="text-gray-700">ゲームを仕掛けた人物。正体不明。</p>
              </div>
              <div>
                <p className="text-blue-700 font-bold">THE COLLECTIVE</p>
                <p className="text-gray-700">一緒に調査を行うコミュニティ。</p>
              </div>
            </div>
          </ARGCard>

          <ARGCard
            title="場所ネットワーク"
            variant="default"
            icon={<MapPin className="w-5 h-5" />}
          >
            <div className="space-y-2 font-mono text-sm text-gray-700">
              <p>5番街の倉庫 → 座標（35.6762°N, 139.6503°E）</p>
              <p>↓</p>
              <p>コミュニティフォーラム → 暗号化メッセージ</p>
              <p>↓</p>
              <p>音声ファイル → モールス信号パターン</p>
              <p>↓</p>
              <p className="text-blue-600 font-bold">次の場所：???</p>
            </div>
          </ARGCard>
        </div>
      ),
    },
    {
      id: 'solutions',
      label: '> 解答',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="パズル #001 - 影と光"
            variant="success"
            icon={<Lightbulb className="w-5 h-5" />}
          >
            <p>
              <span className="text-green-700 font-bold">パズル：</span> 「影と光が出会う場所に答がある」
            </p>
            <p>
              <span className="text-green-700 font-bold">解答：</span> 日没時（ゴールデンアワー）に倉庫を撮影
            </p>
            <p className="text-gray-700">
              影のパターンが次の場所への座標を示していた。
            </p>
          </ARGCard>

          <ARGCard
            title="パズル #002 - モールス信号"
            variant="success"
            icon={<Lightbulb className="w-5 h-5" />}
          >
            <p>
              <span className="text-green-700 font-bold">パズル：</span> 音声ファイルの背景ノイズをデコード
            </p>
            <p>
              <span className="text-green-700 font-bold">解答：</span> スペクトラム分析ソフト（Audacity）を使用
            </p>
            <p className="text-gray-700">
              デコード後のメッセージ：「調査者へようこそ」
            </p>
          </ARGCard>

          <ARGCard
            title="パズル #003 - 暗号テキスト"
            variant="success"
            icon={<Lightbulb className="w-5 h-5" />}
          >
            <p>
              <span className="text-green-700 font-bold">パズル：</span> 倉庫の壁のメッセージを復号化
            </p>
            <p>
              <span className="text-green-700 font-bold">解答：</span> シーザー暗号（ROT13）
            </p>
            <p className="text-gray-700">
              復号化後：「真実は深い場所に待っている」
            </p>
          </ARGCard>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Main content */}
      <div className="relative z-10">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          {/* Header with image */}
          <ARGHeader
            title="ARG 攻略ガイド"
            subtitle="代替現実ゲーム - 調査ポータル"
            status="active"
            headerImage={headerImage}
          />

          {/* Tabs */}
          <WalkthroughTabs tabs={walkthroughTabs} />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm font-mono">
            <p>
              最終更新：{new Date().toLocaleDateString('ja-JP')} | ステータス：監視中
            </p>
            <p className="mt-2 text-gray-400">
              【機密】 - 認可された調査者のみ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
