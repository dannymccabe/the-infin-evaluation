import Image from 'next/image';

const Fairness = () => {
  return (
    <section className="fairness-section sticky-parallax">
      <div className="left">
        <p className="page-number">03</p>
        <h2 className="title">
          Fairness and
          <br /> <span>Objective</span>
        </h2>
        <Image
          src={'/assets/3pluses.svg'}
          alt="pluses"
          height={38}
          width={144}
        />
        <div className="information">
          <p>
            The INFIN’s data is an objective, flexible, dynamic, and real-time
            alternative to the limited and speculative information normally
            available to employers and individuals.
          </p>
          <p className="border-top">
            The old maxim of “knowledge is power” applies here for both
            employers and employees. Don’t let individual performance and
            recognition be lost in the cloud of office politics. The INFIN gives
            a voice to each individual and a fuller picture to the employer.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="quoteblock">
          <p className="quote">
            “[The INFIN] immediately identified the healthy and high performing
            teams, comfortable with task conflict, versus the dysfunctional and
            ineffective teams unable to withstand constructive feedback. Healthy
            and high performing teams were able to eliminate ambiguity and
            subjectivity in recognizing and rewarding each other&apos;s
            contributions. The INFIN provided us with a transparent and fair
            system for acknowledging the hard work and dedication of our
            colleagues and a way to willingly discuss weaknesses as individuals
            and as a team.”
          </p>

          <div className="profile">
            <Image
              src={'/assets/avitar1.png'}
              height={52}
              width={52}
              alt="carla"
            />
            <div className="name-wrapper">
              <p className="name">Carla M.</p>
              <p className="role">Business Change Manager at DRGinvest</p>
            </div>
          </div>
        </div>

        <div className="quoteblock">
          <p className="quote">
            “We appreciated its focus on fairness and objective data, it has
            completely changed how we handle employee evaluations and
            promotions. It also supports and motivates a true merit-based
            culture, eliminating the usual office politics. This platform has
            enabled our leadership team to better recognize the daily efforts of
            our employees, making sure that recognition and promotion
            opportunities are justly given. Thank you!”
          </p>

          <div className="profile">
            <Image
              src={'/assets/avitar2.png'}
              height={52}
              width={52}
              alt="tyler"
            />
            <div className="name-wrapper">
              <p className="name">Tyler H.</p>
              <p className="role">CEO of Nuclear Holding Group</p>
            </div>
          </div>
        </div>

        {/* swiper */}
        <div className="swiper">
          <div className="circle">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6H1M1 6L6.33333 1M1 6L6.33333 11"
                stroke="#FFCD00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>
            01 <span> / 03</span>
          </p>
          <div className="circle">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <path
                d="M14 6H1M1 6L6.33333 1M1 6L6.33333 11"
                stroke="#FFCD00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fairness;
