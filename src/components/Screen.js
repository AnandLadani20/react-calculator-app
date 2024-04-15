import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen;



// import React, { useState } from 'react';

// const Calculator = () => {
//   const [display, setDisplay] = useState('0');
//   const [allowOperators, setAllowOperators] = useState(false);

//   const btnValues = [
//     ["C", "+-", "%", "/"],
//     [7, 8, 9, "x"],
//     [4, 5, 6, "-"],
//     [1, 2, 3, "+"],
//     [0, ".", "="],
//   ];

//   const handleButtonClick = (value) => {
//     if (value === "=") {
//       calculateResult();
//     } else if (value === "C") {
//       clearDisplay();
//     } else if (value === "+-" && display !== '0' && display !== 'Error') {
//       changeSign();
//     } else if (!isNaN(value) || value === '.') {
//       setAllowOperators(true);
//       setDisplay((prevDisplay) => {
//         if (prevDisplay === '0' || prevDisplay === 'Error') {
//           return String(value);
//         } else {
//           return prevDisplay + value;
//         }
//       });
//     } else if (allowOperators ) {
//       setDisplay((prevDisplay) => prevDisplay + value);
//     }
//   };

//   const clearDisplay = () => {
//     setDisplay('0');
//     setAllowOperators(false);
//   };

//   const calculateResult = () => {
//     try {
//       let expression = display.replace(/x/g, '*'); // Replace 'x' with '*'
//       const result = eval(expression);
//       setDisplay(result.toString());
//     } catch (error) {
//       setDisplay('Error');
//     }
//     setAllowOperators(false);
//   };

//   const changeSign = () => {
//     setDisplay((prevDisplay) => {
//       let newDisplay = prevDisplay;
//       const lastIndex = prevDisplay.length - 1;
//       if (prevDisplay[lastIndex] === '-') {
//         newDisplay = prevDisplay.slice(0, -1);
//       } else if (!isNaN(prevDisplay[lastIndex])) {
//         let index = lastIndex;
//         while (index >= 0 && !isNaN(prevDisplay[index])) {
//           index--;
//         }
//         newDisplay = prevDisplay.slice(0, index + 1) + '-' + prevDisplay.slice(index + 1);
//       }
//       return newDisplay;
//     });
//   };

//   return (
//     <div className="calculator">
//       <input type="text" value={display} readOnly />
//       <div className="buttons">
//         {btnValues.map((row, rowIndex) => (
//           <div key={rowIndex} className="row">
//             {row.map((btnValue, colIndex) => (
//               <button
//                 key={colIndex}
//                 onClick={() => handleButtonClick(btnValue)}
//               >
//                 {btnValue}
//               </button>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
