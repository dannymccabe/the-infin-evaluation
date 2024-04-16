import Image from 'next/image';

const CTAsection = () => {
  return (
    <section className="CTA-section sticky-parallax">
      <p className="page-number">04</p>
      <div className="center">
        <p>What can The INFIN do for you?</p>
        <h2>
          Ready to <br />
          get started
        </h2>
        <div className="button-wrapper">
          <button className="button cta">schedule a live demo</button>
        </div>
      </div>
      {/* absolute positioning */}
      <div className="plus-wrapper">
        <Image
          src={'/assets/choose-us-pluses.svg'}
          alt={''}
          height={91}
          width={144}
        />
      </div>

      <div className="plus-wrapper2">
        <Image
          src={'/assets/choose-us-pluses.svg'}
          alt={''}
          height={91}
          width={144}
        />
      </div>

      <div className="image-wrapper1">
        <Image src={'/assets/girl.png'} alt={''} height={223} width={223} />
      </div>
      <div className="image-wrapper2">
        <Image src={'/assets/man.png'} alt={''} height={223} width={223} />
      </div>
    </section>
  );
};

export default CTAsection;
