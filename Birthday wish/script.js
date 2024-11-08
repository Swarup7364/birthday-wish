document.addEventListener('DOMContentLoaded', function() {
    const wishButton = document.getElementById('wishButton');
    const wishMessage = document.getElementById('wishMessage');

    wishButton.addEventListener('click', function() {
        wishMessage.classList.toggle('hidden');
    });

    // Create confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti');
        
        for (let i = 0; i < 50; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.style.width = Math.random() * 10 + 'px';
            confettiPiece.style.height = Math.random() * 10 + 'px';
            confettiPiece.style.top = Math.random() * 100 + '%';
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiContainer.appendChild(confettiPiece);
        }
        
        document.body.appendChild(confettiContainer);
        setTimeout(() => document.body.removeChild(confettiContainer), 3000);
    }

    setInterval(createConfetti, 5000); // Generate confetti every 5 seconds
});
