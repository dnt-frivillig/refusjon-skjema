export default function NumberInput({
  name,
  disabled,
  value,
  onChange,
}: {
  name: string;
  disabled?: boolean;
  value?: number;
  onChange?: h.JSX.GenericEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      name={name}
      type="number"
      min="1"
      step="1"
      style="border-bottom:1px black solid;"
    />
  );
}
