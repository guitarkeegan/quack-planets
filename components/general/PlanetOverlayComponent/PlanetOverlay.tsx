import { FC } from "react";
import styles from "./PlanetOverlay.module.css";

interface PlanetOverlayProps {
  radius?: number;
  coreType?: string;
  distanceFromSun?: string;
}

const expo = (x: string, f: number) => {
  if (x === undefined || x === null || x.trim().length === 0) {
    return "Distance Unavailable";
  }
  return Number.parseFloat(x).toExponential(f);
};
const PlanetOverlay: FC<PlanetOverlayProps> = ({
  radius,
  coreType,
  distanceFromSun,
}) => {
  return (
    <div id={styles["stack-top"]}>
      <div id={styles["container"]}>
        <div id={styles["overlay-box"]}>
          <div className={styles["overlay-1"]}>
            <div className={styles["line-1"]}></div>
            <p className="text-white text-2xl">
              {radius?.toString() || "No data retrieved"}
              <span>km</span>
            </p>
          </div>

          <div className={styles["overlay-2"]}>
            <div className={styles["line-2"]}></div>
            <p className="text-white text-2xl">
              {coreType || "No data retrieved"}
            </p>
          </div>

          <div className={styles["overlay-3"]}>
            <p className="text-white text-xl">
              <span>Distance From sun </span>
              <br />
              {expo(distanceFromSun as string, 2).toString() ??
                "Data unavailable"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetOverlay;
