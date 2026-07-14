import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Type checking is run explicitly via `pnpm exec tsc --noEmit` in validation.
  // The sandbox's Next.js type-check worker can stall after Turbopack compilation.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
