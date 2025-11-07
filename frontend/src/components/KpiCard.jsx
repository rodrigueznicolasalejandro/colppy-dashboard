import React from 'react';

export default function KpiCard({ title, value, prefix, suffix, warning }) {
  return (
    <div
      className={`p-4 rounded-2xl shadow-sm flex flex-col justify-between transition-all ${
        warning
          ? 'ring-2 ring-brand-alert/60 bg-brand-alert/10'
          : 'bg-white hover:shadow-md'
      }`}
    >
      <div className="text-sm font-medium text-gray-600">{title}</div>
      <div
        className={`text-2xl font-semibold mt-2 ${
          warning ? 'text-brand-alert' : 'text-brand-primary'
        }`}
      >
        {`${prefix ? `${prefix} ` : ''}${value}${suffix ? `${suffix} ` : ''}`}
      </div>
    </div>
  );
}
