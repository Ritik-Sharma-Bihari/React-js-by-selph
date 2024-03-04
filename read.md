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
    


---------------------------------------------------------
    video-9 create a bgcolor project 

  ----instalation of react -------
step-1: npm create vite@latest 06bgcolor
step-2: cd 06bgcolor 
step-3: npm i
------intstalation of tailwins--------
(Install Tailwind CSS)
step-4: npm install -D tailwindcss 
step-5: npx tailwindcss init

Configure your template paths in tailwind.config.js file
step-6: content: ["./src/**/*.{html,js}"],

(Add the Tailwind directives to your CSS file - index.css)
step-7: @tailwind base;
        @tailwind components;
        @tailwind utilities;

step-8: remove all the code from main.css(index.css) accept the step-7 code.
step-9: remove all the unuse code from files..
step-10: write the code .

(to start the project)
step-11: npm run dev

--------some key points notes---------------

------------------------------------------------------------------------
video-10 build the PasswordGenerater project (07PasswordGenerater)

-----(install the React project)--------------
step-1: npm create vite@latest 07PasswordGenerater
step-2: cd 07PasswordGenerater
step-3: npm i

------intstalation of tailwins--------

(Install Tailwind CSS)
step-4: npm install -D tailwindcss 
step-5: npx tailwindcss init

Configure your template paths in tailwind.config.js file change the all the content with below
step-6: 

    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }


(Add the Tailwind directives to your CSS file - index.css)
step-7: @tailwind base;
        @tailwind components;
        @tailwind utilities;
(intall the postcss.config.js) basicall while installing the tailwing this package shoulb be install but if not install then 
                              we have to install it by manuali
step-8: npm add autoprefixer --dev  
step-9: npm install postcss --save-dev
step-10: add the file name as postcss.config.js and past all the code 

        export default {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }

step-8: remove all the code from main.css(index.css) accept the step-7 code.
step-9: remove all the unuse code from files..
step-10: write the code .

(to start the project)
step-11: npm run dev


-- some notes-----------
1) useCallback hook - useCallback is a React Hook that lets you cache a             
                      function definition re-renders.
      syntax- const cachedfn = useCallback(fn,dependecies)
      we are passing the dependency in array formate...
// ------ note---------
useCallback hook - used to uptimize the code meanse jaha jaha dependency lagana 
userEffect hook - it take also function and depeneday 
  a) it used to define that if any dependeny went change then call the function
  3)useRef Hook -------------------------------------
    a) in copy the password
    b)it is used to take refrence of other

------------------------------------------------------------------------------------
video-11 Custom hooks in react | currency Project
---------
1)