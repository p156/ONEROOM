import React from 'react';
import { AlertCircle, Lightbulb, Lock, MapPin, Users, Clock } from 'lucide-react';
import ARGHeader from '@/components/ARGHeader';
import ARGCard from '@/components/ARGCard';
import WalkthroughTabs from '@/components/WalkthroughTabs';
import { Link } from "wouter";

/**
 * Design Philosophy: Clean, minimal light theme
 * - White background with black text for clarity
 * - Noise effect on tab opening for visual feedback
 * - Simple, professional design
 */

export default function Home() {
  const [isClueListOpen, setIsClueListOpen] = React.useState(false);
  const [clues, setClues] = React.useState<Array<{ id: string; url: string }>>([]);
  const headerImage = '';


  React.useEffect(() => {
  fetch('./clues.json')
    .then(res => res.json())
    .then(data => setClues(data.clues))
    .catch(err => console.error('Failed to load clues:', err));
}, []);
  
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
              人のワンルームのツールです
            </p>
            <p className="text-blue-600 font-bold">
              ステータス：現在編集中です　随時更新されていきます。
            </p>
          </ARGCard>

          <ARGCard
            title="このガイドの使い方"
            variant="default"
            icon={<Lightbulb className="w-5 h-5" />}
          >
            <ul className="space-y-2">
              <li>• 「手がかり一覧」で手がかりを入手することができます。</li>
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
                  {clues.map((clue) => (
                <a
                  key={clue.id}
                  href={clue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square flex items-center justify-center bg-white border border-gray-300 rounded-sm hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 text-xs font-bold text-black"
                  >
                  {clue.id}
                </a>
              ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id: 'clues',
      label: '> 秘密の質問',
      content: (
        <div className="space-y-4">
          <ARGCard
            title="No.001"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> No.003 キャビネット（Ｂ）
            </p>
          </ARGCard>

          <ARGCard
            title="No.005"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 未実施
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 未実施
            </p>
          </ARGCard>

          <ARGCard
            title="No.012"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 未実施
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 未実施
            </p>
          </ARGCard>

          <ARGCard
            title="No.038"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 未実施
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 未実施
            </p>
          </ARGCard>

           <ARGCard
            title="No.058"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> No.079 ハンカチ 深層フラグメント
            </p>
          </ARGCard>

           <ARGCard
            title="No.077"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> No.058 ペンダント 深層フラグメント
            </p>
          </ARGCard>

           <ARGCard
            title="No.079"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> No.085 赤色の汚れ
            </p>
          </ARGCard>

           <ARGCard
            title="No.090"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 未実施
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 未実施
            </p>
          </ARGCard>

           <ARGCard
            title="No.099"
            variant="success"
            icon={<Lock className="w-5 h-5" />}
          >
            <p>
              <span className="text-amber-700 font-bold">場所：</span> 未実施
            </p>
            <p>
              <span className="text-amber-700 font-bold">発見内容：</span> 未実施
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
                <p className="text-blue-700 font-bold">神津ひな</p>
                <p className="text-gray-700">ある日忽然と姿を消した</p>
                <p>
                  <span className="text-amber-700 font-bold">誕生日:</span>2月3日
                </p>  
              </div>

              <div>
                <p className="text-blue-700 font-bold">姉</p>  
                <p className="text-gray-700 font-bold">？？？</p>
              </div>      
              
              <div>
                <p className="text-blue-700 font-bold">はな</p>  
                <p className="text-gray-700 font-bold">親友　ある日から帰ってこない</p>
                <p className="text-gray-700 font-bold">ひき逃げ事件に巻き込まれた？</p>
              </div>              

              <div>
                <p className="text-blue-700 font-bold">黒谷</p>  
                <p className="text-gray-700 font-bold">はなを知っている</p>
              </div>
              
              <div>
                <p className="text-blue-700 font-bold">サボテン</p>
                <p>
                  <span className="text-amber-700 font-bold">名前:</span>ぷく丸
                </p>  
              </div>
              
            </div>
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
            subtitle="ネコの記録"
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
              【機密】 - 認可された調査者
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
