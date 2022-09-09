export default function DenoEditor() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.js" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.min.css"
        integrity="sha512-5m1IeUDKtuFGvfgz32VVD0Jd/ySGX7xdLxhqemTmThxHdgqlgPdupWoSN8ThtUSLpAGBvA8DY2oO7jJCrGdxoA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <trix-editor />
    </div>
  );
}
