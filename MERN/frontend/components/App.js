import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
