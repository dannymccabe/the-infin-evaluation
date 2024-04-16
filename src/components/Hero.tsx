import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <p>
          Web +<br />
          Mobile app
        </p>
        <Image
          src={'/assets/phone-image.png'}
          alt="pluses graphic"
          height={160}
          width={201}
        />
      </div>
      <div className="hero-bottom">
        <div className="logo-container">
          <p>
            A market-based
            <br />
            assessment of your
            <br />
            contribution.
          </p>
        </div>

        <h1>
          To know your true value, 
          <br /> Help others understand theirs.
        </h1>

        <button className="button schedule">schedule a demo</button>
        <div className="pluses">
          <Image
            src={'/assets/pluses.png'}
            alt="pluses graphic"
            height={251}
            width={303}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
