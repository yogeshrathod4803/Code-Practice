import React from "react";

const Gmap = () => {
  return (
    <div>
      <address>
        Station Rd, Shivaji Nagar, Thane East, Thane, Maharashtra 400601
      </address>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          background: "#f0f0f0",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2000288657873!2d72.97289347472328!3d19.186463748496354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8df51719ccf%3A0x3b3afba7961341f8!2sThane!5e0!3m2!1sen!2sin!4v1716282026124!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "400px",
          }}
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Gmap;
