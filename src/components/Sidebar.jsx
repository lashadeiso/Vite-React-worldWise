import Logo from "../components/Logo";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
