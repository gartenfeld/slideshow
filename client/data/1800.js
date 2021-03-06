(function() {
var DATA = [
{ a: "die", d: "Kiste", e: "box, crate", f: "3102" },
{ a: "der", d: "Assistent", e: "assistant", f: "3843" },
{ a: "die", d: "Existenz", e: "existence", f: "2250" },
{ a: "der", d: "Westen", e: "west", f: "0768" },
{ d: "testen", e: "test", f: "2212" },
{ d: "kosten", e: "cost", f: "0895" },
{ d: "kostenlos", e: "free (of charge)", f: "3327" },
{ a: "die", d: "Kosten", e: "costs, expenses", f: "0723" },
{ a: "der", d: "Posten", e: "post", f: "3221" },
{ a: "der", d: "Osten", e: "east", f: "0775" },
{ a: "das", d: "Kloster", e: "monastery, convent", f: "3472" },
{ d: "sterben", e: "die", f: "0660" },
{ d: "versterben", e: "pass away", f: "2651" },
{ d: "verstecken", e: "hide", f: "1806" },
{ d: "stecken", e: "put, put into", f: "0703" },
{ d: "bedecken", e: "cover", f: "2403" },
{ d: "entdecken", e: "discover", f: "0885" },
{ a: "die", d: "Entdeckung", e: "discovery", f: "3573" },
{ d: "decken", e: "cover", f: "2515" },
{ d: "abdecken", e: "cover", f: "3055" },
{ d: "wecken", e: "wake up", f: "2132" },
{ d: "erwecken", e: "wake, arouse", f: "3448" },
{ d: "erstrecken", e: "extend, include", f: "3304" },
{ d: "strecken", e: "stretch", f: "3663" },
{ a: "die", d: "Strecke", e: "distance, route", f: "1512" },
{ a: "die", d: "Ecke", e: "corner", f: "1372" },
{ d: "schmecken", e: "taste", f: "2376" },
{ a: "der", d: "Schmerz", e: "pain, grief", f: "1634" },
{ d: "schmutzig", e: "dirty", f: "3922" },
{ d: "jetzig", e: "current", f: "2694" },
{ d: "achtzig", e: "eighty", f: "2392" },
{ d: "achtzehn", e: "eighteen", f: "3060" },
{ d: "acht", e: "eight", f: "0459" },
{ a: "die", d: "Macht", e: "power, strength", f: "0825" },
{ a: "die", d: "Nacht", e: "night", f: "0336" },
{ a: "der", d: "Nachteil", e: "disadvantage", f: "1862" },
{ d: "beachten", e: "pay attention, observe", f: "1137" },
{ d: "verzichten", e: "do without", f: "0991" },
{ d: "vernichten", e: "destroy", f: "3045" },
{ d: "richten", e: "follow, direct, repair", f: "0783" },
{ d: "befürchten", e: "fear, be afraid", f: "1926" },
{ d: "fürchten", e: "fear", f: "1462" },
{ d: "leuchten", e: "shine, glow", f: "1727" },
{ d: "feucht", e: "damp", f: "2765" },
{ d: "euch", e: "you, yourselves", f: "0698" },
{ a: "das", d: "Tuch", e: "cloth", f: "2953" },
{ a: "der", d: "Buchstabe", e: "letter", f: "3176" },
{ a: "der", d: "Maßstab", e: "scale, yardstick, standard", f: "3484" },
{ a: "die", d: "Stabilität", e: "stability", f: "3238" },
{ d: "stabil", e: "stable, sturdy", f: "2327" },
{ a: "der", d: "Abstand", e: "distance", f: "1314" },
{ d: "zustande", e: "come about, in existence", f: "2453" },
{ a: "der", d: "Zustand", e: "condition, state", f: "0974" },
{ d: "einverstanden", e: "agree, be in agreement", f: "3297" },
{ a: "der", d: "Widerstand", e: "resistence, opposition", f: "1884" },
{ a: "der", d: "Vorstand", e: "board, chairperson", f: "2221" },
{ a: "der", d: "Umstand", e: "circumstance", f: "0955" },
{ a: "der", d: "Stand", e: "stand, stage", f: "1344" },
{ a: "der", d: "Bestandteil", e: "component", f: "2060" },
{ a: "der", d: "Bestand", e: "stock, supply, continuation", f: "2407" },
{ a: "der", d: "Standard", e: "standard", f: "2082" },
{ a: "der", d: "Standort", e: "site, location", f: "1985" },
{ a: "der", d: "Gegenstand", e: "object", f: "0985" },
{ d: "konstant", e: "constant", f: "2921" },
{ a: "der", d: "Dienstag", e: "Tuesday", f: "1033" },
{ a: "der", d: "Geheimdienst", e: "secret service", f: "3590" },
{ a: "der", d: "Dienst", e: "service, duty", f: "0983" },
{ a: "die", d: "Medien", e: "media", f: "0818" },
{ d: "medizinisch", e: "medical", f: "1774" },
{ a: "die", d: "Medizin", e: "medicine", f: "1562" },
{ a: "das", d: "Medium", e: "medium", f: "2842" },
{ a: "das", d: "Studium", e: "study, studies", f: "0648" },
{ a: "der", d: "Student", e: "student", f: "0562" },
{ d: "identisch", e: "identical", f: "3606" },
{ d: "statistisch", e: "statistical", f: "2210" },
{ a: "die", d: "Statistik", e: "statistics", f: "2867" },
{ a: "die", d: "Germanistik", e: "German studies", f: "3738" },
{ d: "permanent", e: "permanent", f: "3639" },
{ d: "planen", e: "plan", f: "0500" },
{ a: "der", d: "Planet", e: "planet", f: "3641" },
{ a: "der", d: "Plan", e: "plan", f: "0988" },
{ a: "die", d: "Planung", e: "planning, plan", f: "1901" },
{ a: "die", d: "Entfernung", e: "distance", f: "2310" },
{ d: "entfernt", e: "distant", f: "1819" },
{ d: "entfernen", e: "remove, leave", f: "1139" },
{ a: "die", d: "Ferne", e: "distance", f: "2358" },
{ d: "ferner", e: "furthermore", f: "2680" },
{ d: "fern", e: "far, distant", f: "2252" },
{ d: "insofern", e: "as far as that goes", f: "1262" },
{ d: "sofern", e: "provided that, if", f: "1984" },
{ d: "liefern", e: "deliver, supply", f: "0962" },
{ a: "die", d: "Lieferung", e: "delivery", f: "3628" },
{ a: "die", d: "Verbesserung", e: "improvement", f: "2016" },
{ d: "verbessern", e: "improve, correct", f: "1309" },
{ a: "der", d: "Durchmesser", e: "diameter", f: "3292" },
{ a: "das", d: "Messer", e: "knife", f: "2927" },
{ d: "messen", e: "measure", f: "1303" },
{ d: "angemessen", e: "appropriate", f: "1784" },
{ d: "vergessen", e: "forget", f: "0596" },
{ d: "essen", e: "eat", f: "0656" },
{ d: "pressen", e: "press", f: "2794" },
{ a: "die", d: "Presse", e: "press", f: "2637" },
{ a: "die", d: "Adresse", e: "address", f: "1811" },
{ d: "fressen", e: "eat", f: "3452" },
{ a: "das", d: "Essen", e: "food, meal", f: "0969" },
{ d: "passen", e: "fit", f: "0776" },
{ d: "anpassen", e: "adjust, adapt", f: "2021" },
{ d: "aufpassen", e: "pay attention, take care", f: "2175" },
{ d: "verpassen", e: "miss", f: "3369" },
{ d: "hassen", e: "hate", f: "3601" },
{ d: "fassen", e: "grasp, hold", f: "1152" },
{ d: "befassen ", e: "deal", f: "2057" },
{ a: "die", d: "Masse", e: "mass, crowd", f: "1400" },
{ a: "die", d: "Kasse", e: "cash register, checkout", f: "2005" },
{ a: "die", d: "Kassette", e: "cassette, tape", f: "3755" },
{ d: "retten", e: "save, rescue", f: "1605" },
{ a: "die", d: "Zigarette", e: "cigarette", f: "2169" },
{ a: "die", d: "Kette", e: "chain", f: "2917" },
{ a: "der", d: "Zettel", e: "piece of paper, note", f: "3150" },
{ d: "schütteln", e: "shake", f: "1636" },
{ a: "die", d: "Hütte", e: "hut", f: "2471" },
{ a: "die", d: "Debatte", e: "debate", f: "1789" },
{ a: "die", d: "Batterie", e: "battery", f: "3710" },
{ a: "die", d: "Ferien", e: "holiday, vacation", f: "2679" },
{ a: "die", d: "Galerie", e: "gallery", f: "3453" },
{ a: "der", d: "Maler", e: "painter", f: "2784" },
{ a: "die", d: "Malerei", e: "painting", f: "3482" },
{ a: "das", d: "Ereignis", e: "event", f: "1176" },
{ d: "bereit", e: "ready", f: "1148" },
{ a: "der", d: "Fachbereich", e: "academic department, field", f: "3870" },
{ a: "der", d: "Bereich", e: "area, region", f: "0258" },
{ d: "reich", e: "rich, abundant", f: "1449" },
{ d: "zahlreich", e: "numerous", f: "0840" },
{ a: "die", d: "Reichweite", e: "reach, range", f: "3914" },
{ d: "nachweisen", e: "prove", f: "1690" },
{ a: "der", d: "Nachweis", e: "proof, evidence, certificate", f: "3335" },
{ a: "der", d: "Nachwuchs", e: "offspring, new generation", f: "3632" },
{ d: "danach", e: "after it, afterwards", f: "0438" },
{ d: "nachhaltig", e: "lasting, sustainable", f: "2847" },
{ d: "gewaltig", e: "enourmous, tremendous, powerful", f: "1897" },
{ a: "die", d: "Gewalt", e: "violence, force", f: "1500" },
{ a: "der", d: "Anwalt", e: "attorney", f: "2094" },
{ a: "die", d: "Spalte", e: "column, fissure, cleft", f: "3656" },
{ a: "das", d: "Alter", e: "age", f: "0721" },
{ a: "die", d: "Alternative", e: "alternative", f: "1647" },
{ d: "alternativ", e: "alternative", f: "3393" },
{ a: "die", d: "Eltern", e: "parents", f: "0352" },
{ d: "selten", e: "rare", f: "0647" },
{ d: "gelten", e: "be valid", f: "0185" },
{ d: "aushalten", e: "bear, endure", f: "2887" },
{ a: "der", d: "Haushalt", e: "household, budget", f: "1046" },
{ a: "das", d: "Rathaus", e: "town hall", f: "3121" },
{ a: "das", d: "Haus", e: "house", f: "0159" },
{ a: "das", d: "Zuhause", e: "home", f: "0566" },
{ d: "tausend", e: "thousand", f: "1609" },
{ a: "der", d: "Sender", e: "broadcasting station", f: "2162" },
{ d: "senden", e: "send, broadcast", f: "2567" },
{ d: "wenden", e: "turn", f: "1146" },
{ d: "anwenden", e: "apply, employ", f: "1117" },
{ d: "abwenden", e: "turn away, avert", f: "3538" },
{ d: "zuwenden", e: "turn towards, devote oneself to", f: "2590" },
{ d: "verwenden", e: "use", f: "0563" },
{ a: "die", d: "Wende", e: "change (esp. the 1989-90 political change in the GDR)", f: "2730" },
{ d: "irgendetwas, irgendwas", e: "something, anything", f: "0786" },
{ d: "irgendwann", e: "sometime", f: "1062" },
{ d: "irgendwie", e: "somehow", f: "0367" },
{ d: "irgendwo", e: "somewhere", f: "0670" },
{ d: "irgendein", e: "some, any", f: "0947" },
{ d: "bergen", e: "rescue, hide", f: "3420" },
{ d: "verbergen", e: "hide, conceal", f: "1612" },
{ a: "der", d: "Bewerber", e: "applicant", f: "2893" },
{ d: "bewerben ", e: "apply", f: "2509" },
{ d: "werben", e: "advertise", f: "2967" },
{ d: "erwerben", e: "acquire, purchase", f: "1498" },
{ d: "vorwerfen", e: "accuse, reproach", f: "2653" },
{ d: "werfen", e: "throw", f: "0673" },
{ d: "entwerfen", e: "design", f: "3085" },
{ d: "entweder", e: "either", f: "0999" },
{ d: "weder", e: "neither ... nor", f: "0720" },
{ d: "wiederholen", e: "repeat", f: "1045" },
{ d: "erholen", e: "recover, relax", f: "3300" },
{ d: "abholen", e: "get, fetch, pick up", f: "2735" },
{ d: "einholen", e: "catch up", f: "3865" },
{ d: "holen", e: "get, fetch", f: "0641" },
{ d: "malen", e: "paint", f: "1858" },
{ a: "das", d: "Talent", e: "talent", f: "3666" },
{ a: "die", d: "Subvention", e: "subsidy", f: "3799" },
{ d: "konventionell", e: "conventional", f: "3202" },
{ a: "die", d: "Funktion", e: "function", f: "0442" },
{ d: "funktionieren", e: "function, work", f: "1087" },
{ d: "produzieren", e: "produce", f: "1469" },
{ d: "reduzieren", e: "reduce, decrease", f: "1403" },
{ d: "spazieren", e: "go for a walk", f: "3236" },
{ d: "basieren", e: "be based on", f: "3068" },
{ d: "kritisieren", e: "criticize", f: "1483" },
{ d: "markieren", e: "mark", f: "2702" },
{ d: "operieren", e: "operate, have surgery", f: "3778" },
{ a: "die", d: "Karriere", e: "career", f: "2152" },
{ d: "fixieren", e: "fix (one's eyes), fixate", f: "3585" },
{ d: "konzipieren", e: "plan, design", f: "3897" }
];
window.loadEntries(DATA, 1800);
})();
