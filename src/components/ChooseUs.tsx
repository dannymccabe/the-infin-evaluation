import Image from 'next/image';

const ChooseUs = () => {
  return (
    <section className="choose-us-section">
      <div className="choose-us-section--left">
        <h2>
          Why choose
          <br />
          the INFIN
        </h2>
        <div className="plus-wrapper">
          <Image
            src={'/assets/choose-us-pluses.svg'}
            alt={''}
            height={91}
            width={144}
          />
        </div>
      </div>

      <div className="choose-us-section--right">
        <div className="card-top">
          <div className="card-top--left">The old way</div>
          <div className="card-top--middle">
            <p className="description">
              Workers compete with their peers for recognition from bosses who
              also don’t like this dynamic.
            </p>
          </div>
          <div className="card-top--right">
            <Image
              src={'/assets/readers.png'}
              height={223}
              width={223}
              alt=""
            />
          </div>
        </div>
        <div className="card-top">
          <div className="card-top--left">The new way</div>
          <div className="card-top--middle">
            <p className="description">
              Colleagues dynamically observe and rank each other’s contributions
              in a confidential, anonymous manner. The INFIN then calculates
              ownable, individual value and automatically distributes
              peer-reviewed recognition and rewards (while giving execs a clear
              picture of individual ROI).
            </p>
          </div>
          <div className="card-top--right">
            <Image src={'/assets/happy.png'} height={223} width={223} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
