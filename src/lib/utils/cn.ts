import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with conflict resolution.
 * Pattern: cn("base", condition && "variant", props.className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
