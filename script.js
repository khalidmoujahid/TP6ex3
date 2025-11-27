function showDocumentInfo() {
    const infoDiv = document.getElementById('documentInfo');
    infoDiv.innerHTML = `
        <strong>Informations du document:</strong><br>
        Titre: ${document.title}<br>
        URL: ${document.URL}<br>
        Encodage: ${document.characterSet}<br>
        Dernière modification: ${document.lastModified}
    `;
    console.log("Document info displayed");
}

function testSelectors() {
    const resultsDiv = document.getElementById('selectorResults');

    if (!document.getElementById('testElement1')) {
        const testDiv1 = document.createElement('div');
        testDiv1.id = 'testElement1';
        testDiv1.className = 'test-class';
        testDiv1.textContent = 'Élément de test 1';
        resultsDiv.appendChild(testDiv1);
        
        const testDiv2 = document.createElement('div');
        testDiv2.id = 'testElement2';
        testDiv2.className = 'test-class';
        testDiv2.textContent = 'Élément de test 2';
        resultsDiv.appendChild(testDiv2);
    }

    const byId = document.getElementById('testElement1');
    const byClass = document.getElementsByClassName('test-class');
    const byTag = document.getElementsByTagName('div');
    const byQuery = document.querySelector('.test-class');
    const byQueryAll = document.querySelectorAll('.test-class');
    
    resultsDiv.innerHTML += `
        <br><strong>Résultats des sélecteurs:</strong><br>
        getElementById: ${byId ? 'Trouvé' : 'Non trouvé'}<br>
        getElementsByClassName: ${byClass.length} éléments<br>
        getElementsByTagName: ${byTag.length} éléments<br>
        querySelector: ${byQuery ? 'Trouvé' : 'Non trouvé'}<br>
        querySelectorAll: ${byQueryAll.length} éléments
    `;
    
    console.log("Selectors test completed");
}

function changeWithHTML() {
    const demoDiv = document.getElementById('contentDemo');
    demoDiv.innerHTML = '<strong>Contenu modifié avec <em>innerHTML</em></strong>';
    console.log("Content changed with innerHTML");
}

function changeWithText() {
    const demoDiv = document.getElementById('contentDemo');
    demoDiv.textContent = 'Contenu modifié avec textContent - les balises <strong>ne sont pas interprétées</strong>';
    console.log("Content changed with textContent");
}

function showLinkAttributes() {
    const link = document.getElementById('demoLink');
    const infoDiv = document.getElementById('attributeInfo');
    
    const href = link.getAttribute('href');
    const target = link.getAttribute('target') || 'non défini';
    
    infoDiv.innerHTML = `
        Attributs du lien:<br>
        href: ${href}<br>
        target: ${target}<br>
        Classe: ${link.className}
    `;
    console.log("Link attributes displayed");
}

function modifyLinkAttributes() {
    const link = document.getElementById('demoLink');
    link.setAttribute('target', '_blank');
    link.setAttribute('data-custom', 'valeur-personnalisée');
    link.textContent = 'Lien modifié (ouvre dans un nouvel onglet)';
    
    showLinkAttributes();
    console.log("Link attributes modified");
}

function applyStyles() {
    const styleDemo = document.getElementById('styleDemo');
    styleDemo.style.color = 'red';
    styleDemo.style.backgroundColor = 'lightyellow';
    styleDemo.style.fontSize = '18px';
    styleDemo.style.padding = '15px';
    styleDemo.style.border = '2px solid #3498db';
    styleDemo.style.borderRadius = '8px';
    console.log("Styles applied");
}

function resetStyles() {
    const styleDemo = document.getElementById('styleDemo');
    styleDemo.style = ''; 
    console.log("Styles reset");
}

function addClass() {
    const classDemo = document.getElementById('classDemo');
    classDemo.classList.add('active', 'highlight-demo');
    console.log("Classes added");
}

function removeClass() {
    const classDemo = document.getElementById('classDemo');
    classDemo.classList.remove('highlight-demo');
    console.log("Classes removed");
}

function toggleClass() {
    const classDemo = document.getElementById('classDemo');
    classDemo.classList.toggle('active');
    console.log("Class toggled");
}

let elementCount = 0;

function createNewElement() {
    const area = document.getElementById('elementCreationArea');
    elementCount++;
    
    const newElement = document.createElement('div');
    newElement.textContent = `Élément créé dynamiquement #${elementCount}`;
    newElement.style.padding = '10px';
    newElement.style.margin = '5px 0';
    newElement.style.backgroundColor = '#e8f4fc';
    newElement.style.border = '1px solid #3498db';
    newElement.style.borderRadius = '5px';
    
    area.appendChild(newElement);
    console.log("New element created");
}

function removeLastElement() {
    const area = document.getElementById('elementCreationArea');
    if (area.lastChild && area.lastChild.nodeType === 1) {
        area.removeChild(area.lastChild);
        if (elementCount > 0) elementCount--;
        console.log("Last element removed");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const eventButton = document.getElementById('eventButton');
    const eventLog = document.getElementById('eventLog');
    
    eventButton.addEventListener('click', function() {
        eventLog.innerHTML += 'Clic détecté!<br>';
        console.log("Button clicked");
    });

    eventButton.addEventListener('mouseover', function() {
        eventLog.innerHTML += 'Souris sur le bouton<br>';
        console.log("Mouse over button");
    });

    eventButton.addEventListener('mouseout', function() {
        eventLog.innerHTML += 'Souris quitte le bouton<br>';
        console.log("Mouse out button");
    });
});

function startTimer() {
    const display = document.getElementById('timerDisplay');
    display.innerHTML = 'Minuteur démarré...';
    console.log("Timer started");
    
    setTimeout(function() {
        display.innerHTML += '<br>⏰ Ding! 3 secondes écoulées!';
        console.log("Timer finished after 3 seconds");
    }, 3000);
}

function startCounter() {
    const display = document.getElementById('timerDisplay');
    display.innerHTML = 'Compteur démarré:';
    console.log("Counter started");
    
    let count = 0;
    const interval = setInterval(function() {
        count++;
        display.innerHTML += ` ${count}`;
        console.log(`Counter: ${count}`);
        
        if (count >= 5) {
            clearInterval(interval);
            display.innerHTML += ' - Terminé!';
            console.log("Counter finished");
        }
    }, 1000);
}

function createCustomElement() {
    const text = document.getElementById('elementText').value || 'Nouvel élément';
    const type = document.getElementById('elementType').value;
    const area = document.getElementById('interactiveArea');
    
    const newElement = document.createElement(type);
    newElement.textContent = text;
    newElement.style.padding = '10px';
    newElement.style.margin = '5px';
    newElement.style.display = 'inline-block';
    newElement.style.border = '1px solid #ddd';
    newElement.style.borderRadius = '4px';
    newElement.style.cursor = 'pointer';

    newElement.addEventListener('click', function() {
        this.style.backgroundColor = '#ffeaa7';
        console.log("Element clicked");
    });
    
    newElement.addEventListener('dblclick', function() {
        area.removeChild(this);
        console.log("Element double-clicked and removed");
    });
    
    area.appendChild(newElement);
    document.getElementById('elementText').value = '';
    console.log(`Custom ${type} element created`);
}

function clearInteractiveArea() {
    const area = document.getElementById('interactiveArea');
    area.innerHTML = '';
    console.log("Interactive area cleared");
}

function addRandomStyle() {
    const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0', '#ff9ff3', '#54a0ff'];
    const areas = document.getElementById('interactiveArea').children;
    
    for (let element of areas) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.backgroundColor = randomColor;
        element.style.color = 'white';
        element.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    }
    console.log("Random styles applied");
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8',
        warning: '#ffc107'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Guide JavaScript DOM chargé avec succès!");
    console.log("Fonctions disponibles:");
    console.log("- showDocumentInfo()");
    console.log("- testSelectors()");
    console.log("- changeWithHTML() / changeWithText()");
    console.log("- showLinkAttributes() / modifyLinkAttributes()");
    console.log("- applyStyles() / resetStyles()");
    console.log("- addClass() / removeClass() / toggleClass()");
    console.log("- createNewElement() / removeLastElement()");
    console.log("- startTimer() / startCounter()");
    console.log("- createCustomElement() / clearInteractiveArea() / addRandomStyle()");
});