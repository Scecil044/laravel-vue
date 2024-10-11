/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,vue,ts,tsx,jsx,blade.php}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

