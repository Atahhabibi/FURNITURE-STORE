const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>

        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 max-2xl max-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        officia natus. Ut, corrupti rem cum, mollitia in facere tempora
        perferendis recusandae, illo doloribus molestias sunt at soluta
        doloremque blanditiis magni fuga eveniet? Excepturi, cupiditate illum
        harum vitae nisi cum ex!
      </p>
    </>
  );
};

export default About;
