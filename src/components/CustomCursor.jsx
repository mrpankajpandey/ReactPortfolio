import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import style from './Cursor.module.css'

const CustomCursor = () => {
    const cursor = useRef(null);
    useEffect(() =>{
             const OnMouseMove = (e) =>{
                const {clientX:x, clientY:y} =e;
                cursor.current.style.left = `${x-10}px`;
                cursor.current.style.top = `${y-10}px`;
                gsap.to(cursor.current, {
                    x: e.pageX - 10,
                    y: e.pageY - 10,
                    duration: 0.2,
                    ease: 'power3.out',
                  });
             };
             const onClick = () => {
                cursor.current.classList.add('expand');
                setTimeout(() => {
                  cursor.current.classList.remove('expand');
                }, 500);
              };

             document.addEventListener('mousemove',OnMouseMove);
             document.addEventListener('click', onClick);

             return () =>{
                document.removeEventListener('mousemove', OnMouseMove);
                document.removeEventListener('click', onClick);

             }
    },[])

  return (
    <div ref={cursor} className={`${style.cursor} expand `}></div>
  )
}

export default CustomCursor