let cards = [
  ["Was ist für dich in einer Freundschaft das Wichtigste?", "Was ist das beste daran älter zu werden?"],
  ["Zu welchem Thema hast du jetzt eine andere Meinung als noch vor kurzem?", "Was steht momentan zwischen dir und deinem Glück?"],
  ["Welche früherenen Ziele hast du verfolgt, die dir jetzt nicht mehr so wichtig sind?", "Was macht für dich ein glückliches und zufriedenes Leben aus?"],
  ["Du musst die Hölle durchqueren. Wen nimmst du mit? Warum gerade den- oder diejenige?", "Welcher Mensch hat dich besonders inspiriert?"],
  ["Wann hast du dein Leben das letzte Mal so richtig zelebriert", "Du hast die Möglichkeit alles über deine Zukunft zu erfahren. Was würdest du wissen wollen?"],
  ["Woran glaubst du, obwohl du es nicht beweisen kannst?", "Welches Gefühl hast du schon lange ncht mehr gehabt?"],
  ["Welchen Berufswunsch hattest du als Kind? Würdest du ihn heute auch noch gerne ausüben?", "Wann hörst du in deinem Leben auf dein Bauchgefühl?"],
  ["Was war das letzte Gespräch, das du innerlich geprobt hast, bevor du es geführt hast?", "Über was kannst du dich so richtig schön aufregen?"],
  ["Hast du das Gefühl, dass deine Kindheit glücklicher war als die der meisten anderen?", "Was magst du an dir besonders?"],
  ["Welches Ziel sollte der Mensch haben?", "Wie hast du zuletzt einen anderen Menschen glücklich gemacht?"],
  ["Wie definierst du Freiheit?", "Wann und warum hast du das letzte mal geweint?"],
  ["Was denkst du, wovor ich mich in meinem Leben fürchte?", "Wofür bist du heute dankbar?"],
  ["Welche Erfahrung hast du schon einmal gemacht, die jeder einmal machen sollte?", "Eure Majestät sind ab heute König/Königin der Welt. Wie lautet Ihr erster Erlass?"],
  ["In welchem Bereich wirst du von anderen Menschen oftmals falsch eingeschätzt?", "Wann hat sich dein Leben das letzte Mal wie ein Abenteuer angefühlt?"],
  ["Worin hast du dich nie geändert?", "Welcher Gegensand hat eine besondere Bedeutung für dich?"],
  ["Angenommen du hast Kindern. Welche Werte würdest du gerne an sie weitergeben?", "Was ist deine Vorstellung eines perfekten Urlaubs?"],
  ["Welcher Sache gehst du zurzeit bewusst aus dem Weg? Und warum?", "Womit kann man dich am meisten beeindrucken?"],
  ["Was wäre das schönste Kompliment, das man dir machen könnte?", "Was gibt dir ein Gefühl von Zuhause?"],
  ["Welchen Lebenstraum hast du dir bisher nicht erfüllen können? Und warum?", "Über welches Thema weißt du besser Bescheid als dein gesamtes Umfeld?"],
]

function draw_card() {
  const card_index = Math.floor(Math.random() * (cards.length))
  console.log("Draw Card:",card_index)
  if (cards.length === 0 ) {
    // card.innerText = ""
    card.innerText = "Cards depleted. Reset to play again"
  } else {
    question1.innerText = cards[card_index][0]
    question2.innerText = cards[card_index][1]
    cards.splice(card_index, 1)
  }
  console.log("Remaining Cards:", cards.length)
}
