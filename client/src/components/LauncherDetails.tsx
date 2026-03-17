import { ComponentProps } from "../types/launchers.types";

const LauncherDetails = ({ launcher }: ComponentProps) => {
  return (
    <div>
      {Object.entries(launcher).map(([k, v]) => {
        return (
          k == "__v" ||
          k == "_id" || (
            <div key={k}>
              {k}:{v}
            </div>
          )
        );
      })}
    </div>
  );
};

export default LauncherDetails;
