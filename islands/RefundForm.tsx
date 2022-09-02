/** @jsx h */
import { h } from "preact";
import NumberInput from "../components/NumberInput.tsx";

export default function RefundForm() {
  return (
    <div>
      <div style="display:flex">
        <textarea
          name="line-1"
          type="text"
          style="border-bottom:1px black solid; margin-right: 150px; flex-grow:1;"
          rows={1}
        ></textarea>
        <span>
          <strong>kr.</strong> <NumberInput name="line-1-amount" />
        </span>
      </div>
      <div style="display:flex">
        <textarea
          name="line-1"
          type="text"
          style="border-bottom:1px black solid; margin-right: 150px; flex-grow:1;"
          rows={1}
          wrap="soft"
        ></textarea>
        <span>
          <strong>kr.</strong> <NumberInput name="line-1-amount" />
        </span>
      </div>
      <div style="display:flex">
        <h3
          style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        display: inline;
        margin-top: 50px;
        margin-right: 150px; flex-grow:1;
      "
        >
          <label for="courseAmount">Refusjon turlederkurs: (-)</label>
        </h3>
        <span class="">
          <strong>kr.</strong> <NumberInput name="courseAmount" />
        </span>
      </div>

      <div style="display:flex">
        <p
          style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        flex-grow: 1;
        margin-top: 50px;
      "
        >
          SUM
        </p>
        <span>
          <strong>kr.</strong>
          <NumberInput name="sum" disabled />
        </span>
      </div>
    </div>
  );
}
