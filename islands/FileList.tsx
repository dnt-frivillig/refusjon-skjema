import { useState } from "preact/hooks";

export default function FileList() {
  const [files, setFiles] = useState<File[]>([]);
  const renderedFiles = files.map((file) => {
    return (
      <li
        style="padding: 4px;break-after: auto;
      "
      >
        <img src={URL.createObjectURL(file)} alt="" />
      </li>
    );
  });
  return (
    <div>
      <h2>Kvitteringer</h2>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => {
          setFiles([...files, ...(Array.from(e.target.files) as File[])]);
        }}
      />
      <ul>{renderedFiles}</ul>
    </div>
  );
}
