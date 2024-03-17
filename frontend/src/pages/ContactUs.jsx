import React from 'react'
import CardFlip from '../components/CardFlip';
import CP from "../assets/people/cp.jpg";
import CoCP from "../assets/people/cocp.jpg"
import Adm from "../assets/people/adm.jpg";
import Sec from "../assets/people/sec.jpg";
import Hod from "../assets/people/hode.jpg"

const ContactUs = () => {
  return (
    <div id='contact-us' className='h-screen flex items-center justify-center'>
      <div className='grid place-items-center gap-3'>
        <div className='mt-24 mb-3 flex gap-20'>
          <CardFlip 
            image={CP}
            name={"Khushi Dodia"}
            position={"Event Coordinator"}
            number={"+91 79771 31523"}
          />
          <CardFlip 
            image={CoCP}
            name={"Nihar Nandoskar"}
            position={"Assistant Event Coordinator"}
            number={"+91 93726 97992"}
          />
        </div>
        <div className='flex justify-center items-center gap-24'>
          <CardFlip 
            image={Sec}
            name={"Kapil Kashyap"}
            position={"Event Manager"}
            number={"+91 85914 25664"}
          />
          <CardFlip 
            image={Adm}
            name={"Ayushi Uttamani"}
            position={"Event Manager"}
            number={"+91 79775 27238"}
          />
          <CardFlip 
            image={Hod}
            name={"Shubham Bhimani"}
            position={"Event Manager"}
            number={"+91 82919 09897"}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs;