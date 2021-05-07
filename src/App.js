import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js'; //external library to generate list of tints and shades of a color.

function App() {
   const [color, setColor] = useState(''); //color for which tints and shades will be generated
   const [error, setError] = useState(false); //to flag wrong color code input
   const [list, setList] = useState([]); //list of color codes (tints and shades) generated for a user input

   const handleSubmit = (e) => {
      e.preventDefault();
      try {
         let colors = new Values(color).all(10); //generates 21 color codes; 10 tints, 10 shades and base color
         setList(colors);
         //console.log(colors);
      } catch (error) {
         setError(true);
         console.log(error);
      }
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
                  className={`${error ? 'error' : null}`}
               />
               <button className='btn' type='submit'>
                  submit
               </button>
            </form>
         </section>
         <section className='colors'>
            {list.map((color, index) => {
               //console.log(color);
               return (
                  <SingleColor
                     key={index}
                     {...color} //get color property only out of all other list item property
                     index={index}
                     hexColor={color.hex}
                  />
               );
            })}
         </section>
      </>
   );
}

export default App;
