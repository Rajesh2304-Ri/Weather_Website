import React from 'react'

const RainDrops = () => {
    const drops = Array.from({ length: 30 });
  return (
        <div className="w-screen h-screen bg-black overflow-hidden relative">
      {drops.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white w-[40px] h-10 bg-[linear-gradient(to_right,_#FF7E5F,_#FEB47B,_#86A8E7)] opacity-50 animate-fall"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random()}s`,
            animationDuration: `${0.5 + Math.random() * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
  
}

export default RainDrops