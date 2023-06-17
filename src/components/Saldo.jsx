import { useState } from "react";

const Saldo = () => {
    // useState mit intitialem Wert "", da Inhalt erst durch Inputfeld ausgelesen wird
    const [input, setInput] = useState("")
    // Zu Beginn ist der Kontostand 0 und wird durch Input verändert
    const [kontostand, setKontostand] = useState(0);


    // # Funktionen werden durch onClick-Funktion ausgelöst
    function einzahlen(){
        // Zum aktuellen Kontostand wird Input hinzugerechnet
        setKontostand(prevKonto => (prevKonto + input))
        // nach Klicken des Buttons wird das Inputfeld wieder geleert
        setInput("")
    }

    function auszahlen(){
        // Vom aktuellen Kontostand wird Input abgezogen
        setKontostand(prevKonto => (prevKonto - input))
        setInput("")
    }

    return ( 
        <>
        <section className="saldo">{kontostand} €</section>
        {/* Wenn sich Input verändert (onChange), wird der Inhalt von setInput auf den aktuellen Input-Wert gesetzt und durch Number immer in eine Nummer umgewandelt. Durch Value wird das Ergebnis des Inputfeldes auf das Element input überschrieben */}
        <input  onChange={(e) => {setInput(Number(e.target.value))}} value={input} className="geldbetrag" type="number" placeholder="Gib einen Geldbetrag ein" />
        <button onClick={einzahlen} className="einzahlen">Einzahlen</button>
        <button onClick={auszahlen} className="auszahlen">Auszahlen</button>
        </>
     );
}
 
export default Saldo;