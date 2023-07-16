import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>
      <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
        <div class="w-full max-w-md mx-auto">
          <div class="px-7 bg-white shadow-lg rounded-2xl">
            <div class="flex">
              <div class="flex-1 group">
                <a
                  href="#"
                  class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span class="block px-1 pt-1 pb-1">
                    <i class="far fa-list text-2xl pt-1 mb-1 block"></i>
                    <span class="block text-xs pb-2">List</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>
              <div class="flex-1 group">
                <a
                  href="#"
                  class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span class="block px-1 pt-1 pb-1">
                    <i class="far fa-plus text-2xl pt-1 mb-1 block"></i>
                    <span class="block text-xs pb-2">New</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>

              <div class="flex-1 group">
                <a
                  href="#"
                  class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span class="block px-1 pt-1 pb-1">
                    <i class="far fa-info text-2xl pt-1 mb-1 block"></i>
                    <span class="block text-xs pb-2">About</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
