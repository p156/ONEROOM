import { Zap } from 'lucide-react';

interface ARGHeaderProps {
  title: string;
  subtitle?: string;
  status?: 'active' | 'investigating' | 'solved';
  headerImage?: string;
}

export default function ARGHeader({ title, subtitle, status, headerImage }: ARGHeaderProps) {
  const statusColors = {
    active: 'text-green-600',
    investigating: 'text-amber-600',
    solved: 'text-blue-600',
  };

  const statusText = {
    active: '【アクティブ】',
    investigating: '【調査中】',
    solved: '【解決】',
  };

  return (
    <div className="relative mb-12 overflow-hidden">
      {/* Header image */}
      {headerImage && (
        <div className="mb-6 rounded-sm overflow-hidden border border-gray-200">
          <img 
            src={headerImage} 
            alt="ARG Header" 
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        {/* Status indicator */}
        {status && (
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-600 animate-pulse" />
            <span className={`text-xs font-bold tracking-widest ${statusColors[status]}`}>
              {statusText[status]}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-wider text-black">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-700 text-lg font-mono">
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className="pt-4 flex gap-1">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-black to-transparent" />
          <div className="w-2 h-0.5 bg-gray-400" />
          <div className="flex-1 h-0.5 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </div>
  );
}
