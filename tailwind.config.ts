import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
       'sm': '375px',
       '3xl': '1905px',
       
     },

      keyframes: {
        heartbeat: {
          ' 0%, 100%, 40%, 60% ': { transform: 'scale(1)' },
          '20%, 80%': { transform: 'scale(1.3)' },
        }
      },
  
      animation:{
        heartbeat: "heartbeat 2s ease-in-out infinite"
      }

    },
  },
  plugins: [],
}
export default config
