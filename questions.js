window.CHAPTERS = {
  "1": "Uvod u programsko inženjerstvo",
  "2": "Životni ciklus programske potpore i inženjerstvo zahtjeva",
  "3": "UML u inženjerstvu zahtjeva: obrasci uporabe i sekvencijski dijagrami",
  "4": "Modeli procesa programskog inženjerstva",
  "5": "Arhitektura programa i principi oblikovanja",
  "6": "UML dijagrami razreda",
  "7": "Git i alati za timski razvoj"
};
window.QUESTIONS = [
  {
    "id": "P1.1",
    "chapter": 1,
    "source": "MI 2024 A-1, B-1",
    "question": "Koji od sljedećih faktora najviše doprinosi složenosti programa u kontekstu programskog inženjerstva?",
    "options": [
      {
        "key": "a",
        "text": "Količina komentara u kodu i dokumentacija."
      },
      {
        "key": "b",
        "text": "Broj redaka koda bez obzira na njegovu funkcionalnost."
      },
      {
        "key": "c",
        "text": "Broj međusobnih interakcija između modula, funkcija i komponenti u programu."
      },
      {
        "key": "d",
        "text": "Upotreba najnovijih tehnologija i alata u razvoju programa."
      },
      {
        "key": "e",
        "text": "Upotreba jednostavnih i jasno definiranih funkcionalnosti u svim dijelovima koda."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Složenost raste s brojem interakcija među dijelovima (veliki programi: „problem interakcija komponenti“). Komentari i broj redaka ne čine program složenijim u inženjerskom smislu; nove tehnologije same po sebi nisu glavni izvor složenosti; (e) smanjuje složenost. (Grupa B: isti odgovor pod a.)"
  },
  {
    "id": "P1.2",
    "chapter": 1,
    "source": "MI 2024 A-2",
    "question": "Identificirajte točnu izjavu u vezi s etičkim odgovornostima programskog inženjera:",
    "options": [
      {
        "key": "a",
        "text": "Postupati na način koji prioritizira osobne interese."
      },
      {
        "key": "b",
        "text": "Postupati u skladu s javnim interesom, dajući prioritet dobrobiti društva."
      },
      {
        "key": "c",
        "text": "Osigurati da njihovi proizvodi zadovoljavaju specifikaciju zahtjeva (SRS) bez razmatranja šireg utjecaja."
      },
      {
        "key": "d",
        "text": "Osigurati maksimalnu profitabilnost za tvrtku."
      },
      {
        "key": "e",
        "text": "Sve navedeno."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Prvo načelo je javni interes; interes klijenta ili poslodavca (pa i profit) vrijedi samo dok nije u suprotnosti s javnim interesom. (c) je zamka: zadovoljiti SRS „bez razmatranja šireg utjecaja“ nije etično. Zato ni (e) „sve navedeno“."
  },
  {
    "id": "P1.3",
    "chapter": 1,
    "source": "MI 2024 B-2",
    "question": "Koja od sljedećih tvrdnji najbolje odražava načelo timskog rada prema ACM/IEEE Kodeksu etike?",
    "options": [
      {
        "key": "a",
        "text": "Članovi tima trebaju djelovati neovisno, bez potrebe za koordinacijom."
      },
      {
        "key": "b",
        "text": "Komunikacija unutar tima treba biti ograničena kako bi se smanjile nesuglasice."
      },
      {
        "key": "c",
        "text": "Programski inženjeri trebaju podržavati i promovirati otvorenu komunikaciju i suradnju."
      },
      {
        "key": "d",
        "text": "Odgovornost za neuspjeh projekta uvijek leži na pojedincu koji obavlja tehnički zadatak."
      },
      {
        "key": "e",
        "text": "Tim treba donositi odluke većinskim glasovanjem bez razmatranja manjinskih mišljenja."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Načelo kolegijalnosti: inženjeri se međusobno podržavaju i ophode pošteno, što znači otvorenu komunikaciju, suradnju i uvažavanje mišljenja kolega. (a), (b) i (e) guše suradnju, a (d) prebacuje odgovornost na pojedinca."
  },
  {
    "id": "P1.4",
    "chapter": 1,
    "source": "MI 2024 A-4, B-4",
    "question": "Koje je svojstvo modela programa ključno za pojednostavljenje složenih sustava i omogućava efikasno razumijevanje i analizu složenog sustava u programskom inženjerstvu?",
    "options": [
      {
        "key": "a",
        "text": "Predvidljivost."
      },
      {
        "key": "b",
        "text": "Efikasnost."
      },
      {
        "key": "c",
        "text": "Potpunost."
      },
      {
        "key": "d",
        "text": "Prilagodljivost."
      },
      {
        "key": "e",
        "text": "Apstrakcija."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Apstrakcija izostavlja nebitne detalje i time pojednostavljuje složeni sustav. Predvidljivost je također svojstvo modela, ali znači da model daje odgovore o ponašanju sustava; potpunost, efikasnost i prilagodljivost nisu svojstva modela sa slajda. (Grupa B: isti odgovor pod d.)"
  },
  {
    "id": "P1.5",
    "chapter": 1,
    "source": "MI 2025 A-1",
    "question": "Koje od sljedećih svojstava modela programske potpore je važno za omogućavanje dosljednih i ponovljivih interpretacija unutar tima?",
    "options": [
      {
        "key": "a",
        "text": "Složenost"
      },
      {
        "key": "b",
        "text": "Modularnost"
      },
      {
        "key": "c",
        "text": "Standardizacija"
      },
      {
        "key": "d",
        "text": "Jednostavnost"
      },
      {
        "key": "e",
        "text": "Fleksibilnost procesa"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "„Dosljedne i ponovljive interpretacije“ znače da svi isti model čitaju jednako, a to osigurava standardizacija (standardna notacija poput UML-a i dogovorene konvencije). Jednostavnost i modularnost ne jamče jednako tumačenje; „fleksibilnost procesa“ nije svojstvo modela."
  },
  {
    "id": "P1.6",
    "chapter": 1,
    "source": "MI 2025 B-1",
    "question": "Koja praksa u timu najviše doprinosi dosljednom razumijevanju koda i modela među članovima tima?",
    "options": [
      {
        "key": "a",
        "text": "Slijepo kopiranje koda iz drugih projekata"
      },
      {
        "key": "b",
        "text": "Primjena standardiziranih konvencija i obrazaca"
      },
      {
        "key": "c",
        "text": "Svaki član tima koristi vlastite stilove i metode"
      },
      {
        "key": "d",
        "text": "Pisanje dokumentacije po završetku projekta"
      },
      {
        "key": "e",
        "text": "Provođenje ispitivanja isključivo na kraju projekta"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Isti pojam kao u prethodnom pitanju, sada kao timska praksa: standardizirane konvencije i obrasci. (c) je suprotnost, (d) i (e) odgađaju dokumentiranje i ispitivanje na kraj, a (a) je loša praksa."
  },
  {
    "id": "P1.7",
    "chapter": 1,
    "source": "MI 2025 A-3, B-4",
    "question": "Koji je temeljni razlog, unatoč tehnološkom napretku u alatima i jezicima, što razvoj programske potpore nije postao lakši?",
    "options": [
      {
        "key": "a",
        "text": "Povećanje veličine timova, što linearno povećava komunikacijske troškove"
      },
      {
        "key": "b",
        "text": "Intrinzična složenost problema u stvarnom svijetu"
      },
      {
        "key": "c",
        "text": "Nedostatak edukacije o novim programskim jezicima"
      },
      {
        "key": "d",
        "text": "Ne postoji jednostavna zamjena za ljudski napor u rješavanju bitnih problema"
      },
      {
        "key": "e",
        "text": "Ograničena dostupnost visokokvalitetnih integriranih razvojnih okruženja (IDE)"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Brooksova teza No Silver Bullet: alati i jezici uklanjaju nenamjerne poteškoće, a suštinske (složenost, usklađenost, promjenljivost, nevidljivost) ostaju i za njih nema zamjene za ljudski intelektualni napor. Napomena: (b) opisuje jedno od suštinskih svojstava, pa nije „kriva“ činjenica, ali ključ traži temeljni zaključak teze, a to je (d). (a), (c) i (e) su nenamjerni ili organizacijski razlozi koje napredak može riješiti. (Grupa B: isti odgovor pod c.)"
  },
  {
    "id": "P1.8",
    "chapter": 1,
    "source": "MI 2025 A-11",
    "question": "Ako voditelj kontinuirano izostavlja juniorski tim s tehničkih rasprava i ne omogućuje im učenje, koje etičko načelo je prekršeno?",
    "options": [
      {
        "key": "a",
        "text": "Kolegijalnost"
      },
      {
        "key": "b",
        "text": "Struka"
      },
      {
        "key": "c",
        "text": "Upravljanje"
      },
      {
        "key": "d",
        "text": "Prosudba"
      },
      {
        "key": "e",
        "text": "Proizvod"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Oštećeni su kolege (juniori) kojima se uskraćuje uključenost i profesionalni razvoj, a pomaganje kolegama u njihovu razvoju dio je kolegijalnosti (udžbenik: „pomagati kolegama i suradnicima u njihovom profesionalnom razvoju“). Zamka je „Upravljanje“ jer je počinitelj voditelj — ali načelo se određuje prema tome čiji je interes povrijeđen."
  },
  {
    "id": "P1.9",
    "chapter": 1,
    "source": "MI 2025 B-13",
    "question": "Tvrtka prikuplja osobne podatke korisnika bez jasnog pristanka, uz opravdanje da „ionako svi to rade“. Koje načelo je prekršeno?",
    "options": [
      {
        "key": "a",
        "text": "Struka"
      },
      {
        "key": "b",
        "text": "Proizvod"
      },
      {
        "key": "c",
        "text": "Javni interes"
      },
      {
        "key": "d",
        "text": "Upravljanje"
      },
      {
        "key": "e",
        "text": "Kolegijalnost"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Privatnost korisnika je pitanje javnog interesa (slajd: „inženjeri trebaju poštivati privatnost javnosti“). Opravdanje „svi to rade“ ne vrijedi — etika je više od uobičajene prakse i zakona."
  },
  {
    "id": "P1.10",
    "chapter": 1,
    "source": "ZI 2026 A-1, B-2",
    "question": "Što je to kriza razvoja programske potpore, ustanovljena 1960-ih godina?",
    "options": [
      {
        "key": "a",
        "text": "Pojava nedostatka računalnog sklopovlja pogodnog za izvođenje složenih programa"
      },
      {
        "key": "b",
        "text": "Smanjenje razvoja programske potpore zbog uvođenja visokorazinskih programskih jezika"
      },
      {
        "key": "c",
        "text": "Problemi računalne sigurnosti u ranim operacijskim sustavima"
      },
      {
        "key": "d",
        "text": "Priznavanje problema realizacije složenih programskih projekata"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Kriza (1968.) je priznavanje problema realizacije složenih programskih projekata (kašnjenja, probijanje proračuna, loša kvaliteta) i povod za nastanak discipline PI. Ostalo su distraktori bez veze s pojmom. (Grupa B: isti odgovor pod c.)"
  },
  {
    "id": "P1.11",
    "chapter": 1,
    "source": "ZI 2026 A-7, B-6",
    "question": "Programski inženjer implementira funkcionalnost prema specifikaciji koju je odobrio klijent, iako zna da to može dovesti do diskriminacije korisnika. Koja tvrdnja je etički točna?",
    "options": [
      {
        "key": "a",
        "text": "Programski inženjer nema etičku odgovornost jer je njegova uloga isključivo tehnička"
      },
      {
        "key": "b",
        "text": "Diskriminacija je prihvatljiva ako je izričito zahtijevana specifikacijom"
      },
      {
        "key": "c",
        "text": "Programski inženjer dijeli etičku odgovornost za posljedice implementacije"
      },
      {
        "key": "d",
        "text": "Etika se ne primjenjuje ako nema kršenja zakona"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Inženjer dijeli etičku odgovornost: javni interes je iznad klijentove specifikacije, etika je više od zakona, a IEEE kod izričito zabranjuje diskriminaciju. (a), (b) i (d) su tipične „tehničke izlike“."
  },
  {
    "id": "P1.25",
    "chapter": 1,
    "source": "MI 2015 A-1, također MI 2015 B-2",
    "question": "Akronimi MDSD, MBASE, MBE, MDE, MDD, MDA, DDD označavaju metodologije oblikovanja programske potpore zasnovane na:",
    "options": [
      {
        "key": "a",
        "text": "Komponentama"
      },
      {
        "key": "b",
        "text": "Modularnosti"
      },
      {
        "key": "c",
        "text": "Domenskom znanju"
      },
      {
        "key": "d",
        "text": "Modelima"
      },
      {
        "key": "e",
        "text": "Inženjerstvu"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Sve su to metodologije oblikovanja zasnovanog na modelima (MDD i srodne). „Domensko znanje“ je zamka zbog DDD-a, ali i on se temelji na (domenskom) modelu. (Grupa B: isti odgovor pod a.)"
  },
  {
    "id": "P1.26",
    "chapter": 1,
    "source": "MI 2016 A-1, također MI 2016 B-1",
    "question": "Uvođenjem modela u razvoj programske potpore nastoji se doskočiti prekomjernoj programske potpore.",
    "options": [
      {
        "key": "a",
        "text": "Analizi"
      },
      {
        "key": "b",
        "text": "Modularnosti"
      },
      {
        "key": "c",
        "text": "Složenosti"
      },
      {
        "key": "d",
        "text": "Ispitljivosti"
      },
      {
        "key": "e",
        "text": "Koheziji"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Modeli su apstrakcija kojom se upravlja složenošću; slajd: problem razvoja je prekomjerna (nenamjerna) složenost. (Grupa B: isti odgovor pod e.)"
  },
  {
    "id": "P1.27",
    "chapter": 1,
    "source": "MI 2013-2",
    "question": "Koja temeljna značajka ili značajke najviše razlikuju moderan način oblikovanja programske potpore od tradicijskog?",
    "options": [
      {
        "key": "a",
        "text": "Uvođenje analize zahtjeva."
      },
      {
        "key": "b",
        "text": "Specifikacija sustava."
      },
      {
        "key": "c",
        "text": "Evaluacija sustava."
      },
      {
        "key": "d",
        "text": "Uvođenje i analiza modela sustava."
      },
      {
        "key": "e",
        "text": "Sve gore navedeno."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Neslužbeno. Analiza zahtjeva, specifikacija i vrednovanje sustava postoje i u tradicijskom postupku; moderni postupak dodaje modeliranje te validaciju, verifikaciju i simulaciju modela prije implementacije. Zato ni (e)."
  },
  {
    "id": "P1.30",
    "chapter": 1,
    "source": "MI 2014-1",
    "question": "Kao dioniku u ocjeni kakvoće programskog produkta kupcu je najvažnije:",
    "options": [
      {
        "key": "a",
        "text": "Lakoća oblikovanja."
      },
      {
        "key": "b",
        "text": "Lakoća održavanja."
      },
      {
        "key": "c",
        "text": "Lakoća ponovne uporabe dijelova."
      },
      {
        "key": "d",
        "text": "Nijedno od navedenog."
      },
      {
        "key": "e",
        "text": "Sve navedeno."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Neslužbeno. Kupcu je dobar proizvod onaj koji rješava problem uz prihvatljivu cijenu; lakoća oblikovanja, održavanja i ponovne uporabe mjerila su razvijatelja (udžbenik 2.2.5)."
  },
  {
    "id": "P2.1",
    "chapter": 2,
    "source": "MI 2024 A-3, B-3",
    "question": "Koji je jedan od ključnih izazova u upravljanju timovima u razvoju programske potpore?",
    "options": [
      {
        "key": "a",
        "text": "Komuniciranje s korisnicima o novim funkcionalnostima."
      },
      {
        "key": "b",
        "text": "Smanjenje broja zaposlenih u timu kako bi se povećala efikasnost."
      },
      {
        "key": "c",
        "text": "Implementacija novih tehnologija bez dodatne obuke."
      },
      {
        "key": "d",
        "text": "Upravljanje promjenama u zahtjevima i održavanje usklađenosti među timovima."
      },
      {
        "key": "e",
        "text": "Osiguranje jasne podjele zadataka i odgovornosti među članovima tima."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Zahtjevi se stalno mijenjaju, a više timova mora raditi usklađeno na istoj slici sustava. Napomena: (e) „jasna podjela zadataka“ nije besmislena, ali je to cilj dobrog upravljanja, a ne izazov koji ga čini teškim; (b) i (c) su loše prakse; (a) je redovna aktivnost, a ne izazov upravljanja timovima. (Grupa B: isti odgovor pod b.)"
  },
  {
    "id": "P2.2",
    "chapter": 2,
    "source": "MI 2024 A-5, B-6",
    "question": "Koja od sljedećih izjava najbolje opisuje zašto je životni ciklus razvoja programske potpore (engl. Software Development Lifecycle, SDLC) ključan za programsko inženjerstvo?",
    "options": [
      {
        "key": "a",
        "text": "Eliminira potrebu za ažuriranjima i održavanjem."
      },
      {
        "key": "b",
        "text": "Osigurava strukturirani pristup za osiguranje kvalitete i pravovremene isporuke programske potpore."
      },
      {
        "key": "c",
        "text": "Fokusira se isključivo na kodiranje i implementaciju."
      },
      {
        "key": "d",
        "text": "Potreban je samo za male projekte."
      },
      {
        "key": "e",
        "text": "Pruža okvir za učinkovito upravljanje rizicima, resursima i vremenskim okvirima kroz cijeli projekt."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "SDLC je inženjerski, strukturirani pristup čiji je cilj kvalitetan proizvod isporučen na vrijeme (poboljšanje oblikovanja proizvoda, upravljanja proizvodom i projektom). (a) je netočno jer je evolucija dio ciklusa, (c) i (d) su besmisleni. Napomena: (e) opisuje stvaran aspekt (upravljanje projektom), ali ključ kao „najbolji“ odgovor uzima širu svrhu (b). (Grupa B: isti odgovor pod d.)"
  },
  {
    "id": "P2.3",
    "chapter": 2,
    "source": "MI 2024 A-6, B-5",
    "question": "Koja je razlika između zahtjeva sustava i oblikovanja sustava?",
    "options": [
      {
        "key": "a",
        "text": "Zahtjevi sustava određuju kako sustav mora raditi, dok oblikovanje određuje što sustav mora raditi."
      },
      {
        "key": "b",
        "text": "Zahtjevi sustava određuju što sustav mora raditi, dok oblikovanje određuje kako će se to ostvariti."
      },
      {
        "key": "c",
        "text": "Zahtjevi sustava i oblikovanje sustava su isti, jer oba opisuju funkcionalnosti sustava."
      },
      {
        "key": "d",
        "text": "Zahtjevi sustava odnose se na oblikovanje sustava, dok oblikovanje određuje njegove operacije."
      },
      {
        "key": "e",
        "text": "Zahtjevi sustava su poslovni zahtjevi na sustav, a oblikovanje sustava je usmjereno na korisničke zahtjeve."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Zahtjevi = što, oblikovanje = kako. (a) je obrnuto; (e) brka razine detalja zahtjeva s oblikovanjem."
  },
  {
    "id": "P2.4",
    "chapter": 2,
    "source": "MI 2024 A-7, B-7",
    "question": "Zašto je važno osigurati potpunost zahtjeva prije početka razvoja programskog sustava?",
    "options": [
      {
        "key": "a",
        "text": "Potpunost zahtjeva osigurava da svi dionici imaju jasnu predodžbu o funkcionalnostima sustava i omogućava bolje planiranje."
      },
      {
        "key": "b",
        "text": "Potpunost zahtjeva nije bitna jer se sustav može razviti bez potpune specifikacije, a nedostaci će se kasnije ispraviti."
      },
      {
        "key": "c",
        "text": "Potpunost zahtjeva znači da su svi tehnički detalji i implementacija već definirani prije početka rada na projektu."
      },
      {
        "key": "d",
        "text": "Potpunost zahtjeva je važna samo za veće projekte jer manji projekti mogu sigurno uspjeti s nepotpunim zahtjevima."
      },
      {
        "key": "e",
        "text": "Potpunost zahtjeva nije relevantna za moderne metodologije životnog ciklusa razvoja softvera (SDLC)."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Potpunost daje svim dionicima zajedničku predodžbu i omogućuje planiranje. (c) je zamka: potpunost zahtjeva ne znači da je implementacija definirana. (b), (d) i (e) umanjuju važnost potpunosti."
  },
  {
    "id": "P2.5",
    "chapter": 2,
    "source": "MI 2025 A-5, B-5",
    "question": "Koja tvrdnja najbolje opisuje važnost potpune specifikacije zahtjeva u početnoj fazi razvoja softvera?",
    "options": [
      {
        "key": "a",
        "text": "Potpunost zahtjeva osigurava zajedničko razumijevanje funkcionalnosti i bolju organizaciju rada"
      },
      {
        "key": "b",
        "text": "Potpunost zahtjeva nije bitna; razvoj može krenuti odmah"
      },
      {
        "key": "c",
        "text": "Potpunost zahtjeva znači da je implementacija unaprijed definirana"
      },
      {
        "key": "d",
        "text": "Samo veliki projekti trebaju potpune zahtjeve"
      },
      {
        "key": "e",
        "text": "SDLC metodologije čine potpunost zahtjeva zastarjelom"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Isto kao prethodno pitanje u drugoj formulaciji: zajedničko razumijevanje i bolja organizacija rada."
  },
  {
    "id": "P2.6",
    "chapter": 2,
    "source": "MI 2025 A-6, B-3",
    "question": "Što od navedenog nije primarni cilj ISO/IEC 12207 standarda?",
    "options": [
      {
        "key": "a",
        "text": "Olakšati jasnu komunikaciju i dogovaranje između svih dionika projekta."
      },
      {
        "key": "b",
        "text": "Definirati i standardizirati tehničke standarde za podršku razvoju programa."
      },
      {
        "key": "c",
        "text": "Uspostaviti zajednički okvir za dosljedan i visokokvalitetan razvoj i održavanje programskih proizvoda."
      },
      {
        "key": "d",
        "text": "Osigurati sveobuhvatan skup procesa koji pokriva cjelokupni životni ciklus, od koncepcije do povlačenja iz upotrebe."
      },
      {
        "key": "e",
        "text": "Propisati metode programiranja i specifične alate za implementaciju."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Norma definira zajednički okvir procesa za cijeli životni ciklus i olakšava dogovaranje dionika, ali ne propisuje metode programiranja ni alate. (a), (c) i (d) su njezini ciljevi; (b) je nespretno formuliran, ali i dalje opisuje standardizaciju."
  },
  {
    "id": "P2.7",
    "chapter": 2,
    "source": "MI 2025 A-17, B-17",
    "question": "Koja faza životnog ciklusa razvoja sustava uključuje komunikaciju s kupcima i korisnicima te definira usluge i ograničenja sustava?",
    "options": [
      {
        "key": "a",
        "text": "Implementacija"
      },
      {
        "key": "b",
        "text": "Oblikovanje sustava"
      },
      {
        "key": "c",
        "text": "Testiranje"
      },
      {
        "key": "d",
        "text": "Analiza zahtjeva"
      },
      {
        "key": "e",
        "text": "Validacija"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Analiza (inženjerstvo) zahtjeva: u radu s kupcima i korisnicima razjašnjava se domena, definiraju usluge i određuju ograničenja. Oblikovanje je kako, a ispitivanje i validacija provjeravaju. (Grupa B: isti odgovor pod a.)"
  },
  {
    "id": "P2.8",
    "chapter": 2,
    "source": "MI 2025 A-4, B-6",
    "question": "Inženjeru zahtjeva nedostaju pouzdani podaci o stvarnom tijeku skladišnih aktivnosti, jer se formalni opisi procesa ne poklapaju s praksom na terenu. Koja je metoda izlučivanja zahtjeva najprimjerenija?",
    "options": [
      {
        "key": "a",
        "text": "Radionice za izlučivanje zahtjeva"
      },
      {
        "key": "b",
        "text": "Etnografija i promatranje"
      },
      {
        "key": "c",
        "text": "Intervjui i strukturirane ankete"
      },
      {
        "key": "d",
        "text": "Analiza scenarija i obrazaca uporabe"
      },
      {
        "key": "e",
        "text": "Izrada prototipa"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Ključ je „formalni opisi se ne poklapaju s praksom na terenu“: etnografija otkriva kako ljudi stvarno rade, a ne kako to propisuju formalni procesi. Intervjui, ankete i radionice ponovno daju ono što ljudi kažu; scenariji i obrasci uporabe pretpostavljaju da znamo tijek; prototip provjerava zamišljeno rješenje. (Grupa B: isti odgovor pod e.)"
  },
  {
    "id": "P2.9",
    "chapter": 2,
    "source": "MI 2025 A-14, B-14",
    "question": "Koji od navedenih zahtjeva najtočnije predstavlja nefunkcionalni zahtjev vezan uz pouzdanost sustava?",
    "options": [
      {
        "key": "a",
        "text": "Sustav mora spremiti sve transakcije u bazu podataka."
      },
      {
        "key": "b",
        "text": "Sustav mora omogućiti korisniku ponovno slanje zahtjeva nakon pogreške unutar 10 sekundi."
      },
      {
        "key": "c",
        "text": "Sustav mora evidentirati sve greške u log datoteku."
      },
      {
        "key": "d",
        "text": "Sustav mora osigurati oporavak od greške u najmanje 95 % slučajeva unutar 10 sekundi."
      },
      {
        "key": "e",
        "text": "Sustav mora dopustiti administratoru brisanje korisničkog računa."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Jedini je zahtjev koji opisuje svojstvo sustava (oporavak od greške) s mjerom (95 %, 10 s). (a), (c) i (e) su funkcije; (b) je također funkcija za korisnika (omogućiti ponovno slanje), iako spominje vrijeme."
  },
  {
    "id": "P2.10",
    "chapter": 2,
    "source": "MI 2025 A-20, B-20",
    "question": "Koji od navedenih funkcijskih zahtjeva nije dobro definiran?",
    "options": [
      {
        "key": "a",
        "text": "Sustav omogućava korisniku prijavu pomoću korisničkog imena i lozinke."
      },
      {
        "key": "b",
        "text": "Sustav omogućuje korisniku pretraživanje proizvoda prema nazivu, kategoriji ili cijeni."
      },
      {
        "key": "c",
        "text": "Administrator može uređivati podatke ako želi."
      },
      {
        "key": "d",
        "text": "Administrator može putem sustava poslati e-mail potvrdu."
      },
      {
        "key": "e",
        "text": "Sustav automatski generira PDF račun nakon svake potvrđene kupnje."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "„Uređivati podatke“ — koje? „Ako želi“ nije uvjet koji sustav može provjeriti ⇒ nejednoznačno i neprovjerljivo. Ostali imaju jasan subjekt, radnju i objekt. (Grupa B: isti odgovor pod b.)"
  },
  {
    "id": "P2.11",
    "chapter": 2,
    "source": "ZI 2026 A-2",
    "question": "Što je od navedenog karakteristično za zahtjeve sustava (engl. system requirements)?",
    "options": [
      {
        "key": "a",
        "text": "Opis funkcionalnosti sustava iz perspektive krajnjeg korisnika"
      },
      {
        "key": "b",
        "text": "Opći ciljevi i razlozi uvođenja sustava iz poslovne perspektive"
      },
      {
        "key": "c",
        "text": "Detaljna specifikacija sustava koja se piše strukturiranim prirodnim jezikom i dijagramima"
      },
      {
        "key": "d",
        "text": "Formalna specifikacija sustava izražena isključivo matematičkim i logičkim formulama"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Zahtjevi sustava su vrlo detaljna specifikacija pisana strukturiranim prirodnim jezikom, posebnim jezicima, dijagramima (i matematičkom notacijom — ali ne isključivo). (a) su korisnički, (b) poslovni zahtjevi."
  },
  {
    "id": "P2.12",
    "chapter": 2,
    "source": "ZI 2026 B-1",
    "question": "Što je od navedenog karakteristično za korisničke zahtjeve (engl. user requirements)?",
    "options": [
      {
        "key": "a",
        "text": "Specifikacija visoke razine apstrakcije koja se piše prirodnim jezikom"
      },
      {
        "key": "b",
        "text": "Formalna specifikacija sustava izražena isključivo matematičkim i logičkim formulama"
      },
      {
        "key": "c",
        "text": "Opći ciljevi i razlozi uvođenja sustava iz poslovne perspektive"
      },
      {
        "key": "d",
        "text": "Detaljna specifikacija sustava koja se piše strukturiranim prirodnim jezikom i dijagramima"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Korisnički zahtjevi su specifikacija visoke razine apstrakcije, pisana prirodnim jezikom (uz tablice i jednostavne dijagrame). (c) su poslovni zahtjevi, (d) zahtjevi sustava."
  },
  {
    "id": "P2.41",
    "chapter": 2,
    "source": "MI 2015 A-2, također MI 2015 B-1, ZI 2014-4",
    "question": "Zahtjevi koji ne sadržavaju konflikte ili kontradikcije u opisima zahtijevanih funkcionalnosti zovu se: (ZI 2014: opišite svojstva konzistentnih zahtjeva.)",
    "options": [
      {
        "key": "a",
        "text": "Kompletni"
      },
      {
        "key": "b",
        "text": "Konzistentni"
      },
      {
        "key": "c",
        "text": "Razumljivi"
      },
      {
        "key": "d",
        "text": "Adaptibilni"
      },
      {
        "key": "e",
        "text": "Provjerljivi"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Konzistentni zahtjevi ne sadrže konflikte ni proturječja. Kompletni opisuju sve zahtijevane mogućnosti. (Grupa B: isti odgovor pod e.)"
  },
  {
    "id": "P2.42",
    "chapter": 2,
    "source": "MI 2016 A-2",
    "question": "Element provjere zahtjeva koji ustanovljuje je li naveden izvor dokumenta i koji su razlozi uvrštavanja zahtjeva naziva se:",
    "options": [
      {
        "key": "a",
        "text": "Konzistencija"
      },
      {
        "key": "b",
        "text": "Valjanost"
      },
      {
        "key": "c",
        "text": "Adaptibilnost"
      },
      {
        "key": "d",
        "text": "Sljedivost"
      },
      {
        "key": "e",
        "text": "Kompletnost"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Sljedivost: naveden izvor i razlog uvrštavanja zahtjeva."
  },
  {
    "id": "P2.43",
    "chapter": 2,
    "source": "MI 2016 B-2",
    "question": "Element provjere zahtjeva koji ustanovljuje osigurava li sustav funkcije koje podupiru potrebe korisnika naziva se:",
    "options": [
      {
        "key": "a",
        "text": "Konzistencija"
      },
      {
        "key": "b",
        "text": "Valjanost"
      },
      {
        "key": "c",
        "text": "Sljedivost"
      },
      {
        "key": "d",
        "text": "Adaptabilnost"
      },
      {
        "key": "e",
        "text": "Kompletnost"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Valjanost: sustav osigurava funkcije koje podupiru potrebe korisnika."
  },
  {
    "id": "P2.46",
    "chapter": 2,
    "source": "MI 2016 B-3",
    "question": "U procesu inženjerstva zahtjeva faza analize zahtjeva rezultira:",
    "options": [
      {
        "key": "a",
        "text": "Algoritmima i podatkovnim strukturama problema"
      },
      {
        "key": "b",
        "text": "Procjenom korisnosti i pouzdanosti"
      },
      {
        "key": "c",
        "text": "Funkcionalnim i ponašajnim modelom"
      },
      {
        "key": "d",
        "text": "Procjenom troškova"
      },
      {
        "key": "e",
        "text": "Arhitekturom i strukturom programa"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Analiza daje analitički model — funkcionalni i ponašajni model. Arhitektura, algoritmi i strukture podataka su proizvodi oblikovanja; procjena troškova i korisnosti spada u studiju izvedivosti."
  },
  {
    "id": "P2.47",
    "chapter": 2,
    "source": "MI 2013-1",
    "question": "Za spiralni model inženjerstva zahtjeva ne vrijedi:",
    "options": [
      {
        "key": "a",
        "text": "Koriste se iteracije ciklusa svih generičkih aktivnosti."
      },
      {
        "key": "b",
        "text": "U kasnijim iteracijama izrađuju se prototipovi radi validacije."
      },
      {
        "key": "c",
        "text": "Zahtjevi sustava određuju se u ranijim iteracijama."
      },
      {
        "key": "d",
        "text": "Rane iteracije imaju fokus na poslovnom modelu zahtjeva."
      },
      {
        "key": "e",
        "text": "Zahtjevi se kroz iteracije specificiraju s različitom razinom detalja."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Neslužbeno. Rane iteracije usredotočene su na poslovni model, a zahtjevi sustava detaljno se izlučuju tek u kasnijim (vanjskim) slojevima spirale."
  },
  {
    "id": "P2.48",
    "chapter": 2,
    "source": "MI 2016 A-11",
    "question": "U načine dokumentiranja zahtjeva sustava koji se koriste u praksi ne spada:",
    "options": [
      {
        "key": "a",
        "text": "UML dijagram obrazaca uporabe"
      },
      {
        "key": "b",
        "text": "Intervjuiranje"
      },
      {
        "key": "c",
        "text": "Izrada scenarija"
      },
      {
        "key": "d",
        "text": "UML dijagram razreda"
      },
      {
        "key": "e",
        "text": "UML sekvencijski dijagram"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Dijagram razreda je model oblikovanja, a ne zapis zahtjeva. Napomena: intervjuiranje je strogo gledano metoda izlučivanja, a ne dokumentiranja, ali ključ kao točno priznaje samo (d)."
  },
  {
    "id": "P2.60",
    "chapter": 2,
    "source": "MI 2013-5",
    "question": "U okviru generičke aktivnosti „Oblikovanje i implementacija“, u dijelu „Oblikovanje programskog produkta“, što neposredno prethodi podaktivnosti „Oblikovanje struktura podataka“?",
    "options": [
      {
        "key": "a",
        "text": "Apstraktna specifikacija programske potpore."
      },
      {
        "key": "b",
        "text": "Oblikovanje i specifikacija komponenata."
      },
      {
        "key": "c",
        "text": "Oblikovanje i specifikacija arhitekture."
      },
      {
        "key": "d",
        "text": "Oblikovanje i specifikacija algoritama."
      },
      {
        "key": "e",
        "text": "Oblikovanje i specifikacija sučelja."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Neslužbeno. Redoslijed: arhitektura → apstraktna specifikacija → sučelja → komponente → strukture podataka → algoritmi."
  },
  {
    "id": "P3.1",
    "chapter": 3,
    "source": "MI 2024 A-16, B-16",
    "question": "Koja je svrha UML dijagrama obrazaca uporabe?",
    "options": [
      {
        "key": "a",
        "text": "Funkcionalna dekompozicija."
      },
      {
        "key": "b",
        "text": "Utvrđivanje i prikaz funkcionalnih zahtjeva."
      },
      {
        "key": "c",
        "text": "Definiranje slijeda scenarija."
      },
      {
        "key": "d",
        "text": "Za prepoznavanje višestrukosti."
      },
      {
        "key": "e",
        "text": "Sve navedeno."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Dijagram obrazaca uporabe modelira funkcionalne zahtjeve – što sustav nudi aktorima, gledano izvana. (a) funkcionalna dekompozicija je samo jedna od primjena veze «include», ne svrha dijagrama; (c) slijed scenarija prikazuje sekvencijski dijagram ili tekstualni opis; (d) višestrukost je samo opcionalni detalj veze. Napomena: u grupi B isti su odgovori u drugom redoslijedu (točan je a)."
  },
  {
    "id": "P3.2",
    "chapter": 3,
    "source": "MI 2024 A-17",
    "question": "Koje obrasce uporabe može pokrenuti aktor D? (dijagram grupe A)",
    "options": [
      {
        "key": "a",
        "text": "UC4."
      },
      {
        "key": "b",
        "text": "UC3, UC4."
      },
      {
        "key": "c",
        "text": "UC4, UC1."
      },
      {
        "key": "d",
        "text": "UC4, UC3, UC1."
      },
      {
        "key": "e",
        "text": "Niti jedan."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "D je izravno povezan s UC4. D je dijete aktora C (trokut kod C), pa nasljeđuje sve veze roditelja – dakle i UC3. A je također dijete od C, ali to za D nije bitno (D ne nasljeđuje od „brata“ A, pa ne dobiva UC1 preko A). Veza UC4 --«extend»--> UC1 znači da UC4 opcionalno proširuje UC1 – pokretanje UC4 ne pokreće UC1. UC3 je specijalizacija UC1 (generalizacija), što ne znači da D pokreće sam UC1. Ukupno: UC3, UC4.",
    "image": "images/P3.2.png"
  },
  {
    "id": "P3.3",
    "chapter": 3,
    "source": "MI 2024 B-17",
    "question": "Koje obrasce uporabe može pokrenuti aktor D? (dijagram grupe B – jedina razlika prema grupi A: veza UC4 → UC1 je «include»)",
    "options": [
      {
        "key": "a",
        "text": "UC4."
      },
      {
        "key": "b",
        "text": "UC3, UC4."
      },
      {
        "key": "c",
        "text": "UC4, UC1."
      },
      {
        "key": "d",
        "text": "UC4, UC3, UC1."
      },
      {
        "key": "e",
        "text": "Niti jedan."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Isti dijagram kao u grupi A, ali UC4 --«include»--> UC1: kad se izvodi UC4, nužno se izvodi i UC1 (UC4 sadrži ponašanje UC1). Zato D preko UC4 pokreće i UC1, a UC3 nasljeđuje od roditelja C. Ukupno: UC4, UC3, UC1. Zašto su odgovori A i B različiti: jedina razlika je stereotip veze – «extend» (opcionalno, strelica od proširenja prema osnovnom, osnovni se ne izvodi) naspram «include» (uključeni se uvijek izvodi). Napomena: ključ implicitno pretpostavlja da strelica UC4→UC1 ima ispravan smjer za oba stereotipa; čitaj je uvijek od izvora: «include» – izvor uključuje odredište, «extend» – izvor proširuje odredište.",
    "image": "images/P3.3.png"
  },
  {
    "id": "P3.4",
    "chapter": 3,
    "source": "MI 2024 A-18, B-18",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje visokorazinski dijagram obrazaca uporabe cijelog sustava?",
    "options": [
      {
        "key": "a",
        "text": "Dijagram koji prikazuje sve detalje implementacije sustava, uključujući sve tehničke komponente i njihovu interakciju."
      },
      {
        "key": "b",
        "text": "Dijagram koji prikazuje samo jedan specifičan obrazac uporabe sustava s detaljima vezanim za ključnu funkcionalnost."
      },
      {
        "key": "c",
        "text": "Dijagram koji opisuje samo arhitektonsku strukturu sustava."
      },
      {
        "key": "d",
        "text": "Dijagram koji ilustrira moguće funkcionalnosti sustava iz perspektive krajnjih korisnika, uključujući njihove interakcije sa sustavom."
      },
      {
        "key": "e",
        "text": "Dijagram koji ilustrira sve moguće detalje funkcionalnosti sustava."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Visokorazinski dijagram cijelog sustava prikazuje funkcionalnosti iz perspektive krajnjih korisnika i njihove interakcije sa sustavom, bez detalja. (a) i (e) – obrasci uporabe namjerno nemaju implementacijske detalje; (b) opisuje jedan obrazac (niža razina); (c) arhitekturu opisuju drugi dijagrami (komponente, razmještaj)."
  },
  {
    "id": "P3.5",
    "chapter": 3,
    "source": "MI 2024 A-19, B-19",
    "question": "Koja je primarna svrha UML sekvencijskog dijagrama (engl. UML sequence diagram)?",
    "options": [
      {
        "key": "a",
        "text": "Prikaz interakcija i redoslijeda poruka između objekata tijekom vremena."
      },
      {
        "key": "b",
        "text": "Modeliranje odnosa između razreda."
      },
      {
        "key": "c",
        "text": "Prikaz tijeka kontrole unutar jedne metode ili operacije."
      },
      {
        "key": "d",
        "text": "Prikaz statičke strukture sustava."
      },
      {
        "key": "e",
        "text": "Dokumentiranje ponašanja sustava u scenarijima izlučivanja zahtjeva."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Sekvencijski dijagram naglašava vremensko uređenje poruka između objekata. (b) i (d) – dijagram razreda; (c) tijek unutar jedne operacije – dijagram aktivnosti (sekvencijski nije za proceduralnu logiku/algoritme); (e) zvuči uvjerljivo jer se sekvencijski dijagrami koriste za razradu scenarija, ali to nije njihova primarna svrha."
  },
  {
    "id": "P3.6",
    "chapter": 3,
    "source": "MI 2025 A-18",
    "question": "U bolničkom informacijskom sustavu prikazan je obrazac uporabe Prikaz medicinske povijesti s vezom «extend» prema obrascu Pregled pacijenta. Što ta veza označava?",
    "options": [
      {
        "key": "a",
        "text": "Dodatnu funkcionalnost koja se uvijek poziva."
      },
      {
        "key": "b",
        "text": "Nasljeđivanje između obrazaca uporabe."
      },
      {
        "key": "c",
        "text": "Paralelno izvođenje funkcionalnosti."
      },
      {
        "key": "d",
        "text": "Ništa od navedenog."
      },
      {
        "key": "e",
        "text": "Funkcionalnost koja se može aktivirati u određenim uvjetima."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "«extend» = dopunsko, opcionalno/uvjetno ponašanje: prikaz medicinske povijesti može se aktivirati tijekom pregleda pacijenta. (a) „uvijek se poziva“ opisuje «include»; (b) nasljeđivanje je generalizacija; (c) paralelnost se u obrascima uporabe ne modelira."
  },
  {
    "id": "P3.7",
    "chapter": 3,
    "source": "MI 2025 B-18",
    "question": "U bolničkom informacijskom sustavu pacijent može obavljati pregled, koji može biti preventivni ili kontrolni. Koji odnos u dijagramima obrazaca uporabe se koristi za modeliranje odnosa između pregleda i vrste pregleda?",
    "options": [
      {
        "key": "a",
        "text": "Proširenje"
      },
      {
        "key": "b",
        "text": "Uključivanje"
      },
      {
        "key": "c",
        "text": "Pridruživanje"
      },
      {
        "key": "d",
        "text": "Generalizacija"
      },
      {
        "key": "e",
        "text": "Višestrukost"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Preventivni i kontrolni pregled su vrste pregleda (odnos općeg i specifičnog) ⇒ generalizacija, s trokutom kod „Pregled“. Proširenje bi značilo opcionalni dodatak, uključivanje obavezni dio; pridruživanje povezuje aktora i obrazac; višestrukost nije vrsta veze."
  },
  {
    "id": "P3.8",
    "chapter": 3,
    "source": "MI 2025 A-19",
    "question": "Koja vrsta poruke se koristi na sekvencijskim dijagramima:",
    "options": [
      {
        "key": "a",
        "text": "Isporučena"
      },
      {
        "key": "b",
        "text": "Primljena"
      },
      {
        "key": "c",
        "text": "Sačuvana"
      },
      {
        "key": "d",
        "text": "Pronađena"
      },
      {
        "key": "e",
        "text": "Nedostupna"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Slajdovi navode: sinkrona, asinkrona, povratna, rekurzivna, stvaranja, uništavanja, izgubljene i nađene (pronađene) poruke. Pronađena poruka dolazi od nepoznatog pošiljatelja (počinje punim krugom). Ostali nazivi ne postoje."
  },
  {
    "id": "P3.9",
    "chapter": 3,
    "source": "MI 2025 B-19; kao kratki odgovor MI 2018/19 A-6",
    "question": "Koji se element u sekvencijskom dijagramu koristi za prikaz razdoblja u kojem objekt aktivno sudjeluje u određenoj interakciji ili izvodi neku radnju:",
    "options": [
      {
        "key": "a",
        "text": "Životna linija"
      },
      {
        "key": "b",
        "text": "Područje interakcije"
      },
      {
        "key": "c",
        "text": "Područje radnje"
      },
      {
        "key": "d",
        "text": "Područje aktivnosti"
      },
      {
        "key": "e",
        "text": "Područje sudjelovanja"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Područje aktivnosti (engl. activation bar) – pravokutnik na životnoj liniji tijekom kojeg objekt obavlja posao. (a) životna linija predstavlja cijeli period postojanja objekta, ne aktivnost; ostali nazivi su izmišljeni."
  },
  {
    "id": "P3.10",
    "chapter": 3,
    "source": "ZI 2026 A-3",
    "question": "Modelira se paketomat koji omogućuje korisniku preuzimanje paketa putem QR koda. Paketomat korisniku šalje obavijest putem e-mail servisa nakon preuzimanja paketa. Koji element ne smije biti modeliran kao aktor u UML dijagramu obrazaca uporabe?",
    "options": [
      {
        "key": "a",
        "text": "Primatelj"
      },
      {
        "key": "b",
        "text": "Dostavljač"
      },
      {
        "key": "c",
        "text": "Paketomat"
      },
      {
        "key": "d",
        "text": "E-mail servis"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Paketomat je sustav koji se modelira – predstavljen je granicom sustava i svim obrascima uporabe, a sustav nije aktor. Primatelj i dostavljač su aktivni aktori, e-mail servis je pasivni aktor (prima obavijesti od sustava)."
  },
  {
    "id": "P3.11",
    "chapter": 3,
    "source": "ZI 2026 B-3",
    "question": "Razmatra se paketomat koji omogućuje preuzimanje i slanje paketa. Korisnici preuzimaju pakete unosom PIN-a, dostavljači ostavljaju pakete, a paketomat šalje podatke vanjskom logističkom sustavu. Koji je od navedenih elemenata pasivni aktor u UML dijagramu obrazaca uporabe?",
    "options": [
      {
        "key": "a",
        "text": "Primatelj"
      },
      {
        "key": "b",
        "text": "Dostavljač"
      },
      {
        "key": "c",
        "text": "Vanjski logistički sustav"
      },
      {
        "key": "d",
        "text": "Paketomat"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Pasivni aktor ne pokreće obrasce nego prima podatke od sustava – vanjski logistički sustav (strelica od obrasca prema njemu). Primatelj i dostavljač su aktivni (pokreću preuzimanje/ostavljanje), a paketomat je sam sustav i uopće nije aktor."
  },
  {
    "id": "P3.20",
    "chapter": 3,
    "source": "MI 2013-8",
    "question": "Što nije dio UML skupa dijagrama statičkih pogleda?",
    "options": [
      {
        "key": "a",
        "text": "Dijagram obrazaca uporabe"
      },
      {
        "key": "b",
        "text": "Sekvencijski dijagram."
      },
      {
        "key": "c",
        "text": "Dijagram razreda."
      },
      {
        "key": "d",
        "text": "Dijagram objekata."
      },
      {
        "key": "e",
        "text": "Dijagram komponenata."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Neslužbeno. Sekvencijski dijagram prikazuje dinamičku interakciju (poruke u vremenu); razredi, objekti i komponente su strukturni (statički) pogledi. Napomena: po podjeli UML 2.5 sa slajdova obrasci uporabe su ponašajni dijagram, pa bi strogo i (a) bio „nestatički“; u starijoj podjeli (predmet OPP) obrasci uporabe svrstavali su se u statičke poglede, pa je očekivani odgovor (b)."
  },
  {
    "id": "P3.21",
    "chapter": 3,
    "source": "MI 2013-9",
    "question": "UML dijagram obrazaca uporabe može koristiti odnos «extend» između dva obrasca uporabe. Što od navedenog nije dio takvog odnosa?",
    "options": [
      {
        "key": "a",
        "text": "Točka proširenja (engl. extension point) u baznom obrascu uporabe."
      },
      {
        "key": "b",
        "text": "Uvjet izvođenja proširenja na odnosu «extend»."
      },
      {
        "key": "c",
        "text": "Naziv proširenja na odnosu «extend»."
      },
      {
        "key": "d",
        "text": "Proširujući obrazac uporabe."
      },
      {
        "key": "e",
        "text": "Bazni obrazac uporabe."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Neslužbeno. Veza «extend» ima bazni i proširujući obrazac, a uz nju se može navesti uvjet proširenja i točka proširenja u baznom obrascu. Poseban „naziv proširenja“ ne postoji – oznaka je samo stereotip «extend»."
  },
  {
    "id": "P3.22",
    "chapter": 3,
    "source": "MI 2016 A-3, također MI 2014-4",
    "question": "Dobar obrazac uporabe u inženjerstvu zahtjeva prvenstveno specificira:",
    "options": [
      {
        "key": "a",
        "text": "Zahtjeve okoline."
      },
      {
        "key": "b",
        "text": "Mogućnosti razvojnog tima."
      },
      {
        "key": "c",
        "text": "Detaljne opise algoritma zahtjeva."
      },
      {
        "key": "d",
        "text": "Najvažnije funkcionalne zahtjeve."
      },
      {
        "key": "e",
        "text": "Sve navedeno."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Obrasci uporabe služe za opis funkcionalnih zahtjeva (slajdovi: „obrasci uporabe pogodni za opis funkcionalnih modela“). Algoritmi (c) nisu njihova razina apstrakcije."
  },
  {
    "id": "P3.23",
    "chapter": 3,
    "source": "MI 2015 A-6, također MI 2015 B-6",
    "question": "Koja od sljedećih tvrdnji ne vrijedi za UML-sekvencijske dijagrame?",
    "options": [
      {
        "key": "a",
        "text": "Mogu prikazivati aktore i objekte"
      },
      {
        "key": "b",
        "text": "Dobri su za prikaz komunikacije među objektima"
      },
      {
        "key": "c",
        "text": "Dobri su za praćenje stanja sustava"
      },
      {
        "key": "d",
        "text": "Prikazuju objekte kroz životne crte"
      },
      {
        "key": "e",
        "text": "Prikazuju interakciju u sustavu"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Stanje sustava prati dijagram stanja; sekvencijski prikazuje interakciju i komunikaciju objekata kroz životne crte (i aktore). Napomena: u grupi B isti je odgovor pod (a)."
  },
  {
    "id": "P3.24",
    "chapter": 3,
    "source": "MI 2014-5",
    "question": "Za sekvencijske dijagrame vrijede sljedeće tvrdnje (više točnih odgovora):",
    "options": [
      {
        "key": "a",
        "text": "Prikazuju stanja objekata."
      },
      {
        "key": "b",
        "text": "Dobri su za grafički prikaz složenih algoritama."
      },
      {
        "key": "c",
        "text": "Dobri su za praćenje stanja sustava."
      },
      {
        "key": "d",
        "text": "Prikazuju interakciju u sustavu."
      },
      {
        "key": "e",
        "text": "Dobri su za prikaz komunikacije među objektima."
      }
    ],
    "correct": [
      "d",
      "e"
    ],
    "explanation": "Neslužbeno. Sekvencijski dijagram prikazuje interakciju i komunikaciju među objektima; nije namijenjen složenim algoritmima (b), a stanja (a, c) modelira dijagram stanja. Usp. 3.23."
  },
  {
    "id": "P3.26",
    "chapter": 3,
    "source": "MI 2016 A-9",
    "question": "Veza poopćenja (engl. generalization) na dijagramu obrazaca uporabe može biti definirana između:",
    "options": [
      {
        "key": "a",
        "text": "Aktivnih aktora i obrazaca uporabe"
      },
      {
        "key": "b",
        "text": "Obrazaca uporabe međusobno"
      },
      {
        "key": "c",
        "text": "Pasivnih aktora i obrazaca uporabe"
      },
      {
        "key": "d",
        "text": "Sekundarnih aktora i obrazaca uporabe"
      },
      {
        "key": "e",
        "text": "Objekata i obrazaca uporabe"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Generalizacija ide između dva obrasca uporabe ili između dva aktora, nikad između aktora i obrasca – ta veza je pridruživanje."
  },
  {
    "id": "P4.1",
    "chapter": 4,
    "source": "MI 2024 A-8, B-8",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje prednosti inkrementalnog pristupa u razvoju programskog sustava?",
    "options": [
      {
        "key": "a",
        "text": "Projekt može započeti bez jasne specifikacije jer se sve funkcionalnosti mogu dodavati kasnije."
      },
      {
        "key": "b",
        "text": "Svi zahtjevi sustava moraju biti potpuno definirani prije početka razvoja kako bi se izbjegle promjene tijekom projekta."
      },
      {
        "key": "c",
        "text": "Funkcionalnosti se razvijaju samo u završnoj fazi projekta, kada je sav kod već napisan."
      },
      {
        "key": "d",
        "text": "Funkcionalnost sustava ostvaruje se u ranim fazama projekta, što omogućuje korisnicima ispitivanje osnovnih značajki i prikupljanje povratnih informacija."
      },
      {
        "key": "e",
        "text": "Inkrementalni razvoj može rezultirati višim troškovima zbog čestih prilagodbi i promjena tijekom razvoja."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "(U grupi B to je odgovor a.) Prednost inkrementalnog pristupa je rana funkcionalnost: korisnik rano dobiva upotrebljive dijelove i daje povratne informacije za kasnije inkremente. (a) Specifikacija i dalje postoji, a zahtjevi inkrementa se zamrzavaju. (b) opisuje vodopad. (c) je besmislica. (e) nije prednost, nego (upitan) nedostatak."
  },
  {
    "id": "P4.2",
    "chapter": 4,
    "source": "MI 2024 A-11, B-11",
    "question": "Koja je najduža faza životnog ciklusa velikog projekta primjenom unificiranog procesa (engl. Unified Process)?",
    "options": [
      {
        "key": "a",
        "text": "Početna faza (engl. inception)."
      },
      {
        "key": "b",
        "text": "Faza razrade (engl. elaboration)."
      },
      {
        "key": "c",
        "text": "Faza izgradnje (engl. construction)."
      },
      {
        "key": "d",
        "text": "Faza prijenosa (engl. transition)."
      },
      {
        "key": "e",
        "text": "Sve jednako."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "U izgradnji se kroz najviše iteracija ostvaruje većina funkcionalnosti (oblikovanje, programiranje, ispitivanje), što se vidi i na prikazu faza. Razrada daje arhitekturu, početak doseg, a prijenos postavljanje u radnu okolinu. Faze nisu jednako duge."
  },
  {
    "id": "P4.3",
    "chapter": 4,
    "source": "MI 2024 A-12",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje svrhu dnevnog Scrum sastanka (engl. daily Scrum) u Scrum metodologiji?",
    "options": [
      {
        "key": "a",
        "text": "Omogućiti članovima tima da podijele napredak, isplaniraju dan i riješe prepreke."
      },
      {
        "key": "b",
        "text": "Pregledati cijeli opseg projekta."
      },
      {
        "key": "c",
        "text": "Odobriti proračun projekta."
      },
      {
        "key": "d",
        "text": "Finalizirati isporučive gotove dijelove proizvoda."
      },
      {
        "key": "e",
        "text": "Inkrementalno planirati sljedeće sprintove projekta."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Dnevni Scrum (15 min) služi dijeljenju napretka od jučer, planu za danas i otkrivanju prepreka. (b) i (c) nisu Scrum događaji. (d) je revizija sprinta. (e) je planiranje sprinta. Napomena: prema udžbeniku i Scrum vodiču prepreke se na dnevnom Scrumu otkrivaju, a veće se rješavaju nakon sastanka. Formulacija „riješe prepreke“ je pojednostavljena, ali (a) je jedini smislen odgovor."
  },
  {
    "id": "P4.4",
    "chapter": 4,
    "source": "MI 2024 B-12",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje svrhu Scrum dnevnika zaostataka (engl. SCRUM backlog)?",
    "options": [
      {
        "key": "a",
        "text": "Omogućuje članovima tima da prate osobni napredak i individualne zadatke."
      },
      {
        "key": "b",
        "text": "Služi kao popis korisničkih priča, zadataka i zahtjeva koje tim treba realizirati."
      },
      {
        "key": "c",
        "text": "Omogućuje planiranje sastanaka i upravljanje rokovima."
      },
      {
        "key": "d",
        "text": "Bilježi povijest svih prethodno dovršenih zadataka."
      },
      {
        "key": "e",
        "text": "Koristi se za definiranje ciljeva organizacije na razini uprave."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Dnevnik zaostataka je (prioritizirani) popis korisničkih priča, zadataka i zahtjeva koje treba ostvariti. To je jedino mjesto zahtjeva za promjenama, a odgovara vlasnik proizvoda. (a) Nije osobna lista zadataka. (c) Ne služi planiranju sastanaka. (d) Ne bilježi povijest dovršenog, jer je završeno dio inkrementa. (e) Nema veze s upravom."
  },
  {
    "id": "P4.5",
    "chapter": 4,
    "source": "MI 2025 A-7",
    "question": "U modernim iterativnim i inkrementalnim procesima programskog inženjerstva, koje svojstvo iteracije najviše doprinosi učinkovitom upravljanju rizicima i promjenama?",
    "options": [
      {
        "key": "a",
        "text": "Mogućnost neograničene promjene opsega tijekom trajanja iteracije"
      },
      {
        "key": "b",
        "text": "Usmjerenost svake iteracije na dovršetak svih zahtjeva sustava"
      },
      {
        "key": "c",
        "text": "Provođenje samo kodiranja u iteraciji, dok se ostale aktivnosti obavljaju na kraju projekta"
      },
      {
        "key": "d",
        "text": "Isporuka funkcionalnosti tek na kraju projekta"
      },
      {
        "key": "e",
        "text": "Vremensko ograničenje trajanja iteracije i isporuka funkcionalnog inkrementa"
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Vremenski ograničena iteracija (time-box) koja završava funkcionalnim inkrementom daje redovitu provjeru i povratnu informaciju, pa se rizici i promjene otkrivaju rano. (a), (b), (c) i (d) opisuju suprotno od iteracije."
  },
  {
    "id": "P4.6",
    "chapter": 4,
    "source": "MI 2025 B-8",
    "question": "U okviru iterativnih i inkrementalnih razvojnih pristupa, koje obilježje iteracije omogućuje dosljednu kontrolu rizika te pravovremeno prilagođavanje promjenama tijekom projekta?",
    "options": [
      {
        "key": "a",
        "text": "Široka mogućnost preoblikovanja ciljeva iteracije u bilo kojoj fazi njezina trajanja"
      },
      {
        "key": "b",
        "text": "Nastojanje da se u jednoj iteraciji obuhvati cjelokupna funkcionalnost sustava"
      },
      {
        "key": "c",
        "text": "Ograničavanje iteracije isključivo na implementaciju bez paralelnog ispitivanja"
      },
      {
        "key": "d",
        "text": "Rad u unaprijed definiranom vremenskom okviru, uz isporuku provjerenog funkcionalnog inkrementa"
      },
      {
        "key": "e",
        "text": "Mogućnost neograničene promjene opsega tijekom trajanja iteracije"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Isto načelo kao u prethodnom pitanju: unaprijed definiran vremenski okvir i isporuka provjerenog (ispitanog) inkrementa. (a) i (e) su neograničene promjene opsega, a opseg se tijekom iteracije ne mijenja. (b) je cijela funkcionalnost u jednoj iteraciji, što je zapravo vodopad. (c) Ispitivanje je dio svake iteracije."
  },
  {
    "id": "P4.7",
    "chapter": 4,
    "source": "MI 2025 B-7",
    "question": "Koja je glavna prednost kratkih iteracija u agilnom razvoju programske potpore?",
    "options": [
      {
        "key": "a",
        "text": "Omogućuju ignoriranje promjena u zahtjevima"
      },
      {
        "key": "b",
        "text": "Smanjuju potrebu za komunikacijom unutar tima"
      },
      {
        "key": "c",
        "text": "Omogućuju brzu reakciju na promjene i učinkovitije upravljanje rizicima"
      },
      {
        "key": "d",
        "text": "Produžuju ukupno trajanje projekta"
      },
      {
        "key": "e",
        "text": "Smanjuju važnost kvalitete koda"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Kratke iteracije znače česte povratne informacije, pa tim može brzo reagirati na promjene i rano otkrivati rizike. Ostali odgovori su suprotni agilnim načelima: promjene se prihvaćaju, komunikacija je ključna, a kvaliteta se ne smanjuje."
  },
  {
    "id": "P4.8",
    "chapter": 4,
    "source": "MI 2025 A-8",
    "question": "Koji od 12 principa Agilnog Manifesta najjasnije i najradikalnije odstupa od tradicionalnih, planom vođenih metodologija?",
    "options": [
      {
        "key": "a",
        "text": "Kontinuirana usmjerenost na tehničku izvrsnost i kvalitetno oblikovanje"
      },
      {
        "key": "b",
        "text": "Odgovaranje na promjene značajnije od slijeđenja plana"
      },
      {
        "key": "c",
        "text": "Preferiranje izravne komunikacije licem u lice"
      },
      {
        "key": "d",
        "text": "Česta isporuka funkcionalnosti u kraćim vremenskim razmacima"
      },
      {
        "key": "e",
        "text": "Kontinuirana usmjerenost na tehničku izvrsnost i dobro oblikovanje"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "„Reagiranje na promjenu ispred slijeđenja plana“ izravno negira temeljnu pretpostavku planom vođenih metoda: unaprijed fiksiran plan i stabilne zahtjeve. Tehnička izvrsnost (a/e), razgovor uživo (c) i česta isporuka (d) spojivi su i s tradicionalnim pristupom. Napomena: formulacija u (b) je zapravo jedna od četiri vrijednosti manifesta, a ne jedno od 12 načela. Najbliže načelo je br. 2 („spremno prihvaćamo promjene zahtjeva, čak i kasno u razvoju“). Osim toga, (a) i (e) su gotovo identični. Na ispitu se ne treba zbuniti: traži se ideja prihvaćanja promjena."
  },
  {
    "id": "P4.9",
    "chapter": 4,
    "source": "MI 2025 A-9, B-9",
    "question": "Koja je primarna svrha dnevnog Scruma (dnevnog sastanka) u Scrum okviru?",
    "options": [
      {
        "key": "a",
        "text": "Prikupiti izvještaje članova tima za vlasnika proizvoda i vođu SCRUM-a"
      },
      {
        "key": "b",
        "text": "Revidirati projektni dnevnik zaostataka i dodavati nove zahtjeve"
      },
      {
        "key": "c",
        "text": "Strogo pridržavanje unaprijed definiranog plana"
      },
      {
        "key": "d",
        "text": "Usuglasiti rad razvojnog tima i prilagoditi plan za sljedećih 24 sata kako bi se povećale šanse za ostvarenje cilja sprinta"
      },
      {
        "key": "e",
        "text": "Donositi odluke o opsegu sljedeće iteracije"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "(U grupi B to je odgovor b.) To je službena formulacija svrhe dnevnog Scruma: tim usklađuje rad i prilagođava plan za sljedeća 24 sata radi ostvarenja cilja sprinta. (a) Nije izvještavanje nadređenima. (b) Dorada dnevnika zaostataka posao je vlasnika proizvoda. (c) je protivno agilnosti. (e) je planiranje sprinta."
  },
  {
    "id": "P4.10",
    "chapter": 4,
    "source": "MI 2025 A-10",
    "question": "Koja je primarna uloga kontejnera u DevOps ciklusu i kontinuiranoj isporuci?",
    "options": [
      {
        "key": "a",
        "text": "Primarno se koriste kao brza zamjena za tradicionalne sustave za kontrolu verzija"
      },
      {
        "key": "b",
        "text": "Osiguravaju da kod radi identično u svim okruženjima"
      },
      {
        "key": "c",
        "text": "Služe isključivo za optimizaciju potrošnje memorije na produkcijskim serverima"
      },
      {
        "key": "d",
        "text": "Potrebni su samo za razvojne timove, dok produkcija mora koristiti isključivo virtualne strojeve"
      },
      {
        "key": "e",
        "text": "Omogućuju automatsku optimizaciju performansi aplikacije bez dodatne konfiguracije"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Kontejner pakira aplikaciju sa svim ovisnostima, pa se isti artefakt jednako ponaša u razvoju, ispitivanju i produkciji. Upravo to omogućuje pouzdanu automatiziranu isporuku. (a) Kontrola inačica je Git, a ne Docker. (c) i (e) Optimizacija nije svrha kontejnera. (d) Kontejneri se upravo koriste i u produkciji."
  },
  {
    "id": "P4.11",
    "chapter": 4,
    "source": "ZI 2026 A-4, B-4",
    "question": "Kako unificirani proces organizira proces razvoja programske potpore?",
    "options": [
      {
        "key": "a",
        "text": "U faze i aktivnosti"
      },
      {
        "key": "b",
        "text": "U vremenski ograničene inkremente vođene zahtjevima korisnika"
      },
      {
        "key": "c",
        "text": "U modelu razvoja definiranim artefaktima i ulogama (grupa B: „U iterativne cikluse definirane artefaktima i ulogama“)"
      },
      {
        "key": "d",
        "text": "U module i programske komponente"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "(U grupi B to je odgovor d.) UP proces organizira u vremenu (faze: početak, razrada, izgradnja, prijenos) i u kontekstu (aktivnosti, tj. discipline). (b) opisuje Scrum (sprintovi). (c) Artefakti i uloge postoje, ali su elementi statičke dimenzije, a ne način organizacije procesa. (d) opisuje arhitekturu sustava."
  },
  {
    "id": "P4.13",
    "chapter": 4,
    "source": "Kviz; također MI 2016 B-6 (isti tekst)",
    "question": "Kod inkrementalnog pristupa iteracijama vrijedi tvrdnja da se s početkom razvoja pojedinog inkrementa njegovi zahtjevi fiksiraju.",
    "options": [
      {
        "key": "a",
        "text": "Točno"
      },
      {
        "key": "b",
        "text": "Netočno"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Doslovno sa slajda: „S početkom razvoja pojedinog inkrementa njegovi se zahtjevi fiksiraju (zamrzavaju)“, a zahtjevi za kasnije inkremente nastavljaju evoluirati."
  },
  {
    "id": "P4.19",
    "chapter": 4,
    "source": "Kviz; također MI 2019/20 A-8 (nadopuna: „XP i čisti razvoj primjeri su ___ metoda“)",
    "question": "Ekstremno programiranje, Scrum i Lean su primjeri:",
    "options": [
      {
        "key": "a",
        "text": "modernog"
      },
      {
        "key": "b",
        "text": "evolucijskog"
      },
      {
        "key": "c",
        "text": "agilnog"
      },
      {
        "key": "d",
        "text": "vodopadnog modela razvoja"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "XP, Scrum i Lean (čisti razvoj) navedeni su među agilnim metodama na slajdu i u udžbeniku."
  },
  {
    "id": "P4.32a",
    "chapter": 4,
    "source": "MI 2013-4",
    "question": "Koji odgovor vrijedi kad se razmatraju najznačajniji modeli procesa programskog inženjerstva?",
    "options": [
      {
        "key": "a",
        "text": "Implementacija promjena najlakša je u vodopadnom modelu."
      },
      {
        "key": "b",
        "text": "Evolucijski model generira najbolju strukturu."
      },
      {
        "key": "c",
        "text": "Najviše novog kôda generira se u modelu zasnovanom na komponentama."
      },
      {
        "key": "d",
        "text": "RUP (engl. Rational Unified Process) je najstariji model."
      },
      {
        "key": "e",
        "text": "Sve gornje tvrdnje su neistinite."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Neslužbeno (ispiti bez rješenja). Vodopadu je teško ugraditi promjene; evolucijski model daje lošu strukturu; komponentni model gradi od gotovih komponenti, pa nastaje najmanje novog koda; najstariji je vodopad (1970.), a RUP je s kraja 1990-ih; iteracije se mogu primijeniti na bilo koji model. U 2014. jedna je tvrdnja preokrenuta u istinitu (B)."
  },
  {
    "id": "P4.32b",
    "chapter": 4,
    "source": "MI 2014-2",
    "question": "Odredite istinitu tvrdnju:",
    "options": [
      {
        "key": "a",
        "text": "Iteracije su primjenjive samo na unificirani procesni model."
      },
      {
        "key": "b",
        "text": "Najmanje novog kôda generira se u modelu zasnovanom na komponentama."
      },
      {
        "key": "c",
        "text": "RUP je najstariji model."
      },
      {
        "key": "d",
        "text": "Implementacija promjena je najlakša u vodopadnom modelu."
      },
      {
        "key": "e",
        "text": "Evolucijski model generira najbolju strukturu."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Neslužbeno (ispiti bez rješenja). Vodopadu je teško ugraditi promjene; evolucijski model daje lošu strukturu; komponentni model gradi od gotovih komponenti, pa nastaje najmanje novog koda; najstariji je vodopad (1970.), a RUP je s kraja 1990-ih; iteracije se mogu primijeniti na bilo koji model. U 2014. jedna je tvrdnja preokrenuta u istinitu (B)."
  },
  {
    "id": "P4.33",
    "chapter": 4,
    "source": "MI 2015 A-3, također MI 2015 B-3",
    "question": "Oblikovanje sustava zasnovano na ponovnoj ili višestrukoj uporabi elemenata sustava (engl. reuse-oriented development) glavno je obilježje kojeg modela procesa programskog inženjerstva?",
    "options": [
      {
        "key": "a",
        "text": "Unificirani proces"
      },
      {
        "key": "b",
        "text": "Vodopadnog"
      },
      {
        "key": "c",
        "text": "Agilnog"
      },
      {
        "key": "d",
        "text": "Evolucijskog"
      },
      {
        "key": "e",
        "text": "Komponentnog"
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Ponovna uporaba je motivacija komponentnog modela (CBSE). U grupi B isti je odgovor bio pod C."
  },
  {
    "id": "P4.34",
    "chapter": 4,
    "source": "MI 2015 A-4, također MI 2015 B-4",
    "question": "U spiralni pristup iteracijama razvoja programske potpore ne pripada sektor:",
    "options": [
      {
        "key": "a",
        "text": "Studije izvedivosti"
      },
      {
        "key": "b",
        "text": "Postavljanja ciljeva"
      },
      {
        "key": "c",
        "text": "Razvoja i validacije"
      },
      {
        "key": "d",
        "text": "Procjene i smanjivanja rizika"
      },
      {
        "key": "e",
        "text": "Planiranja"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Četiri sektora: postavljanje ciljeva, procjena i smanjivanje rizika, razvoj i validacija, planiranje. Studija izvedivosti aktivnost je inženjerstva zahtjeva. (Grupa B: isti odgovor pod B.)"
  },
  {
    "id": "P4.35a",
    "chapter": 4,
    "source": "MI 2015 A-5, B-5",
    "question": "Što je od navedenog značajka Unificiranog procesa?",
    "options": [
      {
        "key": "a",
        "text": "Korištenje malih inkremenata"
      },
      {
        "key": "b",
        "text": "Malo dokumentacije"
      },
      {
        "key": "c",
        "text": "Modeli se dokumentiraju dijagramima"
      },
      {
        "key": "d",
        "text": "Svaka aktivnost se provodi samo u jednoj određenoj fazi razvoja"
      },
      {
        "key": "e",
        "text": "Ad-hoc određivanje zahtjeva klijenata"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Svakoj aktivnosti UP-a pridružen je jedan ili više modela, dokumentiranih UML dijagramima. Za (c) se priznaje i „artefakt“. Male inkremente i malo dokumentacije ima agilni razvoj; aktivnosti UP-a odvijaju se u svim fazama. (U grupi B 2015. točno je bilo pod D, 2016. pod C.)"
  },
  {
    "id": "P4.35b",
    "chapter": 4,
    "source": "MI 2016 A-4, B-4",
    "question": "Aktivnosti u pojedinim fazama Unificiranog procesa imaju pridružene ____ koji se dokumentiraju dijagramima.",
    "options": [
      {
        "key": "a",
        "text": "Modele"
      },
      {
        "key": "b",
        "text": "Iteracije"
      },
      {
        "key": "c",
        "text": "Ključne točke"
      },
      {
        "key": "d",
        "text": "Računalne resurse"
      },
      {
        "key": "e",
        "text": "Arhitekturne stilove"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Svakoj aktivnosti UP-a pridružen je jedan ili više modela, dokumentiranih UML dijagramima. Za (c) se priznaje i „artefakt“. Male inkremente i malo dokumentacije ima agilni razvoj; aktivnosti UP-a odvijaju se u svim fazama. (U grupi B 2015. točno je bilo pod D, 2016. pod C.)"
  },
  {
    "id": "P4.36",
    "chapter": 4,
    "source": "MI 2016 A-5; također ZI 2013-2 (kratki odgovor)",
    "question": "Koji je model procesa programskog inženjerstva najpogodniji za male i srednje interaktivne sustave?",
    "options": [
      {
        "key": "a",
        "text": "Komponentno usmjeren"
      },
      {
        "key": "b",
        "text": "Vodopadni"
      },
      {
        "key": "c",
        "text": "Evolucijski"
      },
      {
        "key": "d",
        "text": "Unificirani proces"
      },
      {
        "key": "e",
        "text": "Ad hoc model"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Slajd: evolucijski model primjenjiv je za male i srednje interaktivne sustave, dijelove velikih sustava (korisničko sučelje) i sustave kratkog vijeka. ZI 2013-2 (kratki odgovor): neslužbeno „evolucijski“."
  },
  {
    "id": "P4.37",
    "chapter": 4,
    "source": "MI 2016 A-7; također MI 2014-3",
    "question": "Koje se tri aktivnosti ponavljaju tijekom razvoja u evolucijskom modelu?",
    "options": [
      {
        "key": "a",
        "text": "Analiza, oblikovanje, implementacija"
      },
      {
        "key": "b",
        "text": "Specifikacija, oblikovanje, ispitivanje"
      },
      {
        "key": "c",
        "text": "Specifikacija, razvoj, validacija"
      },
      {
        "key": "d",
        "text": "Analiza, implementacija, ispitivanje"
      },
      {
        "key": "e",
        "text": "Specifikacija, validacija i verifikacija, evolucija"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "U evolucijskom modelu specifikacija, razvoj i validacija isprepliću se i ponavljaju za svaku inačicu. (U MI 2014-3 isti odgovor bio je pod B.)"
  },
  {
    "id": "P4.38",
    "chapter": 4,
    "source": "MI 2016 B-5",
    "question": "U kojem od navedenih modela je najizraženije sudjelovanje korisnika u razvojnom timu?",
    "options": [
      {
        "key": "a",
        "text": "Vodopadnom modelu (engl. Waterfall model)"
      },
      {
        "key": "b",
        "text": "Prototipnom modelu"
      },
      {
        "key": "c",
        "text": "Ubrzani razvoj"
      },
      {
        "key": "d",
        "text": "Unificiranom procesu"
      },
      {
        "key": "e",
        "text": "Ni jednom od navedenih"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "„Ubrzani razvoj“ = agilne metode; u XP-u je kupac član tima (on-site customer)."
  },
  {
    "id": "P5.1",
    "chapter": 5,
    "source": "MI 2024 A-9, B-10",
    "question": "Koja od sljedećih izjava najbolje opisuje kako arhitektura utječe na implementaciju programa i postavlja ograničenja na nju?",
    "options": [
      {
        "key": "a",
        "text": "Arhitektura programskog sustava omogućuje programerima da slobodno donose odluke o strukturi implementacije, bez obzira na prethodno definiranu arhitekturu."
      },
      {
        "key": "b",
        "text": "Implementacija može značajno odstupati od arhitekture."
      },
      {
        "key": "c",
        "text": "Implementacija mora biti u skladu s arhitektonskim odlukama i podijeljena je u komponente koje su definirane arhitekturom sustava."
      },
      {
        "key": "d",
        "text": "Programeri mogu potpuno zanemariti definiranu arhitekturu prilikom izgradnje sustava, sve dok koriste okvir po svom izboru."
      },
      {
        "key": "e",
        "text": "Sve navedeno."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Arhitektura nastaje prije implementacije i određuje komponente i sučelja, pa implementacija mora slijediti arhitektonske odluke i podjelu na komponente. (a), (b) i (d) dopuštaju odstupanje ili zanemarivanje arhitekture, pa je i (e) netočno."
  },
  {
    "id": "P5.2",
    "chapter": 5,
    "source": "MI 2024 A-10, B-9",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje važnost arhitekturnih odluka u kontekstu odabira stila arhitekture?",
    "options": [
      {
        "key": "a",
        "text": "Arhitekturne odluke definiraju samo tehničke aspekte sustava, dok stil arhitekture utječe isključivo na oblikovanje korisničkog sučelja."
      },
      {
        "key": "b",
        "text": "Stil arhitekture odražava samo strukturu sustava, a arhitekturne odluke odnose se na funkcionalnost i performanse."
      },
      {
        "key": "c",
        "text": "Arhitekturne odluke su manje važne jer samo tehnologije određuju učinkovitost sustava."
      },
      {
        "key": "d",
        "text": "Stil arhitekture utječe samo na organizacijske aspekte tima."
      },
      {
        "key": "e",
        "text": "Odabir konkretnog stila arhitekture temelji se na arhitekturnim odlukama koje uključuju skalabilnost, održivost i upravljanje složenošću sustava."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Stil se odabire na temelju arhitekturnih odluka, a one se izvode iz (prije svega nefunkcijskih) zahtjeva: skalabilnost, održivost, složenost. Distraktori sadrže „samo“ ili „isključivo“: stil ne utječe samo na korisničko sučelje ili organizaciju tima, a odluke nisu manje važne od tehnologija."
  },
  {
    "id": "P5.3",
    "chapter": 5,
    "source": "MI 2024 A-13, B-13",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje princip oblikovanja vezan uz smanjivanje međuovisnosti (engl. coupling) u razvoju programskog sustava?",
    "options": [
      {
        "key": "a",
        "text": "Visoka međuovisnost između modula poboljšava učinkovitost sustava jer moduli mogu direktno dijeliti podatke i funkcionalnosti."
      },
      {
        "key": "b",
        "text": "Niska međuovisnost je poželjna jer smanjuje međusobnu ovisnost modula, čime se povećava modularnost, fleksibilnost i održavanje sustava."
      },
      {
        "key": "c",
        "text": "Princip smanjivanja međuovisnosti nije relevantan za oblikovanje sustava jer se uglavnom odnosi na optimizaciju performansi, a ne na strukturu sustava."
      },
      {
        "key": "d",
        "text": "Visoka međuovisnost je poželjna jer olakšava implementaciju, omogućavajući brže povezivanje modula bez potrebe za definiranim sučeljima."
      },
      {
        "key": "e",
        "text": "Sve netočno."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Niska međuovisnost znači da promjena u jednom modulu ne traži promjene drugdje, što povećava modularnost, fleksibilnost i održivost. Visoka međuovisnost nikad nije poželjna (a, d), a princip se odnosi na strukturu, ne na performanse (c)."
  },
  {
    "id": "P5.4",
    "chapter": 5,
    "source": "MI 2024 A-14, B-14",
    "question": "Na koje aspekte razvoja programskog sustava najviše utječe primjena SOLID principa?",
    "options": [
      {
        "key": "a",
        "text": "Učinkovitost rada timova i smanjenje tehničkog duga."
      },
      {
        "key": "b",
        "text": "Dokumentaciju, ispitivanje, suradnju tima."
      },
      {
        "key": "c",
        "text": "Povećanje složenosti sustava i smanjenje njegove održivosti."
      },
      {
        "key": "d",
        "text": "Upravljanje projektima, raspodjela resursa."
      },
      {
        "key": "e",
        "text": "Održavanje, skalabilnost, provjerljivost, suradnja."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Cilj SOLID-a je razumljivije oblikovanje, olakšano održavanje i nadogradnja OO sustava. To se svodi na održavanje, skalabilnost (nadogradnja), provjerljivost (lakše ispitivanje) i suradnju (jasne odgovornosti i sučelja). (c) je suprotno, a (d) je upravljanje projektom. U grupi B točan je odgovor a. Napomena: (a) i (b) nisu besmisleni (SOLID posredno smanjuje tehnički dug i olakšava ispitivanje), ali traži se skup izravnih tehničkih svojstava koda, a (b) sadrži i dokumentaciju."
  },
  {
    "id": "P5.5",
    "chapter": 5,
    "source": "MI 2025 A-2, B-2",
    "question": "Koji je primarni arhitektonski princip za oblikovanje programske potpore s ciljem smanjenja vjerojatnosti neuspjeha uzrokovanih širenjem grešaka?",
    "options": [
      {
        "key": "a",
        "text": "Tijesna povezanost modula"
      },
      {
        "key": "b",
        "text": "Pretjerano korištenje globalnih varijabli i dijeljenog stanja"
      },
      {
        "key": "c",
        "text": "Uporaba isključivo statičkih funkcija bez modularnosti"
      },
      {
        "key": "d",
        "text": "Implementacija većine funkcionalnosti u jednom monolitnom modulu"
      },
      {
        "key": "e",
        "text": "Labava povezanost i visoka kohezija modula"
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Kad moduli imaju jednu jasnu svrhu (kohezija) i povezani su samo uskim sučeljima (labava povezanost), greška ostaje lokalna i ne širi se. Sve ostale opcije (tijesna povezanost, globalne varijable i dijeljeno stanje, monolit, nemodularnost) povećavaju širenje grešaka. U grupi B točan je odgovor d."
  },
  {
    "id": "P5.6",
    "chapter": 5,
    "source": "MI 2025 A-12, B-12",
    "question": "Kako se u kontekstu arhitektonskog stila Model–Pogled–Upravljač istovremeno primjenjuju načela razdvajanja odgovornosti, niske sprege i mogućnosti paralelnog razvoja?",
    "options": [
      {
        "key": "a",
        "text": "Niska sprega je postignuta jer se Pogled i Upravljač mogu ispitivati izolirano, bez ovisnosti o Modelu."
      },
      {
        "key": "b",
        "text": "Sve tri komponente dijele istu bazu podataka i globalne varijable, čime se ostvaruje ponovna iskoristivost."
      },
      {
        "key": "c",
        "text": "Tim za sučelje definira Pogled, dok tim za logiku i podatke razvija Model i Upravljač, pri čemu se dogovaraju oko sučelja za komunikaciju."
      },
      {
        "key": "d",
        "text": "Model i Upravljač se razvijaju u slijedu čime se osigurava primjena svih principa."
      },
      {
        "key": "e",
        "text": "Pogled i Model se razvijaju paralelno bez koordinacije, a Upravljač se dodaje naknadno čime se osigurava primjena svih principa."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Razdvajanje odgovornosti daje tri komponente, niska sprega dolazi od komunikacije preko dogovorenog sučelja, a paralelni razvoj od toga da dva tima rade istodobno nakon dogovora o sučelju. (a) je netočno jer Pogled i Upravljač ovise o Modelu, samo preko sučelja. (b) opisuje opću međuovisnost, (d) nije paralelno, a (e) je bez koordinacije. U grupi B točan je odgovor a. Upravljač pripada „timu za logiku“ jer mu slajd pripisuje „poslovnu logiku i odgovore na događaje“."
  },
  {
    "id": "P5.7",
    "chapter": 5,
    "source": "MI 2025 A-13, B-10",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje princip visoke kohezije u kontekstu oblikovanja razreda i zašto je ona kritična za održavanje programskog sustava?",
    "options": [
      {
        "key": "a",
        "text": "Kohezija je poželjna jer omogućuje razredu da obavlja širok spektar nepovezanih zadataka unutar jedne cjeline."
      },
      {
        "key": "b",
        "text": "Kohezija se isključivo odnosi na konzistentnost stila kodiranja, a ne na funkcionalnu povezanost elemenata."
      },
      {
        "key": "c",
        "text": "Kohezija se odnosi na snagu veza između različitih modula; visoka kohezija znači da su moduli usko povezani."
      },
      {
        "key": "d",
        "text": "Kohezija znači da razred može raditi samostalno bez ikakve veze s drugim dijelovima sustava."
      },
      {
        "key": "e",
        "text": "Kohezija osigurava da sve metode i svojstva razreda logički služe istoj, jasno definiranoj svrsi, što olakšava ispitivanje i ponovnu uporabu razreda."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Kohezija je povezanost elemenata unutar razreda: sve služi istoj svrsi, pa je razred lakše ispitati i ponovno upotrijebiti. (c) je definicija međuovisnosti, (a) opisuje nisku koheziju, a (b) i (d) nisu kohezija."
  },
  {
    "id": "P5.8",
    "chapter": 5,
    "source": "MI 2025 B-11",
    "question": "Koji od sljedećih zahtjeva spada u skup zahtjeva značajnih za arhitekturu (ASR)?",
    "options": [
      {
        "key": "a",
        "text": "Sustav mora prikazivati datum u korisničkom sučelju."
      },
      {
        "key": "b",
        "text": "Sustav mora podnijeti povećanje broja korisnika s 1.000 na 10.000 bez degradacije performansi."
      },
      {
        "key": "c",
        "text": "Administrator može poništiti lozinku korisnika."
      },
      {
        "key": "d",
        "text": "Sustav mora imati boje logotipa u skladu s vizualnim identitetom."
      },
      {
        "key": "e",
        "text": "Sustav automatski šalje e-mail obavijesti o registraciji."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Mjerljiv zahtjev skalabilnosti (nefunkcijski) utječe na cijelu arhitekturu, a ASR su najčešće nefunkcijski zahtjevi. (a) i (d) su detalji sučelja, a (c) i (e) obični funkcijski zahtjevi koji određuju detalje oblikovanja. Napomena: udžbenik priznaje i funkcijske ASR-ove (bilježenje izmjena radi revizije), pa bi se za (e) moglo raspravljati, ali (b) je očito najznačajniji zahtjev."
  },
  {
    "id": "P5.9",
    "chapter": 5,
    "source": "ZI 2026 A-5, B-5",
    "question": "Kod odlučivanja o arhitekturi sustava, kako se donose dobre odluke oblikovanja?",
    "options": [
      {
        "key": "a",
        "text": "Analizom dostupnih tehnologija i izborom tehnički najnaprednije opcije"
      },
      {
        "key": "b",
        "text": "Uporabom prioriteta i ciljeva za odabir alternativa"
      },
      {
        "key": "c",
        "text": "Postupnim usuglašavanjem rješenja kroz implementaciju"
      },
      {
        "key": "d",
        "text": "Odabirom arhitekture koja isključivo minimizira trenutačne troškove razvoja"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Tehnika sa slajda glasi „uporaba prioriteta i ciljeva za odabir alternativa“ i ima pet koraka. Najnaprednija tehnologija (a) i isključivo najmanji trošak (d) zanemaruju ciljeve, a usuglašavanje kroz implementaciju (c) je suprotno ideji da odluke prethode implementaciji. U grupi B točan je odgovor c."
  },
  {
    "id": "P5.24",
    "chapter": 5,
    "source": "MI 2015 A-7, također MI 2015 B-8, MI 2016 B-8",
    "question": "Princip oblikovanja programske potpore kod kojeg se, između ostalog, izbjegava uporaba najnovijih tehnologija kao i rijetko upotrebljavanih dijelova knjižnica naziva se:",
    "options": [
      {
        "key": "a",
        "text": "Oblikuj po ugovoru"
      },
      {
        "key": "b",
        "text": "Oblikuj za fleksibilnost"
      },
      {
        "key": "c",
        "text": "Planiraj zastaru"
      },
      {
        "key": "d",
        "text": "Oblikuj za prenosivost"
      },
      {
        "key": "e",
        "text": "Oblikuj konzervativno"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Izbjegavanje najnovijih tehnologija i rijetko korištenih dijelova knjižnica doslovno je sa slajda „Planiraj zastaru“. U MI 2015 B točan je odgovor D (drugi redoslijed). Konzervativno oblikovanje odnosi se na neprikladnu uporabu komponente."
  },
  {
    "id": "P5.25",
    "chapter": 5,
    "source": "MI 2015 A-8, također MI 2015 B-7",
    "question": "Princip oblikovanja programske potpore kod kojeg se teži minimizaciji komunikacije komponenata:",
    "options": [
      {
        "key": "a",
        "text": "Smanji međuovisnost"
      },
      {
        "key": "b",
        "text": "Povećaj koheziju"
      },
      {
        "key": "c",
        "text": "Smanji koheziju"
      },
      {
        "key": "d",
        "text": "Zadrži razinu apstrakcije"
      },
      {
        "key": "e",
        "text": "Smanji komunikaciju"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "explanation": "Službeno se priznaju oba odgovora: manje komunikacije između komponenata znači nižu međuovisnost, a visoka kohezija drži povezano unutar modula. U grupi B točni su B i E (drugi redoslijed). „Smanji komunikaciju“ nije ime principa.",
    "acceptAny": true
  },
  {
    "id": "P5.26",
    "chapter": 5,
    "source": "MI 2016 A-8",
    "question": "Koji princip dobrog oblikovanja programske potpore se krši uporabom globalnih varijabli?",
    "options": [
      {
        "key": "a",
        "text": "Povećanje kohezije"
      },
      {
        "key": "b",
        "text": "Smanjenje međuovisnosti"
      },
      {
        "key": "c",
        "text": "Podijeli pa vladaj"
      },
      {
        "key": "d",
        "text": "Oblikovanje za ispitivanje"
      },
      {
        "key": "e",
        "text": "Planiranje zastare"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Globalne varijable su opća međuovisnost (common coupling): više modula dijeli isto stanje."
  },
  {
    "id": "P5.30",
    "chapter": 5,
    "source": "MI 2013-6",
    "question": "Prednosti pristupa oblikovanju programske potpore „odozdo prema gore“ najviše se ogledaju u:",
    "options": [
      {
        "key": "a",
        "text": "U dobroj strukturi programske potpore."
      },
      {
        "key": "b",
        "text": "Malom prostoru oblikovanja."
      },
      {
        "key": "c",
        "text": "Jednostavnijem dokumentu oblikovanja arhitekture programske potpore."
      },
      {
        "key": "d",
        "text": "Većem skupu modula za ponovno korištenje."
      },
      {
        "key": "e",
        "text": "Mogućnosti rane analize i uočavanje pogrešaka u oblikovanju."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Neslužbeno (ispit nema rješenja). Odozdo prema gore cilja na što veću ponovnu uporabu komponenata. Dobru strukturu (a) daje pristup odozgo prema dolje, a ranu analizu pogrešaka (e) općenito daje oblikovanje arhitekture."
  },
  {
    "id": "P5.31",
    "chapter": 5,
    "source": "MI 2014-7",
    "question": "Za princip oblikovanja koji preporuča zadržavanje razine apstrakcije (engl. keep the level of abstraction as high as possible) vrijedi:",
    "options": [
      {
        "key": "a",
        "text": "Traži poznavanje svih detalja podsustava."
      },
      {
        "key": "b",
        "text": "Povećava složenost prikaza problema."
      },
      {
        "key": "c",
        "text": "Nije pogodan za ciljanu implementaciju u objektnoj okolini."
      },
      {
        "key": "d",
        "text": "Osigurava odgodu razmatranja detalja."
      },
      {
        "key": "e",
        "text": "Nijedno od navedenog."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Neslužbeno. Princip omogućuje sakrivanje ili odgodu razmatranja detalja i time smanjuje složenost. Temelj je OO pristupa, pa je (c) netočno, a (a) i (b) su suprotni smislu principa."
  },
  {
    "id": "P5.45",
    "chapter": 5,
    "source": "MI 2016 A-6",
    "question": "Što je zajedničko svim pogledima kod modela arhitekture programske potpore „pogled 4+1“ (engl. 4+1 view)?",
    "options": [
      {
        "key": "a",
        "text": "Matematička logika"
      },
      {
        "key": "b",
        "text": "Vremenski odziv"
      },
      {
        "key": "c",
        "text": "Scenariji"
      },
      {
        "key": "d",
        "text": "Stanja sustava"
      },
      {
        "key": "e",
        "text": "Komponente"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "„+1“ su scenariji (obrasci uporabe), koji povezuju i provjeravaju ostala četiri pogleda."
  },
  {
    "id": "P5.52",
    "chapter": 5,
    "source": "MI 2013-7",
    "question": "Što nije potrebno uključiti u dokument oblikovanja arhitekture programske potpore?",
    "options": [
      {
        "key": "a",
        "text": "Opis s najviše razine promatranja."
      },
      {
        "key": "b",
        "text": "Referenciju prema dokumentu zahtjeva."
      },
      {
        "key": "c",
        "text": "Kod s komentarima."
      },
      {
        "key": "d",
        "text": "Alternativna rješenja."
      },
      {
        "key": "e",
        "text": "Prioriteti koji su vodili proces oblikovanja."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Neslužbeno. Ne dokumentira se ono što je vidljivo iz strukture i komentara koda. Opis s najviše razine (skica), poveznica na zahtjeve (sljedivost), alternative i prioriteti dio su dokumenta oblikovanja."
  },
  {
    "id": "P6.1",
    "chapter": 6,
    "source": "MI 2024 A-15, B-15",
    "question": "Koja od sljedećih tvrdnji najbolje opisuje operacije u objektno orijentiranom dizajnu (OOD)?",
    "options": [
      {
        "key": "a",
        "text": "Operacije su odgovorne za modifikaciju stanja objekta i pružanje funkcionalnosti definirane njegovim razredom."
      },
      {
        "key": "b",
        "text": "Operacije se koriste isključivo za komunikaciju između objekata bez utjecaja na unutarnje stanje objekta."
      },
      {
        "key": "c",
        "text": "Operacije trebaju biti oblikovane tako da uvijek djeluju izravno na podatke drugih objekata kako bi se smanjila složenost."
      },
      {
        "key": "d",
        "text": "Operacije moraju omogućiti globalni pristup podacima svih objekata kako bi se osigurala fleksibilnost oblikovanja."
      },
      {
        "key": "e",
        "text": "Operacije su isključivo odgovorne za stvaranje i uništavanje objekata unutar sustava."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Operacije ostvaruju odgovornosti razreda i implementiraju se metodama; vrijednosti atributa određuju stanje objekta, a metode ga mijenjaju. (b) ne vrijedi jer modificirajuće operacije (setteri) mijenjaju stanje; (c) i (d) krše enkapsulaciju (objekt ne dira izravno tuđe podatke, nema globalnog pristupa); (e) opisuje samo jednu vrstu operacija (konstruktore i destruktore)."
  },
  {
    "id": "P6.2",
    "chapter": 6,
    "source": "MI 2024 A-20",
    "question": "Koja vrsta veze s obzirom na UML standard najbolje opisuje odnos između razreda RazredA i RazredB u sljedećem isječku koda? public class RazredB { // implementacija } public class RazredA extends RazredB { // implementacija }",
    "options": [
      {
        "key": "a",
        "text": "Pridruživanje."
      },
      {
        "key": "b",
        "text": "Agregacija."
      },
      {
        "key": "c",
        "text": "Kompozicija."
      },
      {
        "key": "d",
        "text": "Ovisnost."
      },
      {
        "key": "e",
        "text": "Nasljeđivanje."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "extends u Javi je nasljeđivanje, u UML-u generalizacija (puna linija, prazan trokut prema RazredB). Ostale veze nastaju iz atributa (pridruživanje, agregacija, kompozicija) ili iz parametara i lokalnih varijabli (ovisnost)."
  },
  {
    "id": "P6.3",
    "chapter": 6,
    "source": "MI 2024 B-20",
    "question": "Koja vrsta veze s obzirom na UML standard najbolje opisuje odnos između razreda RazredA i RazredB u sljedećem isječku koda? public class RazredB { //implementacija } public class RazredA { private RazredB razredB; public RazredA(RazredB razredB) { this.razredB = razredB; } public void radi() { razredB.xxxx(); } }",
    "options": [
      {
        "key": "a",
        "text": "Realizacija."
      },
      {
        "key": "b",
        "text": "Kompozicija."
      },
      {
        "key": "c",
        "text": "Ovisnost."
      },
      {
        "key": "d",
        "text": "Nasljeđivanje."
      },
      {
        "key": "e",
        "text": "Pridruživanje."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "RazredA trajno drži referencu na RazredB u atributu ⇒ pridruživanje (usmjereno prema B, višestrukost 1). Nije kompozicija jer A ne stvara objekt B nego ga dobiva izvana; nije (samo) ovisnost jer postoji atribut; nema extends/implements. Agregacija nije ponuđena."
  },
  {
    "id": "P6.4",
    "chapter": 6,
    "source": "MI 2025 A-16",
    "question": "Ako objekt razreda Odjel sadrži objekte razreda Zaposlenik i njihov životni vijek ne ovisi o Odjelu, koji UML odnos to opisuje?",
    "options": [
      {
        "key": "a",
        "text": "Agregacija"
      },
      {
        "key": "b",
        "text": "Kompozicija"
      },
      {
        "key": "c",
        "text": "Ovisnost"
      },
      {
        "key": "d",
        "text": "Nasljeđivanje"
      },
      {
        "key": "e",
        "text": "Realizacija"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Odnos cjelina–dio u kojem dio (Zaposlenik) živi neovisno o cjelini (Odjel) je agregacija (prazan romb uz Odjel). Kompozicija bi značila da zaposlenici nestaju s odjelom."
  },
  {
    "id": "P6.5",
    "chapter": 6,
    "source": "MI 2025 B-16",
    "question": "Ako objekt razreda Odjel sadrži objekte razreda Zaposlenik i njihov životni vijek ovisi o Odjelu, koji UML odnos to opisuje?",
    "options": [
      {
        "key": "a",
        "text": "Agregacija"
      },
      {
        "key": "b",
        "text": "Kompozicija"
      },
      {
        "key": "c",
        "text": "Ovisnost"
      },
      {
        "key": "d",
        "text": "Nasljeđivanje"
      },
      {
        "key": "e",
        "text": "Realizacija"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Kad životni vijek dijela ovisi o cjelini (brisanjem Odjela brišu se i njegovi Zaposlenici), riječ je o kompoziciji (pun romb uz Odjel). Inačica pitanja iz grupe A s „ne ovisi“ ima odgovor agregacija – čitaj pažljivo!"
  },
  {
    "id": "P6.6",
    "chapter": 6,
    "source": "MI 2025 A-22",
    "question": "Prema sljedećem programskom kodu, odredite koji razredi imaju odnos ovisnosti s RazredB? public class RazredB{ private RazredA varA; private RazredC varC; private RazredD varD; Public void func1 (RazredA paramA, RazredC paramC, RazredE paramE,) {...}}",
    "options": [
      {
        "key": "a",
        "text": "RazredA, RazredC i RazredD"
      },
      {
        "key": "b",
        "text": "RazredA, RazredC i RazredE"
      },
      {
        "key": "c",
        "text": "Samo RazredE"
      },
      {
        "key": "d",
        "text": "Samo RazredD"
      },
      {
        "key": "e",
        "text": "Ništa od navedenog"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Ključ: razredi koji se pojavljuju kao tipovi parametara metode func1 – RazredA, RazredC i RazredE. RazredD je samo tip atributa ⇒ pridruživanje, ne ovisnost (zato su (a) i (d) krivi). Napomena: prema strogom pravilu prikaza iz službene UML e-skripte predmeta ovisnost se ne crta ako već postoji jača veza (A i C su i atributi), pa bi se na dijagramu ovisnost nacrtala samo prema RazredE (odgovor c). Ispitivač, međutim, pita koji razredi imaju odnos ovisnosti, tj. koje razred B koristi kao parametar – na ispitu biraj sve razrede iz parametara."
  },
  {
    "id": "P6.7",
    "chapter": 6,
    "source": "MI 2025 B-22",
    "question": "Prema sljedećem programskom kodu, odredite koji razredi imaju odnos ovisnosti s RazredA? public class RazredA{ private RazredB varB; private RazredC varC; private RazredD varD; Public void func1 (RazredC paramC, RazredE paramE) {...}}",
    "options": [
      {
        "key": "a",
        "text": "RazredB, RazredC i RazredD"
      },
      {
        "key": "b",
        "text": "Samo RazredE"
      },
      {
        "key": "c",
        "text": "RazredB i RazredD"
      },
      {
        "key": "d",
        "text": "RazredC i RazredE"
      },
      {
        "key": "e",
        "text": "Ništa od navedenog"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Ista logika kao u grupi A: parametri metode su RazredC i RazredE ⇒ ovisnost. RazredB i RazredD su samo atributi ⇒ pridruživanje. „Samo RazredE“ (b) je distraktor za one koji primjenjuju pravilo „ne crtaj ovisnost uz jaču vezu“."
  },
  {
    "id": "P6.8",
    "chapter": 6,
    "source": "ZI 2026 A-6, B-7",
    "question": "Neka razred OnlinePlacanje sadrži popis dozvoljenih bankovnih kartica. Pretpostavljajući da je BankovnaKartica također neovisni razred u sustavu, koja je ispravna UML relacija između ta dva razreda?",
    "options": [
      {
        "key": "a",
        "text": "Generalizacija"
      },
      {
        "key": "b",
        "text": "Asocijacija"
      },
      {
        "key": "c",
        "text": "Ovisnost"
      },
      {
        "key": "d",
        "text": "Realizacija"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "„Sadrži popis“ ⇒ OnlinePlacanje ima atribut-kolekciju kartica ⇒ pridruživanje (asocijacija) s višestrukošću *. BankovnaKartica je neovisan razred, pa nema kompozicije; plaćanje nije vrsta kartice (nema generalizacije) ni sučelje (nema realizacije); ovisnost je preslaba jer postoji trajna referenca."
  },
  {
    "id": "P6.20",
    "chapter": 6,
    "source": "MI 2013-10, također MI 2014-9",
    "question": "Što definira veza na dijagramu: Oblik2D Segment, s višestrukošću 1 uz Oblik2D i 2..4 uz Segment? (MI 2014: Zgrada Stan, isti odgovori.)",
    "options": [
      {
        "key": "a",
        "text": "U sustavu se u bilo kojem trenutku nalazi najviše jedan objekt instanciran iz razreda Oblik2D."
      },
      {
        "key": "b",
        "text": "U sustavu se u bilo kojem trenutku može nalaziti samostalno od dva do četiri objekata nastalih iz razreda Segment."
      },
      {
        "key": "c",
        "text": "Ako se obriše jedan objekt razreda Segment, mora se obrisati i pripadajući objekt razreda Oblik2D."
      },
      {
        "key": "d",
        "text": "Svaki objekt razreda Segment nasljeđuje atribute razreda Oblik2D."
      },
      {
        "key": "e",
        "text": "Svaki objekt razreda Oblik2D je povezan s dva do četiri objekta razreda Segment (nakon inicijalizacije)."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "(Neslužbeno.) 2..4 uz Segment znači da je svaki Oblik2D povezan s 2–4 segmenta; 1 uz Oblik2D znači da svaki segment pripada točno jednom obliku. Višestrukost ne ograničava ukupan broj objekata u sustavu (a); kod kompozicije brisanje cjeline briše dijelove, ne obrnuto (c), i dijelovi ne postoje samostalno (b); (d) bi bila generalizacija."
  },
  {
    "id": "P6.21",
    "chapter": 6,
    "source": "MI 2013-11",
    "question": "Dijagram objekata nastao je iz dijagrama razreda Student—Boravak: student Ivo povezan je s dva boravka (Ilica, Savska), Ana i Pero s jednim (Savska), a Mario ni s jednim; svaki boravak povezan je s barem jednim studentom. Kakva je višestrukost veze Student—Boravak (oznaka lijevo je uz Student, desno uz Boravak)?",
    "options": [
      {
        "key": "a",
        "text": "1—1"
      },
      {
        "key": "b",
        "text": "*—1"
      },
      {
        "key": "c",
        "text": "1..N—1..N"
      },
      {
        "key": "d",
        "text": "1..N—*"
      },
      {
        "key": "e",
        "text": "N—N"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "(Neslužbeno.) Uz Student: svaki boravak ima barem jednog studenta ⇒ 1..N; uz Boravak: student ima 0, 1 ili 2 boravka ⇒ *. Oznaka uz razred X kaže s koliko objekata X je povezan jedan objekt s druge strane."
  },
  {
    "id": "P6.23a",
    "chapter": 6,
    "source": "MI 2013-12",
    "question": "Poredaj od najviše razine apstrakcije prema najnižoj:",
    "options": [
      {
        "key": "a",
        "text": "metode, operacije, odgovornosti;"
      },
      {
        "key": "b",
        "text": "metode, odgovornosti, operacije;"
      },
      {
        "key": "c",
        "text": "operacije, metode, odgovornosti;"
      },
      {
        "key": "d",
        "text": "odgovornosti, operacije, metode;"
      },
      {
        "key": "e",
        "text": "odgovornosti, metode, operacije."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Neslužbeno – hijerarhija ponašanja: odgovornost → operacija → metoda."
  },
  {
    "id": "P6.24",
    "chapter": 6,
    "source": "MI 2013-13",
    "question": "Pri oblikovanju dijagrama razreda potrebno je odrediti pridruživanja između razreda. Pri tome najviše valja koristiti:",
    "options": [
      {
        "key": "a",
        "text": "UML dijagrame obrazaca uporabe."
      },
      {
        "key": "b",
        "text": "UML sekvencijske dijagrame."
      },
      {
        "key": "c",
        "text": "Imenice i imeničke izraze u specifikaciji programske potpore."
      },
      {
        "key": "d",
        "text": "Akcije i navede ih se kao pridruživanja."
      },
      {
        "key": "e",
        "text": "Funkcionalne zahtjeve temeljem analize zahtjeva."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "(Neslužbeno.) Slajd „Pridruživanja između razreda“: uz popis kriterija (posjeduje, upravlja, dio je od…) stoji „konzultirati sekvencijske dijagrame“ – poruka između dvaju objekata znači vezu njihovih razreda. Imenice služe za kandidate za razrede (c); prikaz akcija kao pridruživanja je česta pogreška (d)."
  },
  {
    "id": "P6.25a",
    "chapter": 6,
    "source": "MI 2014-6",
    "question": "Što vrijedi za agregaciju?",
    "options": [
      {
        "key": "a",
        "text": "Agregat predstavlja „je dio od“ (IsPartOf) odnos."
      },
      {
        "key": "b",
        "text": "Kad se uništi agregat, uništavaju se i svi njegovi dijelovi."
      },
      {
        "key": "c",
        "text": "Agregacija je slabija od kompozicije."
      },
      {
        "key": "d",
        "text": "Agregat predstavlja „je“ (IS-A) odnos."
      }
    ],
    "correct": [
      "a",
      "c"
    ],
    "explanation": "Neslužbeno: agregacija je odnos „dio od / has-a“, slabija od kompozicije; (B) opisuje kompoziciju, (D) generalizaciju."
  },
  {
    "id": "P6.26a",
    "chapter": 6,
    "source": "MI 2014-10",
    "question": "Ako razred nasljeđuje apstraktni razred, mora implementirati sve njegove apstraktne metode da bi postao konkretan.",
    "options": [
      {
        "key": "a",
        "text": "Točno."
      },
      {
        "key": "b",
        "text": "Netočno."
      },
      {
        "key": "c",
        "text": "Ako ima više metoda, mora implementirati barem jednu."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Točno (neslužbeno): da bi podrazred postao konkretan, mora implementirati sve naslijeđene apstraktne metode."
  },
  {
    "id": "P6.26c",
    "chapter": 6,
    "source": "MI 2014-8",
    "question": "Koji je koncept primijenjen pri implementaciji metoda plus i minus?",
    "code": "public class A { private int a; public A() { a = 0; }\npublic void plus() { a++; }      public void minus() { a--; } }\npublic class B extends A {\npublic void plus() { a = a + 2; } public void minus() { a = a - 2; } }",
    "options": [
      {
        "key": "a",
        "text": "višeobličje (polimorfizam);"
      },
      {
        "key": "b",
        "text": "nasljeđivanje;"
      },
      {
        "key": "c",
        "text": "statičko povezivanje;"
      },
      {
        "key": "d",
        "text": "apstrakcija;"
      },
      {
        "key": "e",
        "text": "izdvajanje sučelja."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Polimorfizam (neslužbeno): B nadjačava (reimplementira) metode nadrazreda."
  },
  {
    "id": "P6.28",
    "chapter": 6,
    "source": "MI 2015 A-9, B-10",
    "question": "Metode razreda, koje se deklariraju unutar razreda ključnom riječi (1), pozivaju se preko (2).",
    "options": [
      {
        "key": "a",
        "text": "(1) static (2) naziva razreda"
      },
      {
        "key": "b",
        "text": "(1) static (2) reference na objekt"
      },
      {
        "key": "c",
        "text": "(1) abstract (2) naziva razreda"
      },
      {
        "key": "d",
        "text": "(1) abstract (2) naziva sučelja"
      },
      {
        "key": "e",
        "text": "(1) const (2) naziva razreda"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "(Službeno; u grupi B isti odgovor je pod c.) Statičke metode pripadaju razredu i pozivaju se preko imena razreda; na dijagramu su podcrtane."
  },
  {
    "id": "P6.29a",
    "chapter": 6,
    "source": "MI 2015 A-10, B-9",
    "question": "Za objekt u UML dijagramu objekata vrijedi:",
    "options": [
      {
        "key": "a",
        "text": "objekti imaju definiciju metoda;"
      },
      {
        "key": "b",
        "text": "simbol objekta je pravokutnik s tri pretinca;"
      },
      {
        "key": "c",
        "text": "objekti imaju definiciju atributa;"
      },
      {
        "key": "d",
        "text": "objekti imaju vrijednost atributa;"
      },
      {
        "key": "e",
        "text": "objekti imaju označenu vidljivost atributa."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Službeno (u grupi B pod b): objekt na dijagramu objekata ima vrijednosti atributa (ime : Razred podcrtano), nema metode ni vidljivosti."
  },
  {
    "id": "P6.31",
    "chapter": 6,
    "source": "MI 2016 B-7",
    "question": "UML dijagrami razreda čine temelj opisa:",
    "options": [
      {
        "key": "a",
        "text": "funkcionalnih zahtjeva"
      },
      {
        "key": "b",
        "text": "nefunkcionalnih zahtjeva"
      },
      {
        "key": "c",
        "text": "zahtjeva domene primjene"
      },
      {
        "key": "d",
        "text": "arhitekture sustava"
      },
      {
        "key": "e",
        "text": "održavanja"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "(Službeno.) P6 se zove „Modeliranje objektno usmjerene arhitekture UML dijagramom razreda“."
  },
  {
    "id": "P6.32",
    "chapter": 6,
    "source": "MI 2016 B-9",
    "question": "Koja od navedenih tvrdnji vrijedi za vezu ovisnosti na dijagramu razreda?",
    "options": [
      {
        "key": "a",
        "text": "Veza je uvijek jednosmjerna."
      },
      {
        "key": "b",
        "text": "Veza je uvijek dvosmjerna."
      },
      {
        "key": "c",
        "text": "Veza predstavlja odnos dio–cjelina između dva razreda."
      },
      {
        "key": "d",
        "text": "Moguće je refleksivno pridruživanje."
      },
      {
        "key": "e",
        "text": "Veza ovisnosti jaka je inačica veze agregacije."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "(Službeno.) Ovisnost je uvijek usmjerena (od klijenta prema isporučitelju), bez višestrukosti."
  },
  {
    "id": "P6.33",
    "chapter": 6,
    "source": "MI 2016 B-10",
    "question": "Koja od tvrdnji (A–D) ne vrijedi (ili je istinita E) za izvorni kod generiran automatski iz dijagrama razreda u alatu Astah?",
    "options": [
      {
        "key": "a",
        "text": "Za svaki razred se generira zasebna datoteka."
      },
      {
        "key": "b",
        "text": "Izvorni kod svakog razreda sadrži deklaracije atributa tog razreda."
      },
      {
        "key": "c",
        "text": "Izvorni kod razreda sadrži prazno tijelo svih metoda tog razreda."
      },
      {
        "key": "d",
        "text": "Izvorni kod svakog razreda obavezno sadrži konstruktor razreda."
      },
      {
        "key": "e",
        "text": "Sve tvrdnje vrijede."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "(Službeno.) Iz modela se generira kostur: datoteka po razredu, atributi i prazna tijela metoda; konstruktor samo ako je modeliran."
  },
  {
    "id": "P7.1",
    "chapter": 7,
    "source": "MI 2024 A-21, B-21",
    "question": "Koja je ključna značajka sustava Git koja najviše doprinosi učinkovitoj suradnji među programerima?",
    "options": [
      {
        "key": "a",
        "text": "Osigurava provođenje standarda kodiranja."
      },
      {
        "key": "b",
        "text": "Ostvaruje sustav za spajanje promjena različitih suradnika."
      },
      {
        "key": "c",
        "text": "Automatizira proces ispitivanja."
      },
      {
        "key": "d",
        "text": "Pojednostavljuje proces pregleda koda."
      },
      {
        "key": "e",
        "text": "Podržava generičke procese programskog inženjerstva."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Bit Gita za suradnju je spajanje (merge) promjena koje su suradnici napravili paralelno. (a) Standarde kodiranja provode alati za statičku analizu. (c) Ispitivanje automatiziraju CI alati. (d) Pregled koda nudi platforma (GitHub/GitLab pull request), a ne Git. (e) je preopćenito."
  },
  {
    "id": "P7.2",
    "chapter": 7,
    "source": "MI 2024 A-22",
    "question": "Što će se dogoditi kada uspješno izvršimo naredbu git merge grana_FE dok se nalazimo na grani main, a nema konflikata između grana?",
    "options": [
      {
        "key": "a",
        "text": "Promjene s grane grana_FE bit će spojene u granu main, čuvajući povijest obje grane."
      },
      {
        "key": "b",
        "text": "Grana grana_FE će biti izbrisana nakon spajanja."
      },
      {
        "key": "c",
        "text": "Sve promjene s grane main bit će prepisane promjenama s grane grana_FE."
      },
      {
        "key": "d",
        "text": "Grana grana_FE će postati nova aktivna grana nakon spajanja."
      },
      {
        "key": "e",
        "text": "Spajanje će automatski stvoriti novu granu koja sadrži kombinirane promjene."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "merge spaja grana_FE u trenutnu granu main, a povijest obje grane ostaje (commit spajanja ima dva roditelja). (b) Grana se ne briše, za to služi git branch -d. (c) Ništa se ne prepisuje, promjene se objedinjuju. (d) Aktivna ostaje main. (e) Nastaje eventualno novi commit, a ne nova grana."
  },
  {
    "id": "P7.3",
    "chapter": 7,
    "source": "MI 2024 B-22",
    "question": "Koje naredbe treba izvršiti da bi se grana develop spojila u granu master ako je trenutno stanje repozitorija kao na slici? (Pretpostavite da se trenutno nalazite na grani master.)",
    "options": [
      {
        "key": "a",
        "text": "git merge develop"
      },
      {
        "key": "b",
        "text": "git checkout develop ; git merge master"
      },
      {
        "key": "c",
        "text": "git checkout develop ; git push master"
      },
      {
        "key": "d",
        "text": "git push develop"
      },
      {
        "key": "e",
        "text": "ništa od navedenog"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Već smo na master (HEAD), pa je dovoljno git merge develop. Budući da su se grane razišle (obje imaju commit nakon 87c2afb), nastat će commit spajanja. (b) bi spojio master u develop, dakle obrnuto. (c) i (d) push ne spaja grane, nego šalje commitove na udaljeni repozitorij.",
    "image": "images/P7.3.png"
  },
  {
    "id": "P7.4",
    "chapter": 7,
    "source": "MI 2025 A-15",
    "question": "Što će se dogoditi kada izvršimo naredbu git checkout -b nova_grana?",
    "options": [
      {
        "key": "a",
        "text": "Stvorit će se nova grana nova_grana na temelju trenutne grane i odmah prebaciti radno okruženje na nju."
      },
      {
        "key": "b",
        "text": "Stvorit će se nova grana nova_grana na temelju trenutne grane, ali aktivna ostaje trenutna grana."
      },
      {
        "key": "c",
        "text": "Stvorit će se nova prazna grana nova_grana bez povijesti."
      },
      {
        "key": "d",
        "text": "Radno okruženje se prebacuje na nova_grana."
      },
      {
        "key": "e",
        "text": "Ništa od navedenog."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "checkout -b = stvori granu iz trenutnog commita (s cijelom poviješću) i odmah se prebaci na nju. (b) opisuje samo git branch. (c) Grana nije prazna, a takvu stvara tek posebna opcija --orphan. (d) je nepotpuno, jer prešućuje stvaranje grane."
  },
  {
    "id": "P7.5",
    "chapter": 7,
    "source": "MI 2025 B-15",
    "question": "Radite u grani main, ali želite istovremeno i razvijati novu funkcionalnost bez diranja postojeće verzije koda. Koja naredba omogućuje istovremeno stvaranje nove grane feature/login i prebacivanje na nju?",
    "options": [
      {
        "key": "a",
        "text": "git branch feature/login && git checkout feature/login"
      },
      {
        "key": "b",
        "text": "git checkout feature/login && git branch feature/login"
      },
      {
        "key": "c",
        "text": "git branch feature/login"
      },
      {
        "key": "d",
        "text": "git checkout feature/login"
      },
      {
        "key": "e",
        "text": "git switch feature/login"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Prvo se grana stvori (branch), pa se na nju prebaci (checkout). (b) Obrnuti redoslijed pada, jer grana još ne postoji, pa se zbog && druga naredba ni ne izvede. (c) samo stvara granu. (d) i (e) prebacuju samo na postojeću granu. Napomena: ista se stvar radi jednom naredbom, git checkout -b feature/login ili git switch -c feature/login, ali te opcije nisu bile ponuđene."
  },
  {
    "id": "P7.6",
    "chapter": 7,
    "source": "MI 2025 A-21, B-21",
    "question": "Koji element Git sustava privremeno pohranjuje promjene koje će biti uključene u sljedeći commit?",
    "options": [
      {
        "key": "a",
        "text": "Udaljeni repozitorij."
      },
      {
        "key": "b",
        "text": "Lokalni repozitorij."
      },
      {
        "key": "c",
        "text": "Prostor pripreme."
      },
      {
        "key": "d",
        "text": "Grana."
      },
      {
        "key": "e",
        "text": "Radni prostor."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Prostor pripreme (staging area, index) puni se s git add, a njegov sadržaj postaje sljedeći commit. Radni prostor (e) sadrži sve izmjene, pa i one koje ne želimo u commitu. Lokalni (b) i udaljeni (a) repozitorij čuvaju već napravljene commitove. Grana (d) je pokazivač na commit."
  },
  {
    "id": "P7.21a",
    "chapter": 7,
    "source": "MI 2014-11",
    "question": "Ključni zahtjevi sustava za upravljanje inačicama datoteka (npr. SVN) su (više točnih odgovora):",
    "options": [
      {
        "key": "a",
        "text": "Lako upravljanje projektom (engl. project management)."
      },
      {
        "key": "b",
        "text": "Jednostavnost pohrane/vraćanja sadržaja."
      },
      {
        "key": "c",
        "text": "Dobro grananje i spajanje razvojnih inačica."
      },
      {
        "key": "d",
        "text": "Podrška za modeliranje UML-om."
      },
      {
        "key": "e",
        "text": "Sustav automatski razrješava konflikte."
      }
    ],
    "correct": [
      "b",
      "c"
    ],
    "explanation": "Neslužbeno (ispit bez rješenja): sustav pamti revizije (pohrana i vraćanje) te podržava grananje i spajanje. Upravljanje projektom i UML zadaće su drugih CASE alata, a konflikte razrješava korisnik."
  },
  {
    "id": "P7.21b",
    "chapter": 7,
    "source": "MI 2016 B-11",
    "question": "Za moderne sustave za upravljanje inačicama datoteka ne vrijedi tvrdnja:",
    "options": [
      {
        "key": "a",
        "text": "Poželjna dobra integracija s razvojnom okolinom."
      },
      {
        "key": "b",
        "text": "Poželjna mogućnost stvaranja grana razvoja."
      },
      {
        "key": "c",
        "text": "Poželjna mogućnost spajanja grana razvoja."
      },
      {
        "key": "d",
        "text": "Poželjan raspodijeljeni rad."
      },
      {
        "key": "e",
        "text": "Poželjan rad na isključivo jednoj kopiji datoteke radi održavanja jednoznačnosti."
      }
    ],
    "correct": [
      "e"
    ],
    "explanation": "Službeno: rad na jednoj kopiji suprotan je ideji grananja i raspodijeljenog rada."
  },
  {
    "id": "P7.22",
    "chapter": 7,
    "source": "MI 2016 A-10",
    "question": "Naredbom git add inačica neke datoteke pohranjuje se u:",
    "options": [
      {
        "key": "a",
        "text": "korisničku mapu u kojoj se nalaze datoteke iz repozitorija (engl. workspace)"
      },
      {
        "key": "b",
        "text": "lokalni korisnički repozitorij (engl. local repository)"
      },
      {
        "key": "c",
        "text": "prostor pripreme za buduću pohranu u repozitorij (engl. staging area)"
      },
      {
        "key": "d",
        "text": "središnji repozitorij (engl. remote repository)"
      },
      {
        "key": "e",
        "text": "Ništa od navedenoga"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "git add sprema stanje datoteke u prostor pripreme; u lokalni repozitorij ulazi tek s commit, u udaljeni s push."
  }
];
