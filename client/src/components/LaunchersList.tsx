import { useEffect } from "react";
import { useLaunchers } from "../stores/launchers.store";
import type { LaunchersState, Launcher } from "../types/launchers.types";
import { Navigate } from "react-router-dom";

const LaunchersList = () => {
  const launchers = useLaunchers((state: LaunchersState) => state.launchers);
  const fetchLaunchers = useLaunchers(
    (state: LaunchersState) => state.fetchLaunchers,
  );

  useEffect(() => {
    fetchLaunchers();
  }, []);

  return (
    <div>
        Launchers List
      <ul>
        {launchers.map((l: Launcher) => (
          <li key={l._id} onClick={()=>{}}>{Object.values(l).map(v => <div key={v}>{v}</div>)}</li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchersList;
