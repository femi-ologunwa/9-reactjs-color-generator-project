import React, { useState, useEffect } from 'react';
//import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
   const [alert, setAlert] = useState(false);

   const bcg = rgb.join(','); //convert rgb into rgb color code format
   //console.log(bcg);

   //const hex = rgbToHex(...rgb);

   const hexValue = `#${hexColor}`;

   //effect to clear alert text after 3 secs
   useEffect(() => {
      const timeout = setTimeout(() => {
         setAlert(false);
      }, 3000);
      return () => {
         clearTimeout(timeout);
      };
   }, [alert]);

   return (
      <article
         className={`color ${index > 10 && 'color-light'}`}
         style={{ backgroundColor: `rgb(${bcg})` }}
         onClick={() => {
            setAlert(true);

            //use javascript function to copy value to clicpboard
            navigator.clipboard.writeText(hexValue);
         }}
      >
         <p className='percent-value'>{weight}%</p>
         <p className='color-value'>{hexValue}</p>
         {alert && <p className='alert'>copied to clipboard</p>}
      </article>
   );
};

export default SingleColor;
