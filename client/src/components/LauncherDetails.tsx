import { useParams } from "react-router-dom";
import { useLaunchers } from "../stores/launchers.store";
import { Launcher } from "../types/launchers.types";

const LauncherDetails = (launcher: Launcher) => {
  const getById = useLaunchers((state)=> state.getById)
  const launcherId = useParams()
  const launcher = getById(launcherId)
  return (
    <div>
      {Object.entries(launcher).map(([k, v]) => {
        return (
          k == "__v" ||
          k == "_id" || (
            <div>
              {k}:{v}
            </div>
          )
        );
      })}
    </div>
  );
};

export default LauncherDetails;
