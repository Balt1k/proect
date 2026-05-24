import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    const total = images.length;
    let newIndex = index;

    if (newIndex >= total) newIndex = 0;
    if (newIndex < 0) newIndex = total - 1;

    setCurrent(newIndex);
  };

  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      trackRef.current.style.transform = `translateX(-${current * slideWidth}px)`;
    }
  }, [current]);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const prevSlide = () => {
    goToSlide(current - 1);
    startTimer();
  };

  const nextSlide = () => {
    goToSlide(current + 1);
    startTimer();
  };

  const dotClick = (index) => {
    goToSlide(index);
    startTimer();
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className={styles.track} ref={trackRef}>
        {images.map((src, i) => (
          <div className={styles.slide} key={i}>
            <img src={src} alt={`slide ${i}`} />
          </div>
        ))}
      </div>

      <button className={`${styles.btn} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.btn} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => dotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;