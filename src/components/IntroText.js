const IntroText = () => {
  return (
    <div
      style={{
        width: '90vw',
        display: 'grid',
        margin: '0 auto',
      }}>
      <div
        style={{
          display: 'grid',
          fontSize: '2.5vw',
          paddingBottom: '5vh',
          paddingTop: '5vh',
        }}>
        Hello and welcome! I'm a digital designer and web developer based in
        India, specializing in visual brand identity, UI/UX design and web
        development.
      </div>
      <div
        style={{
          display: 'grid',
          fontSize: 'calc(2.5vw)',
          paddingBottom: '5vh',
        }}>
        At the moment, i‘m working full-time with wipro, where i focus on
        delivering high quality visual and technical solutions for global and
        local clients.
      </div>
    </div>
  );
};

export default IntroText;
