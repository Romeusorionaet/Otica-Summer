import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clVRef: 'rgb(253, 186, 116)',
        blue_1: 'rgb(239 246 255)',
        blue_2: 'rgb(236, 254, 255)',
        blue_3: 'rgb(207, 250, 254)',
        blue_4: 'rgb(30, 64, 175)',
      },
    },
  },
  plugins: [],
}
export default config
