import React, { useState, useMemo } from 'react';

const Hooks = () => {

    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setMyNum(myNum + 1);
    }

    const countNumber = (num) => {
        console.log(`Testing Data`, num)
        return num;
    }

    const checkData = useMemo(() => {
        return countNumber(myNum);
    }, [myNum])

    return (
        <div className='hooks'>
            <h1>UseMemo</h1>
            <button onClick={getValue} style={{ backgroundColor: "red" }}>
                Counter
            </button>
            <p>My New Number : {checkData}</p>
            <button onClick={() => setShow(!show)}>
                {show ? "You Clicked me" : "Click me plz"}
            </button>
        </div>
    )
}

export default Hooks;