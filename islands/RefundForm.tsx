/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import NumberInput from "../components/NumberInput.tsx";

export default function RefundForm() {
  const [lines, setLines] = useState([
    { description: "", value: undefined },
    { description: "", value: undefined },
    { description: "", value: undefined },
  ]);
  const courseLine = lines[0];
  const lineElements = lines.slice(1).map((line, index) => {
    const { description, value } = line;
    return (
      <div style="display:flex">
        <textarea
          name="line-1"
          type="text"
          style="border-bottom:1px black solid; margin-right: 150px; flex-grow:1;"
          rows={1}
          value={description}
          onChange={(e) => {
            line.description = e.target.value;
            setLines(lines);
          }}
        ></textarea>
        <span>
          <strong>kr.</strong>
          <NumberInput
            name="line-1-amount"
            value={value}
            onChange={(e) => {
              line.value = Number(e.target?.value);
              setLines([...lines]);
            }}
          />
        </span>
      </div>
    );
  });
  const sum = lines
    .filter(({ value }) => !!value)
    .map(({ value }) => value)
    .reduce((acc, value) => acc + value, 0);
  console.log(sum);
  return (
    <div>
      {lineElements}
      <div style="display:flex; margin-top: 50px;">
        <h3
          style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        display: inline;
        
        margin-right: 150px; flex-grow:1;
      "
        >
          <label for="courseAmount">Refusjon turlederkurs: (-)</label>
        </h3>
        <span class="">
          <strong>kr.</strong>{" "}
          <NumberInput
            name="courseAmount"
            value={courseLine?.value}
            onChange={(e) => {
              courseLine.value = Number(e.target?.value);
              setLines([...lines]);
            }}
          />
        </span>
      </div>

      <div style="display:flex; margin-top: 50px;">
        <p
          style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
        flex-grow: 1;
        
      "
        >
          SUM
        </p>
        <span>
          <strong>kr.</strong>
          <NumberInput name="sum" disabled value={sum} />
        </span>
      </div>
    </div>
  );
}
