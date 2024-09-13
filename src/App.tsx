import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />

      <main className="relative">
        <Form />
      </main>
    </>
  );
}

export default App;
