//VEDIAMO SE FUNZIONA
console.log('JS');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const grid = document.getElementById('grid');
console.log(grid);
const button = document.querySelector('button');
console.log(button);
const levelSelect = document.getElementById('bottone-difficolta');
console.log(levelSelect);

//FUNZIONE CHE CONTIENE LA LOGICA DI GIOCO:
const startGame = () => {

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

    //FUNZIONE PER CREARE LE CELLE:
    const createCell = (cellNumber, level) => {
        const cell = document.createElement('div');
        cell.classList.add('cell', level);
        cell.append(cellNumber);
        return cell;
}

    for(let i = 1; i <= totalCells; i++) {

        //CREO LA CELLA:
        const cell = createCell(i);

        //AGGANCIARE L'EVENT LISTENER:
        cell.addEventListener('click', () => {
            cell.classList.add('clicked');
            console.log(cell.innerText);
        })

        //LA INSERISCO IN PAGINA:
        grid.appendChild(cell);
    }
}

//METTO IN ASCOLTO IL BOTTONE:
button.addEventListener('click', startGame);

