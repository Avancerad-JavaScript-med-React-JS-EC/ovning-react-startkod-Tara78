// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).
import React from'react'; 
import MyInfo from '/.MyInfo'; 

function MyInfo(){
    return(
        <div>
            <h1>Tara</h1>
            <p>Froted Student </p>
            <ul>Three Options</ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option3</li>
        </div>

    )
}
export default MyInfo