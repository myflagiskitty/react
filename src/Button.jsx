import React, { useState } from 'react'

export default function Button(prop) {
    const [count, setCount] = useState(false);

    function click() {
        prop.onClick(prop.name);
    }

    return (
        <div>
            <span onClick={click}>{prop.name}</span>
            <span onClick={() => setCount(!count)}>{prop.type}</span>
            <span>{count.toString()}</span>
        </div>
    )
}
