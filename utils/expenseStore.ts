import { nanoid } from "nanoid";

type ExpenseGroup = {
  id: string;
  name: string;
  startOn: string;
  endOn: string;
};
export class ExpenseStore {
  #expenseGroups: ExpenseGroup[] = [];

  constructor(private readonly key: string = "expenseStoreV1") {
    const data = localStorage.getItem(this.key);
    if (data) {
      const expenseGroups = JSON.parse(data);
      this.#expenseGroups = expenseGroups;
    }
  }

  list() {
    return this.#expenseGroups.slice(0);
  }
  add(group: Omit<ExpenseGroup, "id">) {
    const data = { ...group, id: nanoid() };
    this.#expenseGroups.unshift(data);
    // Sort them by the most recent one.
    this.#expenseGroups = this.#expenseGroups.sort((a, b) => {
      return new Date(a.startOn).valueOf() - new Date(b.startOn).valueOf();
    });
    localStorage.setItem(this.key, JSON.stringify(this.#expenseGroups));
    return data.id;
  }
}

export const expenseStore = new ExpenseStore();
