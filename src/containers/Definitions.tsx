import React from "react";
import { Card } from "react-bootstrap";
import { Divider } from "@material-ui/core";

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
      </Card.Body>
    </Card>
  );
}

export default Definitions;
