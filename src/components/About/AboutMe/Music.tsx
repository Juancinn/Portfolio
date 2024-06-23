import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Music.module.css";

const Music = () => {
  const artists = [
    { name: "Radiohead", image: "src/assets/radiohead.png" },
    { name: "Twenty One Pilots", image: "src/assets/top.png" },
    { name: "Mac DeMarco", image: "src/assets/mac-demarco.png" },
    { name: "Bad Bunny", image: "src/assets/bad-bunny.png" },
    { name: "Kanye West", image: "src/assets/kanye-west.png" },
    { name: "Lolabum", image: "src/assets/lolabum.jpg" },
    { name: "Pink Floyd", image: "src/assets/pink-floyd.png" },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customTransition = {
    transform: "scale(1.2)",
    filter: "grayscale(0%)",
  };

  const normalTransition = {
    transform: "scale(1)",
    filter: "grayscale(50%)",
  };

  return (
    <div className={styles.music}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        centerMode={true}
        itemClass={styles.carouselItem}
        beforeChange={(nextSlide) => {
          // Determine the next center image and apply active class
          const items = document.querySelectorAll(`.${styles.carouselItem}`);
          items.forEach((item, index) => {
            const imageContainer = item.querySelector(
              `.${styles.imageContainer}`
            );
            if (index === nextSlide + 1) {
              Object.assign(imageContainer.style, customTransition);
            } else {
              Object.assign(imageContainer.style, normalTransition);
            }
          });
        }}
      >
        {artists.map((artist, index) => (
          <div
            className={`${styles.imageContainer} ${
              index === 1 ? styles.active : ""
            }`}
            key={index}
          >
            <img src={artist.image} alt={artist.name} />
            <div className={styles.artistName}>{artist.name}</div>
          </div>
        ))}
      </Carousel>
      <div className={styles.textContainer}>
        <img
          src="src/assets/playlist-cover.jpeg"
          alt="Playlist Cover"
          className={styles.playlistCover}
        />
        <div className={styles.text}>
          Music is one of the most simple ways that a human being can connect
          with another because music is about emotions and what we feel when we
          listen to a song. Want to know me better as a person? Check some of
          the stuff I'm listening to.
          <a
            href="https://open.spotify.com/playlist/4Vzvkan3uZ5QxF6svtJdZu?si=9aba6124887f4998&pt=c3071dd1c71b235b3b10611b47091cc5"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spotifyButton}
          >
            Check Out My Playlist!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Music;
