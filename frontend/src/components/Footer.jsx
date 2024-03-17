import React from 'react';

const Footer = () => {
  return (
    <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0060394430716!2d72.83461397525123!3d19.10739098210365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710682482470!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "10px", marginBottom: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      <div className='h-96 w-full px-10 py-5 bg-white bg-opacity-20'>
        <div className='IIC'>
            <h1>Event Name</h1>
            <div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
