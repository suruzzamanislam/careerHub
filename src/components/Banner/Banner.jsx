const Banner = () => {
  return (
    <div className="py-10 md:py-20 justify-center lg:justify-between">
      <div className="hero-content flex-col justify-center lg:justify-between items-center lg:flex-row-reverse">
        <img
          src="/src/assets/images/user.png"
          alt="not found image"
          className="max-w-sm md:max-w-md rounded-lg"
        />
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
            One Step <br /> Closer To Your{' '}
            <span className="block text-purple-500 "> Dream Job</span>
          </h1>
          <p className="py-6 text-center md:text-left">
            Explore thousands of job opportunities with all the amet consectetur
            adipisicing elit. Consequatur, non! <br /> information you need. Its
            your future. Come find it. Manage all <br /> your job application
            from start to finish.
          </p>
          <div className="text-center md:text-left">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
