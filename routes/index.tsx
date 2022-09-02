/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import NumberInput from "../components/NumberInput.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <span>
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <h1
                  style="
        padding-top: 20pt;
        padding-left: 5pt;
        padding-right: 10pt;
      "
                >
                  REFUSJON UTLEGG: Turledere/Tillitsvalgte
                </h1>
              </td>
              <td>
                <img
                  width="228"
                  height="55"
                  src="data:image/jpg;base64,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"
                />
              </td>
            </tr>
          </table>
        </span>
      </p>

      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        NAVN:
        <input type="text" style="border-bottom:1px black solid;" />
        Ledet tur nr:
        <input type="text" style="border-bottom:1px black solid;" />
        Avg. Dato:
        <input type="text" style="border-bottom:1px black solid;" />
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Adresse:
        <input type="text" style="border-bottom:1px black solid;" />
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Konto nr.
        <input type="text" style="border-bottom:1px black solid;" />
        Annet formål enn tur:
        <input type="text" style="border-bottom:1px black solid;" />
      </p>
      <h4
        style="
        padding-top: 11pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Iban og swift for utlands konto:
        <input type="text" style="border-bottom:1px black solid;" />
      </h4>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Epost: <input type="text" style="border-bottom:1px black solid;" />
        <span class="s3"> </span>Kontaktperson i DNT:
        <input type="text" style="border-bottom:1px black solid;" />
      </p>
      <h2
        style="
        padding-top: 11pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Original kvittering skal legges ved. Utlegg uten kvittering, refunderes
        ikke.
      </h2>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <h3
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Diverse utgifter ifølge bilag:
      </h3>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <input type="text" style="border-bottom:1px black solid;" />
      <p style="padding-top: 4pt; text-indent: 0pt; text-align: right">
        kr. <NumberInput />
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>

      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <h3
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Refusjon turlederkurs: (-)<span class="p"> kr. </span>
        <NumberInput />
      </h3>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        SUM kr. <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u>
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <p
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Sted/dato: Underskrift av turleder:
      </p>
      <p style="text-indent: 0pt; text-align: left">
        <input type="text" style="border-bottom:1px black solid;" />
        <br />
      </p>
      <p style="text-indent: 0pt; text-align: left">
        Canvas goes here
        <br />
      </p>
      <p
        class="s4"
        style="padding-left: 5pt; text-indent: 0pt; text-align: left"
      >
        <a href="http://www/" class="a" target="_blank">
          DNT Oslo og Omegn, Storgata 3, pb. 7 Sentrum, 0101 Oslo. Org.nr: mva.
          940698332 NO.{" "}
        </a>
        www. dntoslo.no
      </p>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
