import styles from "./style.module.css";

export default function Track({ trackData }) {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={trackData.album.images[0].url}></img>
      <p>{trackData.album.name}</p>
      <p>{trackData.album.artists[0].name}</p>
      <button type="button">select</button>
    </div>
  );
}
