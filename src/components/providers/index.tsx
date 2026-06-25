import { LenisProvider } from "./lenis-provider";

/**
 * Composites all app providers in the correct order.
 * Add new providers here — never in the root layout directly.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
