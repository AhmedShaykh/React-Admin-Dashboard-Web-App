import React, { useState, useEffect, useRef } from 'react';
import Hooks from './Hooks';

const Ref = () => {

  const [myData, setMyData] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  })

  const changeStyle = () => {
    console.log(`Change Data ` + myData);
  }

  return (
    <div className='hooks'>
      <h1 style={{ marginTop: "3rem" }}>UseRef</h1>
      <div className="input">
        <input
          type="text"
          value={myData}
          onChange={(e) => setMyData(e.target.value)} />
        <p>The Number of times Render: {count.current}</p>
        <button style={{ paddingTop: "0.5rem", width: "20%" }}
          onClick={changeStyle}>Submit</button>
      </div>
      <Hooks />
    </div>
  )
}

export default Ref;