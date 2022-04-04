import {useEffect, useState} from "react";

function EffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default  EffectHook;