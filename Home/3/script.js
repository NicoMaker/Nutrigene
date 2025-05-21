// Create random paw prints
const pawPrints = document.getElementById('pawPrints');
const numberOfPaws = 20;

for (let i = 0; i < numberOfPaws; i++) {
    const paw = document.createElement('div');
    paw.classList.add('paw');

    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Random rotation
    const rotation = Math.random() * 360;

    paw.style.left = `${x}%`;
    paw.style.top = `${y}%`;
    paw.style.transform = `rotate(${rotation}deg)`;

    pawPrints.appendChild(paw);
}

// Simulazione dell'immagine di sfondo nella sezione arancione
const orangeBg = document.querySelector('.background-image');
orangeBg.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\"><circle fill=\"%23ffffff\" cx=\"250\" cy=\"250\" r=\"240\" opacity=\"0.5\"/><circle fill=\"%23ffffff\" cx=\"150\" cy=\"150\" r=\"50\" opacity=\"0.5\"/><circle fill=\"%23ffffff\" cx=\"350\" cy=\"150\" r=\"50\" opacity=\"0.5\"/><circle fill=\"%23ffffff\" cx=\"150\" cy=\"350\" r=\"50\" opacity=\"0.5\"/><circle fill=\"%23ffffff\" cx=\"350\" cy=\"350\" r=\"50\" opacity=\"0.5\"/></svg>')";