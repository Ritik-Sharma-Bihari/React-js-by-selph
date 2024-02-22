hi this is for react


#####
video-3  creating customize react by selph..

###
---------------------------------------------------------------------------------------
video-5 ---   secondProject
1) 

video -6 ---- virtual dom , fibra.........................
introsuction about the working the createReact() method od ReactDom and introcustion about the React fiber on the githube..

------------------------------------------------------------------
video-7 Tailwind and props 
1)  

2) tailwinds dependency--
    a) npm install -D tailwindcss postcss autoprefixer
    b)npx tailwindcss init -p  -> it will create a file name as tailwind.config.js
    c)change the content of tailwind.config.js as below

    content: [], 
      to 
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

step-4) Add the Tailwind directives to your CSS
    a) add the code on top of index.css 

step-5)Start your build process
    a) npm run dev

step-6) Start using Tailwind in your project
        export default function App() {
        return (
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
        )
        }
    