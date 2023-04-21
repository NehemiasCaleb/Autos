const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')



const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

const years=document.createElement('option')
const max = new Date().getFullYear();
const min = max-10;

for (let i=max; i>min;i--){
    const option=document.createElement('option')
    option.value=i
    option.innerHTML=i
    document.querySelector('#year').appendChild(option)
}

document.addEventListener('DOMContentLoaded' ,()=>{
    mostrarAutos(autos)
})

marca.addEventListener('input',e =>{
    datosBusqueda.marca=e.target.value;

    filtrarAuto()
})

year.addEventListener('input',e=>{
    datosBusqueda.year=Number(e.target.value)

    filtrarAuto()
})
minimo.addEventListener('input',e=>{
    datosBusqueda.minimo=Number(e.target.value)

    filtrarAuto()
})
maximo.addEventListener('input',e=>{
    datosBusqueda.maximo=Number(e.target.value)

    filtrarAuto()
})
puertas.addEventListener('input',e=>{
    datosBusqueda.puertas=Number(e.target.value)

    filtrarAuto()
})
transmision.addEventListener('input',e=>{
    datosBusqueda.transmision=e.target.value

    filtrarAuto()
})
color.addEventListener('input',e=>{
    datosBusqueda.color=e.target.value

    filtrarAuto()
})

function mostrarAutos(autos){
    const contenedor=document.querySelector('#resultado')

    autos.forEach(auto=>{
        const autoHTML=document.createElement('p')
        autoHTML.innerHTML=`
        <p>${auto.marca} ${auto.modelo} -${auto.year} - ${auto.puertas} PUERTAS - TRANSMISION ${auto.transmision} - ${auto.precio} - Color: ${auto.color} </p>
        
        `
        contenedor.appendChild(autoHTML)
    });
}

function limpiarHTML(){
    const contenedor=document.querySelector('#resultado')
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}


function noResultado(){
    limpiarHTML()
    const noResultado=document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.appendChild(document.createTextNode('No se obtuvo ningunu resultado'))
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    console.log(resultado)
    if (resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

function filtrarMarca(auto){
    if (datosBusqueda.marca){
        return autos.marca===datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto){
    if (datosBusqueda.year){
        return auto.year===datosBusqueda.year
    }
    return auto;
}

function filtrarMinimo(auto){
    if (datosBusqueda.minimo){
        return auto.precio===datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    if (datosBusqueda.maximo){
        return auto.precio===datosBusqueda.maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    if (datosBusqueda.puertas){
        return auto.puertas===datosBusqueda.puertas
    }
    return auto;
}

function filtrarTransmision(auto){
    if (datosBusqueda.transmision){
        return auto.transmision===datosBusqueda.transmision
    }
    return auto;
}

function filtrarColor(auto){
    if (datosBusqueda.color){
        return auto.color===datosBusqueda.color
    }
    return auto;
}
