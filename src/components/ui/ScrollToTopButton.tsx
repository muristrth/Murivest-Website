'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 z-50 bg-gold-600 hover:bg-gold-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
