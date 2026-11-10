/** @type {import('tailwindcss').Config} */
// Breakpoints: mobile 375px (default) · tablet 834px (md:) · desktop 1440px (lg:)
// Note: index.html uses the Tailwind CDN, which reads the inline `tailwind.config`
// in <head>. Keep both in sync if you switch to the Tailwind CLI later.
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      md: "834px",
      lg: "1440px",
    },
    extend: {
      maxWidth: {
        mobile: "375px",
        tablet: "834px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
