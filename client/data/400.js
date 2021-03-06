(function() {
var DATA = [
{ d: "jede (r, s)", e: "every", f: "0088" },
{ d: "jegliche (r, s)", e: "any", f: "3612" },
{ d: "irgendwelche (r, s)", e: "some, any", f: "1005" },
{ d: "manche (r, s)", e: "some, many a", f: "0475" },
{ d: "selbe (r, s)", e: "same", f: "2863" },
{ d: "linke (r, s)", e: "left", f: "1140" },
{ d: "besondere (r,s)", e: "special", f: "0392" },
{ d: "insbesondere", e: "especially", f: "0512" },
{ d: "besonders", e: "especially", f: "0243" },
{ a: "die", d: "Besonderheit", e: "characteristic, specific feature", f: "3560" },
{ a: "die", d: "Minderheit", e: "minority", f: "3769" },
{ a: "die", d: "Unsicherheit", e: "uncertainty", f: "3247" },
{ a: "die", d: "Sicherheit", e: "security, safety", f: "0677" },
{ a: "die", d: "Sicherung", e: "protection, fuse", f: "2864" },
{ a: "die", d: "Versicherung", e: "insurance, assurance", f: "2090" },
{ d: "versichern", e: "insure, assert", f: "1432" },
{ d: "sichern", e: "secure, safeguard", f: "1143" },
{ d: "sicher", e: "safe, secure, certain", f: "0237" },
{ d: "sicherlich", e: "certainly", f: "1027" },
{ a: "das", d: "BGB (Bürgerliches Gesetzbuch)", e: "civil code", f: "1437" },
{ d: "bürgerlich", e: "middle-class, civil, civic", f: "3177" },
{ a: "der", d: "Bürgermeister", e: "mayor", f: "1394" },
{ a: "die", d: "Weltmeisterschaft", e: "world championship", f: "1515" },
{ a: "der", d: "Weltmeister", e: "world champion", f: "3946" },
{ a: "der", d: "Meister", e: "master", f: "1467" },
{ a: "die", d: "Begeisterung", e: "enthusiasm", f: "3274" },
{ d: "begeistern", e: "inspire, be enthusiastic", f: "1843" },
{ d: "meiste", e: "most", f: "0388" },
{ d: "meistens", e: "mostly", f: "0826" },
{ d: "leisten", e: "achieve", f: "0665" },
{ d: "gewährleisten", e: "guarantee", f: "2615" },
{ d: "gewähren", e: "grant, give", f: "2036" },
{ d: "bewähren ", e: "prove itself, oneself", f: "3279" },
{ d: "während", e: "during", f: "0158" },
{ d: "aufbewahren", e: "keep, store", f: "3546" },
{ d: "bewahren", e: "keep, protect", f: "2601" },
{ d: "hinfahren", e: "go there, drive there", f: "3097" },
{ d: "erfahren", e: "find out, experience", f: "0588" },
{ a: "das", d: "Verfahren", e: "procedure", f: "0744" },
{ a: "die", d: "Erfahrung", e: "experience", f: "0494" },
{ a: "die", d: "Nahrung", e: "nourishment, food", f: "3022" },
{ a: "die", d: "Einführung", e: "introduction", f: "1678" },
{ a: "die", d: "Durchführung", e: "carrying out", f: "2997" },
{ d: "durchführen", e: "carry out, hold", f: "0822" },
{ d: "anführen", e: "lead, command, quote", f: "2885" },
{ d: "einführen", e: "introduce, import", f: "1418" },
{ d: "führen", e: "lead", f: "0155" },
{ d: "aufführen", e: "perform", f: "4086" },
{ d: "aufführen", e: "perform", f: "2136" },
{ a: "die", d: "Aufführung", e: "performance", f: "3159" },
{ a: "die", d: "Ausführung", e: "explanation, implementation, type", f: "2663" },
{ a: "die", d: "Führung", e: "leadership, management, command", f: "1555" },
{ a: "die", d: "Ernährung", e: "food, diet", f: "2825" },
{ a: "die", d: "Währung", e: "currency", f: "3944" },
{ a: "die", d: "Anforderung", e: "request, demand", f: "1577" },
{ a: "die", d: "Herausforderung", e: "challenge", f: "2191" },
{ a: "die", d: "Forderung", e: "demand, claim", f: "0855" },
{ a: "die", d: "Förderung", e: "support, sponsorship", f: "1681" },
{ d: "fördern", e: "support, promote", f: "1128" },
{ d: "überfordern", e: "overtax, be too much", f: "3932" },
{ d: "erfordern", e: "require, demand", f: "1623" },
{ d: "erforderlich", e: "required, necessary", f: "0892" },
{ d: "körperlich", e: "physical", f: "1773" },
{ a: "der", d: "Körper", e: "body", f: "0618" },
{ a: "die", d: "Operation", e: "operation, surgery", f: "2369" },
{ a: "die", d: "Kooperation", e: "cooperation", f: "2472" },
{ a: "die", d: "Generation", e: "generation", f: "1319" },
{ a: "die", d: "Integration", e: "integration", f: "2004" },
{ d: "integrieren", e: "integrate", f: "1771" },
{ d: "demonstrieren", e: "demonstrate", f: "4058" },
{ d: "demonstrieren", e: "show, advertise", f: "3431" },
{ d: "registrieren", e: "register", f: "2559" },
{ d: "konzentrieren", e: "concentrate", f: "1219" },
{ a: "die", d: "Konzentration", e: "concentration", f: "2781" },
{ d: "zentral", e: "central", f: "0707" },
{ a: "das", d: "Zentrum", e: "center", f: "1111" },
{ a: "der", d: "Zentimeter", e: "centimeter", f: "1313" },
{ a: "der", d: "Millimeter, mm", e: "millimeter", f: "1860" },
{ a: "der", d: "Quadratmeter", e: "square meter", f: "2942" },
{ a: "der", d: "Kilometer", e: "kilometer", f: "0736" },
{ a: "der", d: "Meter", e: "meter", f: "0426" },
{ a: "der", d: "Anbieter", e: "supplier", f: "1617" },
{ d: "anbieten", e: "offer", f: "0435" },
{ d: "bieten", e: "offer", f: "0422" },
{ d: "verbieten", e: "forbid, prohibit", f: "1746" },
{ d: "verbinden", e: "connect, link", f: "0443" },
{ a: "die", d: "Verbindung", e: "connection, link", f: "0713" },
{ a: "die", d: "Bindung", e: "relationship, attachment", f: "2512" },
{ a: "die", d: "Erfindung", e: "invention", f: "3575" },
{ d: "erfinden", e: "invent", f: "2413" },
{ d: "finden", e: "find", f: "0110" },
{ d: "befinden", e: "be", f: "0516" },
{ d: "empfinden", e: "feel", f: "1138" },
{ d: "empfindlich", e: "sensitive", f: "3182" },
{ d: "verbindlich", e: "binding, friendly", f: "3518" },
{ d: "selbstverständlich", e: "obvious, certainly, of course", f: "1210" },
{ d: "verständlich", e: "comprehensible", f: "2448" },
{ a: "das", d: "Verständnis", e: "understanding", f: "1383" },
{ d: "verstärken", e: "strengthen, reinforce", f: "1183" },
{ d: "stärken", e: "strenghten", f: "2277" },
{ a: "die", d: "Stärke", e: "strength", f: "1905" },
{ a: "die", d: "Erkenntnis", e: "realization, discovery", f: "1150" },
{ a: "die", d: "Kenntnis", e: "knowledge", f: "0948" },
{ a: "die", d: "Anerkennung", e: "recognition", f: "2594" },
{ d: "anerkennen", e: "recognize, accept", f: "1648" },
{ d: "erkennen", e: "recognize, admit", f: "0353" },
{ d: "erkennbar", e: "recognizable", f: "2248" },
{ d: "merken", e: "remember, notice", f: "0773" },
{ d: "bemerkenswert", e: "remarkable", f: "3416" },
{ d: "bemerken", e: "mention, notice", f: "1276" },
{ a: "die", d: "Bemerkung", e: "remark, comment", f: "2599" },
{ a: "die", d: "Wechselwirkung", e: "interaction", f: "3149" },
{ a: "der", d: "Wechsel", e: "change", f: "1947" },
{ d: "wechseln", e: "change", f: "0957" },
{ d: "wachsen", e: "grow", f: "0483" },
{ a: "der", d: "Erwachsene", e: "adult, grown-up", f: "1849" },
{ d: "aufwachsen", e: "grow up", f: "1953" },
{ d: "aufwachen", e: "wake up", f: "3163" },
{ d: "erwachen", e: "wake up", f: "3447" },
{ d: "überwachen", e: "monitor, keep under surveillance", f: "3512" },
{ d: "machen", e: "do, make", f: "0049" },
{ d: "aufmachen", e: "open", f: "2502" },
{ d: "ausmachen", e: "switch off, turn off, put out", f: "1368" },
{ d: "weitermachen", e: "carry on, continue", f: "3380" },
{ d: "weiterhin", e: "still, furthermore", f: "0916" },
{ d: "weiter", e: "further", f: "0293" },
{ a: "die", d: "Weiterbildung", e: "further education", f: "3821" },
{ a: "die", d: "Abbildung", e: "illustration", f: "0440" },
{ a: "die", d: "Ausbildung", e: "training, development", f: "0728" },
{ d: "ausbilden", e: "train, instruct, educate", f: "1787" },
{ d: "bilden", e: "form, educate", f: "0369" },
{ d: "abbilden", e: "copy, portray", f: "3054" },
{ d: "melden", e: "report, register", f: "0739" },
{ d: "anmelden", e: "register, sign up", f: "2807" },
{ d: "anmelden", e: "notice, add, let show", f: "3840" },
{ d: "golden", e: "gold, golden", f: "2361" },
{ a: "das", d: "Gold", e: "gold", f: "2689" },
{ a: "der", d: "Soldat", e: "soldier", f: "1074" },
{ d: "isolieren", e: "isolate, insulate", f: "3100" },
{ d: "installieren", e: "install", f: "3892" },
{ d: "kontrollieren", e: "check, control", f: "1685" },
{ a: "die", d: "Kontrolle", e: "inspection", f: "1178" },
{ d: "rollen", e: "roll", f: "2439" },
{ d: "sollen", e: "should, ought to", f: "0063" },
{ d: "wollen", e: "want to", f: "0065" },
{ d: "verfallen", e: "expire, deteriorate", f: "3678" },
{ d: "fallen", e: "fall", f: "0279" },
{ d: "ausfallen", e: "drop out, be cancelled", f: "2345" },
{ d: "auffallen", e: "stand out, notice", f: "1578" },
{ d: "einfallen", e: "come to mind, occur, remind", f: "1124" },
{ d: "anfallen", e: "accumulate, attack", f: "2884" },
{ d: "gefallen", e: "please", f: "0537" },
{ d: "entfallen", e: "slip (sb's mind), be dropped", f: "2902" },
{ d: "entfalten", e: "unfold, develop", f: "3574" },
{ d: "veranstalten", e: "organize", f: "3139" },
{ a: "der", d: "Veranstalter", e: "organizer", f: "3936" },
{ a: "die", d: "Veranstaltung", e: "event", f: "1409" },
{ a: "die", d: "Gestaltung", e: "design, organization", f: "2614" },
{ d: "gestalten", e: "shape, design", f: "1375" },
{ a: "die", d: "Gestalt", e: "shape, form, figure", f: "1463" },
{ d: "gestatten", e: "allow, permit", f: "3739" },
{ d: "ausstatten", e: "furnish, provide", f: "2234" },
{ a: "die", d: "Ausstattung", e: "equipment, furnishings, provision", f: "3553" },
{ a: "die", d: "Werkstatt", e: "workshop, garage", f: "3525" },
{ d: "statt", e: "instead of", f: "0712" },
{ d: "stattdessen", e: "instead", f: "2279" },
{ d: "dessen", e: "whose", f: "0351" },
{ d: "unterdessen", e: "meanwhile", f: "3517" },
{ d: "unterdrücken", e: "suppress", f: "3809" },
{ d: "drücken", e: "press, push", f: "0852" },
{ d: "rücken", e: "move", f: "1740" },
{ a: "der", d: "Rücken", e: "back", f: "0915" },
{ a: "die", d: "Brücke", e: "bridge", f: "2064" },
{ a: "der", d: "Rücktritt", e: "resignation", f: "3230" },
{ d: "umstritten", e: "disputed", f: "2873" },
{ d: "mitten", e: "in the middle", f: "1733" },
{ d: "mitteilen", e: "inform", f: "1830" },
{ a: "die", d: "Mitteilung", e: "communication, announcement", f: "3019" },
{ a: "die", d: "Beurteilung", e: "judgment", f: "2892" },
{ d: "beurteilen", e: "assess, judge", f: "1652" },
{ d: "verurteilen", e: "sentence, condemn", f: "2580" },
{ d: "verteilen", e: "distribute", f: "1287" },
{ d: "erteilen", e: "give", f: "2249" },
{ d: "teilen", e: "share, divide", f: "0694" },
{ d: "eilen", e: "hurry", f: "3570" },
{ a: "die", d: "Weile", e: "while", f: "1809" },
{ a: "die", d: "Zeile", e: "line", f: "2656" },
{ a: "die", d: "Hochzeit", e: "wedding", f: "2835" },
{ d: "gleichzeitig", e: "simultaneous", f: "0549" },
{ d: "rechtzeitig", e: "in time, punctual", f: "2436" },
{ d: "vorzeitig", e: "early, premature", f: "3819" },
{ d: "derzeitig", e: "current", f: "2816" },
{ d: "jederzeit", e: "any time", f: "2837" },
{ d: "derzeit", e: "at the moment", f: "0780" },
{ d: "zurzeit", e: "at the moment", f: "0973" },
{ a: "der", d: "Zeitraum", e: "period of time", f: "1987" },
{ d: "beitragen", e: "contribute", f: "1231" },
{ a: "der", d: "Beitrag", e: "contribution", f: "0890" },
{ d: "arbeitslos", e: "unemployed", f: "1649" },
{ a: "die", d: "Arbeitslosigkeit", e: "unemployment", f: "2055" }
];
window.loadEntries(DATA, 400);
})();
