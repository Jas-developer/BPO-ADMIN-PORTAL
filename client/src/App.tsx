import HomePage from "./pages/homePage";

export default function App() {
  const STATUS: boolean = true;
  if (STATUS == true) {
    return (
      <div className="bg-gray-300">
        <HomePage />
      </div>
    );
  }
  // if not login
  return <h2>You need to login</h2>;
}
