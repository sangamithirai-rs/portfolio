import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

// Maps the CSS design tokens (src/styles/tokens.css) into Tailwind. Key names
// are chosen so they never override Tailwind's built-ins (ease-out, rounded-lg,
// etc.), which keeps the existing sections unchanged.
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,js}',
    // The dev-only style guide is excluded from production CSS.
    ...(process.env.NODE_ENV === 'production' ? [] : ['./design-system.html']),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        brand: {
          black: '#0D0D0D',
          dark: '#141414',
          gray: '#7A7A7A',
          light: '#F8F9FA',
          border: '#E5E5E5',
        },
        ink: {
          950: token('--ink-950'),
          900: token('--ink-900'),
          850: token('--ink-850'),
          800: token('--ink-800'),
          700: token('--ink-700'),
          600: token('--ink-600'),
        },
        bone: {
          50: token('--bone-50'),
          100: token('--bone-100'),
          200: token('--bone-200'),
        },
        silver: {
          300: token('--silver-300'),
          400: token('--silver-400'),
          500: token('--silver-500'),
        },
        electric: {
          300: token('--electric-300'),
          400: token('--electric-400'),
          500: token('--electric-500'),
          600: token('--electric-600'),
        },
        // Semantic aliases
        canvas: { DEFAULT: token('--c-canvas'), alt: token('--c-canvas-alt') },
        surface: {
          DEFAULT: token('--c-surface'),
          raised: token('--c-surface-raised'),
          high: token('--c-surface-high'),
        },
        fg: {
          DEFAULT: token('--c-text'),
          strong: token('--c-text-strong'),
          muted: token('--c-text-muted'),
          faint: token('--c-text-faint'),
        },
        accent: {
          DEFAULT: token('--c-accent'),
          hover: token('--c-accent-hover'),
          soft: token('--c-accent-soft'),
        },
        signal: {
          danger: token('--signal-danger'),
          success: token('--signal-success'),
        },
      },
      fontSize: {
        label: [
          'var(--text-2xs)',
          {
            lineHeight: 'var(--lh-label)',
            letterSpacing: 'var(--tracking-label)',
          },
        ],
        'display-sm': [
          'var(--text-display-sm)',
          {
            lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--tracking-display)',
          },
        ],
        'display-md': [
          'var(--text-display-md)',
          {
            lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--tracking-display)',
          },
        ],
        'display-lg': [
          'var(--text-display-lg)',
          {
            lineHeight: 'var(--lh-tight)',
            letterSpacing: 'var(--tracking-display)',
          },
        ],
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-y)',
        header: 'var(--header-offset)',
      },
      maxWidth: {
        'container-mira': 'var(--container-max)',
        measure: 'var(--container-text)',
      },
      borderRadius: {
        'mira-sm': 'var(--radius-sm)',
        mira: 'var(--radius-lg)',
        'mira-xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'mira-1': 'var(--shadow-1)',
        'mira-2': 'var(--shadow-2)',
        'mira-3': 'var(--shadow-3)',
        glow: 'var(--glow-accent)',
      },
      transitionTimingFunction: {
        'mira-out': 'var(--ease-out)',
        'mira-in-out': 'var(--ease-in-out)',
        cinematic: 'var(--ease-cinematic)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        cinematic: 'var(--dur-cinematic)',
      },
      zIndex: {
        nav: 'var(--z-nav)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
        cursor: 'var(--z-cursor)',
      },
    },
  },
  plugins: [forms, containerQueries],
};
