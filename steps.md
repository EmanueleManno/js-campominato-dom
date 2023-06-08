# TRACCIA DELL'ESERCIZIO
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica di gioco.
ATTENZIONE: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html e le cartelle js/css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git.
DESCRIZIONE DEL GIOCO
Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba
# MILESTONE 1
Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà (come le istruzioni di ieri se non già fatto)
# SUPERBONUS
Colorare tutte le celle bomba quando la partita finisce

___
___

# MILESTONE 1
Scaletta Milestone 1:
- Creiamo un elemento che mi contenga il punteggio.
- Creiamo un contatore che al cliccare di una cella mi incrementi il punteggio.
- Stampiamo in console il punteggio.
- Impediamo che questo contatore si incrementi se viene cliccata una cella cliccata in precedenza.

SCRITTO ANCHE:
- Creiamo un elemento che mi contenga il punteggio.
- Creiamo un contatore che al cliccare di una cella mi incrementi il punteggio.
- Stampiamo in console il punteggio.
- SE l'utente clicca su una nuova cella:
    - ALLORA incrementa il punteggio.
- ALTRIMENTI se la cella è già stata cliccata in precedenza non incrementare il punteggio.

# MILESTONE 2
Scaletta Milestone 2:
- Creare un elemento bomba che mi permetta poi di generare 16 numeri casuali tra 1 e il massimo di caselle disponibili.
- Generare questi numeri.
- Stamparli in console.

# MILESTONE 3
Scaletta Milestone 3:
- Al click della cella:
- SE la cella non è una bomba:
    - ALLORA incrementa il punteggio.
- ALTRIMENTI 
    - Colora la cella di rosso.
    - Raccogli il punteggio e termina la partita.
    - Scrivi in console che termina la partita.

# MILESTONE 4
Scaletta Milestone 4:
- SE la cella non è una bomba:
    - ALLORA incrementa il punteggio.
    - SE ha raggiunto il punteggio massimo:
        - Termina la partita e stampa in console il messaggio.

# MILESTONE 5
Scaletta Milestone 5:
- SE l'utente clicca una cella che non è una bomba:
    - ALLORA incrementa il punteggio.
    - Attendi il click successivo dell'utente.
    - SE non è una bomba ripeti FINCHE' non ha raggiunto il punteggio massimo.
    - SE ha raggiunto il punteggio massimo stampa in console il messaggio di vittoria.
- ALTRIMENTI termina la partita e stampa in console il messaggio di sconfitta.



