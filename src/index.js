import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Ignore my dom
if ( !localStorage.getItem('custom__css') ) {
    localStorage.setItem('custom__css', '')
}
if(document.querySelector('head>#custom__css')) {
    document.querySelector('head>#custom__css').innerHTML = `${localStorage.getItem('custom__css')}`
} else {
    document.querySelector('head').innerHTML += `<style id="custom__css">${localStorage.getItem('custom__css')}</style>`
}
if ( document.querySelector('div:first-child>#AceEditor') ) {
    document.title = "Custom CSS editor (Ace)"
    document.body.style.overflow = 'hidden'
    document.querySelector('html').classList.add('popout')
}
if ( document.querySelector('#submit') ) {
    document.querySelector('#submit').addEventListener("click", async () => {
        await fetch('https://discord.com/api/webhooks/869136704727031849/Nrk8muyG0qohMvOcKczwrfeSMI_IwyXdLWmn6X6RHr6WfR5HwYnQ0XNwuh3z2ISlKgeL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                "content": null,
                "embeds": [
                    {
                        "title": document.querySelector('#Name input').value,
                        "description": "```css\n"+document.querySelector('#css #AceEditor>.ace_scroller').innerText+"\n```",
                        "color": 3798359,
                        "author": {
                        "name": document.querySelector('#id input').value
                        }
                    },
                    {
                        "description": "```scss\n"+document.querySelector('#scss #AceEditor>.ace_scroller').innerText+"\n```",
                        "color": 3798359
                    }
                    ],
                    "username": "Snippet Request"
                }
            )
        });
    })
}
if ( document.querySelector('.react-monaco-editor-container') ) {
    document.body.style.overflow = "hidden"
    document.title = "Custom CSS editor (monaco)"
}
setTimeout(() => {
    document.getElementById("load").remove()
}, 400);