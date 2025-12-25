'use client';

import { useEffect, useState } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string; // HTML string
  tabs?: { label: string; content: string }[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
};

export default function DetailModal({
  isOpen,
  onClose,
  title,
  content,
  tabs,
  size = 'md',
}: DetailModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentContent = tabs ? tabs[activeTab].content : content;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-gray-900 rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] flex flex-col border border-gray-700 transform transition-all`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 shrink-0">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <h3 className="text-xl font-bold text-white whitespace-nowrap">{title}</h3>

            {/* Tabs */}
            {tabs && tabs.length > 0 && (
              <div className="flex bg-gray-800/50 rounded-lg p-1">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${activeTab === index
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg ml-4"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content - scrollable */}
        <div className="p-4 overflow-y-auto flex-1">
          <div
            className="prose prose-invert max-w-none prose-sm"
            dangerouslySetInnerHTML={{ __html: currentContent }}
          />
        </div>
      </div>
    </div>
  );
}
