import React from 'react'
import styles from './features.module.css'
import cn from 'classnames'

export default function Features() {
  const [imageId, setImageId] = React.useState(0)

  return <section className={styles.container}>
    <h1 className={styles.mainTitle}>Features overview</h1>
    <div className={styles.content}>
      <div className={styles.features}>
        {FEATURES.map((feature, i) => {
        return <div key={i} className={styles.feature}>
          <h2>{feature.title}</h2>
          {feature.details.map((detail, l) => {
            return <Accordion key={l} detail={detail} onCLick={setImageId} />
          })}
        </div>
      })}
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="https://www.datocms-assets.com/57355/1645716256-iphone-how-it-works-2x.png?auto=format&w=876"/>
      </div>
    </div>

  </section>
}

function Accordion({ detail, onCLick }) {
  const [open, setOpen] = React.useState(false)

  return <div>
    <div
      onClick={() => setOpen(open => !open)}
      className={cn(styles.accordionTitle, open && styles.selected)}>
      <span>{detail.title}</span>
      <div className={styles.icon}>{open ? '-' : '+'}</div>
    </div>
    {open && <div className={styles.article}>{detail.article}</div>}
  </div>
}


const FEATURES = [
  {
    title: "Playlists you create",
    details: [
      {
        title: "Create Playlist from scratch",
        article: "Search for the name of an artist or a particular song, just like you're used to. Add it to a new or existing playlist, and you can keep the momentum going by adding similar tracks from a list of updated recommendations from our catalog."
      },
      {
        title: "Edit a Soundtrack playlist",
        article: "Start with a playlist made by our experts and add, remove, or reorder songs to make it your own. In just a couple of minutes, you can have a custom playlist with dozens of hours of music."
      },
      {
        title: "Make your Spotify playlists legal",
        article: "Drag in any Spotify playlist and make it legal for your business. It’s that easy, with the same songs in our catalog playing in the same order. You can also create a station from a Spotify playlist with hours of similar music."
      }
    ]
  },
  {
    title: "Instant music",
    details: [
      {
        title: "560+ Soundtrack playlists",
        article: "Each expertly curated playlist is designed for a particular business type, situation, or music genre, and contains an ideal balance of hits and lesser-known songs."
      },
      {
        title: "Artist playlists",
        article: "It doesn't get easier than this. Type in a name and get a playlist with songs by that artist and others who make similar music. It's like your favorite musicians suddenly recorded more albums at the click of a button."
      },
      {
        title: "Custom stations",
        article: "Create a station around the values and vibe of your business. Click on mood, energy, and genre tags and get a station to match your choices."
      }
    ]
  },
  {
    title: "Tools built for business",
    details: [
      {
        title: "Easy scheduling",
        article: "Schedule in advance to make sure that the music plays when and where it should. Drag and drop playlists into the calendar to meet business hours, expected rush times, and holidays."
      },
      {
        title: "Explicit-lyrics filter",
        article: "Keep your business family-friendly with the flick of a switch and make sure that inappropriate content never ruins the ambiance."
      },
      {
        title: "Streamlined controls for staff",
        article: "Employees can use the Remote App to change the volume, skip a song that isn't going over well, and even share a song with customers for that personal touch (for iPhone only)."
      }
    ]
  }
]