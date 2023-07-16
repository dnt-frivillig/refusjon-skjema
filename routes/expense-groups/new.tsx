import { Nav } from "../../components/Nav.tsx";
import ExpenseNewForm from "../../islands/ExpenseNewForm.tsx";

export default function ExpenseGroupsNew() {
  return (
    <>
      <div class="flex flex-col h-screen justify-center">
        <div class="bg-red-500">header</div>
        <div class="flex-grow">
          <ExpenseNewForm />
        </div>
        <Nav />
      </div>
    </>
  );
}
