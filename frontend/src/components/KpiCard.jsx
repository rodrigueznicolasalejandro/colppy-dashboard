import React from 'react';
import { TriangleAlert } from 'lucide-react';

export default function KpiCard({ title, value, prefix, suffix, warning }) {
  return (
    <div
      className={`p-4 rounded-2xl shadow-sm flex flex-col justify-between transition-all ${
        warning
          ? 'bg-red-100'
          : 'bg-white'
      }`}
    >
      <div className="text-sm font-medium text-gray-600">{title}</div>
      <div
        className={`text-2xl font-semibold mt-2" ${
        warning
          ? 'text-red-800'
          : 'text-gray-600'
      }`}
      >
        {`${prefix ? `${prefix} ` : ''}${value}${suffix ? `${suffix} ` : ''}`}
        { warning && <TriangleAlert className="inline text-red-800" size={22} /> }
      </div>
    </div>
  );
}
