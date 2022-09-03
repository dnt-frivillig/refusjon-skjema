/** @jsx h */
import { h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

const css = `
* {
    margin: 0;
    padding: 0;
    text-indent: 0;
  }
  h1 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 15.5pt;
  }
  .p,
  p, label {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 11.5pt;
    margin: 0pt;
  }
  .s1 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: underline;
    font-size: 11.5pt;
  }
  h4 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 11pt;
  }
  .s3 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 11.5pt;
  }
  h2 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: italic;
    font-weight: bold;
    text-decoration: underline;
    font-size: 14pt;
  }
  h3 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: underline;
    font-size: 11.5pt;
  }
  .s4 {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 8.5pt;
  }
  .a {
    color: black;
    font-family: "Times New Roman", serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 8.5pt;
  }
  @media print {
    input[type=file] {
      display:none;
    }
    input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
      input {
          -moz-appearance: textfield;
      }
  }
`;
export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Utlegg Turledere</title>
        <meta name="author" content="Max Brosnahan" />
        <style type="text/css">{css}</style>
        <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
      </Head>
      <body class="bodyClass">
        <Component />
      </body>
    </html>
  );
}
