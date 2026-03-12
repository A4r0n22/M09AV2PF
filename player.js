function getMedia(id) {
    return document.getElementById(id);
}

function playMedia(id) {
    const media = getMedia(id);
    if (media) media.play();
}

function pauseMedia(id) {
    const media = getMedia(id);
    if (media) media.pause();
}

function volumeUp(id) {
    const media = getMedia(id);
    if (media && media.volume < 1) media.volume = Math.min(1, media.volume + 0.1);
}

function volumeDown(id) {
    const media = getMedia(id);
    if (media && media.volume > 0) media.volume = Math.max(0, media.volume - 0.1);
}

function forward(id) {
    const media = getMedia(id);
    if (media) media.currentTime += 5;
}

function rewind(id) {
    const media = getMedia(id);
    if (media) media.currentTime = Math.max(0, media.currentTime - 5);
}

function speedUp(id) {
    const media = getMedia(id);
    if (media) media.playbackRate = Math.min(2.5, media.playbackRate + 0.25);
}

function speedDown(id) {
    const media = getMedia(id);
    if (media) media.playbackRate = Math.max(0.25, media.playbackRate - 0.25);
}

function toggleMute(id) {
    const media = getMedia(id);
    if (media) media.muted = !media.muted;
}

// Backward compatibility with previous inline handlers.
function playAudio(id) {
    playMedia(id);
}

function pauseAudio(id) {
    pauseMedia(id);
}

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            if (window.Swal) {
                Swal.fire({
                    icon: "warning",
                    title: "Falten dades",
                    text: "Omple tots els camps abans d'enviar."
                });
            }
            return;
        }

        if (window.Swal) {
            Swal.fire({
                icon: "success",
                title: "Missatge enviat",
                text: "Gracies per contactar. Et respondre aviat.",
                confirmButtonColor: "#d64545"
            });
        } else {
            alert("Missatge enviat correctament.");
        }

        contactForm.reset();
    });
});
