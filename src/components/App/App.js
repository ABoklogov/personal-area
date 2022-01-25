import { Routes, Route } from "react-router-dom";
import ContactsView from "../../views/ContactsView";
import LoginView from "../../views/LoginView";
import Error from "../../views/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView redirectTo="/" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
