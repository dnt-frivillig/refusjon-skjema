/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import RefundForm from "../islands/RefundForm.tsx";
import SignatureCanvas from "../islands/SignatureCanvas.tsx";
import FileList from "../islands/FileList.tsx";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <div class={tw`p-0 mx-auto max-w-screen-md`}>
      <div style="display: flex; margin-bottom:10px;">
        <h1
          style="
          padding-top:30pt;
          padding-bottom:-30pt;
        padding-left: 5pt;
        padding-right: 10pt;
        display:inline-block;
      "
        >
          REFUSJON UTLEGG: Turledere/Tillitsvalgte
        </h1>
        <Logo style="display:inline; flex-grow:1" width="228" />
      </div>

      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>
      <div
        style="
        display: flex;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        width: 100%;
      "
      >
        <div style="flex-grow: 1; display: flex">
          <label for="name">NAVN:</label>
          <input
            id="name"
            name="name"
            type="text"
            style="border-bottom:1px black solid; flex-grow:1"
          />
        </div>
        <div>
          <label for="tripNumber">Ledet tur nr:</label>
          <input
            name="tripNumber"
            id="tripNumber"
            type="text"
            style="border-bottom:1px black solid; width: 40pt"
          />
        </div>
        <div>
          <label for="depatureDate">Avg. Dato:</label>
          <input
            name="depatureDate"
            id="depatureDate"
            type="date"
            style="border-bottom:1px black solid;"
          />
        </div>
      </div>

      <p
        style="
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        display: flex;
      "
      >
        <label for="address">Adresse:</label>
        <input
          name="address"
          id="address"
          type="text"
          style="border-bottom:1px black solid; flex-grow: 1"
        />
      </p>
      <p
        style="
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        display: flex;
      "
      >
        <label for="accountNumber">Konto nr.</label>
        <input
          name="accountNumber"
          id="accountNumber"
          type="text"
          style="border-bottom:1px black solid; flex-grow:1"
        />
        <label for="purpose">Annet formål enn tur:</label>

        <input
          name="purpose"
          id="purpose"
          type="text"
          style="border-bottom:1px black solid; flex-grow:1"
        />
      </p>
      <h4
        style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        display: flex;
      "
      >
        <label for="overseasAccountNumbers">
          Iban og swift for utlands konto:
        </label>

        <input
          name="overseasAccountNumbers"
          id="overseasAccountNumbers"
          type="text"
          style="border-bottom:1px black solid; flex-grow:1"
        />
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
        display: flex;
      "
      >
        <label for="email">Epost:</label>
        <input
          name="email"
          id="email"
          type="text"
          style="border-bottom:1px black solid; flex-grow:1"
        />
        <span class="s3"> </span>
        <label for="dntContact">Kontaktperson i DNT:</label>
        <input
          name="dntContact"
          id="dntContact"
          type="text"
          style="border-bottom:1px black solid; flex-grow:1"
        />
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
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
      >
        Diverse utgifter ifølge bilag:
      </h3>
      <RefundForm />

      <div
        style="
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        margin-top: 20px;
        display: flex;

      "
      >
        <div style="flex-grow: 1; ">
          <label for="placeDate">Sted/dato:</label>
          <input
            name="placeDate"
            id="placeDate"
            type="date"
            style="display: block;"
          />
        </div>
        <div style="flex-grow: 1; padding-left:100px;">
          <p>Underskrift av turleder:</p>
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              style: `width:100%; height:100px;background: repeating-linear-gradient(
                45deg,
                #eeeeee,
                #eeeeee 10px,
                #ffffff 10px,
                #ffffff 20px
              );`,
              className: "sigCanvas",
            }}
          />
        </div>
      </div>
      <p style="text-indent: 0pt; text-align: left">
        <br />
      </p>

      <p
        class="s4"
        style="padding-left: 5pt; text-indent: 0pt; text-align: left; break-after: page;"
      >
        DNT Oslo og Omegn, Storgata 3, pb. 7 Sentrum, 0101 Oslo. Org.nr: mva.
        940698332 NO.
        <a href="https://www.dntoslo.no" class="a" target="_blank">
          www.dntoslo.no
        </a>
      </p>
      <FileList />
    </div>
  );
}
