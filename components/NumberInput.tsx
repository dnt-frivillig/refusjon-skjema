/** @jsx h */
import { h } from "preact";

export default function NumberInput() {
  return (
    <input
      type="number"
      min="1"
      step="1"
      style="border-bottom:1px black solid;"
    />
  );
}
