# STARTUP CENTER — Sito v1

Sito statico multipagina per presentare il programma Startup Center, ideato da Lorenzo Aronica.

## Contenuto
- `index.html`: home e manifesto
- `programma.html`: format extracurricolare di 8 settimane
- `progetti.html`: area dedicata ai futuri progetti (nessun risultato inventato)
- `fondatore.html`: pagina di Lorenzo Aronica
- `scuole.html`: modulo di candidatura scuole
- `faq.html`: domande frequenti
- `privacy.html`: bozza informativa privacy da revisionare **prima del lancio pubblico**
- `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`

## Pubblicazione con GitHub Pages
1. Crea un repository pubblico `startup-center` su GitHub.
2. Estrai lo ZIP sul tuo computer e carica **i file contenuti nella cartella**, non lo ZIP e non la cartella madre.
3. Vai in Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
4. Il sito diventerà raggiungibile a `https://TUOUSERNAME.github.io/startup-center/` dopo il deploy.
5. Prima di diffonderlo, controlla tutte le pagine da computer e smartphone.

## Modulo email — passaggio OBBLIGATORIO
Il modulo in `scuole.html` usa FormSubmit:

    <form action="https://formsubmit.co/aronicalorenzo2@gmail.com" method="POST">

La casella di destinazione prevista è **aronicalorenzo2@gmail.com**.

**NON è stato verificato l'invio di email reali e non è ancora stato attivato il collegamento**. Secondo FormSubmit, al primo invio del modulo viene inviata un'email di verifica al destinatario; Lorenzo deve aprire tale email e confermare la destinazione. Solo dopo vanno ripetute le prove per controllare che le richieste arrivino davvero.

Prima del lancio ufficiale:
- Rivedi l'informativa privacy con attenzione, specie per candidature di studenti minorenni e trasferimenti tramite il servizio esterno.
- Valuta se usare un indirizzo specifico del progetto e un servizio di moduli conforme alle esigenze organizzative.
- Esegui un invio di prova (senza dati personali di terzi) e verifica la ricezione nella casella Gmail.
- Verifica eventuali filtri spam/reCAPTCHA e i testi effettivi dell'email.
- Ricorda che la tua email è presente nel codice HTML pubblico; FormSubmit documenta anche un endpoint opaco alternativo dopo l'attivazione.

## Stato del progetto
Questo è il **sito v1 pronto per pubblicazione tecnica**, non la prova che il programma sia già stato autorizzato dalle scuole, attivato o sponsorizzato. Nessuna partnership è dichiarata come esistente. Tutte le sedi sono indicate come *in preparazione*.

## Aggiornamento v2 — 21 ottobre 2026
- Nella pagina Fondatore rimangono MajoVote e FuturePath, con link esterni ai due siti.
- Rimossa GALI. Le due schede si allineano correttamente anche su mobile.
- Rimossi il paragrafo sul mancato avvio del programma e il testo laterale nella sezione 8 settimane.
- Semplificate alcune indicazioni di stato del progetto senza suggerire sedi attive: ogni attivazione richiede autorizzazione scolastica.
- Il modulo scuole rimane rivolto a aronicalorenzo2@gmail.com, ma l’invio richiede attivazione/verifica e test reali.
