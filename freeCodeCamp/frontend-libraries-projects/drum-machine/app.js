document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.drum-pad').forEach(pad => {
        pad.addEventListener('click', () => {
            const sound = pad.querySelector('.clip');
            sound.currentTime = 0;
            sound.play();
            updateDisplay(pad.id);
        });
    });

    document.addEventListener('keydown', (e) => {
        const sound = document.getElementById(e.key.toUpperCase());
        if (sound) {
            const pad = sound.parentElement;
            sound.currentTime = 0;
            sound.play();
            updateDisplay(pad.id);
        }
    });
    function updateDisplay(name) {
        document.getElementById('display').textContent = name;
    }
})

