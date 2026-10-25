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
        "<p>Uno tra Anna, Bruno, Carla e Dario ha rotto il vaso. Interrogati, dichiarano:</p>" +
        "<ul>" +
        "<li><b>Anna:</b> «È stato Bruno.»</li>" +
        "<li><b>Bruno:</b> «È stata Carla.»</li>" +
        "<li><b>Carla:</b> «Bruno mente.»</li>" +
        "<li><b>Dario:</b> «Non sono stato io.»</li>" +
        "</ul>" +
        "<p>Uno solo di loro dice la verità.</p><p>Chi ha rotto il vaso?</p>",
      hash: "9d3232a0dec2f346e9218bf7661d413a08489425a7db9790cf18bd4653bae589",
      aiuto: "Bruno e Carla non possono dire entrambi la verità, e nemmeno mentire entrambi. Quindi l'unica persona sincera è uno di loro due… e gli altri due mentono."
    },
    {
      titolo: "Combinazione",
      testo:
        "<p>Il codice ha <b>3 cifre, tutte diverse</b>.</p>" +
        "<table class='codici'>" +
        "<tr><td>7 0 3</td><td>una cifra giusta, al posto giusto</td></tr>" +
        "<tr><td>1 7 3</td><td>una cifra giusta, al posto sbagliato</td></tr>" +
        "<tr><td>1 7 5</td><td>due cifre giuste, entrambe al posto sbagliato</td></tr>" +
        "<tr><td>0 6 4</td><td>nessuna cifra giusta</td></tr>" +
        "<tr><td>0 2 6</td><td>una cifra giusta, al posto sbagliato</td></tr>" +
        "</table>" +
        "<p>Qual è il codice?</p>",
      hash: "bba16b97c95ed372fd51330ee562abd5cb9758700625c89bd566139c30279446",
      aiuto: "Partite dalla riga senza cifre giuste: 0, 6 e 4 sono eliminati. Poi guardate quale cifra hanno in comune le prime tre righe."
    }
  ]
};
