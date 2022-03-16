import React from "react";
import styles from './artist-parallax.module.css';

export default function ArtistParallax() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 882.5) {
      setScrollPosition(882.5);
    } else {
      setScrollPosition(position);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={styles.container}>
    <div className={styles.artists} style={{top: scrollPosition}}>
      <Column offset={-60} parallax={-0.1} scrollPosition={scrollPosition} columnNr="0" />
      <Column offset={-280} parallax={0.3} scrollPosition={scrollPosition} columnNr="1" />
      <Column offset={-50} parallax={-0.5} scrollPosition={scrollPosition} columnNr="2" />
      <Column offset={-650} parallax={0.7} scrollPosition={scrollPosition} columnNr="3" />
      <Column offset={-370} parallax={0.4} scrollPosition={scrollPosition} columnNr="4" />
    </div>
    <div className={styles.title}><p>vilka jävla artister</p></div>
  </div>
}

function Column({offset = 0, parallax = 1, scrollPosition = 0, columnNr}) {
  return <div className={styles.column} style={{marginTop: offset + parallax * scrollPosition}}>
    <ArtistImage columnNr={columnNr} row="0" />
    <ArtistImage columnNr={columnNr} row="1" />
    <ArtistImage columnNr={columnNr} row="2" />
    <ArtistImage columnNr={columnNr} row="3" />
    <ArtistImage columnNr={columnNr} row="4" />
    <ArtistImage columnNr={columnNr} row="5" />
    <ArtistImage columnNr={columnNr} row="6" />
    <ArtistImage columnNr={columnNr} row="7" />
    <ArtistImage columnNr={columnNr} row="8" />
    <ArtistImage columnNr={columnNr} row="9" />
  </div>
}

function ArtistImage({columnNr, row}) {
  return <img className={styles.artist} src={require(`../assets/artists/small2-${columnNr}${row}.jpeg`)} />
}
