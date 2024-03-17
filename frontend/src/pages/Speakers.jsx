import React from 'react';
import Speaker from '../components/Speaker';

const Speakers = () => {
  return (
    <div id='our-speakers' className='pt-24'>
      <div className=''>
        <div className='speakers-1 flex items-center justify-center overflow-y-hidden'>
          <Speaker 
            name={"Mr. Bhavit Sheth"}
            profile={"COO & Co-Founder, Dream Sports"}
            image={'https://www.8bmedia.com/wp-content/uploads/2020/04/bhavit-sheth-291x300.jpg'}
            link={'https://in.linkedin.com/in/bhavitsheth'}
          />
          <Speaker 
            name={"Mr. Kartik Raichura"}
            profile={"Co-Founder & CEO @ Websites.co.in"}
            image={'https://media.licdn.com/dms/image/C4D03AQHYouJtjJnZbA/profile-displayphoto-shrink_200_200/0/1621703823271?e=2147483647&v=beta&t=dlZ14JgMnEATb-MVoQDIGr4_GU4gvM78aiVwkk7doVo'}
            link={'https://in.linkedin.com/in/kartikraichura'}
          />
          <Speaker 
            name={"Mr. Shronit Ladhani"}
            profile={"CEO of CareerNinja | 30 Under 30"}
            image={'https://media.licdn.com/dms/image/C4D03AQGBqwEesEUcog/profile-displayphoto-shrink_400_400/0/1654684218733?e=2147483647&v=beta&t=FsQxaYBltolmodaRjnCvBg7EDuXBXRkVhIaM-HcrpDg'}
            link={'https://in.linkedin.com/in/shronit'}
          />
          <Speaker 
            name={"Mr. Pratik Gadia"}
            profile={"Founder & CEO, The Yarn Bazaar"}
            image={'https://media.licdn.com/dms/image/C4D03AQEQoNhSeTb1Tg/profile-displayphoto-shrink_800_800/0/1653834826301?e=2147483647&v=beta&t=tdNPGvq6xDCQIWCRZelxU6sT4BcKy1KT8uPAu8nK13A'}
            link={'https://in.linkedin.com/in/pratikgadia'}
          />
        </div>
        <div className='speakers-2 flex items-center justify-center overflow-y-hidden'>
          <Speaker 
            name={"Ms. Priyanshi Choubey"}
            profile={"Founder @Instacar-Techstars Company"}
            image={'https://media.licdn.com/dms/image/C4D03AQGdhg-s8OTxqQ/profile-displayphoto-shrink_400_400/0/1651578881821?e=2147483647&v=beta&t=LPEk6Y6NS-anZy3R6pNtSzbdAfvs4TmalNKxQIrHlEE'}
            link={'https://in.linkedin.com/in/priyanshi-choubey'}
          />
          <Speaker 
            name={"Mr. Vijay Agarwal"}
            profile={"CEO, Neebal Technologies"}
            image={'https://media.licdn.com/dms/image/C4E03AQEGi4oBrTH7NQ/profile-displayphoto-shrink_400_400/0/1517705748630?e=1716422400&v=beta&t=MoBQGkmoGLOvFVTu8yJr74vOHVCLz2Kt-t1tf_F-keY'}
            link={'https://www.linkedin.com/in/10xvj'}
          />
          <Speaker 
            name={"Mr. K B Gupta"}
            profile={"Author & Visionary Leader"}
            image={'https://media.licdn.com/dms/image/D4D03AQFvmTkFSMLaHA/profile-displayphoto-shrink_400_400/0/1699190150896?e=1716422400&v=beta&t=DZ-Z7YWksqQNxeIl72gJ2aMV7STIal-Frv5CZovCqR4'}
            link={'https://in.linkedin.com/in/kbguptalive'}
          />
          <Speaker 
            name={"Mr. Vinay Pandya"}
            profile={"CA, Ex Group CFO & Financial Expert"}
            image={'https://media.licdn.com/dms/image/C4D03AQEnY49_s9nOVw/profile-displayphoto-shrink_400_400/0/1595425721868?e=1716422400&v=beta&t=zacIsHwCvSvGEFdJrhjvsOYlMj8Q82Nlz_WjaFZ-BsQ'}
            link={'https://in.linkedin.com/in/vinaypandya'}
          />
        </div>
      </div>
    </div>
  )
}

export default Speakers;