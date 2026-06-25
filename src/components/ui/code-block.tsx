"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Token → color mapping ─────────────────────────────────────────────── */

type Token =
  | "keyword"
  | "string"
  | "comment"
  | "function"
  | "number"
  | "operator"
  | "property"
  | "type"
  | "punctuation"
  | "plain";

const tokenColors: Record<Token, string> = {
  keyword:     "text-[#c792ea]",
  string:      "text-[#c3e88d]",
  comment:     "text-[#546e7a]",
  function:    "text-[#82aaff]",
  number:      "text-[#f78c6c]",
  operator:    "text-[#89ddff]",
  property:    "text-[#f07178]",
  type:        "text-[#ffcb6b]",
  punctuation: "text-[#89ddff]",
  plain:       "text-[#d6deeb]",
};

/* ─── Types ─────────────────────────────────────────────────────────────── */

export type CodeToken = [Token, string];
export type CodeLine  = CodeToken[];

interface CodeBlockProps {
  lines:    CodeLine[];
  filename?: string;
  lang?:    string;
  className?: string;
  animate?: boolean;
}

/* ─── CodeBlock ─────────────────────────────────────────────────────────── */

export function CodeBlock({ lines, filename, lang = "typescript", className, animate = false }: CodeBlockProps) {
  const [visibleLines, setVisibleLines] = React.useState(animate ? 0 : lines.length);

  React.useEffect(() => {
    if (!animate) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= lines.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [animate, lines.length]);

  return (
    <div className={cn("rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]", className)}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#0d1117] border-b border-white/5">
        {/* Traffic lights */}
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {filename && (
          <span className="ml-1 text-[11px] text-[#546e7a] font-mono">{filename}</span>
        )}
        {lang && (
          <span className="ml-auto text-[10px] text-[#546e7a] font-mono uppercase tracking-wider">{lang}</span>
        )}
      </div>

      {/* Code */}
      <div
        className="bg-[#011627] px-5 py-4 overflow-x-auto"
        role="region"
        aria-label={`Code ${lang}`}
      >
        <pre className="text-[13px] font-mono leading-[1.8]">
          {lines.slice(0, visibleLines).map((line, lineIdx) => (
            <div key={lineIdx} className="flex items-start gap-4">
              <span className="select-none text-[#1d3b53] w-4 text-right shrink-0 text-[11px] mt-px">
                {lineIdx + 1}
              </span>
              <span>
                {line.map(([token, text], tokenIdx) => (
                  <span key={tokenIdx} className={tokenColors[token]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
          {animate && visibleLines < lines.length && (
            <div className="flex gap-4">
              <span className="select-none text-[#1d3b53] w-4" />
              <span className="inline-block w-2 h-4 bg-[#82aaff] opacity-75 animate-pulse mt-1" />
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}
