import LauncherDetails from "../components/LauncherDetails";
import { Launcher } from "../types/launchers.types";

const LauncherDetailsPage = (launcher: Launcher) => {
  return (
    <div>
      <LauncherDetails {...launcher} />
    </div>
  );
};

export default LauncherDetailsPage;
