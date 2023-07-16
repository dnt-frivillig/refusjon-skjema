import { expenseStore } from "../utils/expenseStore.ts";

export default function ExpenseList() {
  const expenses = expenseStore.list();
  return (
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
      {expenses.map((expense) => {
        return (
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {expense.name}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {expense.startOn} to {expense.endOn}
                </p>
              </div>
              <a
                href={`/expense-groups/${expense.name}`}
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                view
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
