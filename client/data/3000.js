(function() {
var DATA = [
{ d: "ruhig", e: "quiet, calm", f: "0906" },
{ a: "die", d: "Ruhe", e: "silence, peace", f: "1072" },
{ a: "die", d: "Unruhe", e: "restlessness, agitation", f: "3670" },
{ d: "beruhen", e: "be based", f: "2139" },
{ d: "ruhen", e: "rest", f: "3124" },
{ a: "das", d: "Mädchen", e: "girl", f: "0538" },
{ a: "das", d: "Teilchen", e: "particle", f: "2088" },
{ d: "teils", e: "partly", f: "2571" },
{ d: "steil", e: "steep", f: "2646" },
{ a: "der", d: "Anteil", e: "share", f: "1098" },
{ a: "der", d: "Marktanteil", e: "market share", f: "3764" },
{ a: "der", d: "Markt", e: "market", f: "0509" },
{ a: "die", d: "Marke", e: "brand, stamp", f: "2701" },
{ a: "das", d: "Marketing", e: "marketing", f: "2548" },
{ d: "stetig", e: "constant", f: "3129" },
{ d: "stets", e: "always", f: "0881" },
{ a: "die", d: "Wüste", e: "desert", f: "2587" },
{ a: "die", d: "Küste", e: "coast", f: "2923" },
{ a: "der, die", d: "Angestellte", e: "employee", f: "2343" },
{ a: "die", d: "Geste", e: "gesture", f: "3007" },
{ d: "je ... desto", e: "the more", f: "1961" },
{ a: "der", d: "Investor", e: "investor", f: "3196" },
{ a: "die", d: "Investition", e: "investment", f: "1899" },
{ a: "die", d: "Koalition", e: "coalition", f: "1684" },
{ a: "die", d: "Konzeption", e: "concept, conception", f: "3759" },
{ a: "das", d: "Konzept", e: "draft, plan", f: "0894" },
{ a: "der", d: "Konzern", e: "business group", f: "1503" },
{ a: "das", d: "Konzert", e: "concert", f: "1723" },
{ a: "die", d: "Pflanze", e: "plant", f: "1306" },
{ a: "die", d: "Bilanz", e: "balance sheet", f: "2141" },
{ a: "das", d: "Land", e: "land, country, state", f: "0146" },
{ d: "landen", e: "land", f: "1602" },
{ d: "wandern", e: "hike", f: "2019" },
{ d: "sondern", e: "but (on the contrary)", f: "0113" },
{ d: "anders", e: "different", f: "0307" },
{ a: "der", d: "Wandel", e: "change", f: "2290" },
{ a: "der", d: "Handel", e: "trade", f: "1855" },
{ d: "anhand", e: "on the basis of, with the aid of", f: "1672" },
{ a: "das", d: "Handy", e: "mobile phone", f: "2469" },
{ a: "die", d: "Hand", e: "hand", f: "0179" },
{ a: "der", d: "Verband", e: "bandage, association", f: "1538" },
{ d: "verbleiben", e: "remain", f: "2576" },
{ d: "bleiben", e: "stay, remain", f: "0112" },
{ a: "der", d: "Leib", e: "body", f: "2783" },
{ a: "die", d: "Anleihe", e: "loan, bond, borrowing", f: "3957" },
{ a: "die", d: "Reihe", e: "row, line", f: "0767" },
{ a: "die", d: "Freiheit", e: "freedom", f: "1154" },
{ a: "die", d: "Freizeit", e: "spare time", f: "1155" },
{ d: "reizen", e: "annoy, provoke, tempt", f: "2943" },
{ d: "dreizehn", e: "thirteen", f: "3433" },
{ a: "der", d: "Reiz", e: "stimulus, appeal", f: "2856" },
{ d: "dreißig", e: "thirty", f: "1458" },
{ d: "drei", e: "three", f: "0101" },
{ d: "rein", e: "pure, clear, clean", f: "0622" },
{ a: "der", d: "Feind", e: "enemy", f: "2527" },
{ d: "fein", e: "fine", f: "1237" },
{ d: "dein", e: "your", f: "0225" },
{ d: "einladen", e: "invite, load", f: "1199" },
{ a: "die", d: "Einladung", e: "invitation", f: "3293" },
{ a: "die", d: "Meldung", e: "report", f: "3017" },
{ a: "die", d: "Bildung", e: "education", f: "1315" },
{ a: "die", d: "Werbung", e: "advertising", f: "2968" },
{ a: "die", d: "Umgebung", e: "surroundings", f: "1078" },
{ d: "umgeben", e: "surround, enclose", f: "2872" },
{ d: "umgekehrt", e: "reciprocal, vice versa", f: "1641" },
{ a: "die", d: "Ehre", e: "honor", f: "3079" },
{ d: "wehren", e: "defend oneself", f: "2291" },
{ a: "die", d: "Abwehr", e: "defense", f: "3838" },
{ a: "das", d: "Gewehr", e: "rifle, shotgun", f: "3741" },
{ d: "sehr", e: "very", f: "0070" },
{ a: "das", d: "Seminar", e: "seminar", f: "2118" },
{ a: "das", d: "Gremium", e: "committee", f: "3744" },
{ d: "fremd", e: "strange, foreign", f: "0640" },
{ a: "die", d: "Freude", e: "joy", f: "1000" },
{ a: "der", d: "Freund", e: "friend", f: "0328" },
{ a: "der", d: "Befund", e: "results", f: "3413" },
{ a: "der", d: "Mund", e: "mouth", f: "0899" },
{ a: "der", d: "Bund", e: "association, alliance", f: "1256" },
{ d: "bunt", e: "colorful", f: "1717" },
{ a: "die", d: "Übung", e: "exercise, practice", f: "2650" },
{ a: "die", d: "Zunge", e: "tongue", f: "3530" },
{ a: "das", d: "Angebot", e: "offer", f: "0585" },
{ a: "die", d: "Wange", e: "cheek", f: "3378" },
{ d: "solange", e: "as long as", f: "1326" },
{ d: "langjährig", e: "long standing", f: "3761" },
{ d: "~jährig", e: "years (old)", f: "0487" },
{ d: "niedrig", e: "low, base", f: "1141" },
{ a: "das", d: "Knie", e: "knee", f: "1974" },
{ d: "nie", e: "never", f: "0196" },
{ a: "die", d: "Linie", e: "line", f: "0898" },
{ a: "die", d: "Klinik", e: "clinic, hospital", f: "2696" },
{ d: "links", e: "on the left", f: "1445" },
{ d: "online", e: "online", f: "1506" },
{ d: "linear", e: "linear", f: "3209" },
{ d: "blind", e: "blind", f: "2750" },
{ a: "die", d: "Bibliothek", e: "library", f: "0928" },
{ a: "die", d: "Hypothese", e: "hypothesis", f: "3751" },
{ a: "die", d: "These", e: "thesis", f: "2572" },
{ a: "die", d: "Theorie", e: "theory", f: "1041" },
{ a: "die", d: "Kategorie", e: "category", f: "2006" },
{ a: "der", d: "Horizont", e: "horizon", f: "2620" },
{ a: "die", d: "Zone", e: "zone", f: "3152" },
{ d: "betonen", e: "stress", f: "0750" },
{ a: "der", d: "Ton", e: "sound, tone, clay", f: "1408" },
{ a: "der", d: "Mond", e: "moon", f: "12294" },
{ a: "der", d: "Fonds", e: "fund, stocks", f: "4055" },
{ d: "blond", e: "blond", f: "3563" },
{ d: "bloß", e: "only, just, simply", f: "0574" },
{ a: "der", d: "Block", e: "block", f: "3856" },
{ a: "der", d: "Rock", e: "skirt, rock music", f: "3229" },
{ a: "der", d: "Stock", e: "storey, floor, stick", f: "2799" },
{ a: "der", d: "Stolz", e: "pride", f: "3352" },
{ d: "stolz", e: "proud", f: "1586" },
{ a: "die", d: "Pistole", e: "pistol", f: "3912" },
{ d: "stoßen", e: "bump, push", f: "0936" },
{ a: "der", d: "Rohstoff", e: "raw material", f: "2859" },
{ a: "der", d: "Stoff", e: "material, substance", f: "0761" },
{ a: "der", d: "Koffer", e: "suitcase", f: "2317" },
{ a: "die", d: "Waffe", e: "weapon", f: "1666" },
{ a: "der", d: "Kaffee", e: "coffee", f: "1422" },
{ a: "die", d: "Skala", e: "scale, range, dial", f: "3654" },
{ a: "das", d: "Lokal", e: "pub, bar", f: "3480" },
{ d: "lokal", e: "local", f: "2106" },
{ d: "kalt", e: "cold", f: "0876" },
{ d: "alt", e: "old", f: "0116" },
{ a: "das", d: "Gehalt", e: "salary", f: "2685" },
{ a: "der", d: "Halt", e: "stop, hold", f: "2535" },
{ a: "der", d: "Inhalt", e: "contents, plot", f: "0924" },
{ d: "halten", e: "hold, stop", f: "0144" },
{ d: "halt", e: "just, simply", f: "0219" },
{ d: "weshalb", e: "why", f: "1883" },
{ d: "deshalb", e: "for that reason", f: "0265" },
{ d: "halb", e: "half", f: "0412" },
{ d: "hallo", e: "hello", f: "1376" },
{ d: "allzu", e: "all too", f: "1616" },
{ a: "der", d: "Ball", e: "ball", f: "2598" },
{ a: "der", d: "Fußball", e: "soccer, football", f: "4045" },
{ a: "der", d: "Fußball", e: "football", f: "1499" },
{ d: "sobald", e: "as soon as", f: "1608" },
{ d: "bald", e: "soon", f: "0476" },
{ a: "der", d: "Wald", e: "forest, woods", f: "1030" },
{ d: "wann", e: "when", f: "0584" },
{ a: "der", d: "Mann", e: "man", f: "0131" },
{ a: "der", d: "Roman", e: "novel", f: "1037" },
{ a: "die", d: "Oma", e: "grandma", f: "3025" },
{ a: "das", d: "Maß", e: "measure", f: "0934" },
{ a: "das", d: "Ausmaß", e: "extent, size", f: "2303" },
{ d: "aus", e: "out, out of, from", f: "0041" },
{ a: "die", d: "Maus", e: "mouse", f: "3765" },
{ d: "daraus", e: "from it", f: "0802" },
{ d: "darauf, drauf", e: "on it", f: "0193" },
{ d: "daraufhin", e: "as a result", f: "2671" },
{ d: "daran, dran", e: "on it", f: "0291" },
{ d: "darüber, drüber", e: "above it, about it", f: "0278" },
{ d: "drüben", e: "over there", f: "1762" },
{ d: "üben", e: "practice", f: "1514" },
{ d: "ausüben", e: "practise, exercise", f: "1592" },
{ d: "übel", e: "not well, bad, foul", f: "2443" },
{ d: "beliebig", e: "as you like, any", f: "2813" },
{ d: "beliebt", e: "popular", f: "2404" },
{ a: "der, die", d: "Geliebte", e: "lover", f: "3092" },
{ d: "lieb", e: "dear, kind", f: "0808" },
{ d: "siebzehn", e: "seventeen", f: "3349" },
{ d: "siebzig", e: "seventy", f: "2208" },
{ d: "ansiedeln", e: "settle, establish", f: "3540" },
{ d: "verzweifeln", e: "despair", f: "3252" },
{ a: "der", d: "Zweifel", e: "doubt", f: "1575" },
{ d: "zwei", e: "two", f: "0077" },
{ a: "die", d: "Anweisung", e: "instruction", f: "3542" },
{ a: "die", d: "Weise", e: "way, manner", f: "0414" },
{ d: "aufweisen", e: "show, exhibit, contain", f: "1294" },
{ a: "der", d: "Aufwand", e: "expense, effort", f: "2398" },
{ a: "die", d: "Wand", e: "wall", f: "0926" },
{ a: "der", d: "Sand", e: "sand", f: "2274" },
{ d: "sanft", e: "soft, gentle", f: "2374" },
{ d: "vernünftig", e: "sensible", f: "2286" },
{ d: "zukünftig", e: "future", f: "2170" },
{ d: "künftig", e: "future", f: "0743" },
{ d: "heftig", e: "heavy, violent", f: "1339" },
{ d: "kräftig", e: "strong", f: "1686" },
{ d: "endgültig", e: "final", f: "1596" },
{ d: "gültig", e: "valid", f: "3095" },
{ d: "nötig", e: "necessary", f: "0963" },
{ d: "benötigen", e: "require, need", f: "0967" },
{ d: "übrigens", e: "by the way", f: "1096" },
{ d: "übrig", e: "remaining, left", f: "0789" },
{ d: "bisherig", e: "so far", f: "1255" },
{ d: "bisher", e: "until now", f: "0376" },
{ a: "das", d: "Herz", e: "heart", f: "0700" },
{ a: "der", d: "Herbst", e: "autumn, fall", f: "1377" },
{ a: "das", d: "Verbot", e: "ban, prohibition", f: "3519" },
{ d: "vermögen", e: "be capable", f: "2489" },
{ a: "das", d: "Vermögen", e: "assets, fortune, ability", f: "2051" },
{ d: "mögen", e: "like", f: "0151" },
{ d: "genau", e: "exactly", f: "0183" },
{ d: "genauso", e: "just as", f: "0944" },
{ d: "hinaus", e: "out, beyond", f: "0742" },
{ d: "hinauf", e: "up, upwards", f: "1824" },
{ d: "auf", e: "on, at, in", f: "0017" },
{ a: "der", d: "Aufbau", e: "structure, construction", f: "1752" }
];
window.loadEntries(DATA, 3000);
})();