import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css'; 
import herbImage from './assets/herb.png';
import manImage from './assets/man.png';
import teeImage from './assets/tee.png';

const testimonials = [
    {
      text: "This is the best service I've ever used. The level of professionalism and attention to detail was exceptional. Highly recommend to anyone looking for quality and reliability!",
      image: herbImage
    },
    {
      text: "Amazing experience! The team was incredibly professional, delivered exactly what we needed, and were always available to answer our questions. A truly top-notch service!",
      image: manImage
    },
    {
      text: "The quality of work exceeded my expectations in every way. From start to finish, the process was smooth, and the results were fantastic. I will definitely use their services again!",
      image: teeImage
    }
  ];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <div className="testimonials-text">
          <p>{testimonials[currentIndex].text}</p>
        </div>
        <div className="testimonials-images">
          <img src={testimonials[currentIndex].image} alt="Testimonial" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
