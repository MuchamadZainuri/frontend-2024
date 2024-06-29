import { useEffect, useState } from "react";



const Counter = () => {
    const [angka, setAngka] = useState(10);

    const addAngka = () => setAngka(angka + 1);

    const manipulationDOM = () => { 
        console.log("Lifecycle: Component dimount");
        document.title = `Result: ${angka}`;
    }

    useEffect(manipulationDOM, [angka]);

    console.log("Lifecycle: Component dirender");
    
    return (
        <div>
            <p>Result: {angka}</p>
            <button onClick={addAngka}>Add</button>
            <br />
        </div>
    )
}

export default Counter;
