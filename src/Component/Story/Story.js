import React from "react";
import "./Story.css";
import Foto1 from "../../../public/image/Emile_Waldteufel.jpg";
import Foto2 from "../../../public/image/Foto1.jpg";
const Story = () => {
    return (
        <div class="canvasStory">
            <p id="p1">Sobre mi</p>
            <p id="p2">
                Mi nombre es Mario David de Leon Muralles.
                Naci en Guatemala y tengo 21 años. Desde pequeño
                tuve interes por aprender sobre musica y aprender
                a tocar instrumentos musicales. Yo toco el piano,
                el instrumento que uso para escribir; y la guitarra
                clasica, instrumento que me gusta tocar mas
                relajadamente. Llevo mas de un año escribiendo musica.
                Otros pasatiempos incluyen
                ir al gimnasio, pintar, y nadar
                (llevo casi 20 años como nadador y entre esos un par de años compitiendo).
            </p>
            <img id="foto2" src={Foto2} alt="yo"></img>
            <p id="p3">
                Mi mayor inspiracion para escribir musica
                ha sido el gran compositor de musica de baile
                Emile Waldteufel (9 Diciembre 1837 - 12 Febrero 1915).
                Sus magicas melodias y refinados valses captaron mi
                atencion, y entre mas musica escuchaba de el, mas
                me enamoraba de su musica y de su estilo al escribir.
                Es tanta mi admiracion por el que todas mis obras
                para orquesta son escritas con el layout de la orquesta
                que Waldteufel poseia en su momento. A comparacion de
                Johann Strauss II (autor del Danubio Azul y muchos otros
                valses famosisismos), las melodias de Waldteufel son gentiles,
                sutiles y llenas de gracia. Es eso a lo que aspiro yo
                con mi musica. Seguir el estilo de Emile Waldteufel.
            </p>
            <img id="foto1" src={Foto1} alt="waldteufel"></img>

        </div>
    )
}
export default Story;