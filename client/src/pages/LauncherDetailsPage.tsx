import { useParams } from "react-router-dom";
import LauncherDetails from "../components/LauncherDetails";
import { useLaunchers } from "../stores/launchers.store";

const LauncherDetailsPage = () => {
  const getById = useLaunchers((state) => state.getById);
  const {id} = useParams()
  if (!id) {
    return null
  }
  const launcher = getById(id)
  if (!launcher) {
    return null
  }
  return (
    <div>
      <LauncherDetails launcher={launcher} />
    </div>
  );
};

export default LauncherDetailsPage;
