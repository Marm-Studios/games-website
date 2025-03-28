function isTouchScreen() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function updateControlsPanel() {
  const controlsPanel = document.getElementById("controls-panel");

  if (!controlsPanel) return;

  if (isTouchScreen() && window.innerWidth < 1024) {
    controlsPanel.style.display = "flex";
  } else {
    controlsPanel.style.display = "none";
  }
}

function updateOrientationOverlay() {
  const overlay = document.getElementById("orientation-overlay");

  if (!overlay) return;

  if (window.innerWidth < window.innerHeight) {
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }
}

// Listen for orientation or resize changes.
window.addEventListener("resize", updateOrientationOverlay);
window.addEventListener("orientationchange", updateOrientationOverlay);
updateOrientationOverlay();

// updateControlsPanel();
// window.addEventListener("resize", updateControlsPanel);
// window.addEventListener("orientationchange", updateControlsPanel);

// Function to enter full-screen mode on a given element.
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE11
    element.msRequestFullscreen();
  }
}

// Function to exit full-screen mode.
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE11
    document.msExitFullscreen();
  }
}

document
  .getElementById("gamescreen-maximise-button")
  .addEventListener("click", () => {
    enterFullscreen(document.getElementById("game-frame"));
  });

// document
//   .getElementById("gamescreen-minimise-button")
//   .addEventListener("click", () => {
//     exitFullscreen();
//   });
