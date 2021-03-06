(function() {
var DATA = [
{ a: "das", d: "Datum", e: "date", f: "3862" },
{ d: "stumm", e: "silent, dumb", f: "3242" },
{ a: "der", d: "Stuhl", e: "chair", f: "1535" },
{ a: "die", d: "Stufe", e: "step, level", f: "1565" },
{ a: "der", d: "Teufel", e: "devil", f: "3509" },
{ a: "die", d: "Tafel", e: "board, table", f: "3664" },
{ a: "das", d: "Café", e: "coffee house", f: "2348" },
{ d: "an", e: "at, on", f: "0019" },
{ a: "der", d: "Hang", e: "slope, inclination", f: "3319" },
{ a: "die", d: "Chance", e: "chance", f: "0567" },
{ a: "das", d: "Chaos", e: "chaos", f: "3715" },
{ a: "der", d: "Mythos", e: "myth, legend", f: "3773" },
{ a: "die", d: "Hose", e: "trousers, pants", f: "2425" },
{ a: "der", d: "Franzose", e: "Frenchman, French", f: "2828" },
{ a: "die", d: "Praxis", e: "practice, doctor’s office", f: "1025" },
{ a: "die", d: "Praxis", e: "practice", f: "12289" },
{ a: "das", d: "Taxi", e: "taxi", f: "2869" },
{ d: "maximal", e: "maximum", f: "2008" },
{ d: "zumal", e: "particularly, especially", f: "1949" },
{ a: "das", d: "Mal", e: "time", f: "0076" },
{ a: "der", d: "Kanal", e: "canal, channel", f: "2151" },
{ d: "unbekannt", e: "unknown", f: "1589" },
{ d: "bekannt", e: "well known", f: "0283" },
{ d: "dann", e: "then", f: "0033" },
{ d: "da", e: "there", f: "0035" },
{ a: "die", d: "Dame", e: "lady", f: "1352" },
{ a: "der", d: "Name", e: "name", f: "0271" },
{ d: "am", e: "the (+ superlative)", f: "1386" },
{ a: "der", d: "Samstag", e: "Saturday", f: "1307" },
{ a: "der", d: "Geburtstag", e: "birthday", f: "1768" },
{ a: "die", d: "Geburt", e: "birth", f: "2187" },
{ a: "das", d: "Tagebuch", e: "diary", f: "3665" },
{ a: "das", d: "Buch", e: "book", f: "0296" },
{ a: "der", d: "Bus", e: "bus", f: "1582" },
{ a: "das", d: "Virus", e: "virus", f: "2963" },
{ a: "die", d: "Brust", e: "breast, chest", f: "1675" },
{ a: "der", d: "August", e: "August", f: "1753" },
{ a: "das", d: "Auge", e: "eye", f: "0236" },
{ a: "der", d: "Zeuge", e: "witness", f: "3051" },
{ a: "das", d: "Zeug", e: "stuff", f: "3528" },
{ a: "das", d: "Zeugnis", e: "report, testimonial", f: "3052" },
{ a: "das", d: "Gefängnis", e: "prison", f: "3006" },
{ a: "das", d: "Geheimnis", e: "secret", f: "2686" },
{ d: "geheim", e: "secret", f: "2530" },
{ a: "das", d: "Heim", e: "home", f: "2616" },
{ a: "der", d: "Impuls", e: "stimulus, impulse", f: "2426" },
{ a: "der", d: "Computer", e: "computer", f: "0740" },
{ a: "die", d: "Butter", e: "butter", f: "3565" },
{ a: "die", d: "Großmutter", e: "grandmother", f: "2833" },
{ a: "die", d: "Mutter", e: "mother", f: "0227" },
{ a: "das", d: "Wetter", e: "weather", f: "1645" },
{ a: "der", d: "Wettbewerb", e: "competition", f: "1644" },
{ d: "nett", e: "nice", f: "1485" },
{ a: "das", d: "Bett", e: "bed", f: "0655" },
{ a: "das", d: "Getränk", e: "drink, beverage", f: "3740" },
{ a: "die", d: "Träne", e: "tear", f: "2214" },
{ d: "jene (r,s)", e: "that, those", f: "0380" },
{ d: "denen", e: "whom, that", f: "0198" },
{ d: "ihnen", e: "them", f: "0137" },
{ d: "ahnen", e: "suspect", f: "2298" },
{ a: "die", d: "Fahne", e: "flag", f: "3974" },
{ a: "die", d: "Bühne", e: "stage", f: "1351" },
{ a: "die", d: "Gebühr", e: "fee", f: "3589" },
{ d: "gemäß", e: "in accordance with", f: "1526" },
{ a: "das", d: "Gemüse", e: "vegetables", f: "3454" },
{ d: "müde", e: "tired", f: "2076" },
{ a: "der", d: "Süden", e: "south", f: "1536" },
{ d: "reden", e: "talk", f: "0357" },
{ a: "die", d: "Rede", e: "speech, talk", f: "0845" },
{ a: "die", d: "Erde", e: "earth, ground, soil", f: "0782" },
{ a: "die", d: "Behörde", e: "department, authorities", f: "1350" },
{ a: "der", d: "Mörder", e: "murderer", f: "3114" },
{ d: "oder", e: "or", f: "0030" },
{ a: "die", d: "Methode", e: "method", f: "0836" },
{ d: "methodisch", e: "methodical", f: "2843" },
{ d: "jüdisch", e: "Jewish", f: "1628" },
{ d: "städtisch", e: "municipal", f: "2377" },
{ a: "der", d: "Tisch", e: "table", f: "0495" },
{ d: "europäisch", e: "European", f: "0417" },
{ a: "der", d: "Europäer", e: "European", f: "3730" },
{ a: "der", d: "Euro", e: "euro (unit of currency)", f: "0334" },
{ d: "absurd", e: "absurd", f: "3953" },
{ a: "die", d: "Spur", e: "track, lane", f: "1144" },
{ d: "kurz", e: "short", f: "0205" },
{ a: "der", d: "Kurs", e: "course, exchange rate", f: "0949" },
{ a: "die", d: "Kurve", e: "curve", f: "3204" },
{ d: "akut", e: "acute, urgent", f: "2659" },
{ a: "das", d: "Blut", e: "blood", f: "1519" },
{ a: "die", d: "Blume", e: "flower", f: "2239" },
{ d: "blöd", e: "stupid, dumb", f: "2668" },
{ a: "das", d: "Blatt", e: "sheet, leaf", f: "1331" },
{ d: "glatt", e: "slippery, smooth", f: "2360" },
{ a: "das", d: "Glas", e: "glass", f: "1023" },
{ a: "die", d: "Last", e: "load, burden", f: "2840" },
{ d: "fast", e: "almost", f: "0223" },
{ a: "die", d: "Post", e: "mail, post office", f: "1943" },
{ a: "das", d: "Tempo", e: "pace, speed", f: "3667" },
{ a: "der", d: "Atem", e: "breath", f: "2173" },
{ a: "das", d: "Theater", e: "theater", f: "0726" },
{ a: "der", d: "Vater", e: "father", f: "0216" },
{ a: "der", d: "Großvater", e: "grandfather", f: "3461" },
{ a: "der", d: "Großteil", e: "large part, majority", f: "3885" },
{ d: "großzügig", e: "generous", f: "3194" },
{ d: "groß", e: "big, large, great", f: "0074" },
{ d: "grob", e: "rude, gross, coarse", f: "2002" },
{ a: "der", d: "Job", e: "job", f: "1091" },
{ a: "das", d: "Hobby", e: "hobby", f: "1421" },
{ a: "die", d: "Show", e: "show", f: "3128" },
{ d: "sowohl", e: "both ... and", f: "0623" },
{ d: "wohl", e: "well", f: "0224" },
{ d: "obwohl", e: "although", f: "0335" },
{ d: "wohin", e: "where", f: "1839" },
{ d: "hinein", e: "in, into", f: "2192" },
{ d: "dorthin", e: "there", f: "2351" },
{ d: "dort", e: "there", f: "0134" },
{ a: "der", d: "Ort", e: "place, location, town", f: "0384" },
{ a: "das", d: "Wort", e: "word", f: "0244" },
{ a: "die", d: "Wolke", e: "cloud", f: "2451" },
{ a: "das", d: "Volk", e: "people", f: "1079" },
{ a: "die", d: "Rolle", e: "role, roll", f: "0397" },
{ d: "toll", e: "great, terrific", f: "0964" },
{ a: "die", d: "Villa", e: "villa", f: "3688" },
{ d: "klar", e: "clear", f: "0256" },
{ d: "unklar", e: "unclear", f: "3136" },
{ d: "klappen", e: "go as planned, fold", f: "1772" },
{ d: "stoppen", e: "stop", f: "3036" },
{ a: "das", d: "Top", e: "top", f: "2952" },
{ a: "das", d: "Atom", e: "atom", f: "3545" },
{ a: "das", d: "Symptom", e: "symptom", f: "2950" },
{ a: "das", d: "Symbol", e: "symbol", f: "2480" },
{ a: "die", d: "GmbH", e: "limited liability company, Ltd.", f: "1177" },
{ a: "die", d: "Bombe", e: "bomb", f: "2751" },
{ a: "der", d: "Berg", e: "hill, mountain", f: "1149" },
{ a: "der", d: "Händler", e: "trader, dealer, retailer", f: "2255" },
{ d: "erlernen", e: "learn", f: "2525" },
{ d: "lernen", e: "learn", f: "0203" },
{ d: "warnen", e: "warn", f: "1348" },
{ d: "warum", e: "why", f: "0247" },
{ d: "darum", e: "around it", f: "0586" },
{ a: "das", d: "Forum", e: "forum, audience, public discussion", f: "3878" },
{ a: "der", d: "Mord", e: "murder", f: "2789" },
{ a: "der", d: "Monat", e: "month", f: "0305" },
{ a: "der", d: "Montag", e: "Monday", f: "0795" },
{ d: "spontan", e: "spontaneous", f: "2948" },
{ a: "die", d: "Front", e: "front", f: "3311" },
{ d: "froh", e: "happy", f: "1420" },
{ a: "das", d: "Brot", e: "bread", f: "1759" },
{ d: "rot", e: "red", f: "0382" },
{ a: "das", d: "Büro", e: "office", f: "1494" },
{ d: "spürbar", e: "perceptible", f: "3659" },
{ d: "spüren", e: "sense, notice", f: "0719" },
{ d: "bohren", e: "drill", f: "3857" },
{ a: "das", d: "Ohr", e: "ear", f: "1206" },
{ d: "ihr", e: "you, her", f: "0026" },
{ d: "ihm", e: "him", f: "0092" },
{ d: "ihn", e: "him", f: "0093" },
{ d: "zehn", e: "ten", f: "0315" },
{ a: "die", d: "Wurzel", e: "root", f: "3050" },
{ a: "das", d: "Zelt", e: "tent", f: "2972" },
{ d: "relevant", e: "relevant", f: "2560" },
{ a: "die", d: "Seele", e: "soul, mind", f: "2326" },
{ a: "der", d: "See", e: "lake", f: "1168" },
{ a: "der", d: "Tee", e: "tea", f: "2716" },
{ a: "der", d: "Täter", e: "culprit, perpetrator", f: "2481" },
{ a: "der", d: "Winter", e: "winter", f: "1289" },
{ a: "der", d: "Wind", e: "wind", f: "1081" },
{ a: "das", d: "Ding", e: "thing", f: "0338" },
{ d: "eng", e: "narrow, close", f: "0592" },
{ d: "wenn", e: "if, when", f: "0043" },
{ d: "kennen", e: "know", f: "0181" },
{ d: "innen", e: "inside", f: "2261" },
{ d: "weinen", e: "cry, weep", f: "1882" },
{ a: "der", d: "Wein", e: "wine", f: "1642" },
{ d: "weil", e: "because", f: "0084" },
{ d: "soweit", e: "as far as", f: "1028" },
{ d: "weitaus", e: "by far", f: "3690" },
{ d: "weit", e: "widely, far", f: "0122" },
{ d: "weiß", e: "white", f: "0564" },
{ a: "der", d: "Weg", e: "path, way", f: "0261" },
{ d: "weg", e: "gone, vanished", f: "0958" },
{ d: "wer", e: "who, whoever", f: "0173" },
{ a: "der", d: "Wert", e: "value", f: "0365" },
{ a: "das", d: "Bier", e: "beer", f: "1715" },
{ a: "das", d: "Turnier", e: "tournament", f: "2870" },
{ a: "das", d: "Klavier", e: "piano", f: "2778" },
{ d: "feiern", e: "celebrate", f: "1060" },
{ a: "die", d: "Kammer", e: "pantry, small room, chamber", f: "2916" },
{ a: "der", d: "Sommer", e: "summer", f: "0705" },
{ d: "so", e: "this way, so, such", f: "0021" },
{ d: "sogar", e: "even, in fact", f: "0270" },
{ d: "gar", e: "done, cooked", f: "0153" },
{ a: "das", d: "Paar", e: "pair, couple", f: "0285" },
{ a: "das", d: "Ehepaar", e: "married couple", f: "3723" },
{ a: "das", d: "Haar", e: "hair", f: "0793" },
{ d: "aha", e: "aha, I see", f: "0748" },
{ a: "der", d: "Hals", e: "neck, throat", f: "1822" },
{ d: "egal", e: "it's all the same", f: "1551" },
{ a: "das", d: "Tal", e: "valley", f: "2163" },
{ a: "der", d: "Tag", e: "day", f: "0108" },
{ a: "die", d: "Jagd", e: "hunt, chase", f: "3895" }
];
window.loadEntries(DATA, 3600);
})();
