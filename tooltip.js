const icono = document.querySelector("#icono");
const tooltip= document.querySelector("#tooltip");

const cambiarPosicionTooltip = ()=>{
    const x = icono.offsetLeft;
    const y = icono.offsetTop;
    
    const ancho = tooltip.clientWidth;
    const alto = tooltip.clientHeight;
    
    const izquierda = x - (ancho / 2) + 15;
    const arriba = y - (alto + 20);
    
    tooltip.style.left = `${izquierda}px`;
    tooltip.style.top = `${arriba}px`;
}

window.addEventListener("load", ()=> cambiarPosicionTooltip() );
window.addEventListener("resize", ()=> cambiarPosicionTooltip() );

icono.addEventListener("mouseenter", ()=>{
    tooltip.classList.add("activo");
    cambiarPosicionTooltip();
});

tooltip.addEventListener("mouseleave", ()=> tooltip.classList.remove("activo"));

let timer;

icono.addEventListener("mouseleave", ()=>{
    timer= setTimeout(()=>{
        tooltip.classList.remove("activo");
    }, 500)
});

tooltip.addEventListener("mouseenter", ()=> clearTimeout(timer));