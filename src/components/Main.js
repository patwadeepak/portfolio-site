const Main = () => {
  return (
    <>
      <div data-scroll-section>
        <h1 data-scroll style={{ paddingTop: "1500px" }}>
          Hey
        </h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section>
        <h2 data-scroll data-scroll-speed="1" style={{ paddingTop: "1500px" }}>
          What's up?
        </h2>
        <p data-scroll data-scroll-speed="2">
          😬
        </p>
      </div>
    </>
  );
};

export default Main;
