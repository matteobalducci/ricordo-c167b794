// =====================================================================
//  CONTENUTI DELLA SORPRESA
//  Questo è l'UNICO file da modificare per cambiare testi, nomi, date e domande.
//  Regole d'oro:
//   - cambia solo ciò che sta tra "virgolette"; non toccare i nomi a sinistra dei due punti
//   - ogni riga termina con una virgola (tranne l'ultima di una lista)
//   - se nel testo vuoi una virgoletta, scrivila così:  \"   (esempio: \"sì\")
// =====================================================================
const CONFIG = {

  // ---------- chi riceve la sorpresa ----------
  friendName: "Marta",

  // Parola d'accesso iniziale. Lascia "" (vuoto) per NON chiedere nessuna parola.
  accessCode: "",

  // ---------- musica di sottofondo ----------
  // Parte da sola al primo tocco (acceso di default); chi guarda può spegnerla col pulsante in alto a destra.
  // file = traccia dentro assets/ · volume = da 0 (muto) a 1 (massimo) · scrivi  musica: false  per toglierla del tutto
  musica: { file: "assets/musica.mp3", volume: 0.6 },

  // ---------- boarding pass (ultima pagina) ----------
  dest: "Disneyland Paris",
  destCity: "Paris",                 // città scritta a destra, sopra la freccia dell'aereo
  dates: "12 – 15 dicembre 2026",
  flight: "AZ 318 · 07:40",
  hotel: "Disney Hotel New York",

  // true  = sotto il boarding pass compare "versione di prova — dati generici"
  // false = nessuna scritta (da usare quando i dati qui sopra sono quelli veri)
  demo: true,

  // ---------- testi delle schermate ----------
  testi: {
    title: "Un ricordo ti aspetta",                 // titolo nella scheda del browser

    // schermata iniziale
    welcomeEyebrow: "per te",
    welcomeText: ["Un piccolo ricordo", "ti sta aspettando."],   // ogni elemento è una riga
    startButton: "Inizia",

    // schermata degli indizi (puoi mettere più o meno righe)
    clueLines: ["Un viaggio.", "Una città.", "Un castello."],
    clueLast: "E qualcosa che desideravo condividere con te.",
    continueButton: "Continua",

    // domande
    confirmButton: "Conferma",
    wrongAnswers: ["Non è questo… riprova.", "Quasi! Ci sei vicina.", "Ancora un tentativo ✦", "Mmh… non proprio. Riprova!"],

    // rivelazione e pagina finale
    revealText: ["Hai recuperato tutti i ricordi.", "Ne manca solo uno… quello che stiamo per creare."],
    tagline: "Pronta per un po' di magia?",
    passButton: "Scopri il viaggio ✈",
    replayButton: "↺ rivivi la magia dall'inizio"
  },

  // ---------- le domande (puoi aggiungerne o toglierne) ----------
  //  q      = testo della domanda
  //  accept = tutte le risposte che consideri giuste (maiuscole, accenti e punteggiatura non contano)
  //  hint   = l'aiuto (si apre col pulsante "?" o dopo 3 errori)
  puzzles: [
    { q: "Riordina le lettere e trova la città: G · P · A · R · I · I",
      accept: ["parigi", "paris"],
      hint: "È la capitale della Francia." },

    { q: "Sono alta oltre 300 metri, di ferro, e ogni sera mi accendo di mille luci. Chi sono?",
      accept: ["torre eiffel", "la torre eiffel", "eiffel"],
      hint: "Si trova proprio a Parigi." },

    { q: "🐭 + 👑 + ✨ = ?",
      accept: ["topolino", "mickey", "mickey mouse", "disney"],
      hint: "Il simbolo più famoso del mondo Disney." },

    { q: "Nel 1992 ha aperto, vicino Parigi, un parco che fa sognare grandi e piccini. Come si chiama?",
      accept: ["disneyland", "disneyland paris", "disneyland parigi"],
      hint: "Unisci \"Disney\" al nome del tipo di parco." },

    { q: "Ultimo passo: scrivi \"sì\" per scoprire cosa ti aspetta davvero.",
      accept: ["si", "sì"],
      hint: "Basta una piccola parola." }
  ]
};
