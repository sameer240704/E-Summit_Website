import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/IIC_logo.png";

const NavbarDefault = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navbarData = [
    { 
      label: 'Home', 
      href: '#home' 
    },
    { 
      label: 'About Us', 
      href: '#about-us' 
    },
    { 
      label: 'Events', 
      href: '#events' 
    },
    { 
      label: 'Our Speakers', 
      href: '#our-speakers' 
    },
    { 
      label: 'Contact Us', 
      href: '#contact-us' 
    }
  ];

  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const activeSection = Object.keys(sectionRefs.current).findIndex(key => {
        const ref = sectionRefs.current[key];
        return ref && ref.offsetTop <= scrollPosition && (ref.offsetTop + ref.clientHeight) > scrollPosition;
      });
      if (activeSection !== -1) {
        setSelectedItem(activeSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const index = navbarData.findIndex(item => `#${item.label.toLowerCase().replace(/\s/g, '-')}` === location.hash);
    if (index !== -1) {
      setSelectedItem(index);
    }
  }, [location, navbarData]);

  useEffect(() => {
    navbarData.forEach(item => {
      sectionRefs.current[item.label] = React.createRef();
    });
  }, [navbarData]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    const ref = sectionRefs.current[navbarData[index].label];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[10000000] mx-auto w-full max-w-screen-md bg-ESummitBlue-900 py-5 shadow-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg text-white">
      <div className="px-4 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="h-5 md:h-10" />
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {navbarData.map((item, index) => (
            <a
              key={index}
              aria-current="page"
              className={`inline-block rounded-lg px-2 py-1 text-md font-medium transition-all duration-200 ${selectedItem === index ? 'text-white font-bold text-xl' : 'text-white opacity-50 hover:text-slate-600'}`}
              href={item.href}
              onClick={() => handleItemClick(index)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="hidden">
        {navbarData.map((item, index) => (
          <div key={index} ref={sectionRefs.current[item.label]}></div>
        ))}
      </div>
    </header>
  );
};

export default NavbarDefault;
