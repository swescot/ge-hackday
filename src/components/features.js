import React from 'react'
import styles from './features.module.css'
import cn from 'classnames'

const IMAGES = {
  control: require('../assets/player/Control.png'),
  customStation: require('../assets/player/customstations.png'),
  explicit: require('../assets/player/explicit.png'),
  players: require('../assets/player/players.png'),
  readyMade: require('../assets/player/Ready-made.png'),
  scheduling1: require('../assets/player/Scheduling-1.png'),
  scheduling: require('../assets/player/Scheduling.png'),
  spotify: require('../assets/player/Spotify-import.png')
}

export default function Features() {
  const [currentArticle, setCurrentArticle] = React.useState('')
  const [imageSrc, setImageSrc] = React.useState('players')

  return <section className={styles.container}>
    <h1 className={styles.mainTitle}>Features overview</h1>
    <div className={styles.content}>
      <div className={styles.features}>
        {FEATURES.map((feature, i) => {
        return <div key={i} className={styles.feature}>
          <h2>{feature.title}</h2>
          {feature.details.map((detail, l) => {
            return <Accordion key={l} detail={detail} currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} setImageSrc={setImageSrc} />
          })}
        </div>
      })}
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={IMAGES[imageSrc]}/>
      </div>
    </div>

  </section>
}

function Accordion({ detail, currentArticle, setCurrentArticle, setImageSrc }) {
  const open = currentArticle === detail.title
  return <div className={styles.accordionContainer}>
    <div
      onClick={() => {
        setImageSrc(detail.image)
        setCurrentArticle(() => open ? '' : detail.title)
      }}
      className={cn(styles.accordionTitle, open && styles.selected)}>
      <span>{detail.title}</span>
      <div className={styles.icon}>{open ? '-' : '+'}</div>
    </div>
    {open && <div className={styles.article}>{detail.article}</div>}
  </div>
}


const FEATURES = [
  { title: "",
    details: [
      {
        title: "Your Brand is all we need.",
        article: "Describe your brand and our industry awarded Create Station feature finds the perfect soundtrack for it.",
        image: "customStation"
      },
      {
        title: "You’re the DJ.",
        article: "Soundtrack is the only business music service that let you choose exactly the song you want in the order you want it by for instance importing a spotify playlist.",
        image: "spotify"
      },
      {
        title: "Save time with automation.",
        article: "Soundtrack your week up front with our world-renowed scheduling tool.",
        image: "scheduling1"
      },
      {
        title: "Match the beat of your customers.",
        article: "Customise your morning, lunch, evening and night sound with our world-renowed scheduling tool.",
        image: "scheduling"
      },
      {
        title: "Family friendly music",
        article: "Block explicit language with the click of a button.",
        image: "explicit"
      },
      {
        title: "The right sound always.",
        article: "Create roles for your staff to decide who controls your sound.",
        image: "control"
      },
      {
        title: "No worry about what to play.",
        article: "Our expertise is your expertise.  Our music experts have created perfect business mixes to fit your brand.",
        image: "readyMade"
      }
    ]
  }
]