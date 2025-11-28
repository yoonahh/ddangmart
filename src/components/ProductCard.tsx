import React from 'react';
import type { Product } from '@/types/index';
import { formatPrice, calculateDiscount } from '@utils/helpers';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <div className="card overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative bg-gray-200 h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-shinhan-primary text-white px-2 py-1 rounded text-xs font-semibold">
          {product.marketType}
        </div>
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute bottom-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
            새상품
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-shinhan-primary font-bold uppercase tracking-wider mb-1">
          🏪 {product.market}
        </p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
          {product.name}
        </h3>

        <div className="mb-4">
          <p className="text-xl font-bold text-shinhan-primary">
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p className="text-xs text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>

        <button
          onClick={() => onAddToCart?.(product)}
          className="w-full bg-gradient-to-r from-shinhan-primary to-shinhan-secondary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
};
