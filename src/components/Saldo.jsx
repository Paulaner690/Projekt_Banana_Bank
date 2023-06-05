import { useState } from "react";

const Saldo = () => {
    const [input, setInput] = useState("")
    const [kontostand, setKontostand] = useState(0);

    function einzahlen(){
        setKontostand(prevKonto => (prevKonto + input))
        setInput("")
    }

    function auszahlen(){
        setKontostand(prevKonto => (prevKonto - input))
        setInput("")
    }

    return ( 
        <>
        <section className="saldo">{kontostand} €</section>
        <input  onChange={(e) => {setInput(Number(e.target.value))}} value={input} className="geldbetrag" type="number" placeholder="Gib einen Geldbetrag ein" />
        <button onClick={einzahlen} className="einzahlen">Einzahlen</button>
        <button onClick={auszahlen} className="auszahlen">Auszahlen</button>
        </>
     );
}
 
export default Saldo;