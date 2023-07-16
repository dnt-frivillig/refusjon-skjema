import { Nav } from "../components/Nav.tsx";

export default function Home() {
  return (
    <>
      <div class="flex flex-col h-screen justify-center">
        <div class="bg-red-500">header</div>
        <div class="bg-green-500 flex-grow">content</div>
        <Nav />
      </div>
    </>
  );
}
