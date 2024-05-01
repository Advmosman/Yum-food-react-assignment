import { AppProvidersWrapper } from "./components";
import { configureFakeBackend } from "@/components/common";
import "@/assets/css/style.css";
import TopbarAdmin from "./components/header/admin/TopbarAdmin";
import MenuAdmin from "./components/header/admin/Navbar";
import Dashboard from "./components/dashboard/page";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <div className="h-screen w-screen ">
        <TopbarAdmin />
        <div className="flex">
          <MenuAdmin />
          <div className="flex-grow">
          <Dashboard />
          </div>
        </div>
      </div>
    </AppProvidersWrapper>
  );
};

export default App;
