(function() {
var DATA = [
{ d: "prinzipiell", e: "in principle", f: "2638" },
{ a: "das", d: "Prinzip", e: "principle", f: "0797" },
{ d: "winzig", e: "tiny", f: "2338" },
{ d: "einzig", e: "only, single", f: "0343" },
{ d: "fünfundzwanzig", e: "twenty-five", f: "3881" },
{ d: "zwanzig", e: "twenty", f: "1031" },
{ d: "zwangsläufig", e: "inevitable", f: "3535" },
{ d: "vorläufig", e: "temporary", f: "3047" },
{ d: "häufig", e: "frequent", f: "0433" },
{ a: "der", d: "Verkäufer", e: "salesman", f: "2285" },
{ a: "der", d: "Käufer", e: "buyer", f: "1798" },
{ a: "das", d: "Ufer", e: "shore, bank", f: "2803" },
{ a: "das", d: "Opfer", e: "victim, sacrifice", f: "1180" },
{ a: "das", d: "Pferd", e: "horse", f: "1507" },
{ a: "der", d: "Apfel", e: "apple", f: "3841" },
{ a: "der", d: "Gipfel", e: "peak, summit", f: "3883" },
{ a: "die", d: "Kartoffel", e: "potato", f: "3613" },
{ d: "erhoffen", e: "expect, hope for", f: "3577" },
{ d: "hoffen", e: "hope", f: "0690" },
{ d: "offenbar", e: "obvious", f: "0827" },
{ d: "offen", e: "open", f: "0383" },
{ d: "treffen", e: "meet", f: "0288" },
{ d: "betreffen", e: "affect, concern", f: "0387" },
{ d: "zutreffen", e: "be correct, apply to", f: "2496" },
{ d: "eintreffen", e: "arrive, come true, happen", f: "2521" },
{ d: "effektiv", e: "effective", f: "2897" },
{ a: "der", d: "Effekt", e: "effect", f: "1583" },
{ a: "die", d: "Infektion", e: "infection", f: "2539" },
{ a: "die", d: "Reaktion", e: "reaction", f: "0889" },
{ a: "die", d: "Aktion", e: "action, campaign", f: "1541" },
{ a: "die", d: "Fraktion", e: "parliamentary party", f: "2253" },
{ a: "der", d: "Aktionär", e: "share holder", f: "2171" },
{ a: "die", d: "Produktion", e: "production", f: "1070" },
{ d: "produktiv", e: "productive", f: "4056" },
{ a: "das", d: "Produkt", e: "product", f: "0644" },
{ d: "pro", e: "per", f: "0590" },
{ a: "die", d: "Prognose", e: "prognosis", f: "2709" },
{ a: "die", d: "Diagnose", e: "diagnosis", f: "3288" },
{ a: "die", d: "Rose", e: "rose", f: "3918" },
{ a: "die", d: "Steckdose", e: "socket, electrical outlet", f: "3661" },
{ a: "der", d: "Fleck", e: "stain", f: "2312" },
{ a: "die", d: "Pflege", e: "care", f: "3219" },
{ d: "pflegen", e: "care, cultivate", f: "1429" },
{ d: "auflegen", e: "hang up, put on, publish", f: "3703" },
{ d: "festlegen", e: "fix, lay down", f: "1238" },
{ d: "auslegen", e: "interpret", f: "3707" },
{ d: "einlegen", e: "put in, insert", f: "3725" },
{ d: "anlegen", e: "put on, invest", f: "1212" },
{ d: "ablegen", e: "take off, put, file", f: "2390" },
{ d: "zurücklegen", e: "put back, put aside, cover (distance)", f: "3531" },
{ d: "verlegen", e: "postpone", f: "2959" },
{ d: "verlegen", e: "publish, lay", f: "4040" },
{ d: "verlegen", e: "embarrassed", f: "3520" },
{ d: "legen", e: "lay, put", f: "0297" },
{ d: "zulegen", e: "put on, get oneself sth", f: "3383" },
{ d: "belegen", e: "register, prove, cover", f: "4095" },
{ a: "der", d: "Kollege", e: "colleague", f: "0684" },
{ a: "das", d: "Protokoll", e: "minutes, record", f: "2711" },
{ d: "trotz", e: "in spite of", f: "0541" },
{ d: "trotzdem", e: "nevertheless", f: "0625" },
{ a: "die", d: "Katastrophe", e: "catastrophe", f: "2263" },
{ a: "der", d: "Katalog", e: "catalog", f: "3014" },
{ a: "die", d: "Katze", e: "cat", f: "1502" },
{ a: "der", d: "Umsatz", e: "turnover, sales", f: "1700" },
{ a: "der", d: "Aufsatz", e: "essay", f: "3401" },
{ a: "der", d: "Aufsichtsrat", e: "supervisory board", f: "3963" },
{ a: "die", d: "Absicht", e: "intention", f: "2497" },
{ a: "das", d: "Gedicht", e: "poem", f: "2359" },
{ d: "dicht", e: "thick, dense", f: "1457" },
{ a: "der", d: "Dichter", e: "writer, poet", f: "2462" },
{ a: "die", d: "Geschichte", e: "history, story", f: "0274" },
{ a: "die", d: "Schicht", e: "layer, class", f: "1831" },
{ a: "das", d: "Schicksal", e: "fate", f: "1982" },
{ d: "schicken", e: "send", f: "0952" },
{ d: "nicken", e: "nod", f: "1163" },
{ d: "beeindrucken", e: "impress", f: "2025" },
{ a: "der", d: "Eindruck", e: "impression", f: "0884" },
{ a: "der", d: "Ausdruck", e: "term, expression", f: "1032" },
{ a: "der", d: "Druck", e: "pressure, printing", f: "0968" },
{ a: "der", d: "Rucksack", e: "rucksack, backpack", f: "3919" },
{ a: "der", d: "Sack", e: "sack", f: "3498" },
{ a: "die", d: "Tatsache", e: "fact", f: "1076" },
{ a: "die", d: "Sache", e: "thing", f: "0252" },
{ d: "verursachen", e: "cause", f: "1703" },
{ a: "die", d: "Ursache", e: "cause", f: "1285" },
{ a: "die", d: "Sprache", e: "language", f: "0368" },
{ a: "die", d: "Fremdsprache", e: "foreign language", f: "1793" },
{ d: "deutschsprachig", e: "German-speaking", f: "2995" },
{ d: "deutsch", e: "German", f: "0105" },
{ d: "rutschen", e: "slide", f: "3648" },
{ d: "erforschen", e: "explore, investigate", f: "3443" },
{ a: "der", d: "Forscher", e: "researcher", f: "1998" },
{ a: "die", d: "Forschung", e: "research", f: "1021" },
{ a: "die", d: "Enttäuschung", e: "disappointment", f: "3442" },
{ d: "enttäuschen", e: "disappoint", f: "1895" },
{ d: "täuschen", e: "deceive, be mistaken", f: "3930" },
{ d: "austauschen", e: "exchange, replace", f: "2810" },
{ a: "der", d: "Austausch", e: "exchange", f: "2747" },
{ d: "lauschen", e: "listen, eavesdrop", f: "3477" },
{ d: "rauschen", e: "rustle, roar", f: "3644" },
{ d: "bisschen", e: "a little", f: "0194" },
{ d: "wünschen", e: "want, wish", f: "0685" },
{ d: "überraschen", e: "surprise", f: "0925" },
{ a: "die", d: "Überraschung", e: "surprise", f: "2955" },
{ a: "die", d: "Mischung", e: "mixture", f: "2844" },
{ d: "heimisch", e: "indigenous, native, at home", f: "3195" },
{ d: "einheimisch", e: "native", f: "3179" },
{ a: "die", d: "Einheit", e: "unit", f: "4072" },
{ a: "die", d: "Einheit", e: "unity, unit", f: "0792" },
{ d: "einheitlich", e: "uniform, standardized", f: "2182" },
{ d: "zeitlich", e: "in time", f: "1490" },
{ d: "monatlich", e: "monthly", f: "3333" },
{ d: "staatlich", e: "state, government, national", f: "0868" },
{ d: "etliche", e: "quite a few", f: "2414" },
{ d: "amtlich", e: "official", f: "3700" },
{ d: "sämtlich", e: "all", f: "1632" },
{ d: "gemütlich", e: "comfortable, cozy", f: "3455" },
{ d: "letztlich", e: "in the end", f: "1561" },
{ d: "ärztlich", e: "medical", f: "3399" },
{ d: "vermeintlich", e: "supposed", f: "3368" },
{ d: "vermeiden", e: "avoid", f: "1172" },
{ d: "vermehrt", e: "increased", f: "3250" },
{ d: "mehr", e: "more", f: "0058" },
{ d: "mehrere", e: "several", f: "0361" },
{ a: "die", d: "Lehrerin", e: "teacher", f: "2699" },
{ a: "der", d: "Lehrer", e: "teacher", f: "0434" },
{ a: "die", d: "Lehre", e: "apprenticeship, lesson, doctrine", f: "1505" },
{ d: "lehren", e: "teach", f: "2073" },
{ d: "verkehren", e: "run", f: "3367" },
{ a: "der", d: "Verkehr", e: "traffic", f: "1914" },
{ d: "verkünden", e: "announce", f: "3044" },
{ d: "binden", e: "tie, bind", f: "1371" },
{ d: "überwinden", e: "overcome", f: "2485" },
{ d: "stattfinden", e: "take place, occur", f: "0600" },
{ d: "herausfinden", e: "find out", f: "2470" },
{ d: "heraus", e: "out", f: "1191" },
{ d: "voraus", e: "ahead, foreward", f: "3373" },
{ d: "worauf", e: "on what", f: "2655" },
{ d: "woran", e: "on what, of what", f: "3692" },
{ a: "der", d: "Rang", e: "place, standing, status", f: "2434" },
{ a: "der", d: "Klang", e: "sound, tone", f: "3615" },
{ d: "langsam", e: "slow", f: "0605" },
{ d: "lang", e: "long", f: "0095" },
{ d: "entlang", e: "along", f: "1522" },
{ d: "langweilig", e: "boring", f: "2924" },
{ d: "jeweilig", e: "particular, respective", f: "0886" },
{ d: "jeweils", e: "each, each time", f: "0581" },
{ d: "inwieweit", e: "what extent", f: "3610" },
{ d: "weltweit", e: "world-wide", f: "0848" },
{ a: "die", d: "Umwelt", e: "environment", f: "1042" },
{ a: "die", d: "Welt", e: "world", f: "0190" },
{ a: "der", d: "Weltkrieg", e: "world war", f: "1748" },
{ a: "der", d: "Krieg", e: "war", f: "0408" },
{ d: "kriechen", e: "crawl", f: "3203" },
{ d: "riechen", e: "smell", f: "2202" },
{ d: "griechisch", e: "Greek", f: "2314" },
{ d: "psychisch", e: "psychological", f: "2795" },
{ d: "geographisch", e: "geographic", f: "1682" },
{ a: "die", d: "Geographie", e: "geography", f: "1260" },
{ a: "die", d: "Philosophie", e: "philosophy", f: "3026" },
{ d: "philosophisch", e: "philosophical", f: "3493" },
{ d: "empirisch", e: "empirical", f: "1847" },
{ d: "militärisch", e: "military", f: "1342" },
{ a: "das", d: "Militär", e: "military", f: "3768" },
{ a: "die", d: "Qualität", e: "quality", f: "1265" },
{ a: "die", d: "Realität", e: "reality", f: "1738" },
{ d: "real", e: "real", f: "2199" },
{ d: "ideal", e: "ideal", f: "1722" },
{ d: "erwidern", e: "reply", f: "2678" },
{ a: "der", d: "Widerspruch", e: "contradiction, dissent", f: "2585" },
{ a: "der", d: "Anspruch", e: "claim", f: "0708" },
{ a: "der", d: "Geruch", e: "smell", f: "3192" },
{ a: "der", d: "Einbruch", e: "break in, collapse", f: "3724" },
{ d: "einbauen", e: "install, build in, fit", f: "2353" },
{ d: "abbauen", e: "reduce, dismantle", f: "2341" },
{ d: "ausbauen", e: "extend, improve", f: "2400" },
{ a: "der", d: "Ausbau", e: "extension, consolidation", f: "3164" },
{ d: "ausbreiten", e: "spread, spread out", f: "2662" },
{ a: "die", d: "Breite", e: "width", f: "3564" },
{ d: "breit", e: "wide, broad", f: "0729" },
{ d: "reiten", e: "ride", f: "3228" },
{ d: "begleiten", e: "accompany", f: "1434" },
{ d: "gleiten", e: "glide", f: "2770" },
{ d: "einleiten", e: "start, introduce", f: "2758" },
{ d: "ableiten", e: "derive, deduce", f: "2227" },
{ d: "leiten", e: "lead", f: "1220" },
{ d: "seitens", e: "on the part of", f: "3925" },
{ a: "die", d: "Seite", e: "page", f: "0217" },
{ d: "beiseite", e: "one side", f: "3850" },
{ d: "beispielsweise", e: "for example", f: "0602" },
{ a: "das", d: "Beispiel", e: "example", f: "0089" },
{ a: "das", d: "Spiel", e: "game", f: "0501" },
{ d: "spiegeln", e: "shine, reflect", f: "3502" },
{ a: "der", d: "Spiegel", e: "mirror", f: "2048" },
{ a: "der", d: "Sieger", e: "winner", f: "2865" },
{ a: "der", d: "Sieg", e: "victory", f: "1247" },
{ a: "die", d: "Fantasie", e: "imagination, fantasy", f: "2708" },
{ a: "die", d: "Stasi", e: "state security service", f: "2479" },
{ a: "die", d: "Tasse", e: "cup", f: "3507" },
{ a: "das", d: "Wasser", e: "water", f: "0298" }
];
window.loadEntries(DATA, 2000);
})();