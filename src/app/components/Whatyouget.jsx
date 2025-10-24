import React, { useEffect, useState } from "react";

export default function Joining() {
  // Responsive hook
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    boxSizing: 'border-box'
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '20px' : '30px'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Título */}
        <img 
          src="/whatyouget/tit.png" 
          alt="WHAT YOU GET" 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '600px' : ''
          }}
        />

        {/* Subtítulo */}
        <img 
          src="/whatyouget/sub.png" 
          alt="What it means to join the Alliance:" 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '250px' : ''
          }}
        />

        {/* Cards container */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '30px',
          width: '100%',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          marginTop: isMobile ? '20px' : ''
        }}>
          {/* Cultural Film Card */}
          <img 
            src="/whatyouget/c.png" 
            alt="Cultural Film" 
            style={{
              ...imageStyle,
              maxWidth: isMobile ? '280px' : '',
              flex: isMobile ? 'none' : '1'
            }}
          />

          {/* Photographic Archive Card */}
          <img 
            src="/whatyouget/p.png" 
            alt="Photographic Archive" 
            style={{
              ...imageStyle,
              maxWidth: isMobile ? '280px' : '',
              flex: isMobile ? 'none' : '1'
            }}
          />

          {/* Global Visibility Card */}
          <img 
            src="/whatyouget/g.png" 
            alt="Global Visibility" 
            style={{
              ...imageStyle,
              maxWidth: isMobile ? '280px' : '',
              flex: isMobile ? 'none' : '1'
            }}
          />
        </div>

        {/* Footer */}
        <img 
          src="/whatyouget/footer.png" 
          alt="Your heritage deserves more than preservation. It deserves a place in the global narrative." 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '300px' : '600px',
            marginTop: isMobile ? '30px' : '50px'
          }}
        />
      </div>
    </section>
  );
}