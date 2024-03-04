document.addEventListener('DOMContentLoaded', () => {
    let breakLength = 5; // Durée de la pause en minutes
    let sessionLength = 25; // Durée de la session en minutes
    let isRunning = false; // État du timer, false signifie qu'il est arrêté
    let isSession = true; // true pour session, false pour pause
    let timerInterval = null; // Référence pour clearInterval
    let timeLeft = 25 * 60; // Temps restant en secondes

    // Mise à jour de l'affichage du temps
    function updateTimeDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('time-left').innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Fonction pour démarrer ou reprendre le timer
    function toggleTimer() {
        if (!isRunning) {
            isRunning = true;
            // Mise à jour initiale de l'affichage pour montrer la durée totale avant de commencer le décompte
            
            updateTimeDisplay();
    
            timerInterval = setInterval(() => {
                timeLeft--; // Commence le décompte après la première mise à jour de l'affichage
                if (timeLeft < 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    isRunning = false;
                    document.getElementById('beep').play(); // Jouer le son
                    switchTimer(); // Basculer entre session et pause
                } else {
                    updateTimeDisplay();
                }
            }, 1000);
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            isRunning = false;
        }
    }
    

    // Fonction pour basculer entre les sessions et les pauses
    function switchTimer() {
        isSession = !isSession;
        if (isSession) {
            timeLeft = sessionLength * 60;
            document.getElementById('timer-label').innerText = 'Session';
        } else {
            timeLeft = breakLength * 60;
            document.getElementById('timer-label').innerText = 'Pause';
        }
        // Après le changement, le timer est automatiquement redémarré
        toggleTimer();
    }

    // Réinitialisation du timer
    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        isRunning = false;
        isSession = true;
        timeLeft = sessionLength * 60;
        breakLength = 5;
        sessionLength = 25;
        document.getElementById('break-length').innerText = breakLength;
        document.getElementById('session-length').innerText = sessionLength;
        document.getElementById('timer-label').innerText = 'Session';
        updateTimeDisplay();
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
    }

    document.getElementById('start_stop').addEventListener('click', toggleTimer);
    document.getElementById('reset').addEventListener('click', resetTimer);

    // Ajout des événements pour incrémenter et décrémenter la durée des sessions et des pauses...
    


    document.getElementById('break-decrement').addEventListener('click', () => {
        if (breakLength > 1) {
            breakLength--;
            document.getElementById('break-length').innerText = breakLength;
        }
    });

    document.getElementById('break-increment').addEventListener('click', () => {
        if (breakLength < 60) {
            breakLength++;
            document.getElementById('break-length').innerText = breakLength;
        }
    });

    document.getElementById('session-decrement').addEventListener('click', () => {
        if (sessionLength > 1) {
            sessionLength--;
            timeLeft = sessionLength * 60;
            document.getElementById('session-length').innerText = sessionLength;
            if (isSession) { // Mettre à jour le timer uniquement si nous sommes en session
                updateTimeDisplay();
            }
        }
    });

    document.getElementById('session-increment').addEventListener('click', () => {
        if (sessionLength < 60) {
            sessionLength++;
            timeLeft = sessionLength * 60;
            document.getElementById('session-length').innerText = sessionLength;
            if (isSession) { // Mettre à jour le timer uniquement si nous sommes en session
                updateTimeDisplay();
            }
        }
    });
});