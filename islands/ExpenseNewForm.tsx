import { JSX } from "preact/jsx-runtime";
import { z } from "zod";
import { expenseStore } from "../utils/expenseStore.ts";

const inputSchema = z.object({
  name: z.string().min(1),
  startOn: z.coerce
    .date()
    .transform((date) => date.toISOString().split("T")[0]),
  endOn: z.coerce.date().transform((date) => date.toISOString().split("T")[0]),
});

export default function ExpenseNewForm() {
  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target as HTMLFormElement);
    const data: Record<string, unknown> = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    const expenseGroup = inputSchema.parse(data);
    const id = expenseStore.add(expenseGroup);
    console.log(expenseStore.list());
    location.replace(`/expense-groups/${id}`);
  };
  return (
    <form onSubmit={onSubmit}>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Create Expense Group
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Make a new expense group to allocate expenses to.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Trip to London"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="start-date"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <div class="mt-2">
                    <input
                      required
                      type="date"
                      name="startOn"
                      id="start-date"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="end-date"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Date
                  </label>
                  <div class="mt-2">
                    <input
                      required
                      type="date"
                      name="endOn"
                      id="end-date"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
  );
}