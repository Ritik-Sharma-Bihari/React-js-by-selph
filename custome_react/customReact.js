
// function customRender(reacElement, container) {
//     const domElement = document.createElement(reacElement.type)

//     // creating innerHtml element
//     domElement.innerHTML = reacElement.children
//     // setting the reactElement to innerHtml..
//     domElement.setAttribute('href', reacElement.props.href)
//     domElement.setAttribute('target', reacElement.props.target)

//     // appending the all the elements to maincontainer
//     container.appendChild(domElement)



// }



function customRender(reacElement, container) {
    const domElement = document.createElement(reacElement.type)

    // creating innerHtml element
    domElement.innerHTML = reacElement.children
    // setting the reactElement to innerHtml..
    for (const prop in reacElement.props) {

        // cheking the either props don't have child elents
        if (prop === "children")
            continue;
        domElement.setAttribute(prop, reacElement.props[prop])
    }

    // appending the all the elements to maincontainer
    container.appendChild(domElement)



}

// for evaluate the elements.
// it happed inside the react .........
const reactElement = {

    // in react bundaler goes to convert in into jsx internalling 
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'click me to visit Google'
}

const mainContainer = document.querySelector('#root')

// to render the reacElement in mainContianer throw the customRender.

// const customRender(reactElement, mainContainer) it will trow a error beacuse we have already declare it

customRender(reactElement, mainContainer)