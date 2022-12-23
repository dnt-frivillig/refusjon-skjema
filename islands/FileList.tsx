import { useState } from "preact/hooks";

function checkText(file: File) {
  Tesseract.recognize(file, "nor", { logger: (m) => console.log(m) }).then(
    (result) => {
      console.log(result);
      const {
        data: { text },
      } = result;
      console.log(text);
    }
  );
}

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
          checkText(e.target.files[0]);
          setFiles([...files, ...(Array.from(e.target.files) as File[])]);
        }}
      />
      <ul>{renderedFiles}</ul>
    </div>
  );
}
