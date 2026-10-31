/* =====================================================================
   EPIC PAPER · CONFIGURAZIONE DEGLI ENIGMI
   ---------------------------------------------------------------------
   Questo è l'unico file da modificare per cambiare gli enigmi.
   - "testo": HTML libero (paragrafi, liste, tabelle, <img src="img/...">).
   - "hash": impronta della risposta corretta. NON scrivere qui la
     risposta in chiaro: calcola l'hash con strumenti/calcola_hash.html.
   - "aiuto": suggerimento mostrato col pulsante "Richiedi aiuto"
     (lascia "" per nasconderlo).
   - La risposta viene normalizzata: minuscole, niente accenti,
     niente spazi né punteggiatura ("Dario!" = "dario").
   - Il nome del file del paper (in p/) dipende dalle 3 risposte:
     se cambi una risposta, rinomina il paper col nome dato dallo
     strumento.
   Le soluzioni sono in ../Soluzioni_enigmi.md (fuori dal sito).
   ===================================================================== */
window.EPIC = {
  sale: "epicpaper2094",
  numero: "Vol. 71 · N. 10 · Ottobre 2094",
  enigmi: [
    {
      titolo: "Sequenza",
      testo:
        "<p>Completate la sequenza.</p>" +
        "<p class='seq'>1<br>11<br>21<br>1211<br>111221<br>?</p>",
      hash: "bd5b20a0be0fcc9023a9ae63193a1d98c84372fbea5ae535d9cbce966c0f437e",
      aiuto: "Non è matematica. Leggete ad alta voce ogni riga, descrivendo quello che vedete nella riga precedente."
    },
    {
      titolo: "Deduzione",
      testo:
        "<p>Uno tra Axion, Bryx, Cyra, Dax, Elyra e Fenix ha rubato il chip. Interrogati, dichiarano:</p>" +
        "<ul>" +
        "<li><b>Axion:</b> «È stato Bryx oppure Cyra.»</li>" +
        "<li><b>Bryx:</b> «Fenix mente.»</li>" +
        "<li><b>Cyra:</b> «Non è stato né Dax né Elyra.»</li>" +
        "<li><b>Dax:</b> «Axion dice la verità.»</li>" +
        "<li><b>Elyra:</b> «Il colpevole è tra Axion, Bryx e Cyra.»</li>" +
        "<li><b>Fenix:</b> «È stata Elyra.»</li>" +
        "</ul>" +
        "<p>Esattamente <b>due</b> di loro dicono la verità.</p><p>Chi ha rubato il chip?</p>",
      hash: "32758dd4d5e425e3426c2f22ff43092ba6b2e7c22bee439c61351f5d61661fa2",
      aiuto: "Se Axion dicesse il vero, lo direbbe anche Dax. E tra Bryx e Fenix, esattamente uno dei due dice la verità."
    },
    {
      titolo: "Combinazione",
      testo:
        "<p>Il codice ha <b>4 cifre, tutte diverse</b>.</p>" +
        "<table class='codici'>" +
        "<tr><td>4 7 8 1</td><td>una cifra giusta, al posto sbagliato</td></tr>" +
        "<tr><td>9 7 3 2</td><td>due cifre giuste: una al posto giusto, una al posto sbagliato</td></tr>" +
        "<tr><td>5 7 6 0</td><td>una cifra giusta, al posto giusto</td></tr>" +
        "<tr><td>6 0 4 7</td><td>nessuna cifra giusta</td></tr>" +
        "<tr><td>5 7 6 9</td><td>due cifre giuste: una al posto giusto, una al posto sbagliato</td></tr>" +
        "<tr><td>8 2 1 7</td><td>una cifra giusta, al posto sbagliato</td></tr>" +
        "</table>" +
        "<p>Qual è il codice?</p>",
      hash: "ad30949d817d802578109c362e87d509a3ec0150792f495f6048d91d1785fd99",
      aiuto: "Partite dalla riga senza cifre giuste: 6, 0, 4 e 7 sono eliminati. Guardate allora cosa resta della riga 5 7 6 0."
    },
    {
      titolo: "Incroci",
      testo:
        "<p>Nova, Orion e Zephyr vivono su tre pianeti diversi (Kepler, Titano, Proxima) e hanno tre robot diversi (dorato, argentato, ramato).</p>" +
        "<ul>" +
        "<li>Orion non vive su Kepler.</li>" +
        "<li>Chi vive su Titano non ha il robot dorato.</li>" +
        "<li>Orion non vive su Titano.</li>" +
        "<li>Chi vive su Titano non ha il robot ramato.</li>" +
        "<li>Zephyr non ha il robot argentato.</li>" +
        "<li>Chi vive su Kepler non ha il robot dorato.</li>" +
        "</ul>" +
        "<p>Chi ha il robot ramato?</p>",
      hash: "33d8e38b4c1c9ecbee54c6538c6779f963cfcbde0157a46cf615969cb4dec7fe",
      aiuto: "Disegnate una tabella. Iniziate da dove vive Orion, poi capite che robot c'è su ogni pianeta."
    }
  ]
};
