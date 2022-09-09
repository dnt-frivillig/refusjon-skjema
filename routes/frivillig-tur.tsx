import { asset } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";
import DenoEditor from "../islands/DenoEditor.tsx";

const style = `
/* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:Georgia;
	panose-1:2 4 5 2 5 4 5 2 3 3;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoCaption, li.MsoCaption, div.MsoCaption
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	font-size:9.0pt;
	font-family:"Calibri",sans-serif;
	color:#44546A;
	font-style:italic;}
a:link, span.MsoHyperlink
	{color:blue;
	text-decoration:underline;}
span.normaltextrun
	{mso-style-name:normaltextrun;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
 /* Page Definitions */
 @page WordSection1
	{size:595.3pt 841.9pt;
	margin:70.85pt 70.85pt 70.85pt 70.85pt;}
div.WordSection1
	{page:WordSection1;}
`;

export default function VolunteerTrip() {
  return (
    <div class="p-0 mx-auto max-w-screen-md">
      <style>{style}</style>
      <DenoEditor />

      <div>
        <div className="WordSection1">
          <p className="MsoNormal">
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "20.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                TURMAL FRIVILLIGORGANISERTE TURER I DNT OSLO OG OMEGN
              </span>
            </b>
          </p>
          <p className="MsoNormal">
            <span className="normaltextrun">
              <i>
                <span
                  lang="NO-BOK"
                  style={{
                    fontFamily: '"Times New Roman",serif',
                    color: "black",
                    background: "white",
                  }}
                >
                  Sist redigert 04. juli&nbsp;2022&nbsp;
                </span>
              </i>
            </span>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Målet med en felles turmal er blant annet enhetlig
                kommunikasjon, forutsigbarhet til deltakerne og for å enkelt
                kunne kvalitetssikre at man har fått med den viktigste
                informasjonen.
              </span>
            </i>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Det som står i <span style={{ color: "#70AD47" }}>GRØNT</span>{" "}
                er info til deg som fyller ut turbeskrivelsen
              </span>
            </i>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Det som står i SVART skal legges inn slik det står.
              </span>
            </i>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Det som står i <span style={{ color: "red" }}>RØDT </span>skal
                legges inn dersom turen inkluderer overnatting på hytte(-r).{" "}
              </span>
            </i>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Gi beskjed hvis noe er uklart i hvordan dokumentet skal fylles
                ut.
              </span>
            </i>
          </p>
          <p className="MsoNormal">
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Det er viktig at dere lar «frivilligorganisert» stå i teksten
                nederst, slik at administrasjonen kan benytte dette som et søk.
              </span>
            </i>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                width={480}
                height={256}
                id="Picture 1420856310"
                src={asset("image001.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              1
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Valg av arrangører. Hovedarrangør: Aktuell aktivitetsgruppe.
              Medarrangør: DNT Oslo og Omegn, Frivilligturer DNTOO og aktuelle
              DNT Oslo og Omegn hytter
            </span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                <img
                  width={656}
                  height={207}
                  id="Bilde 2"
                  src={asset("image002.png")}
                />
              </span>
            </b>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              2
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Turkode skal ikke benyttes, feltet skal stå blankt.
            </span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                width={655}
                height={215}
                id="Bilde 3"
                src={asset("image003.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              3
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Her fyller man inn tittel på turen og turbeskrivelsen, som
              beskrevet under.
            </span>
          </p>
          <p className="MsoNormal">
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                &nbsp;
              </span>
            </b>
          </p>
          <p className="MsoNormal">
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "20.0pt",
                  lineHeight: "107%",
                  fontFamily: '"Times New Roman",serif',
                  color: "#6FAC47",
                }}
              >
                TITTEL PÅ TUREN
              </span>
            </b>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Ingress: inneholder èn til to setninger før linjeskift.
              </span>
            </b>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Nytt avsnitt og en lenger selgende tekst om turen i resten av
                ingressen. Det kan stå litt mer fargerikt og generelt om
                opplevelsene, lyset, stemningen, området, vennskap, turledelse
                etc. Programmet under inneholder mer fakta om etappene.
              </span>
            </b>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              PROGRAM
            </span>
            <span lang="NO-BOK">
              <br />
            </span>
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Programmet under inneholder dag-til-dag program og skal si noe
                om hvor langt man går og tidsbruk. Det skal også komme fram om
                man reiser kollektivt og oppmøtetider/avslutningstider på reiser
                etc. Vi håper på sikt at vi kan bruke UT.no for å linke til
                rutebeskrivelsen. Inntil videre kan vi gjøre det der vi er sikre
                på at vi har korrekt beskrivelse sommer/vinter, ellers må vi
                lage en kort beskrivelse av dagsetappen. Se eksempel på program
                under.
              </span>
            </i>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Dag 1: Reisestrekning (fra oppmøte til ankomst), moh, ca. antall
                km/ ca. antall timer i tidsbruk
              </span>
            </b>
            <span lang="NO-BOK">
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Skriv når ankomst blir og hvor langt dere eventuelt skal gå første
              dag. Oppmøtetid og -sted skal komme tydelig frem. Hvis dere skal
              ta kollektivtransport må dere legge inn oppmøte minst 15 min før.
              Turleder må være på plass når deltakerne møter opp.{" "}
            </span>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Dag 2: Reiserute (hytte til hytte), moh, ca. antall km/ca.
                antall timer i tidsbruk
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              {" "}
            </span>
            <span lang="NO-BOK">
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Informer om hva man kan forvente fra dagen, hvor turen går
              (alternativer hvis det f.eks. er væravhengig), terrenget, utsikten
              og hva man kan tenkes å oppleve denne dagen som vil legge til
              rette for turglede. Opplys om leirsted/hytte, måltid og eventuelt
              aktiviteter på kvelden.
            </span>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Dag 3: Se ovenfor
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              &nbsp;
            </span>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Dag 4: Se ovenfor
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              &nbsp;
            </span>
            <span lang="NO-BOK">
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#70AD47",
                }}
              >
                Siste dag:{" "}
              </span>
            </b>
            <span lang="NO-BOK">
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Blir det tur denne dagen eller skal dere bare pakke sammen og
              deretter hjemreise? Tidspunktet for når deltakerne kan forvente å
              være tilbake på utgangspunktet må komme frem.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Med forbehold om endring i programmet!{" "}
              </span>
            </i>
            <em>
              <span
                lang="NO-BOK"
                style={{
                  fontFamily: '"Georgia",serif',
                  color: "#333333",
                  background: "white",
                }}
              >
                Det er turlederne
              </span>
            </em>
            <span
              lang="NO-BOK"
              style={{
                fontFamily: '"Georgia",serif',
                color: "#333333",
                background: "white",
              }}
            >
              ,&nbsp;
              <em>
                <span style={{ fontFamily: '"Georgia",serif' }}>
                  som etter å ha tatt hensyn til føre, væremelding og i samråd
                  med bestyrere og deltakere, beslutter om dagens tur lar seg
                  gjennomføre som programfestet.{" "}
                </span>
              </em>
            </span>
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Alle tidsberegninger er gjort ut ifra en gjennomsnittsfart på ca
                3 km/t. Vær oppmerksom på at pauser, vær- og føreforhold og ol.
                ikke er innberegnet i tid brukt på turen.&nbsp;
                <span style={{ color: "#70AD47" }}>
                  <br />
                  <br />
                </span>
              </span>
            </i>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Pris og betaling
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                <br />
                Kr. <span style={{ color: "#70AD47" }}>[Sum].</span>
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              {" "}
              Her summerer dere kostnadene for overnatting for hver enkelt
              deltaker, og et anslag for maten som skal handles inn om det er
              ubetjente hytter eller telt. Prisliste i separat dokument.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                <br />
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Påmelding skjer uten betaling i Sherpa. Deltakerne blir fakturert
              individuelt fra hyttene/overnattingssted. Transport bestilles og
              betales selv individuelt. Måltider ordnes og betales i hovedsak
              selv. Ved unntak og eventuelle fellesmåltider vil det opprettes
              oppgjør i VIPPS mellom deltakere og turledere.
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              For turelementer der deltaker selv er ansvarlig for bestillingen
              gjelder avbestilling mellom deltaker og gjeldende tilbyder (eks.
              transportør), og etter tilbyders avbestillingsvilkår. Deltaker er
              selv ansvarlig for avbestilling av eventuell hytteovernatting og
              faktureres etter gjeldende vilkår hos leverandør.
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              &nbsp;
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "red",
              }}
            >
              På denne turen er det lagt til et administrasjonsgebyr pålydende
              200,- for medlemmer og 400,- for ikke-medlemmer.
              Administrasjonsgebyret går til drift av IT-tjenester, systemer
              o.l. Tjenesten som brukes er VIPPS og nummeret som benyttes for
              betaling er:{" "}
            </span>
            <b>
              <u>
                <span
                  lang="NO-BOK"
                  style={{ fontSize: "12.0pt", color: "red" }}
                >
                  745738
                </span>
              </u>
            </b>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt", color: "red" }}>
              .
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "red",
              }}
            >
              Administrasjonsgebyret er <u>bindende</u> ved påmelding og vil
              ikke bli refundert ved avbestilling. Dersom du er på venteliste,
              trenger du ikke å betale administrasjonsgebyret før du eventuelt
              får plass på turen.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "red",
              }}
            >
              &nbsp;
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span lang="NO-BOK">
              <a href="https://www.dnt.no/medlem/">
                <span
                  style={{ fontFamily: '"Georgia",serif', background: "white" }}
                >
                  Bli medlem i DNT
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Nødvendig spesialkost:
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
              Gi beskjed ved påmelding!
              <b>
                <br />
                <br />
                Maks antall deltakere
              </b>
              : <span style={{ color: "#70AD47" }}>xx</span> (pluss{" "}
              <span style={{ color: "#70AD47" }}>x</span>&nbsp;turledere)
              <b>
                <br />
                <br />
                Annet:{" "}
              </b>
              <span style={{ color: "#70AD47" }}>
                DNT Oslo og Omegn har også deltakere fra andre land enn Norge.
                Det kan gjerne komme frem om turleder behersker norsk og
                engelsk, eller om turleder ikke behersker engelsk.
              </span>
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Velkomstbrev sendes deltakerne på e-post ca. 1-2 uker i forkant
                av turstart. Der står det blant annet hvem som er hovedturleder
                og kontaktinformasjon til denne.
              </span>
            </i>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
              <span style={{ color: "#70AD47" }}>
                <br />
                Hvis det er en spesielt krevende tur bør det holdes
                planleggingsmøte i forkant, og da bør dette opplyses om her.{" "}
                <br />
                <br />
              </span>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Passer turen for meg
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
              <span style={{ color: "#70AD47" }}>
                Beskriv turens nivå og hva slags erfaring som er forventet at
                deltakerne har, eks. om turen er tung med store
                høydeforskjeller, krevende terreng utenfor merket sti, om man
                bærer tung sekk, om man må være i god fysisk etc.
              </span>
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span lang="NO-BOK">
              <a href="https://www.dntoslo.no/graderingfellesturer/">
                <b>
                  <span
                    style={{
                      fontSize: "12.0pt",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    Gradering av turen
                  </span>
                </b>
              </a>
            </span>
            <b>
              <u>
                <span
                  lang="NO-BOK"
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                    color: "blue",
                  }}
                >
                  :{" "}
                </span>
              </u>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Bruk skjema til å sette riktig gradering på turen.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Er du usikker på erfaring som kreves for denne turen? Vennligst
              kontakt turleder. Kontaktinfo finner du til høyre på denne siden.{" "}
              <br />
              <span style={{ color: "#70AD47" }}>
                <br />
              </span>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Overnatting
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Les mer om hyttene her:&nbsp;
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Lenker til hyttene som skal benyttes hentes på{" "}
            </span>
            <span lang="NO-BOK">
              <a href="http://ut.no/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  UT.no
                </span>
              </a>
            </span>
            <u>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "blue",
                }}
              >
                .
              </span>
            </u>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              <br />
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Hvordan komme til/fra oppmøtested
              <br />
            </span>
            <em>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  color: "#333333",
                  background: "white",
                  fontStyle: "normal",
                }}
              >
                Deltakerne må selv sørge for å komme fram til oppmøtested for
                turen på egenhånd. Hverken turleder/instruktør, administrasjon
                eller bestyrere kan, av ulike årsaker, organisere samkjøring
                med&nbsp;privatbiler. Det er viktig at man sikrer seg en
                transportløsning før man melder seg på turen.
                <br />
                <br />
              </span>
            </em>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Offentlig transport fra Oslo:
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Se rutetider på{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://entur.no/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  entur.no
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
              eller
            </span>
            <span lang="NO-BOK">
              <a href="https://www.vy.no/?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbOkhTMJxrVvVRQvPzJcy23MVjbz_1-RDqjxKWXqRygtsIBQdvlk1IaApz3EALw_wcB">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  VY.no
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              DNT Oslo og Omegn er ikke ansvarlig for om det blir endringer/feil
              på rutetidene. Deltakerne er selv ansvarlig for å undersøke om
              rutetidene er riktige før påmelding til turen.
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
              <br />
              Kart og ruteinformasjon
            </span>
            <span lang="NO-BOK">
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Her må det komme frem hvilket kart deltakerne trenger<i>. </i>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Sjekk{" "}
            </span>
            <span lang="NO-BOK">
              <a href="http://ut.no/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ut.no
                </span>
              </a>
            </span>
            <u>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                {" "}
              </span>
            </u>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              for oppdatert kart- og ruteinformasjon. Kart kan kjøpes i vår
              Turinformasjon eller på{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://www.dntbutikken.no/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  Nettbutikken&nbsp;
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Utstyr og pakkeliste
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
              Av sikkerhetsmessige årsaker kreves det riktig og viktig
              bekledning og utstyr i sekken. Vi viser derfor til våre
              pakkelister for{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://www.dnt.no/artikler/turtips/7080-pakkeliste-sommer/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  sommerturer
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              ,{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://www.dnt.no/artikler/turtips/7098-pakkeliste-for-skiturer-i-vinterfjellet/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  vinterturer
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
              eller
            </span>
            <span lang="NO-BOK">
              <a href="https://www.dnt.no/artikler/turtips/7097-pakkeliste-dagstur/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  dagsturer
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{ fontFamily: '"Times New Roman",serif' }}
            >
              .
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#70AD47",
              }}
            >
              Hvis det det er annet utstyr deltakerne må ha med, utarbeides egen
              pakkeliste for denne turen.
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
              <br />
              NB! Det er ikke lenger tillatt å benytte sovepose i sengene på DNT
              Oslo og Omegn sine betjente hytter. Lakenpose kan benyttes,
              eventuelt leie av sengetøy.
              <br />
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                  color: "#333333",
                  background: "white",
                }}
              >
                Skal du på tur og mangler utstyr?
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "#333333",
                background: "white",
              }}
            >
              {" "}
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#333333",
                background: "white",
              }}
            >
              <br />
              Det er mulig&nbsp;
            </span>
            <span
              lang="NO-BOK"
              style={{ fontFamily: '"Times New Roman",serif' }}
            >
              BUA
            </span>
            <span lang="NO-BOK"> </span>
            <span
              lang="NO-BOK"
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#333333",
                background: "white",
              }}
            >
              kan hjelpe deg. Gå inn på&nbsp;
            </span>
            <span lang="NO-BOK">
              <a href="https://www.bua.io/">
                <span
                  style={{
                    fontFamily: '"Times New Roman",serif',
                    background: "white",
                  }}
                >
                  www.bua.io
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontFamily: '"Times New Roman",serif',
                color: "#333333",
                background: "white",
              }}
            >
              &nbsp;og finn den BUA ordningen som er nærmest deg (i Oslo: BUA
              Bjørndal. BUA Klemetsrud, BUA Østensjø, BUA Bjerke, BUA Sagene og
              BUA FRIGO). Send en låneforespørsel på e-post, eller ring å spør
              etter det utstyret du trenger.{" "}
            </span>
            <span
              lang="NO-BOK"
              style={{ fontFamily: '"Times New Roman",serif' }}
            >
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Før påmelding
              <br />
            </span>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Vilkår for deltakelse:
              </span>
            </b>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              {" "}
              <br />
              Når du melder deg på denne turen bekrefter du at du har lest og
              aksepterer vilkårene som er beskrevet i{" "}
              <span style={{ color: "red" }}>[</span>
            </span>
            <span lang="NO-BOK">
              <a href="https://dennorsketuristforening-my.sharepoint.com/:b:/r/personal/claudia_gostomski_dnt_no/Documents/2021/1.%20Turledere/FD%20turer/Vilk%C3%A5r%20for%20frivillig%20organiserte%20aktiviteter%20i%20DNT%20OO%202021-08-15.pdf?csf=1&web=1&e=FXFpbt">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  link til vilkårene
                </span>
              </a>
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "red",
              }}
            >
              ].
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
                color: "red",
              }}
            >
              &nbsp;
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "16.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Om våre turledere
            </span>
            <span lang="NO-BOK">
              <br />
            </span>
            <span
              lang="NO-BOK"
              style={{
                fontSize: "12.0pt",
                fontFamily: '"Times New Roman",serif',
              }}
            >
              Våre turledere er frivillige. De har gjennomgått turlederkurs
              og/eller instruktørkurs og har mye erfaring med denne type turer.
              Turlederne gjør sine turlederoppdrag med stor glede og deler
              villig sin friluftserfaring og -glede med deltakerne.{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://www.dntoslo.no/V%C3%A5re%20turledere/">
                <span
                  style={{
                    fontSize: "12.0pt",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  Les gjerne mer om hvem våre turledere er her.
                </span>
              </a>
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <b>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "12.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Ofte stilte spørsmål:{" "}
              </span>
            </b>
            <span lang="NO-BOK">
              Se vår <a href="https://www.dntoslo.no/faqfellestur/">FAQ</a> om
              fellesturer.
            </span>
          </p>
          <p className="MsoNormal" style={{ lineHeight: "normal" }}>
            <i>
              <span
                lang="NO-BOK"
                style={{
                  fontSize: "16.0pt",
                  fontFamily: '"Times New Roman",serif',
                }}
              >
                Dette er en frivilligorganisert tur, der turleder selv har laget
                turopplegget. Dette er ikke en pakketur og er ikke omfattet av
                lov om pakkereiser.
              </span>
            </i>
          </p>
          <p
            className="MsoNormal"
            style={{ lineHeight: "normal", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={125}
                id="Bilde 4"
                src={asset("image004.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              4
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg rett gradering.
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                border={0}
                width={510}
                height={216}
                id="Bilde 6"
                src={asset("image005.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              5
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg de målgruppene som aktiviteten passer for (flere kan
              velges)
            </span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                border={0}
                width={558}
                height={105}
                id="Bilde 7"
                src={asset("image006.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              6
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg kategori.
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={635}
                height={218}
                id="Bilde 9"
                src={asset("image007.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              7
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg hva slags tur det er.
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={111}
                id="Bilde 10"
                src={asset("image008.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              8
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Legg til ett eller flere nøkkelord for turen.
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={387}
                id="Bilde 12"
                src={asset("image009.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              9
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg hovedbilde og flere bilder. Skriv inn navn på fotograf
              eller forening. Overstyr/slett teksten under bildene om det ikke
              er relevant for din tur.
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={336}
                id="Bilde 11"
                src={asset("image010.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              10
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Sett posisjon i kart ved å skrive i søkefeltet hvor turen
              starter. Velg rett fylke, kommune og område.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={345}
                id="Bilde 13"
                src={asset("image011.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              11
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : A. Skriv inn start -og sluttdato med tidspunkter (Ved eventuelle
              endringer av datoen, trykk på «Start -og sluttdato» og korriger
              eksisterende valg av dato). B. Påmelding uten nettbetaling. C.
              Maks deltakere: Oppgi maksimalt antall deltakere på turen om du
              skal ha en begrensning. D. Bare DNT medlemmer: Ikke huk av, så
              sant du ikke ønsker å begrense turen til utelukkende medlemmer. E.
              Påmelding fra: Velg ønsket tidspunkt deltakere kan melde seg på
              turen. F. Påmeldingsfrist: Velg ønsket tidspunkt deltakere kan
              melde seg på turen. G. Avmeldingsfrist: Sett avmelding fem
              virkedager i forkant av første overnatting.{" "}
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={193}
                id="Bilde 14"
                src={asset("image012.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              12
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Turledere: Marker at denne turen skal ha turleder. Legg til
              turledere: Skriv deretter inn navnet på medturlederne.
              Kontaktinformasjon: Før inn navn, telefonnummer og/eller
              e-postadresse til turlederen som mottar påmeldinger og eventuelle
              spørsmål.{" "}
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              &nbsp;
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={111}
                id="Bilde 15"
                src={asset("image013.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              13
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg DNTs generelle vilkår inntil videre. Egne vilkår linkes til
              i turmalen.{" "}
            </span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={655}
                height={229}
                id="Bilde 20"
                src={asset("image014.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              14
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Her legges eventuelt inn priser, men står som oftest blankt
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={655}
                height={294}
                id="Bilde 19"
                src={asset("image015.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ marginBottom: "0in", textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              15
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : <b>Spørsmål til deltaker ved påmelding</b> benyttes ved behov,
              for eksempel når nye og ukjente deltakere melder seg på krevende
              turer. Da kan det være hensiktsmessig å be deltakerne om å skrive
              noen ord om seg selv og erfaring, samt at deltakerplassen ikke er
              endelig bekreftet før turlederen har gjennomgått meldingen, og
              eventuelt snakket med deltakeren.{" "}
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ marginBottom: "0in", textAlign: "center" }}
          >
            <b>
              <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
                Tekst i bekreftelsespost
              </span>
            </b>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              {" "}
              velges ved eget ønske. Eventuell bekreftelse på påmelding.
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ pageBreakAfter: "avoid" }}>
            <span lang="NO-BOK">
              <img
                border={0}
                width={656}
                height={251}
                id="Bilde 16"
                src={asset("image016.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              16
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Velg når turen skal publiseres og lagre endringer.
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center", pageBreakAfter: "avoid" }}
          >
            <span lang="NO-BOK">
              <img
                border={0}
                width={359}
                height={341}
                id="Bilde 21"
                src={asset("image017.png")}
              />
            </span>
          </p>
          <p
            className="MsoCaption"
            align="center"
            style={{ marginBottom: "0in", textAlign: "center" }}
          >
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              Bilde{" "}
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              17
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              : Risikovurdering. Alle turledere må ta en risikovurdering av
              turen. Risikovurderingsskjema finnes i{" "}
            </span>
            <span lang="NO-BOK">
              <a href="https://dnt.mobilise.no/mobile">
                <span style={{ fontSize: "12.0pt" }}>Mobilise</span>
              </a>
            </span>
            <span lang="NO-BOK" style={{ fontSize: "12.0pt" }}>
              . Hovedturleder laster opp risikovurderingen som et vedlegg i
              Sherpa.
            </span>
          </p>
          <p className="MsoNormal">
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK">&nbsp;</span>
          </p>
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span lang="NO-BOK">&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
