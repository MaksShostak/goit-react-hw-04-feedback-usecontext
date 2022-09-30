import { createContext } from 'react';
import { useState } from 'react';
const initialState = { good: 0, neutral: 0, bad: 0 };
export const MyContext = createContext(initialState);

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const addFeedback = option => {
    console.log(option);
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  return (
    <MyContext.Provider value={{ state, addFeedback }}>
      {children}
    </MyContext.Provider>
  );
};
