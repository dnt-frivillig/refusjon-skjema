/** @jsx h */
import { h } from "preact";

export default function NumberInput({ name }: { name: string }) {
  return (
    <input
      name={name}
      type="number"
      min="1"
      step="1"
      style="border-bottom:1px black solid;"
    />
  );
}
