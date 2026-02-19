import React from 'react';
import { LoanProduct } from '../../../types';

interface LoanCardProps {
  product: LoanProduct;
}

export default function LoanCard({ product }: LoanCardProps) {
  return (
    <div className="border p-4 rounded">
      <h4 className="font-semibold">{product.name}</h4>
      <p>{product.description}</p>
      <span className="text-sm">Rate: {product.rate}%</span>
    </div>
  );
}
