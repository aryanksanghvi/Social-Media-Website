function sv(id, vi){
    document.getElementById(id).style.display = vi;
  }

window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    maxParticles: 180,
  });
};