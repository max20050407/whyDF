// import React, { useState } from 'react';
// import styles from './input.module.css';

// export function DynamicInput() {
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     const inputStyle = {
//         width: `${(inputValue.length + 1) * 8}px`,
//         minWidth: '415px', // Минимальная ширина
//     };

//     return (
//         <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             style={inputStyle}
//             className={styles.dynamicInput}
//             placeholder="Найти студента!"
//         />
//     );
// }
