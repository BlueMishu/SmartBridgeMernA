
import TextUpdater from './components/TextUpdater/TextUpdater';
import FormWithSubmit from './components/FormWithSubmit/FormWithSubmit';
import UserCard from './components/UserCard/UserCard';
import Button from './components/Button/Button';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">1. Text Updater</h2>
          <TextUpdater />
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">2. Form with Submit</h2>
          <FormWithSubmit />
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">3. User Card</h2>
          <UserCard name="John Doe" email="john.doe@example.com" />
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">4. Button Component</h2>
          <Button>Click Me</Button>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">5. Login Form</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

export default App;