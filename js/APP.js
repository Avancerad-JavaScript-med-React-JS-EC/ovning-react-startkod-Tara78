import React from 'react'
import MyInfo from '.components/MyInfo'
import Footer from './componets/Footer'



function APP(){
    return(
        <div>
            <h1>Hello Wolrd</h1>
            <p>This is a paraghearph </p>
          <nav>
          <ul>
                <li>Nr: 1</li>
                <li> Nr:2</li>

            </ul>
          </nav>
<main>
    <p>
        this is the second part
    </p>
</main>
<MyInfo />
<Footer />

        </div>
    )
}

export default APP 