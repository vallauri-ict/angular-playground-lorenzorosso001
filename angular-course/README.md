# AngularCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

Al progetto è stata linkata la libreria Bootstrap v. 3.4.1
---
## Lezione 1
### Obiettivi
- Capire come funziona un componente di Angular
- Capire la differenza tra **binding unidirezionale e bidirezionale**
- Imparare l'utilizzo di alcune espressioni come `[ngStyle]`, `[ngClass]`, `{{ }}`
### Componenti
#### success-alert
Un semplice tag `<p>`.
#### warning-alert
Un tag <p> che, a differenza del precedente, avverte l'utente di alcuni errori (numero generato dinamicamente nell'attributo `numVulnerabilities`). Nel caso in cui ci fossero numerosi errori, viene impostato a `SEVERE` l'attributo `stSeverity`, che si occupa di animare una parte del testo del componente.

---

## Lezione 2
### Obiettivi
- Imparare l'utilizzo di alcune espressioni come `*ngIf`, `[(ngModel)]`
- Imparare a utilizzare il **binding tra proprietà HTML e variabili TS**
### Componenti
#### server
È il componente che simula lo stato del server. Ad ogni istanza esso genera in maniera casuale l'ID (`serverID`) e lo stato (online/offline) (`serverStatus`) del server creato.
#### server-farm
È il componente che permette all'utente di creare l'istanza di un server e di visualizzare tutti i server generati. I server sono "salvati" all'interno del vettore `servers`: in realtà non vengono salvati i server veri e proprio ma vengono semplicemente agigunti valori casuali in maniera tale da generare esattamente il numero di server desiderato (questo perché l'istanza è scollegata da ciò che creiamo noi).

_Rosso Lorenzo_