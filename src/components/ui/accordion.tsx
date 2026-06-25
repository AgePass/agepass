"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer:   string;
  isOpen:   boolean;
  onToggle: () => void;
  index:    number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className={cn(
      "border-b border-[var(--border-default)] last:border-b-0",
      "transition-colors duration-200",
    )}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "w-full flex items-start justify-between gap-6",
          "py-5 text-left",
          "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] focus-visible:ring-offset-2 rounded-sm",
        )}
      >
        <span className="flex items-start gap-4">
          <span className="text-[11px] font-semibold text-[var(--text-tertiary)] tabular-nums mt-0.5 w-5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={cn(
            "text-base font-medium leading-snug transition-colors duration-200",
            isOpen ? "text-[var(--text-primary)]" : "text-[var(--text-primary)] group-hover:text-[var(--color-brand-600)]",
          )}>
            {question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mt-0.5",
            "transition-colors duration-200",
            isOpen
              ? "bg-[var(--color-brand-500)] border-[var(--color-brand-500)] text-white"
              : "border-[var(--border-strong)] text-[var(--text-secondary)] group-hover:border-[var(--color-brand-300)]",
          )}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-9 text-[var(--text-secondary)] leading-relaxed text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([0]);

  const toggle = (idx: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  return (
    <div className={cn("divide-y-0", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          index={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(idx)}
          onToggle={() => toggle(idx)}
        />
      ))}
    </div>
  );
}
