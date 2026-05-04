import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface WalkthroughTabsProps {
  tabs: TabItem[];
}

export default function WalkthroughTabs({ tabs }: WalkthroughTabsProps) {
  const [expandedTabs, setExpandedTabs] = useState<Set<string>>(new Set([tabs[0]?.id]));
  const [noiseTab, setNoiseTab] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    const newExpanded = new Set(expandedTabs);
    const isExpanding = !newExpanded.has(tabId);
    
    if (isExpanding) {
      // Show noise effect when expanding
      setNoiseTab(tabId);
      setTimeout(() => setNoiseTab(null), 150);
    }
    
    if (newExpanded.has(tabId)) {
      newExpanded.delete(tabId);
    } else {
      newExpanded.add(tabId);
    }
    setExpandedTabs(newExpanded);
  };

  return (
    <div className="w-full space-y-3">
      {tabs.map((tab) => {
        const isExpanded = expandedTabs.has(tab.id);
        const hasNoise = noiseTab === tab.id;

        return (
          <div 
            key={tab.id} 
            className={`border border-gray-300 rounded-sm overflow-hidden hover:border-gray-400 transition-colors duration-300 ${
              hasNoise ? 'noise-effect' : ''
            }`}
          >
            {/* Tab header */}
            <button
              onClick={() => toggleTab(tab.id)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300 group"
            >
              <span className={`font-bold text-lg tracking-wide transition-colors duration-300 ${
                isExpanded ? 'text-black' : 'text-gray-600 group-hover:text-gray-800'
              }`}>
                {tab.label}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isExpanded ? 'transform rotate-180 text-black' : 'text-gray-500'
                }`}
              />
            </button>

            {/* Tab content */}
            {isExpanded && (
              <div className="border-t border-gray-200 px-4 py-4 bg-gray-50 animate-in fade-in duration-300">
                <div className="space-y-4">
                  {tab.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
