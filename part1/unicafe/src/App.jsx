import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App =() =>{
  //save clicks of each button to it's own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //for goodFunc
  const goodFunc =() =>{
    setGood(good + 1);
  }

  const neutralFunc =() =>{
    setNeutral(neutral + 1);
  }

  const badFunc =() =>{
    setBad(bad + 1);
  }

  return (
    <>
    <div className='feedback'>
      <h1>give feedback</h1>
      {/* actually this is component great and actually passing the onClick and text ok  */}
      <Button onClick={goodFunc} text="good" />
      <Button onClick={neutralFunc} text="neutral" />
      <Button onClick={badFunc} text="bad" /> 

      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>

    </>
  );
}

export default App;