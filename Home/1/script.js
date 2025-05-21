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