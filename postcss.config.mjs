const config = {
  plugins: {
    // This is the dedicated PostCSS plugin package required by Tailwind v4
    // that the Next.js build system is looking for.
    "@tailwindcss/postcss": {},
    // Keep autoprefixer, which is generally required for browser compatibility
    "autoprefixer": {},
  },
};

export default config;