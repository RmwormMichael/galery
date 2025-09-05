import {Link } from "react-router-dom";
import unoImg from "../images/uno.jpg";
import dosImg from "../images/dos.jpg";
import tresImg from "../images/tres.jpg";
import cuatroImg from "../images/cuatro.jpg";
import cincoImg from "../images/cinco.jpg";
import seisImg from "../images/seis.jpg";

export const Navegacion = () => {
  return (
    <div className="container mt-3 padre">
        
        <Link to="/uno"className="links">
        <figure>
            <img src={unoImg} alt="" className="tamaño-img"/>
            <figcaption>"Izanami" (jutsu de destino).</figcaption>
        </figure>
        </Link>

        <Link to="/dos"className="links">
        <figure>
            <img src={dosImg} alt="" className="tamaño-img"/>
            <figcaption>"Susanoo" (el guerrero esquelético).</figcaption>
        </figure>
        </Link>

        <Link to="/tres"className="links">
        <figure>
            <img src={tresImg} alt="" className="tamaño-img"/>
            <figcaption>"Shurikenjutsu" (técnica de lanzamiento de shurikens).</figcaption>
        </figure>
        </Link>

        <Link to="/cuatro"className="links">
        <figure>
            <img src={cuatroImg} alt="" className="tamaño-img"/>
            <figcaption>"Katon: Gōkakyū" (Gran Bola de Fuego).</figcaption>
        </figure>
        </Link>

        <Link to="/cinco"className="links">
        <figure>
            <img src={cincoImg} alt="" className="tamaño-img"/>
            <figcaption>"Amaterasu" (su poder de fuego negro).</figcaption>
        </figure>
        </Link>

        <Link to="/seis"className="links">
        <figure>
            <img src={seisImg} alt="" className="tamaño-img"/>
            <figcaption>"Tsukuyomi" (ilusiones genjutsu).</figcaption>
        </figure>
        </Link>
    </div>  
  )
}
