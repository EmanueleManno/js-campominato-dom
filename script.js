//VEDIAMO SE FUNZIONA
console.log('JS');

//VEDO SE FUNZIONA:
console.log('JS OK');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const container = document.querySelector('.container');
console.log(container);
const grid = document.getElementById('grid');
console.log(grid);
const button = document.querySelector('button');
console.log(button);
const cell = document.getElementsByClassName('cell');
console.log(cell);

//PREPARO I MIEI DATI INIZIALI:
const rows = 10;
const cols = 10;
const cells = rows * cols;

//FUNZIONE PER CREARE UNA CELLA:
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell'
    return cell;
}

//RENDERIZZIAMO LE CELLE:
for (let i=0; i< cells; i++) {
    const cell = createCell();
    cell.innerText = i +1;

    //AL CLICK DELLA CELLA COLORALA DI AZZURRO:
    cell.addEventListener('click',() => {
        cell.classList.add('bg-lightblue');
    })

    grid.appendChild(cell);
}

//METTO IN ASCOLTO IL BOTTONE:
button.addEventListener('click' , function(){
    console.log('Si gioca');
    //AL CLICK TOLTO LA CLASSE NONE AL CONTAINER:
    container.classList.remove('none');
})

