let personajes1 = [
    {
        nombre: 'Golem',
        src: './imagenes/golem.png',
        descripcion: "Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3"
    },
    {
        nombre: 'Arquero',
        src: './imagenes/arquero.png',
        descripcion: "Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5."
    },
    {
        nombre: 'Bruja',
        src: './imagenes/bruja.png',
        descripcion: "Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha."
    },
    {
        nombre: 'Caballero',
        src: './imagenes/caballero.png',
        descripcion: "Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria."
    },
    {
        nombre: 'Principe',
        src: './imagenes/principe.png',
        descripcion: "Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo."
    }
]
let contador = 0;
document.addEventListener('DOMContentLoaded', () => {
    // Cargo los botones de la pagina
    const btnadelante = document.getElementById('adelante');
    const btnatras = document.getElementById('atras');
    const btnpersonaje = document.querySelector('#informacion');
    const btnvolver = document.getElementById('volver');
    const btnnuevoper = document.getElementById('nuevoper');

    // Secciones donde se va amostrar el contenido
    const imagen = document.querySelector('#img');
    const descripcion = document.querySelectorAll('.descripcion');
    const formulario = document.getElementById('nuevo');

    // secciones que aparecen o desaparecen dependiendo de la funcion
    const divbotones = document.getElementById('botones');
    const divdescripcion = document.getElementById('infopersonaje');

    btnvolver.addEventListener('click', () => {
        divbotones.style.display = 'flex';
        divdescripcion.style.display = 'none';
        btnvolver.style.display = 'none';
    })

    btnpersonaje.addEventListener('click', () => {
        divdescripcion.style = 'display:flex';
        divdescripcion.style.animationName = 'muevete';
        divdescripcion.style.animationDuration = '1s';
        divdescripcion.style.animationTimingFunction = 'easy-in';
        btnvolver.style.animationName = 'muevete1';
        btnvolver.style.animationDuration = '1s';
        btnvolver.style.animationTimingFunction = 'easy-in';
        btnvolver.style.display = 'block';
        divbotones.style.display = 'none';
    })

    btnadelante.addEventListener('click', () => {
        btnatras.disabled = false;
        btnatras.style = "background-color:var(--botones)";
        contador += 1;
        if (contador >= (personaje.length - 1)) {
            btnadelante.disabled = true;
            btnadelante.style = "background-color:gray";
        }
        console.log(contador);
        imagen.setAttribute('src', personaje[contador].src);
        btnpersonaje.innerHTML = personaje[contador].nombre;
        descripcion[0].innerHTML = personaje[contador].nombre;
        descripcion[1].innerHTML = personaje[contador].descrip;

    })


    btnatras.addEventListener('click', () => {

        btnadelante.disabled = false;
        btnadelante.style = "background-color:var(--botones)";
        if (contador <= 1) {
            btnatras.disabled = true;
            btnatras.style = "background-color:gray";
        }
        console.log(contador);
        contador -= 1;
        imagen.setAttribute('src', personaje[contador].src);
        btnpersonaje.innerHTML = personaje[contador].nombre;
        descripcion[0].innerHTML = personaje[contador].nombre;
        descripcion[1].innerHTML = personaje[contador].descrip;

    })

    btnnuevoper.addEventListener('click', () => {
        formulario.style.display = 'flex';
    })

    //Guardo en una variable el archivo recibido a traves del formulario
    let archivo = document.getElementById('archivo');

    // verifico si ya fue creada la base de datos en mi localstorage, en caso de que no, se crea un nuevo arreglo
    let personaje = JSON.parse(localStorage.getItem('personaje')) || [];

    //Guardo mi objeto en el local storage
    function guardarpersonaje(valor) {
        localStorage.setItem('personaje', JSON.stringify(personaje));
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(event);
        //convierto la imagen en una cadena de caracteres para guardar en el local storage
        const fr = new FileReader();

        fr.readAsDataURL(archivo.files[0]);

        fr.addEventListener('load', () => {

            const url = fr.result;

            const objetopersonaje = {
                nombre: event.target[0].value.trim(),
                src: url,
                descrip: event.target[2].value
            };

            //Cargo el personaje al Local Storage
            personaje.push(objetopersonaje);

            //Creo el espacio en el local Storage con el nombre personaje
            guardarpersonaje(personaje);
            console.table(objetopersonaje);

            //Reseteo el formulario de nuevo
            formulario.reset();
            formulario.style.display = "none";
        })

    })
})

