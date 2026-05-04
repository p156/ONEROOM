import { ReactNode } from 'react';

interface ARGCardProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'warning' | 'success' | 'info';
  icon?: ReactNode;
}

export default function ARGCard({ title, children, variant = 'default', icon }: ARGCardProps) {
  const variantStyles = {
    default: 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50',
    warning: 'border-amber-300 bg-amber-50 hover:border-amber-400',
    success: 'border-green-300 bg-green-50 hover:border-green-400',
    info: 'border-blue-300 bg-blue-50 hover:border-blue-400',
  };

  const accentColors = {
    default: 'text-black',
    warning: 'text-amber-700',
    success: 'text-green-700',
    info: 'text-blue-700',
  };

  return (
    <div
      className={`border rounded-sm p-4 transition-all duration-300 ${variantStyles[variant]}`}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
        {icon && <div className={`${accentColors[variant]}`}>{icon}</div>}
        <h3 className={`font-bold text-lg tracking-wide ${accentColors[variant]}`}>
          {title}
        </h3>
      </div>

      {/* Card content */}
      <div className="text-gray-700 space-y-3 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
