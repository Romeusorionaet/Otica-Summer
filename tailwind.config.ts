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
        clRef_1: 'rgb(246, 254, 255)',
        clRef_2: 'rgb(236, 254, 255)',
        clRef_3: 'rgb(253, 186, 116)',
        clRef_4: 'rgb(30, 64, 175)',
        clRef_5: 'rgb(30, 41, 59)',
      },
    },
  },
  plugins: [],
}
export default config
