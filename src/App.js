import React, { useState } from 'react';
import SingleColor from './SingleColor';

function App() {
   const [color, setColor] = useState(''); //color for which tints and shades will be generated
   const [error, setError] = useState(false); //to flag wrong color code input
   const [list, setList] = useState([]); //list of color codes (tints and shades) generated for a user input

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('hello');
   };

   return (
      <>
         <section className='container'>
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
               <input
                  type='text'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder='#f15025'
               />
               <button className='btn' type='submit'>
                  submit
               </button>
            </form>
         </section>
         <section className='colors'>
            <h4>list goes here</h4>
         </section>
      </>
   );
}

export default App;
