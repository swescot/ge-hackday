import React from "react";
import styles from './artist-parallax.module.css';

export default function ArtistParallax() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [rawScrollPosition, setRawScrollPosition] = React.useState(0);
  const stopScroll = 2720;
  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position < window.innerHeight) {
      setScrollPosition(0)
    } else if (position > stopScroll) {
      setScrollPosition(stopScroll - window.innerHeight);
    } else {
      setScrollPosition(position - window.innerHeight);
    }

    setRawScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={styles.container}>
    <div className={styles.flexContainer} style={{top: scrollPosition}}>
      <div className={styles.artists}>
        <Column offset={-60} parallax={-0.1} scrollPosition={rawScrollPosition} columnNr="0" />
        <Column offset={-880} parallax={0.3} scrollPosition={rawScrollPosition} columnNr="1" />
        <Column offset={-50} parallax={-0.5} scrollPosition={rawScrollPosition} columnNr="2" />
        <Column offset={-2150} parallax={0.7} scrollPosition={rawScrollPosition} columnNr="3" />
        <Column offset={-1870} parallax={0.4} scrollPosition={rawScrollPosition} columnNr="4" />
        <div className={styles.overlay}></div>
      </div>
    </div>
    <USP index={0} rawScrollPosition={rawScrollPosition} text="Build the Soundtrack to Your Brand." />
    <USP index={1} rawScrollPosition={rawScrollPosition} text="The world's largest business music catalogue." />
    <USP index={2} rawScrollPosition={rawScrollPosition} text="Fair pay for every play." />
    <USP index={3} rawScrollPosition={rawScrollPosition} text="The perfect ready-made playlists to match your brand." />
    <USP index={4} rawScrollPosition={rawScrollPosition} text="Get started. Today." />
  </div>
}

function USP({rawScrollPosition, text = '', index = 0}) {
  const offset = 633 + index * 400;
  const offsetScroll = rawScrollPosition;
  const start = 900 + 400 * index;
  const margin = 400;
  let opacity = 0;
  if (offsetScroll > start - margin && offsetScroll < start + margin) {
    opacity = 1 - Math.abs(1 - Math.abs((start + margin) - offsetScroll)/margin)
  }
  console.log({offsetScroll})
  return <div className={styles.title} style={{top: window.innerHeight + offset - offsetScroll - 100, opacity}}>
    <p children={text} />
  </div>
}

function Column({offset = 0, parallax = 1, scrollPosition = 0, columnNr}) {
  return <div className={styles.column} style={{marginTop: offset + parallax * scrollPosition}}>
    <ArtistImage columnNr={columnNr} row="01" />
    <ArtistImage columnNr={columnNr} row="02" />
    <ArtistImage columnNr={columnNr} row="03" />
    <ArtistImage columnNr={columnNr} row="04" />
    <ArtistImage columnNr={columnNr} row="05" />
    <ArtistImage columnNr={columnNr} row="06" />
    <ArtistImage columnNr={columnNr} row="07" />
    <ArtistImage columnNr={columnNr} row="08" />
    <ArtistImage columnNr={columnNr} row="09" />
    <ArtistImage columnNr={columnNr} row="10" />
    <ArtistImage columnNr={columnNr} row="11" />
    <ArtistImage columnNr={columnNr} row="12" />
    <ArtistImage columnNr={columnNr} row="13" />
  </div>
}

function ArtistImage({columnNr, row}) {
  return <img className={styles.artist} src={require(`../assets/artists/${columnNr}${row}.jpeg`)} />
}
