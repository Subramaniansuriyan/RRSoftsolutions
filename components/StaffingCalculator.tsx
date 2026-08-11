'use client';

import { useMemo, useState } from 'react';
import {
  calculatorLevels,
  calculatorRoles,
  computeRrCost,
  computeTraditionalCost,
  formatUsd,
  HOURS_PER_MONTH,
} from '@/content/calculator';

export default function StaffingCalculator() {
  const [roleId, setRoleId] = useState(calculatorRoles[0].id);
  const [levelId, setLevelId] = useState(calculatorLevels[1].id);

  const result = useMemo(() => {
    const role = calculatorRoles.find((r) => r.id === roleId) ?? calculatorRoles[0];
    const level =
      calculatorLevels.find((l) => l.id === levelId) ?? calculatorLevels[1];
    const traditional = computeTraditionalCost(role.traditionalHourly, level.multiplier);
    const rr = computeRrCost(role.traditionalHourly, level.multiplier);
    const savings = traditional.total - rr.total;
    const savingsPercent = traditional.total > 0 ? (savings / traditional.total) * 100 : 0;
    return { traditional, rr, savings, savingsPercent };
  }, [roleId, levelId]);

  return (
    <div className="bg-white border border-navy-200 p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="calc-role" className="block text-sm font-medium text-navy-700 mb-2">
            Role
          </label>
          <select
            id="calc-role"
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            className="w-full px-4 py-3 border border-navy-200 focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none bg-white text-navy-900"
          >
            {calculatorRoles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="calc-level" className="block text-sm font-medium text-navy-700 mb-2">
            Experience level
          </label>
          <select
            id="calc-level"
            value={levelId}
            onChange={(e) => setLevelId(e.target.value)}
            className="w-full px-4 py-3 border border-navy-200 focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none bg-white text-navy-900"
          >
            {calculatorLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <CostCard
          title="Typical U.S. fully loaded cost"
          rows={[
            { label: 'Hourly pay', value: formatUsd(result.traditional.hourlyPay) },
            {
              label: `Per month (${HOURS_PER_MONTH} hrs)`,
              value: formatUsd(result.traditional.monthlyBase),
            },
            { label: 'Benefits (est.)', value: formatUsd(result.traditional.benefits) },
            { label: 'Other overhead (est.)', value: formatUsd(result.traditional.other) },
            { label: 'Total (monthly)', value: formatUsd(result.traditional.total), strong: true },
          ]}
        />
        <CostCard
          title="Estimated RR engagement"
          highlight
          rows={[
            { label: 'Effective hourly', value: formatUsd(result.rr.hourlyPay) },
            {
              label: `Per month (${HOURS_PER_MONTH} hrs)`,
              value: formatUsd(result.rr.monthlyBase),
            },
            { label: 'Benefits (included in model)', value: '—' },
            { label: 'Other overhead (included)', value: '—' },
            { label: 'Total (monthly)', value: formatUsd(result.rr.total), strong: true },
          ]}
        />
      </div>

      <div className="border border-navy-200 bg-navy-50 p-4 sm:p-6 text-center">
        <p className="text-navy-700 mb-1">
          Estimated monthly savings:{' '}
          <span className="font-bold text-navy-900">{formatUsd(result.savings)}</span>
        </p>
        <p className="text-navy-700">
          Approximately{' '}
          <span className="font-bold text-navy-900">{result.savingsPercent.toFixed(0)}%</span>{' '}
          lower than a typical fully loaded domestic hire model in this example.
        </p>
      </div>

      <p className="mt-6 text-sm text-navy-400 leading-relaxed">
        Figures are educational estimates only and are not a formal quote. Actual rates depend
        on skills, location, contract type, and project complexity. For special projects, data
        migration, or one-time work, email{' '}
        <a
          href="mailto:surya@rrsoftsolutions.net"
          className="text-navy-800 hover:text-navy-600 underline underline-offset-2"
        >
          surya@rrsoftsolutions.net
        </a>
        .
      </p>
    </div>
  );
}

function CostCard({
  title,
  rows,
  highlight = false,
}: {
  title: string;
  rows: { label: string; value: string; strong?: boolean }[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-5 border ${
        highlight ? 'bg-navy-800 text-white border-navy-800' : 'bg-navy-50 border-navy-200'
      }`}
    >
      <h3 className={`font-semibold mb-4 ${highlight ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h3>
      <dl className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex justify-between gap-4 text-sm ${
              row.strong
                ? `pt-2 border-t font-semibold text-base ${
                    highlight ? 'border-white/20' : 'border-navy-200'
                  }`
                : ''
            }`}
          >
            <dt className={highlight ? 'text-white/75' : 'text-navy-500'}>{row.label}</dt>
            <dd className={`tabular-nums ${highlight ? 'text-white' : 'text-navy-900'}`}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
