import React from 'react';

interface Market {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

interface MarketListProps {
  markets: Market[];
  onSelectMarket?: (marketId: string) => void;
}

export const CategoryList: React.FC<MarketListProps> = ({
  markets,
  onSelectMarket,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {markets.map((market) => (
        <button
          key={market.id}
          onClick={() => onSelectMarket?.(market.id)}
          className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition group border border-transparent hover:border-shinhan-primary"
        >
          <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
            {market.icon}
          </div>
          <div className="text-center">
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-shinhan-primary transition">
              {market.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {market.count}개 매점
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};
