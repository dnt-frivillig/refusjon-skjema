/** @jsx h */
import { h } from "preact";

export default function NumberInput({
  name,
  disabled,
}: {
  name: string;
  disabled?: boolean;
}) {
  return (
    <input
      disabled={disabled}
      name={name}
      type="number"
      min="1"
      step="1"
      style="border-bottom:1px black solid;"
    />
  );
}
