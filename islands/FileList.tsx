import { useState } from "preact/hooks";
import detectAmount from "../utils/detectAmount.tsx";

const detectionEnabled = window.location?.search?.includes(
  "detect-amount=enabled"
);
let cachedWorker;
async function loadTesseract() {
  const result = await import(
    "https://unpkg.com/tesseract.js@4.0.1/dist/tesseract.esm.min.js"
  );
  return result.default;
}

async function setupWorker() {
  if (cachedWorker) {
    return cachedWorker;
  }
  const { createWorker } = await loadTesseract();
  const worker = await createWorker({ logger: (m) => console.log(m) });
  await worker.loadLanguage("nor");
  await worker.initialize("nor");
  cachedWorker = worker;
  return worker;
}

if (detectionEnabled) {
  setupWorker()
    .then(() => console.log("worker setup"))
    .catch((error) => {
      console.error("failed to setup worker", error);
    });
}

async function detectReceiptAmount(file: File): Promise<number | void> {
  const worker = await setupWorker();
  const result = await worker.recognize(file, "nor");
  console.log(result);
  const {
    data: { text },
  } = result;
  console.log(text);
  const amount = detectAmount(text);
  return amount;
}

function checkText(file: File) {
  detectReceiptAmount(file)
    .then((amount) => {
      if (amount != null) {
        alert(`Detected amount: ${amount.toLocaleString()}`);
      }
    })
    .catch((error) => {
      console.log("Failed to load tesseract", error);
    });
}

export default function FileList() {
  const [files, setFiles] = useState<File[]>([]);

  const renderedFiles = files.map((file) => {
    return (
      <li
        style="padding: 4px;page-break-inside: avoid;"
        className="min-h-screen max-h-screen"
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
          if (detectionEnabled) {
            checkText(e.target.files[0]);
          }
          setFiles([...files, ...(Array.from(e.target.files) as File[])]);
        }}
      />
      <ul className="grid grid-cols-2 gap-4">{renderedFiles}</ul>
    </div>
  );
}
