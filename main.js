const chronologie = document.getElementById('chronologie'); 
const chronologie2 = document.getElementById('chronologie-2');
const chronologie3 = document.getElementById('chronologie-3');
const chronologie4 = document.getElementById('chronologie-4');
const chronologie5 = document.getElementById('chronologie-5');

const anneeSlider = document.getElementById('anneeSlider');

document.getElementById('btn-nav').addEventListener('mouseover', () => {
    document.getElementById('btn-nav').style.backgroundColor = '#1A7D9A';
});

document.getElementById('btn-nav').addEventListener('mouseout', () => {
    document.getElementById('btn-nav').style.backgroundColor = '#2E93DC';
});

function light() {
    let body = document.getElementsByClassName('light-mode');
    body.classList.toggle("light-mode");

}


function updateSections() {
    const anneeValue = anneeSlider.value;

    chronologie.innerHTML = '';
    chronologie2.style.display = 'none';
    chronologie3.style.display = 'none';
    chronologie4.style.display = 'none';
    chronologie5.style.display = 'none';
    
    if (anneeValue >= 1957 && anneeValue <= 1965) {
        chronologie.innerHTML = chronologie2.innerHTML; 
    } else if (anneeValue >= 1963 && anneeValue <= 1971) {
        chronologie.innerHTML = chronologie3.innerHTML; 
    } else if (anneeValue >= 1971 && anneeValue <= 1990) {
        chronologie.innerHTML = chronologie4.innerHTML; 
    } else if (anneeValue >= 1990) {
        chronologie.innerHTML = chronologie5.innerHTML; 
    } else {
        chronologie.innerHTML = `
            <h4>Chronologie des Génération d'ordinateur éléctronique</h4>
            <div class="container-chronologie">
                <h5>1ère Génération (1936-1956)</h5>
                <img src="./img/eniac-1.png" alt="">
                <p>Entre les années 1940 et le milieu des années 1950, l’émergence de la première génération d’ordinateurs a marqué une étape importante de l’histoire. Ces machines, alimentées par des tubes à vide, ont annoncé le début de l’informatique numérique.</p>
            <button class="btn-more">Read more</button>
                </div>
        `;
    }
}

anneeSlider.addEventListener('input', () => {
    valueReel.textContent = anneeSlider.value;
});

anneeSlider.addEventListener('input', updateSections);

updateSections();




