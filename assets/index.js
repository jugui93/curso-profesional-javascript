    import MediaPlayer from './MediaPlayer.js'
    import AutoPlay from './plugins/AutoPlay.js'
    import AutoPause from './plugins/AutoPause.js'


    const video = document.querySelector("video");
    const button1 = document.querySelector(".Play");
    const button2 = document.querySelector(".Mute");

    const player = new MediaPlayer({ el: video, plugins:[
        new AutoPlay(), new AutoPause()    
    ] }) //En nuestra función especial player es una instancia del prototipo le asignaremos el valor de video para que lo reciba en configuración. Esto lo haremos con destructuración de objetos.
    
    button1.onclick = () => player.togglePlay();
    button2.onclick = () => player.toggleMute();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log(error.message)
        })
    }