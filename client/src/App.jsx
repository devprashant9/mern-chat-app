import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => {
  return import("./pages/Home");
}); // loads only <Home /> at "/" route

const Login = lazy(() => {
  return import("./pages/Login");
});

const Chat = lazy(() => {
  return import("./pages/Chat");
});

const Group = lazy(() => {
  return import("./pages/Group");
});

const NotFound = lazy(() => {
  return import("./pages/NotFound");
});

let user = false;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading Data</h1>}>
        <Routes>
          <Route element={<ProtectRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
