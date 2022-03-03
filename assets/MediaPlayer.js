function MediaPlayer(config) { //A nuestra función madre o prototipo le pasamos una configuración. Esta configuración lo que va a tener es el elemento video original. Le asignamos a this.media el elemento video.
    this.media = config.el;
    this.plugins = config.plugins || [];
    
    this._initPlugins();
  };

MediaPlayer.prototype._initPlugins = function(){
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = value
      }
    };
    this.plugins.forEach(plugin =>{
        plugin.run(player);
    })
};

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () { //A la función extendida le asignamos play() a this.media para que se ejecute cuando presionemos el botón.
    this.media.paused ? this.play() : this.pause(); 
  };

MediaPlayer.prototype.mute = function () { //
    this.media.muted = true; 
  };

MediaPlayer.prototype.unmute = function () { //
    this.media.muted = false; 
  };

MediaPlayer.prototype.toggleMute = function () {
    this.media.muted ? this.unmute() : this.mute();
}
export default MediaPlayer