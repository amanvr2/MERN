import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./place/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./place/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:userId" element={<UserPlaces />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
