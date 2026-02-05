// components/BookingCalendar.tsx
import React from 'react';

const BookingCalendar = () => {
  // Replace with your actual Google Calendar Appointment URL
  // Tip: add ?gv=true to the end of your URL for the updated Google UI
  const googleBookingUrl = "https://calendar.app.google/sqKf25S7CFKKywZr6";

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-full min-h-[600px] bg-[#0a0c12]">
      {/* The CSS filters here (invert/hue-rotate) help the white Google Calendar 
        blend into your dark Murivest theme. 
      */}
      <iframe
        src={googleBookingUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        className="absolute inset-0 z-10 invert-[0.93] hue-rotate-[180deg] brightness-[0.9] contrast-[0.9]"
        title="Murivest Schedule"
      ></iframe>
    </div>
  );
};

export default BookingCalendar;