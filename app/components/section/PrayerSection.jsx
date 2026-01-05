import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrayerSection = () => {
  return (
    <section
      className="about-section cpt-6 cpb-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-content">
              <h2 className="about-section-title">Our prayer</h2>
              <p>
                Jesus wants His disciples to be people of prayer, always growing
                in their faith. The Gospels show us that Jesus prayed often. He
                encouraged His disciples to pray; and He devoted much of His
                time to helping them develop their fledging faith.
              </p>
              <p>
                At Holy Innocents’, we try to follow Jesus’ example by being, in
                the words of our Parish Vision, &apos;rooted in prayer&apos;,
                and by learning how to become the disciples Jesus wants us to
                be.
              </p>
              <p>
                At Holy Innocents’, we try to follow Jesus’ example by being, in
                the words of our Parish Vision, &apos;rooted in prayer&apos;,
                and by learning how to become the disciples Jesus wants us to
                be.
              </p>
              <ul>
                <li>
                  the opportunities for prayer and formation here at Holy
                  Innocents described below on this page
                </li>
                <li>
                  our sacramental formation (preparation) for children and
                  adults
                </li>
                <li>
                  the Parish Evangelisation Cells, which seek to help members to
                  grow in their faith.
                </li>
              </ul>
              <p>
                ​In addition to these regular groups and events, throughout the
                year there are many ways in which we can learn more about our
                faith or come together for prayer. These are always
                well-publicised in our weekly newsletter and on this website.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img">
              <Image
                src="/assets/images/liturgy.png"
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

export default PrayerSection;
