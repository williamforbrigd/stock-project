import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function Definitions() {
  return (
    <Card>
      <Card.Header>Definisjoner</Card.Header>
      <Card.Body>
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          p/e (price / earnings)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          To utregningsmåter:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            markedsverdi / årsresultat
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">
            aksjekurs / årsresultat per aksje (eps)
          </footer>
          <br />
          eps: årsresultat / utestående aksjer p/e forteller deg hvor mye du
          betaler per resultat krone selskapet genererer. p/e på 5x forteller
          deg at for hver krone av resultat, betaler investorene 5 kroner. en
          lav p/e kan indikere at selskapet er underpriset eller at markedet har
          mindre tro på at selskapets årsresultat skal vokse fremover. en høy
          p/e kan indikere at selskapet er overpriset eller at markedet har mer
          tro på at selskapets årsresultat skal vokse fremover. forholdet bør
          sammenlignes med selskaper innenfor samme sektor, fordi sektorer har
          forskjellige gjennomsnittlige verdier på hva som kan indikere en
          underpriset / overpriset aksje. To utregningsmåter: markedsverdi /
          årsresultat aksjekurs / årsresultat per aksje (eps) eps: årsresultat /
          utestående aksjer p/e forteller deg hvor mye du betaler per resultat
          krone selskapet genererer. p/e på 5x forteller deg at for hver krone
          av resultat, betaler investorene 5 kroner. en lav p/e kan indikere at
          selskapet er underpriset eller at markedet har mindre tro på at
          selskapets årsresultat skal vokse fremover. en høy p/e kan indikere at
          selskapet er overpriset eller at markedet har mer tro på at selskapets
          årsresultat skal vokse fremover. forholdet bør sammenlignes med
          selskaper innenfor samme sektor, fordi sektorer har forskjellige
          gjennomsnittlige verdier på hva som kan indikere en underpriset /
          overpriset aksje.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          p/b (price / book value)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          To utregningsmåter: markedsverdi / bokførte verdier aksjekurs /
          bokførte verdier per aksje (bvps) bokførte verdier (egenkapital) =
          eiendeler - gjeld bvps = bokførte verdier / utestående aksjer p/b
          forteller investorene hvor mye de betaler for selskapets egenkapital
          basert på historiske verdivurderinger. når p/b er 1x, forteller det
          deg at markedsverdien utgjør like mye som bokførte verdier. forholdet
          bør sammenlignes med selskaper innenfor samme sektor, fordi sektorer
          har forskjellige gjennomsnittlige verdier på hva som kan indikere en
          underpriset / overpriset aksje.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          p/s (price / sales)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          To utregningsmåter:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            markedsverdi / årlige salg
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">
            aksjekurs / salg per aksje (sps)
          </footer>
          <br />
          sps = årlige salg / utestående aksjer
          <br />
          p/s forteller deg forholdet mellom markedsverdien og salgsinntektene
          til ett selskap. Jo mindre dette forholdet er, jo bedre antas
          investeringen som å være siden investoren betaler mindre for hver
          salgsenhet. forholdet bør sammenlignes med selskaper innenfor samme
          sektor, fordi sektorer har forskjellige gjennomsnittlige verdier på
          hva som kan indikere en underpriset / overpriset aksje.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          p/cf (price / cash flow)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          To utregningsmåter:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            markedsverdi / kontantstrøm fra driften
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">
            aksjekurs / kontantstrøm fra driften per aksje
          </footer>
          <br />
          sps = årlige salg / utestående aksjer
          <br />
          kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og gikk
          ut av kjernevirksomheten til selskapet.
          <br />
          kontantstrøm fra driften per aksje = kontantstrøm fra driften /
          utestående aksjer
          <br />
          kontantstrøm regnskap er delt inn i 3 hovedelementer:
          <br />
          kontantstrøm fra driften
          <br />
          kontantstrøm fra investeringer
          <br />
          kontantstrøm fra finans
          <br />
          p/cf forteller deg forholdet mellom markedsverdien og kontantstrømmen
          fra driften til et selskap. Jo mindre dette forholdet er, jo bedre
          antas investeringen som å være. forholdet bør sammenlignes med
          selskaper innenfor samme sektor, fordi sektorer har forskjellige
          gjennomsnittlige verdier på hva som kan indikere en underpriset /
          overpriset aksje.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          p/fcf (price / free cash flow)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          To utregningsmåter:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            markedsverdi / gratis kontantstrøm
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">
            aksjekurs / gratis kontantstrøm per aksje
          </footer>
          kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og gikk
          ut av kjernevirksomheten til selskapet.
          <br />
          gratis kontantstrøm = kontantstrøm fra driften - CAPEX
          (kapitalutgifter / capital expenditure)
          <br />
          CAPEX = penger brukt av et selskap for å vedlikeholde / oppgradere
          anleggsmidler (langsiktige eiendeler) som bygninger, maskiner og
          utstyr. Det er altså pengene som blir brukt for å bli i virksomhet. Du
          finner CAPEX på kontantstrøm regnskapet innenfor kontantstrøm fra
          investeringer.
          <br />
          gratis kontantstrøm per aksje = gratis kontantstrøm / utestående
          aksjer
          <br />
          gratis kontantstrøm er pengene du hadde fått hvis du hadde eid
          bedriften selv
          <br />
          gratis kontantstrøm kan brukes til 3 hovedområder:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            markedsverdi / gratis kontantstrøm
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">betaler utbytter</footer>
          <br />
          <footer className="blockquote-footer mb-0">
            kjøpte tilbake egner aksjer og det egner seg best når aksjen er
            billigere enn intrinsic value, da får vi mer verdi ut fra selskapet.
          </footer>
          <br />
          p/fcf forteller deg forholdet mellom markedsverdien og gratis
          kontantstrømmen fra driften til et selskap.
          <br />
          Jo mindre dette forholdet er, jo bedre antas investeringen som å være.
          forholdet bør sammenlignes med selskaper innenfor samme sektor, fordi
          sektorer har forskjellige gjennomsnittlige verdier på hva som kan
          indikere en underpriset / overpriset aksje.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          fcf / salg (free cash flow / sales)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          gratis kontantstrøm / salg * 100 (for prosent)
          <br />
          fcf / salg måler hvor mye et selskap tjener etter kapitalutgiftene
          (CAPEX), uttrykt i prosent.
          <br />
          Et høyere fcf / sales forhold indikerer en bedre evne til å konvertere
          salg til kontanter. forholdet bør sammenlignes med selskaper innenfor
          samme sektor, fordi sektorer har forskjellige gjennomsnittlige verdier
          på hva som kan indikere en underpriset / overpriset aksje.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          ev (enterprise value):
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          markedsverdi + gjeld - kontanter og kontantekvivalenter
          <br />
          mange anser forholdet for å være en mer nøyaktig fremstilling av
          selskaps totale verdi fordi det inkluderer gjeld i verdiberegning.
          <br />
          kan tenkes på som den totale prisen hvis selskapet skulle blitt kjøpt
          opp, fordi verdien av gjeld må betales av den som kjøper selskapet.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          ev / salg (enterprise value / sales)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          enterprise value / salg
          <br />
          enterprise value = markedsverdi + gjeld - kontanter og
          kontantekvivalenter
          <br />
          Forholdet anses som mer nøyaktig en p/s fordi EV tar hensyn til
          selskapets gjeld.
          <br />
          En lavere ev/ salg multippel kan indikere en mer attraktiv investering
          der selskapet kan være undervurdert.
          <br />
          En høy ev / salg multippel kan være et positivt tegn på at investorene
          tror salget kommer til å øke kraftig i fremtiden.
          <br />
          forholdet bør sammenlignes med selskaper innenfor samme sektor, fordi
          sektorer har forskjellige gjennomsnittlige verdier på hva som kan
          indikere en underpriset / overpriset aksje.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          ev / ebit (enterprise value / earnings before interest and taxes)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          enterprise value / ebit
          <br />
          enterprise value = markedsverdi + gjeld - kontanter og
          kontantekvivalenter
          <br />
          ebit (driftsresultat) = årsresultat + renter + skatter
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          ev/ ebitda (enterprise value / earnings before tax interest
          depreciation and amortization)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          enterprise value / ebitda
          <br />
          enterprise value = markedsverdi + gjeld - kontanter og
          kontantekvivalenter
          <br />
          ebitda = årsresultat + renter + skatter + nedskrivninger +
          avskrivninger
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          Resultat per aksje (eps - earnings per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          årsresultat / utestående aksjer
          <br />
          eps forteller deg hvor mye selskapet tjener per aksje
          <br />
          Bedrifter er forpliktet til å presentere resultat per aksje i sin
          årsrapport.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          bokførte verdier per aksje (bvps - book value per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          bokførte verdier / utestående aksjer
          <br />
          bokførte verdier (egenkapital) = eiendeler - gjeld
          <br />
          bokførte verdier per aksje forteller deg hvor mye egenkapital som er
          tilgjengelig per aksje.
          <br />
          Bedrifter er ikke forpliktet til å presentere bokførte verdier per
          aksje i sin årsrapport.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          salg per aksje (sps - sales per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          salg / utestående aksjer
          <br />
          salg per aksje måler den totale inntekten per aksje over en bestemt
          periode.
          <br />
          Det gir også et raskt blikk på selskapets produktivitet per utestående
          aksje. Jo høyere salg per aksje jo bedre presterer selskapet.
          <br />
          Bedrifter er ikke forpliktet til å presentere salg per aksjer i sin
          årsrapport.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          kontantstrøm per aksje (cfps - cash flow per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          kontantstrøm fra driften / utestående aksjer
          <br />
          kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og gikk
          ut av kjernevirksomheten til selskapet.
          <br />
          kontantstrøm per aksje representerer kontantene selskapet genererer
          fra driften per utestående aksje.
          <br />
          Mens resultat per aksje kan manipuleres, er det vanskeligere å endre
          kontantstrøm per aksje, noe som kan gi en mer nøyaktig verdi av
          styrken og bærekraften til et selskap.
          <br />
          Bedrifter er ikke forpliktet til å presentere kontantstrøm per aksje i
          årsregnskapet.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          gratis kontantstrøm per aksje (fcfps - free cash flow per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          gratis kontantstrøm / utestående aksjer
          <br />
          kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og gikk
          ut av kjernevirksomheten til selskapet.
          <br />
          gratis kontantstrøm = kontantstrøm fra driften - CAPEX
          (kapitalutgifter eller capital expenditure)
          <br />
          CAPEX = penger brukt av et selskap for å vedlikeholde eller oppgradere
          anleggsmidler (langsiktige eiendeler) som bygninger, maskiner og
          utstyr. Det er altså pengene som blir brukt for å bli i virksomhet. Du
          finner CAPEX på kontantstrøm regnskapet innenfor kontantstrøm fra
          investeringer.
          <br />
          gratis kontantstrøm er pengene du hadde fått hvis du hadde eid
          bedriften selv og per aksje representerer pengene du hadde fått per
          aksje du eier.
          <br />
          gratis kontantstrøm kan brukes til 3 hovedområder:
          <br />
          <footer
            style={{ marginTop: "5px" }}
            className="blockquote-footer mb-0"
          >
            reinvestere og utvide virksomheten raskere
          </footer>
          <br />
          <footer className="blockquote-footer mb-0">betaler utbytter</footer>
          <br />
          <footer className="blockquote-footer mb-0">
            kjøpte tilbake egner aksjer og det egner seg best når aksjen er
            billigere enn intrinsic value, da får vi mer verdi ut fra selskapet.
          </footer>
          <br />
          Bedrifter er ikke forpliktet til å presentere gratis kontantstrøm per
          aksjer i sin årsrapport.
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          utbytte per aksje (dps - dividend per share)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          utbytte utstedt av selskap / utestående aksjer
          <br />
          utbytte er viktig fordi beløpet selskapet utbetaler er direkte
          oversatt som inntekt til aksjonærer.
          <br />
          Hvis utbyttet øker over tid, er det et tegn på at inntjeningsveksten
          kan opprettholdes.
          <br />
          Hvis selskapet betaler utbytte er de pliktig til å informere dette i
          årsrapporten.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          avkastning på eiendeler (roa - return on assets)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          årsresultat / eiendeler * 100
          <br />
          avkastning på eiendeler er en indikator som gir investoren en ide om
          hvor effektivt selskapets ledelse er til å bruke eiendelen til å
          generere inntjening.
          <br />
          roa er uttrykt i prosent.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          avkastning på egenkapital (roe - return on equity)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          årsresultat / egenkapital * 100
          <br />
          avkastning på egenkapital er en indikator som gir investoren en ide om
          hvor effektivt selskapets ledelse er til å bruke egenkapital til å
          generere inntjening.
          <br />
          roe er uttrykt i prosent.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          avkastning på investert kapital (roik - return on invested capital)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          nopat / eiendeler
          <br />
          nopat = cash flow fra driften - skatt
          <br />
          investert kapital = egenkapital + gjeld - “non operating assets”
          <br />
          non operating assets = cash og omsettelige verdipapirer. Cash er “non
          operating assets” fordi det er definert som kapital som bare ligger
          der til uventede regninger.
          <br />
          roic forteller hvor effektiv ledelsen er til å reinvestere
          fortjenesten i virksomheten, uttrykt i prosent.
          <br />
          En roic som trender nedover over fremtiden kan indikere at selskapet
          går tom for investeringsmuligheter.
          <br />
          Dette kan skje med hvilken som helst bedrift i fremtiden, fordi det
          kan komme en tid der selskapene ikke lenger finner like gunstige
          investeringsmuligheter som tidligere.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          avkastning på investering (roi - return on investment)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          Utregning:
          <br />
          årsresultat / investeringskostnad * 100 (for prosent)
          <br />
          avkastning på investering forteller deg hvor mye du tjener på en
          investering, uttrykt i prosent.
          <br />
          roi kan brukes til å sammenligne og rangere investeringer i
          forskjellige eiendeler.
          <br />
          roi tar ikke hensyn til tidsforløpet, og man kan derfor gå glipp av en
          annen god investering.
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
        <Card.Subtitle style={{ textAlign: "left", marginBottom: "5px" }}>
          avkastning på sysselsatt kapital (roce - return on capital employed)
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          fixed asset turnover
          <br />
          inventory turnover
          <br />
          working capital (kortsiktig eiendeler - kortsiktig gjeld)
          <br />
          financial leverage
          <br />
          debt/equity
          <br />
          <br />
          yield (avkastning)
          <br />
          dividend yield%
          <br />
          earnings yield % (omvendt p/e tar earnings per share / kurs)
          <br />
          gross margin%
          <br />
          operating margin %
          <br />
          net margin%
          <br />
          free float %
          <br />
          free float cap
          <br />
        </Card.Text>
        <Divider style={{ marginBottom: "15px" }} />
      </Card.Body>
    </Card>
  );
}

export default Definitions;
