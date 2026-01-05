import Image from "next/image";
import Link from "next/link";
import React from "react";

const FellowshipSection = () => {
  return (
    <section
      className="about-section cpt-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="about-section-title">Fellowship </h2>
              <p>
                The Bible passage quoted above is perhaps the most famous
                description of the early Christian church. As you might expect,
                the first followers of Jesus were devoted to spiritual matters,
                such as the teaching of the apostles and the prayers. But they
                also devoted themselves to &apos;the communal life&apos; – what
                we might now call &apos;the fellowship&apos;.
              </p>
              <p>
                All that we do together contributes to our communal life, our
                fellowship. We think of the Eucharist, for example, as the
                source and summit of everything we do as a parish. On these
                &apos;Our fellowship&apos; pages, we look at those areas of
                activity which are especially focused on keeping our community
                running smoothly and developing our sense of togetherness:
              </p>
              <div className="fellow-uplink-wrap">
                <Link
                  href="#"
                  className="fellowup-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Practical and financial groups and activities
                </Link>
                <Link
                  href="#"
                  className="fellowup-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social and support groups and activities
                </Link>
                <Link
                  href="#"
                  className="fellowup-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ​All our parish groups and activities
                </Link>
              </div>
              <p className="fellow-quote">
                Love ought to show itself in deeds not words - Saint Ignatius of
                Loyola
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <Image
                src="/assets/images/fellowship.png"
                alt="About"
                width={608}
                height={769}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipSection;
