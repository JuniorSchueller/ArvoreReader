function arvoreReader() {
    let isStopped = true;
    const nextPageButton = document.querySelector('#root > main > div.sc-gTRrQi.cFSQkY > div:nth-child(3) > button');
    //const pageCount = document.querySelector('#footer-nav > div.sc-dSJDGZ.gTLZcZ > div.sc-iVCKna.dpHZdz > span');

    const floatingButton = document.createElement('div');
    floatingButton.style.position = 'fixed';
    floatingButton.style.top = '20px';
    floatingButton.style.right = '20px';
    floatingButton.style.width = '60px';
    floatingButton.style.height = '60px';
    floatingButton.style.borderRadius = '50%';
    floatingButton.style.background = '#ffffff';
    floatingButton.style.display = 'flex';
    floatingButton.style.alignItems = 'center';
    floatingButton.style.justifyContent = 'center';
    floatingButton.style.cursor = 'pointer';
    floatingButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    floatingButton.style.transition = 'background 0.3s ease, transform 0.3s ease';
    floatingButton.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = 'https://i.imgur.com/9n0wbej.png';
    img.style.width = '50px';
    img.style.height = 'auto';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    floatingButton.appendChild(img);
    document.body.appendChild(floatingButton);

    const createMenu = () => {
        const menu = document.createElement('div');
        menu.style.position = 'fixed';
        menu.style.top = '80px';
        menu.style.right = '20px';
        menu.style.width = '320px';
        menu.style.backgroundColor = '#ffffff';
        menu.style.padding = '20px';
        menu.style.borderRadius = '15px';
        menu.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        menu.style.display = 'none';
        menu.style.zIndex = '1000';
        menu.style.transition = 'all 0.3s ease';
        menu.style.transform = 'translateY(-20px)';
        menu.style.opacity = '0';

        setTimeout(() => {
            menu.style.transform = 'translateY(0)';
            menu.style.opacity = '1';
        }, 100);
        
        const title = document.createElement('h2');
        title.innerText = 'ÁrvoreReader';
        title.style.marginBottom = '20px';
        title.style.fontSize = '20px';
        title.style.color = '#007bff';
        title.style.textAlign = 'center';
        menu.appendChild(title);

        const speedMinLabel = document.createElement('label');
        speedMinLabel.innerText = 'Tempo mínimo para passar a página (em segundos):';
        speedMinLabel.style.fontWeight = 'bold';
        speedMinLabel.style.color = '#333';
        speedMinLabel.style.marginTop = '20px';
        speedMinLabel.style.marginBottom = '8px';
        menu.appendChild(speedMinLabel);

        const speedMinInput = document.createElement('input');
        speedMinInput.type = 'number';
        speedMinInput.value = 5;
        speedMinInput.step = 1;
        speedMinInput.min = 1;
        speedMinInput.style.width = '100%';
        speedMinInput.style.padding = '10px';
        speedMinInput.style.border = '1px solid #ccc';
        speedMinInput.style.borderRadius = '8px';
        speedMinInput.style.fontSize = '14px';
        speedMinInput.style.color = '#333';
        speedMinInput.style.transition = 'all 0.3s ease';
        speedMinInput.style.boxSizing = 'border-box';
        speedMinInput.style.background = '#f9f9f9';
        speedMinInput.style.outline = 'none';
        speedMinInput.addEventListener('focus', () => {
            speedMinInput.style.borderColor = '#007bff';
            speedMinInput.style.background = '#f1f9ff';
        });
        speedMinInput.addEventListener('blur', () => {
            speedMinInput.style.borderColor = '#ccc';
            speedMinInput.style.background = '#f9f9f9';
        });
        menu.appendChild(speedMinInput);

        const speedMaxLabel = document.createElement('label');
        speedMaxLabel.innerText = 'Tempo máximo para passar a página (em segundos):';
        speedMaxLabel.style.fontWeight = 'bold';
        speedMaxLabel.style.color = '#333';
        speedMaxLabel.style.marginTop = '20px';
        speedMaxLabel.style.marginBottom = '8px';
        menu.appendChild(speedMaxLabel);

        const speedMaxInput = document.createElement('input');
        speedMaxInput.type = 'number';
        speedMaxInput.value = 10;
        speedMaxInput.step = 1;
        speedMaxInput.min = 0;
        speedMaxInput.style.width = '100%';
        speedMaxInput.style.padding = '10px';
        speedMaxInput.style.border = '1px solid #ccc';
        speedMaxInput.style.borderRadius = '8px';
        speedMaxInput.style.fontSize = '14px';
        speedMaxInput.style.color = '#333';
        speedMaxInput.style.transition = 'all 0.3s ease';
        speedMaxInput.style.boxSizing = 'border-box';
        speedMaxInput.style.background = '#f9f9f9';
        speedMaxInput.style.outline = 'none';
        speedMaxInput.addEventListener('focus', () => {
            speedMaxInput.style.borderColor = '#007bff';
            speedMaxInput.style.background = '#f1f9ff';
        });
        speedMaxInput.addEventListener('blur', () => {
            speedMaxInput.style.borderColor = '#ccc';
            speedMaxInput.style.background = '#f9f9f9';
        });
        menu.appendChild(speedMaxInput);

        const startButton = document.createElement('button');
        startButton.innerText = 'Iniciar';
        startButton.style.marginTop = '20px';
        startButton.style.width = '100%';
        startButton.style.padding = '12px';
        startButton.style.background = 'linear-gradient(to right, #00b09b, #96c93d)';
        startButton.style.color = 'white';
        startButton.style.border = 'none';
        startButton.style.borderRadius = '8px';
        startButton.style.fontSize = '16px';
        startButton.style.cursor = 'pointer';
        startButton.style.transition = 'background 0.3s ease, transform 0.2s ease';
        startButton.style.boxSizing = 'border-box';
        startButton.addEventListener('mouseenter', () => {
            startButton.style.transform = 'scale(1.05)';
            startButton.style.background = 'linear-gradient(to right, #00b09b, #96c93d)';
        });
        startButton.addEventListener('mouseleave', () => {
            startButton.style.transform = 'scale(1)';
            startButton.style.background = 'linear-gradient(to right, #00b09b, #96c93d)';
        });
        startButton.addEventListener('click', () => {
            if (startButton.innerText === 'Iniciar') {
                startButton.innerText = 'Parar';
            } else {
                startButton.innerText = 'Iniciar';
            }
        });
        menu.appendChild(startButton);

        const footer = document.createElement('div');
        footer.style.marginTop = '20px';
        footer.style.textAlign = 'center';
        footer.style.fontSize = '12px';
        footer.style.color = '#666';

        const link = document.createElement('a');
        link.href = 'https://discord.com/users/452563077683216395';
        link.target = '_blank';
        link.style.textDecoration = 'none';
        link.style.color = '#007bff';
        link.style.fontWeight = 'bold';
        link.innerText = 'juniorschueller';
        footer.innerHTML = 'made by ';
        footer.appendChild(link);
        menu.appendChild(footer);
        document.body.appendChild(menu);

        function secondsToMilliseconds(seconds) {
            return seconds * 1000;
        }

        function randomAtRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function showToast(text) {
            Toastify({
                text,
                duration: 3000,
                close: true,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
                stopOnFocus: true,
            }).showToast();
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js';
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.css';
        document.head.appendChild(style);
        script.onload = function() {
            showToast('ÁrvoreReader carregado com sucesso! 🚀');
        };
        document.head.appendChild(script);

        function read() {
            //const actualPage = pageCount?.textContent?.includes(' de ') ? pageCount?.textContent?.split(' ')[0] : pageCount?.textContent?.split('/')[0];
            //const lastPage = pageCount?.textContent?.includes(' de ') ? pageCount?.textContent?.split(' ')[2] : pageCount?.textContent?.split('/')[1];

            if (!isStopped) {
                nextPageButton.click();
                showToast('[ÁrvoreReader] Página Avançada!');
                setTimeout(read, secondsToMilliseconds(randomAtRange(Number(speedMinInput.value), Number(speedMaxInput.value))));
                
                /*if (actualPage !== lastPage) {
                    nextPageButton.click();
                    showToast('[ÁrvoreReader] Página Avançada!');
                    setTimeout(read, secondsToMilliseconds(randomAtRange(Number(speedMinInput.value), Number(speedMaxInput.value))));
                } else {
                    showToast('[ÁrvoreReader] Livro Lido com Sucesso!');
                    isStopped = true;
                    startButton.innerText = 'Iniciar';

                    const backButton = document.querySelector('button[aria-label="Sair da leitura"]');
                    const markAsReadButton = [...document.querySelectorAll('button')].find(el => el.textContent === 'Marcar como lido e sair');

                    if (markAsReadButton) {
                        markAsReadButton.click();
                    } else if (backButton) {
                        backButton.click();
                    } else {
                        history.back();
                    }
                }*/
            }
        }

        startButton.addEventListener('click', () => {
            if (isStopped) {
                isStopped = false;
                startButton.innerText = 'Parar';
                read();
            } else {
                isStopped = true;
                startButton.innerText = 'Iniciar';
            }
        });

        floatingButton.addEventListener('click', () => {
            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
        });
    };
    createMenu();
}
if (location.hostname !== 'e-reader.arvore.com.br') {
    window.alert('[ÁrvoreReader] Você deve usar o script no Árvore.');
    window.open('https://arvore.com.br/');
} else {
    arvoreReader();
}
