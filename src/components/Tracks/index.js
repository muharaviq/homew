import Track from "../Track";
import style from "./style.module.css";

export default function Tracks({ tracks }) {
  return (
    <div className={style.container}>
      {tracks.map((track, index) => (
        <Track key={index} trackData={track} />
      ))}
    </div>
  );
}
