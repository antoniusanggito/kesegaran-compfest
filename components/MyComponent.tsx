import { useState } from 'react';

const MyComponent = ({ query, meme }) => {
  const [input, setInput] = useState(''); // '' is the initial state value
  return (
    <div>
        <label>Please specify:</label>
        <input value={input} placeholder='search for memes...' onInput={e => {
            setInput(e.target.value)
            console.log(input)
        }}/>
    </div>
  );
}

export default MyComponent