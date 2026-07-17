'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Member } from '@/lib/types';

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function DirectoryGrid({ members }: { members: Member[] }) {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const needle = q.toLowerCase().trim();
    if (!needle) return members;
    return members.filter((m) =>
      [m.full_name, m.profession, m.city, m.state, ...(m.skills ?? [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(needle)
    );
  }, [q, members]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search name, profession, skill, or city…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full px-5 py-3 rounded-full bg-navy-900 border border-white/10 focus:border-gold outline-none mb-6"
      />
      <p className="text-xs text-ivory/40 mb-4">
        Showing {filtered.length} of {members.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => (
          <div
            key={m.id}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-850 to-navy-900 p-5 hover:border-gold/30 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-navy-800 border border-gold/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                {m.photo_url ? (
                  <Image src={m.photo_url} alt={m.full_name} width={48} height={48} className="object-cover w-full h-full" />
                ) : (
                  <span className="font-display text-gold text-sm">{initials(m.full_name)}</span>
                )}
              </div>
              <div>
                <div className="font-semibold text-sm">{m.full_name}</div>
                {m.grad_year && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 border border-gold/25 text-gold uppercase tracking-wide">
                    Class of &apos;{String(m.grad_year).slice(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="text-sm mb-1">{m.profession || 'Profile pending'}</div>
            <div className="text-xs text-ivory/50 mb-3">
              {m.city || 'Location pending'}{m.state ? `, ${m.state}` : ''}
            </div>
            <div className="flex gap-2 flex-wrap">
              {m.is_mentor && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal">
                  Open to Mentoring
                </span>
              )}
              {m.is_business_owner && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold">
                  Business Owner
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-ivory/40 py-16">No brothers match that search.</p>
      )}
    </div>
  );
}
