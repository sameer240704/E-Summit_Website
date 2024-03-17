import React from 'react'
import CardFlip from '../components/CardFlip';
import CP from "../assets/people/cp.jpg";

const ContactUs = () => {
  return (
    <div id='contact-us' className='h-screen flex items-center justify-center'>
      <div className='grid place-items-center gap-3'>
        <div className='mt-[300px] mb-5'>
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
        />
        </div>
        <div className='flex justify-center items-center gap-24'>
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
        </div>
        <div className='flex justify-center items-center gap-24 mt-5'>
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs;