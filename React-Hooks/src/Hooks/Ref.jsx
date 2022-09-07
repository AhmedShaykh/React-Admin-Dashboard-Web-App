import React, { useState, useRef, useMemo } from 'react'

const Ref = () => {

  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  }

  const countNumber = (num) => {
    console.log(`Testing Data`, num)
    return num;
  }

  const checkData = countNumber(myNum);

  return (
    <div className='hooks'>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My New Number : {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {!show ? "You Clicked me" : "Click me plz"}
      </button>
    </div>
  )
}

export default Ref;