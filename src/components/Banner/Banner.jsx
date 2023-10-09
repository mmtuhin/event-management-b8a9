const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/kKFmwtV/1111.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Unlocking Success Together!</h1>
            <p className="mb-5">
            Your Vision, Our Expertise: Crafting Memorable Business Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
