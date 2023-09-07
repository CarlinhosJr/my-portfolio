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
        },

        pingarrow:{
         ' 0%, 100%': {transform: 'translateX(0)'},
          '50%':{transform: 'translateX(10px)'}
        }
      },
  
      animation:{
        heartbeat: "heartbeat 5s ease-in-out infinite",
        pingarrow: "pingarrow 1s ease-in-out infinite"
      }

    },
  },
  plugins: [],
}
export default config
