const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeMenu');

  // Abrir y cerrar menú
hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('active');
  });

overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('active');
  });

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      overlay.classList.remove('active');
    });
  });

  // Configura Panzoom sobre el contenedor completo (imagen + botones)
const zoomArea = document.getElementById('zoomArea'); // Asegúrate de agregar este div en el HTML
  // Detectar orientación: true = vertical, false = horizontal
const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  // Definir maxScale según orientación
const maxSca = isPortrait ? 6 : 3;
const panzoomInstance = Panzoom(zoomArea, {
    maxScale: maxSca,
    minScale: 1,
    startScale: 1,
  });
  // Ajustar maxScale dinámicamente al rotar pantalla
window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const isPortraitNow = window.matchMedia("(orientation: portrait)").matches;
      const newMaxScale = isPortraitNow ? 6 : 3;

      panzoomInstance.setOptions({ maxScale: newMaxScale });

      const currentScale = panzoomInstance.getScale();

    // Si el zoom actual es mayor al nuevo máximo, ajústalo
      if (currentScale > newMaxScale) {
        panzoomInstance.zoom(newMaxScale, {
          animate: true
        });
      }
    }, 300); // Esperar a que termine de rotar
  });


  // Permite hacer zoom con la rueda del ratón
zoomArea.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);

  // Botón para resetear zoom
const resetButton = document.getElementById('resetZoom');
  resetButton.addEventListener('click', () => {
    panzoomInstance.reset();
  });

  // Modal de video
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

videoModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-video');
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load();
    modalVideo.play();
  });

videoModal.addEventListener('hidden.bs.modal', function () {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

function zoomRelativoSinPan(relX, relY, scale = 2, panXRel = 0, panYRel = 0) {
    const zoomArea = document.getElementById('zoomArea');

  // Paso 1: reset visual animado
    panzoomInstance.reset({ animate: true });

  // Paso 2: esperar unos milisegundos reales (no solo un frame)
    setTimeout(() => {
      const zoomRect = zoomArea.getBoundingClientRect();

      const focalX = zoomRect.width * relX;
      const focalY = zoomRect.height * relY;

    // Paso 3: aplicar el zoom limpio
      panzoomInstance.zoom(scale, {
        focal: { x: focalX, y: focalY },
        animate: true
      });

    // Paso 4: aplicar paneo si se necesita
      const panX = zoomRect.width * panXRel;
      const panY = zoomRect.height * panYRel;
      panzoomInstance.pan(panX, panY, { animate: true });
    }, 300); // Tiempo necesario para que el reset se termine de aplicar visualmente
  }


document.getElementById('ZoomAdm').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
    // Si está en vertical
      zoomRelativoSinPan(0.4584, 0.5066, 6, 0.04, 0.06);
    } else {
    // Si está en horizontal
      zoomRelativoSinPan(0.40, 0.50, 3, 0.04, -0.02);
    }
    });

document.getElementById('ZoomInf').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3656, 0.4045, 6, 0.13, 0.15);
    } else {
      zoomRelativoSinPan(0.3649, 0.4092, 3, 0.13, 0.09);
    }
    });
  
document.getElementById('ZoomIng').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3891, 0.3210, 5, 0.11, 0.24);
    } else {
      zoomRelativoSinPan(0.3891, 0.3210, 3, 0.11, 0.16);
    }
    });
    
document.getElementById('ZoomAgr').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.6563, 0.4780, 6, -0.15, 0.10);
    } else {
      zoomRelativoSinPan(0.6563, 0.4780, 2.5, -0.15, -0.02);
    }
    });
  
document.getElementById('ZoomVet').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.8174, 0.2941, 6, -0.33, 0.35);
    } else {
      zoomRelativoSinPan(0.8174, 0.2941, 2.5, -0.30, 0.20);
    }
    });
    
document.getElementById('ZoomExp').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3656, 0.4045, 6, -0.02, 0.13);
    } else {
      zoomRelativoSinPan(0.3649, 0.4092, 2.5, -0.02, -0.05);
    }
    });
  
document.getElementById('ZoomDep').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.5523, 0.2531, 6, -0.06, 0.40);
    } else {
      zoomRelativoSinPan(0.5523, 0.2531, 2.4, -0.06, 0.23);
    }
    });
    
document.getElementById('ZoomTal').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.8019, 0.4548, 5.8, -0.29, 0.20);
    } else {
      zoomRelativoSinPan(0.8019, 0.4548, 2.8, -0.28, 0.06);
    }
    });
  
document.getElementById('ZoomHos').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.2705, 0.3856, 6, 0.25, 0.21);
    } else {
      zoomRelativoSinPan(0.2705, 0.3856, 2.8, 0.25, 0.09);
    }
});

function Pip() {
    var sound = document.getElementById("SOni");
    sound.play();
}

function actualizarTamañoDeBotones() {
  const escalaActual = panzoomInstance.getScale();
  const escalaVisual = 1 / escalaActual; // inverso para "cancelar" visualmente el zoom

  document.querySelectorAll('.hotspot-btn').forEach(btn => {
    btn.style.setProperty('--hotspot-scale', escalaVisual);
  });
}

// Ejecuta al inicio por si el mapa ya está escalado
actualizarTamañoDeBotones();

// Se ejecuta cada vez que el usuario hace zoom o pan (en PC o móvil)
zoomArea.addEventListener('panzoomchange', actualizarTamañoDeBotones);

