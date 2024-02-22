
// this formate taken from devUI.com


import React from 'react';

// we can write first

// function Card(props) to destructure it {propes}
function Card({ channel, somearray, btntext = "visit me", myobject }) {
    //console.log(props)
    console.log({ channel })
    console.log("this is someObject:" + { myobject })

    // let arrayvalue = props.somearray[2] can't access the vlaues of array
    return (
        <div class="relative h-[400px] w-[300px] rounded-md mb-4">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                class="z-0 h-full w-full rounded-md object-cover"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
                <h1 class="text-lg font-semibold text-white">Delba</h1>

                {/* <h1 class="text-lg font-semibold text-white">{props.channel}</h1> */}
                <h1 class="text-lg font-semibold text-white">{channel}</h1>


                {/* <h1 class="text-lg font-semibold text-white">this is for array:{props.somearray}</h1> */}
                <h1 class="text-lg font-semibold text-white">this is for array:{somearray}</h1>

                {/*  ------------------------ IMPORTANT ---------------------------------------- 
                <h1 class="text-lg font-semibold text-white">this is for object:{myobject}</h1> 
                 */}
                {/* Objects are not valid as a React child (found: object with keys {username, age, sex, height}). 
                If you meant to render a collection of children, use an array instead. 
                
                */}


                <p class="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btntext}→
                </button>
            </div>
        </div>

    )
}

export default Card
