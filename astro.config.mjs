import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'Calculus BC Expedition',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
          },
        },
      ],
      sidebar: [
        {
          label: 'Expedition Overview',
          items: [
            { label: 'Pacing & Study Tracker', slug: 'index' },
          ],
        },
        {
          label: 'Phase 1: Parametrics & Vectors',
          items: [
            { label: 'Inverse & Implicit Bridge', slug: 'phase-1/inverse-and-implicit-bridge' },
            { label: 'Parametric Derivatives', slug: 'phase-1/parametric-derivatives' },
            { label: 'Kinematics & Vectors', slug: 'phase-1/vector-kinematics' },
          ],
        },
        {
          label: 'Phase 2: Early Integration',
          items: [
            { label: 'Foundations & U-Substitution', slug: 'phase-2/u-sub' },
            { label: 'Integration by Parts', slug: 'phase-2/by-parts' },
            { label: 'Partial Fractions & Improper', slug: 'phase-2/partial-fractions' },
          ],
        },
        {
          label: 'Phase 3: DiffEq & Polar',
          items: [
            { label: 'Euler & Logistic Growth', slug: 'phase-3/euler-logistic' },
            { label: 'Polar Calculus', slug: 'phase-3/polar' },
          ],
        },
        {
          label: 'Phase 4: Infinite Series',
          items: [
            { label: 'Convergence Tests', slug: 'phase-4/convergence' },
            { label: 'Taylor & Lagrange Error', slug: 'phase-4/taylor' },
          ],
        },
        {
          label: 'Phase 5: Exam Polish',
          items: [
            { label: 'FRQ Rubrics & Scored Checklists', slug: 'phase-5/rubrics' },
          ],
        },
      ],
    }),
  ],
});