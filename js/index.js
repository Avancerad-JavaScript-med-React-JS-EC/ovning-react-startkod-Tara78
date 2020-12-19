
import React from 'react'; 
import ReactDom from 'react-dom'; 


import Name from'./name';

function App(){
    return(
        <section className='wrapper'>
           <h1>
           Hello wolrd
           </h1>
           <Name />
                       </section>
    )
}




ReactDom.render(<App />, document.getElementById('root'));
