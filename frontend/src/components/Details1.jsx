import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiActivity } from "react-icons/fi";
import { GiAbstract083 } from "react-icons/gi";
import { MdOutlineNotStarted } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Details1 = () => {
    return (
        <div className='z-[1000] h-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-slate-900'>
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
    )
}

export default Details1;