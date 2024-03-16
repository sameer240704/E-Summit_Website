import React from 'react';
import IICLogo from "../assets/IIC_logo.png";
import Polygon from "../assets/polygon.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [30, -30]);

    return (
        <div style={{ perspective: 2000 }}>
            <motion.div 
                className='min-h-[400px] w-[300px] bg-slate-900 px-5 py-7 rounded-2xl relative'
                style={{ x, y, rotateX, rotateY, z: 100 }}    
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                whileTap={{ cursor: 'grabbing' }}
            >
                <img 
                    src={IICLogo} 
                    alt='IIC Logo' 
                    className='h-9 mb-3'
                />
                <div className='title text-2xl text-white font-extrabold'>
                    <h1>RUSH HOUR</h1>
                </div>
                <div className='about text-sm my-5 text-white'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique optio hic, nesciunt temporibus omnis commodi quia velit</p>
                </div>
                <div className='details'>
                    <button className='p-2 bg-white rounded-xl active:scale-90 mb-3'>Details</button>
                </div>
                <div className='register'>
                    <button className='p-2 bg-white rounded-xl active:scale-90'>Register</button>
                </div>
                <motion.div 
                    className='absolute top-[200px] -right-[130px]'
                    style={{ x, y, rotateX, rotateY, z: 1000 }} 
                >
                    <img 
                        src={Polygon} 
                        alt='Polygon image' 
                        className='h-[300px]'
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Card;
