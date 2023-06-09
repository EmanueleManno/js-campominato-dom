//VEDIAMO SE FUNZIONA
console.log('JS');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const grid = document.getElementById('grid');
console.log(grid);
const button = document.querySelector('button');
console.log(button);
const levelSelect = document.getElementById('bottone-difficolta');
console.log(levelSelect);
const scorePlaceholder = document.getElementById('punteggio');
console.log(scorePlaceholder);

//FUNZIONE CHE CONTIENE LA LOGICA DI GIOCO:
const startGame = () => {
    let isGameOver = false;

      //FUNZIONE GENERA BOMBE:
      const generateBombs = (numberOfBombs, maxNumber) => {
        let bombs = [];

        while(bombs.length < numberOfBombs) {
            let randomNumber;
            do {
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        }
            while(bombs.includes(randomNumber));
            bombs.push(randomNumber);
        }

        return bombs;
    }

    //FUNZIONE PER CREARE LE CELLE:
    const createCell = (cellNumber, level) => {
        const cell = document.createElement('div');
        cell.classList.add('cell', level);
        cell.append(cellNumber);
        return cell;
}

//FUNZIONE TERMINA PARTITA:
function endGame(score, hasHitBomb){
    const message = hasHitBomb 
    ? `Fine! Hai raggiunto ${score} punti` 
    : `Hai perso! Totale punti: + ${score}`;

    alert(message);

    isGameOver = true;
}

    //SE VOGLIO FARE UNA NUOVA PARTITA:
    button.innerText ='Nuova Partita';

    //SVUOTO LA PAGINA:
    grid.innerText = '';

    //RECUPERO IL LIVELLO:
    const level = levelSelect.value;

    //METTO LA CLASSE LIVELLO:
    grid.classList.add(level);

    //CELLE TOTALI:
    let rows;
    let cols;

    switch(level) {
        case 'difficile':
            rows = 7;
            cols = 7;
            break;
        case 'intermedio':
            rows = 9;
            cols = 9;
            break;
        case 'facile':
            rows = 10;
            cols = 10;
            break;
    }

    //CALCOLO LE CELLE TOTALI:
    const totalCells = rows * cols;

    //PREPARO IL PUNTEGGIO:
    let score = 0;

    //NUMERO DELLE BOMBE:
    const totalBombs = 16;

    //PUNTEGGIO MASSIMO:
    const maxPoints = totalCells - totalBombs;

    //CONTENITORE DELLE BOMBE:
    const bombs = generateBombs(totalBombs, totalCells);
    console.log(bombs);

    for(let i = 1; i <= totalCells; i++) {

        //CREO LA CELLA:
        const cell = createCell(i);

        //AGGANCIARE L'EVENT LISTENER:
        cell.addEventListener('click', () => {

            //CONTROLLO SE ERA STATA GIA' CLICCATA:
            if(isGameOver === true || cell.classList.contains('clicked')) return;

            //AGGIUNGO LA CLASSE CLICKED:
            cell.classList.add('clicked');
            console.log(cell.innerText);

            //CONTROLLO SE E' BUONA O BOMBA:
            const hasHitBomb = bombs.includes(i);

            if(hasHitBomb){
                cell.classList.add('bomb');
                endGame(score, hasHitBomb);
            } else {
                 //INCREMENTO IL PUNTEGGIO:
                 scorePlaceholder.innerText = ++score;
            if(score === maxPoints){
                endGame(score, hasHitBomb);
            }
            }

        })

        //LA INSERISCO IN PAGINA:
        grid.appendChild(cell);
    }
}

//METTO IN ASCOLTO IL BOTTONE:
button.addEventListener('click', startGame);

