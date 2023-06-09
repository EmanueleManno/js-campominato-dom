//VEDIAMO SE FUNZIONA
console.log('JS');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const grid = document.getElementById('grid');
console.log(grid);
const button = document.querySelector('button');
console.log(button);

//FUNZIONE CHE CONTIENE LA LOGICA DI GIOCO:
const startGame = () => {

    //SE VOGLIO FARE UNA NUOVA PARTITA:
    button.innerText ='Nuova Partita';

    //SVUOTO LA PAGINA:
    grid.innerText = '';

    //FUNZIONE PER CREARE LE CELLE:
    const createCell = (cellNumber) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.append(cellNumber);
        return cell;
}

    for(let i = 1; i <= 100; i++) {

        //CREO LA CELLA:
        const cell = createCell(i);

        //AGGANCIARE L'EVENT LISTENER:
        cell.addEventListener('click',() => {
            cell.classList.add('clicked');
            console.log(cell.innerText);
        })

        //LA INSERISCO IN PAGINA:
        grid.appendChild(cell);
    }
}

//METTO IN ASCOLTO IL BOTTONE:
button.addEventListener('click', startGame);

