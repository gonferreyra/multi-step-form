import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="mx-auto h-screen flex-row lg:flex lg:h-[580px] lg:w-[820px] lg:gap-20 lg:rounded-xl lg:bg-alabaster lg:p-4">
      <Sidebar />

      <main className="relative min-h-[calc(100vh-200px)] lg:min-h-0">
        <Form />
      </main>
    </div>
  );
}

export default App;
