import React from 'react';
import { ReactNode, useState } from 'react';

export interface Tab {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

export const Tabs = ({ tabs, defaultTab = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="flex gap-3 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-bold uppercase text-xs tracking-wider transition-all border-2 ${
              activeTab === index
                ? 'bg-blue-600 text-white border-blue-900 shadow-[4px_4px_0px_0px_rgba(30,58,138,1)]'
                : 'bg-white text-blue-900 border-blue-900 hover:bg-blue-50 shadow-[2px_2px_0px_0px_rgba(30,58,138,1)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border-4 border-blue-900 p-6 bg-white">{tabs[activeTab].content}</div>
    </div>
  );
};
