"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function QrCodePattern({ size = 120 }: { size?: number }) {
  const cell = Math.floor(size / 11);
  const grid = [
    [1,1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,1,0],
    [1,0,1,1,1,0,1,0,0,1,1],
    [1,0,0,0,0,0,1,0,1,0,0],
    [1,1,1,1,1,1,1,0,0,1,0],
    [0,0,0,1,0,0,0,0,1,0,1],
    [1,1,0,1,1,1,0,1,1,1,0],
    [0,1,1,0,0,1,1,0,0,0,1],
    [1,0,1,1,1,0,0,1,0,1,0],
  ] as const;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {grid.map((row, r) =>
        row.map((filled, c) =>
          filled ? (
            <rect
              key={`${r}-${c}`}
              x={c * cell}
              y={r * cell}
              width={cell - 1}
              height={cell - 1}
              rx={1}
              fill="#0C0B09"
            />
          ) : null
        )
      )}
    </svg>
  );
}

interface AgePassPhoneProps {
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { w: 180, ph: 340 },
  md: { w: 220, ph: 420 },
  lg: { w: 260, ph: 500 },
};

export function AgePassPhone({ className, animate = true, size = "md" }: AgePassPhoneProps) {
  const { w, ph } = sizes[size];

  const inner = (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: w, height: ph }}
    >
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[32px] bg-white border border-[var(--border-default)]"
        style={{
          boxShadow: "0 32px 64px -12px rgba(12,11,9,0.14), 0 8px 24px -4px rgba(12,11,9,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-[10px] font-medium text-[var(--text-secondary)]">9:41</span>
          <div className="w-16 h-3.5 rounded-full bg-[var(--color-cream-300)]" />
          <div className="flex items-center gap-0.5">
            <div className="w-3 h-2 rounded-sm bg-[var(--text-tertiary)]" />
          </div>
        </div>

        {/* Blue header bar */}
        <div
          className="mx-3 rounded-xl px-4 py-3 flex items-center gap-2.5"
          style={{
            background: "var(--gradient-brand)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M14 2L4 6.5V13.5C4 19.2 8.4 24.5 14 26C19.6 24.5 24 19.2 24 13.5V6.5L14 2Z" fill="white" />
            <path d="M10 13.5L12.5 16L18 11" stroke="var(--color-brand-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-white text-[12px] font-bold tracking-wider">AGEPASS</span>
        </div>

        {/* Screen content */}
        <div className="flex flex-col items-center gap-5 px-5 pt-5">
          <div className="text-center">
            <p className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">QR Code de retrait</p>
          </div>

          {/* QR Code */}
          <div className="p-3 bg-white rounded-xl border border-[var(--border-default)] shadow-sm">
            <QrCodePattern size={w - 80} />
          </div>

          {/* Separator */}
          <div className="w-full border-t border-[var(--border-default)]" />

          {/* Timer */}
          <div className="text-center">
            <p className="text-[10px] text-[var(--text-tertiary)] mb-1">Valide jusqu&apos;à</p>
            <p
              className="text-3xl font-bold tabular-nums tracking-tight"
              style={{ color: "var(--color-brand-600)" }}
            >
              14:32
            </p>
          </div>

          {/* Status pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-green-700">Titulaire vérifié</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!animate) return inner;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ display: "contents" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={cn("relative shrink-0", className)}
        style={{ width: w, height: ph }}
      >
        {inner.props.children}
      </motion.div>
    </motion.div>
  );
}
