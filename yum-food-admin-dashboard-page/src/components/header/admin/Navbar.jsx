import { Link } from "react-router-dom";
import SimplebarReactClient from "../../SimplebarReactClient";
import { LuLogOut, LuUserCircle2, LuZap } from "react-icons/lu";
import { logoDarkImg } from "../../../assets/data";
import { logoLightImg } from "../../../assets/data";
import VerticalMenu from "./VerticalMenu";
import { getAdminVerticalMenuItems } from "@/helpers";

const MenuAdmin = () => {
  return (
    <div
      id="application-sidebar"
      className="hs-overlay fixed inset-y-20 lg:h-[90vh]  max-lg:inset-y-0 max-lg:pt-0 start-0 z-[60] hidden h-full w-64 -translate-x-full transform overflow-y-auto border-e border-default-200 bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-default-50 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0 hide-in-print"
    >
      <div className="sticky max-lg:block hidden top-0 bg-white  h-18 items-center justify-center pt-4 border-b border-dashed border-default-200 px-6">
        <Link to="/home">
          <img
            src={logoDarkImg}
            height={40}
            width={130}
            alt="logo"
            className="flex h-10 dark:hidden"
          />
          <img
            src={logoLightImg}
            height={40}
            width={130}
            alt="logo"
            className="hidden h-10 dark:flex"
          />
        </Link>
      </div>

      <SimplebarReactClient className="-z-10 ">
        <VerticalMenu menuItems={getAdminVerticalMenuItems()} />
      </SimplebarReactClient>

      <ul className="admin-menu flex flex-col gap-2 px-4 pt-10">
        

        <li className="menu-item">
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-default-700 hover:bg-default-100"
            to="/admin/profile"
          >
            <LuUserCircle2 size={20} />
            Profile
          </Link>
        </li>
        <li className="menu-item">
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-red-500 hover:bg-red-400/10 hover:text-red-600"
            to="/auth/logout"
          >
            <LuLogOut size={20} />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuAdmin;
