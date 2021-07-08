import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  Drawer,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import HelpIcon from "@material-ui/icons/Help";

// interface DefinitionsAccordionProps {

// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    list: {
      width: 500,
    },
    fullList: {
      width: "auto",
    },
  })
);

type Anchor = "right" | "left" | "top" | "bottom";

export const DefinitionsAccordion: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };
  const accordion = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      //onClick={toggleDrawer(false)}
      //onKeyDown={toggleDrawer(false)}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            p/e (price / earnings)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            lav p/e kan indikere at selskapet er underpriset eller at markedet
            har mindre tro på at selskapets årsresultat skal vokse fremover. en
            høy p/e kan indikere at selskapet er overpriset eller at markedet
            har mer tro på at selskapets årsresultat skal vokse fremover.
            forholdet bør sammenlignes med selskaper innenfor samme sektor,
            fordi sektorer har forskjellige gjennomsnittlige verdier på hva som
            kan indikere en underpriset / overpriset aksje. To utregningsmåter:
            markedsverdi / årsresultat aksjekurs / årsresultat per aksje (eps)
            eps: årsresultat / utestående aksjer p/e forteller deg hvor mye du
            betaler per resultat krone selskapet genererer. p/e på 5x forteller
            deg at for hver krone av resultat, betaler investorene 5 kroner. en
            lav p/e kan indikere at selskapet er underpriset eller at markedet
            har mindre tro på at selskapets årsresultat skal vokse fremover. en
            høy p/e kan indikere at selskapet er overpriset eller at markedet
            har mer tro på at selskapets årsresultat skal vokse fremover.
            forholdet bør sammenlignes med selskaper innenfor samme sektor,
            fordi sektorer har forskjellige gjennomsnittlige verdier på hva som
            kan indikere en underpriset / overpriset aksje.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            p/b (price / book value)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To utregningsmåter: markedsverdi / bokførte verdier aksjekurs /
            bokførte verdier per aksje (bvps) bokførte verdier (egenkapital) =
            eiendeler - gjeld bvps = bokførte verdier / utestående aksjer p/b
            forteller investorene hvor mye de betaler for selskapets egenkapital
            basert på historiske verdivurderinger. når p/b er 1x, forteller det
            deg at markedsverdien utgjør like mye som bokførte verdier.
            forholdet bør sammenlignes med selskaper innenfor samme sektor,
            fordi sektorer har forskjellige gjennomsnittlige verdier på hva som
            kan indikere en underpriset / overpriset aksje.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            p/s (price / sales)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            p/cf (price / cash flow)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og
            gikk ut av kjernevirksomheten til selskapet.
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
            p/cf forteller deg forholdet mellom markedsverdien og
            kontantstrømmen fra driften til et selskap. Jo mindre dette
            forholdet er, jo bedre antas investeringen som å være. forholdet bør
            sammenlignes med selskaper innenfor samme sektor, fordi sektorer har
            forskjellige gjennomsnittlige verdier på hva som kan indikere en
            underpriset / overpriset aksje.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            p/s (price / sales)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            kontantstrøm = nøyaktig mål på hvor mye kontanter som kom inn og
            gikk ut av kjernevirksomheten til selskapet.
            <br />
            gratis kontantstrøm = kontantstrøm fra driften - CAPEX
            (kapitalutgifter / capital expenditure)
            <br />
            CAPEX = penger brukt av et selskap for å vedlikeholde / oppgradere
            anleggsmidler (langsiktige eiendeler) som bygninger, maskiner og
            utstyr. Det er altså pengene som blir brukt for å bli i virksomhet.
            Du finner CAPEX på kontantstrøm regnskapet innenfor kontantstrøm fra
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
              billigere enn intrinsic value, da får vi mer verdi ut fra
              selskapet.
            </footer>
            <br />
            p/fcf forteller deg forholdet mellom markedsverdien og gratis
            kontantstrømmen fra driften til et selskap.
            <br />
            Jo mindre dette forholdet er, jo bedre antas investeringen som å
            være. forholdet bør sammenlignes med selskaper innenfor samme
            sektor, fordi sektorer har forskjellige gjennomsnittlige verdier på
            hva som kan indikere en underpriset / overpriset aksje.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            fcf / salg (free cash flow / sales)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utregning:
            <br />
            gratis kontantstrøm / salg * 100 (for prosent)
            <br />
            fcf / salg måler hvor mye et selskap tjener etter kapitalutgiftene
            (CAPEX), uttrykt i prosent.
            <br />
            Et høyere fcf / sales forhold indikerer en bedre evne til å
            konvertere salg til kontanter. forholdet bør sammenlignes med
            selskaper innenfor samme sektor, fordi sektorer har forskjellige
            gjennomsnittlige verdier på hva som kan indikere en underpriset /
            overpriset aksje.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            ev (enterprise value):
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utregning:
            <br />
            markedsverdi + gjeld - kontanter og kontantekvivalenter
            <br />
            mange anser forholdet for å være en mer nøyaktig fremstilling av
            selskaps totale verdi fordi det inkluderer gjeld i verdiberegning.
            <br />
            kan tenkes på som den totale prisen hvis selskapet skulle blitt
            kjøpt opp, fordi verdien av gjeld må betales av den som kjøper
            selskapet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            ev / salg (enterprise value / sales)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            En lavere ev/ salg multippel kan indikere en mer attraktiv
            investering der selskapet kan være undervurdert.
            <br />
            En høy ev / salg multippel kan være et positivt tegn på at
            investorene tror salget kommer til å øke kraftig i fremtiden.
            <br />
            forholdet bør sammenlignes med selskaper innenfor samme sektor,
            fordi sektorer har forskjellige gjennomsnittlige verdier på hva som
            kan indikere en underpriset / overpriset aksje.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            ev / ebit (enterprise value / earnings before interest and taxes)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utregning:
            <br />
            enterprise value / ebit
            <br />
            enterprise value = markedsverdi + gjeld - kontanter og
            kontantekvivalenter
            <br />
            ebit (driftsresultat) = årsresultat + renter + skatter
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            ev/ ebitda (enterprise value / earnings before tax interest
            depreciation and amortization)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <HelpIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {accordion("right")}
      </Drawer>
    </div>
  );
};
