import React, { useState } from 'react';
import Polygon from "../assets/polygon.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiAbstract083 } from "react-icons/gi";
import { MdOutlineNotStarted } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Register1 from './Register1';

const Card1 = () => {

    const [ detailsClicked, setDetailsClicked ] = useState(false);
    const [ registerOpen, setRegisterOpen ] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const handleDetailsChange = () => setDetailsClicked(!detailsClicked);

    const handleRegisterChange = () => setRegisterOpen(!registerOpen);

    return (
        <>
            <div>
                <motion.div
                    className='min-h-[400px] w-[500px] bg-slate-900 px-5 py-7 rounded-2xl relative'
                    style={{
                        x,
                        y,
                        rotateX,
                        rotateY,
                        zIndex: 1,
                        perspective: '1000px',
                        cursor: 'grab',
                    }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    <div className='title text-3xl text-white font-extrabold'>
                        <h1>RUSH HOUR</h1>
                    </div>
                    <div className='about text-sm my-7 text-white'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus commodi accusamus suscipit? Dolores praesentium tenetur aliquid unde dignissimos dolore aspernatur eos beatae, obcaecati totam delectus exercitationem expedita. Facere, commodi?</p>
                    </div>
                    <div className='details'>
                        <button 
                            className='details-btn p-2 rounded-xl active:scale-90 mb-3'
                            onClick={handleDetailsChange}    
                        >
                            Details
                        </button>
                    </div>
                    <div className='register'>
                        <button 
                            className='register-btn p-2 rounded-xl active:scale-90'
                            onClick={handleRegisterChange}
                        >
                            Register
                        </button>
                    </div>
                    <motion.div
                        className='absolute top-[200px] -right-[130px]'
                        animate={{ x, y, rotateX, rotateY, z: 1000000 }}
                    >
                        <img
                            src={Polygon}
                            alt='Polygon image'
                            className='h-[300px]'
                            draggable="false"
                        />
                    </motion.div>
                </motion.div>
            </div>
            { detailsClicked && (
                <div className='z-[1000] h-screen w-screen fixed inset-0 bg-opacity-90 backdrop-blur-sm flex justify-center items-center text-slate-100'>
                    <div 
                        className='absolute top-2 left-[97%] cursor-pointer'
                        onClick={handleDetailsChange}
                    >
                        <IoClose className="h-10 w-auto text-red-600 hover:text-red-800" />
                    </div>
                    <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1B1A54', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #080F2B' }}
                        date="10:00 AM - 11:00 AM"
                        iconStyle={{ background: '#9290C2', color: 'blue' }}
                        icon={<GiAbstract083 />}
                    >
                        <h3 className="vertical-timeline-element-title">Opening Ceremony</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1B1A54', color: '#fff' }}
                        date="11:15 AM"
                        iconStyle={{ background: '#9290C2', color: 'red' }}
                        icon={<MdOutlineNotStarted/>}
                    >
                        <h3 className="vertical-timeline-element-title">Event Begins</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1B1A54', color: '#fff' }}
                        date="3:00 PM"
                        iconStyle={{ background: '#9290C2', color: '#000000' }}
                        icon={<IoIosPerson />}
                    >
                        <h3 className="vertical-timeline-element-title">Judging Round</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#1B1A54', color: '#fff' }}
                        date="4:00 PM"
                        iconStyle={{ background: '#9290C2', color: '#fff000' }}
                        icon={<GiTrophy />}
                    >
                        <h3 className="vertical-timeline-element-title">Prize Distribution & Closing Ceremony</h3>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            )}
            { registerOpen && (
                <Register1 
                    registerOpen={registerOpen} 
                    setRegisterOpen={setRegisterOpen} 
                />)
            }
        </>
    )
}

export default Card1;