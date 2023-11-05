import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";

function AppLayout() {
  return (
    <ProtectedRoute>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
}

export default AppLayout;
