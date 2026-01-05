import React from "react";
import Banner from "../components/section/Banner";
import Image from "next/image";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Home",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png", // or your image path like '/assets/favicon.png'
  },
};

const SacramentalPage = () => {
  const data = {
    title: "Our sacramental life ",
    description: `...the Sacraments are the place of God’s closeness and tenderness for us. They are the concrete way that God willed to come to meet us, to embrace us, without being ashamed of us and of our limitations - Pope Francis`,
  };
  return (
    <>
      <section
        className="banner sacramental"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="banner-wrapper sacramental-wrapper">
            <h1 className="banner-title">Our sacramental life </h1>
            <h4 className="banner-text">
              ...the Sacraments are the place of God’s closeness and tenderness
              for us. They are the concrete way that God willed to come to meet
              us, to embrace us, without being ashamed of us and of our
              limitations - Pope Francis
            </h4>
            <p>
              ​The celebration of the sacraments is at the heart of the life of
              any Catholic parish. God comes to meet us in many ways through the
              sacraments. We are a sacramental people.
            </p>
            <p>
              &apos;A sacrament is an outward sign of inward grace&apos;. That
              old definition captures the two key elements of a sacrament – a
              sign and the reality it symbolises, that reality being an
              outpouring of God’s love for us. So in Baptism, for example, the
              sign is the pouring of water and the reality is that we are washed
              free from sin; in Confirmation, the anointing with oil symbolises
              the gifts of the Holy Spirit.
            </p>
            <p>
              On this page you can find out about the seven sacraments which
              Catholics celebrate, and about how we receive and prepare for them
              at Holy Innocents’. We have followed the Catechism of the Catholic
              Church in dividing them into the sacraments of initiation, the
              sacraments of healing, and the sacraments at the service of
              communion.
            </p>
          </div>
        </div>
      </section>

      <section className="cpt-6 ">
        <div className="container">
          <div className="sacramental-wrapper">
            <ul>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="about-section-title reflection-title text-center">
                  The sacraments of initiation
                </h2>
                <p>
                  ​The Catholic Church calls Baptism, Confirmation and the
                  Eucharist (Holy Communion) the &apos;sacraments of
                  initiation&apos;.
                </p>
                <p>
                  These sacraments form a pathway into full and active
                  participation in the life of the Church. Your child growing up
                  as part of our community might be baptised as an infant,
                  celebrate their First Holy Communion at age 7 or 8, and go on
                  to be confirmed at 13 or 14. If you are an adult and you are
                  not a Catholic, or you have not received all three sacraments
                  of initiation, you might think about joining our Journey in
                  Faith group.
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">Baptism</h2>
                <div className="reflection-item">
                  <div className="reflection-img">
                    <Image
                      src="/assets/images/other-image/sacramental-1.jpg"
                      alt="About"
                      width={194}
                      height={258}
                    />
                  </div>
                  <div className="reflection-text-content">
                    <p>
                      Baptism is the first of the sacraments, and its effects
                      are profound. The priest pours water over the forehead of
                      the child or adult being baptised. By that sign, he or she
                      is cleansed from sin and adopted as a child of God, no
                      less, and a member of Christ’s Church. He or she is sealed
                      with the gifts of the Holy Spirit and given a share in the
                      priesthood of Christ.
                    </p>
                    <p>
                      If you are reading this section because you are planning
                      to have your baby baptised – congratulations on the birth
                      of your son or daughter! We look forward to welcoming him
                      or her into the Church, and into our parish community,
                      just as we delight in any adult who decides to take this
                      all-important step.
                    </p>
                    <p>
                      If you are member of the parish and/or regularly attend
                      Mass at Holy Innocents’ we are happy to baptise your
                      child. Baptisms of children are usually celebrated on
                      Sunday afternoons.
                    </p>
                  </div>
                </div>
                <p>
                  If you are a member of another parish, you will need the
                  written permission of your own parish priest for the Baptism
                  of your child to take place at Holy Innocents’.
                </p>
                <p>
                  The first stage of preparation for the Baptism of a child is
                  an interview with a member of the clergy team. Depending on
                  the time of year, you may need to give several weeks’ notice
                  for a Baptism. No Baptisms are celebrated during Lent. ​
                </p>
                <p>
                  The Catholic Church recognises Baptisms celebrated in other
                  mainstream Christian churches. Since Baptism, like
                  Confirmation, can only be received once, you will not be
                  baptised again in the Catholic Church if you have already been
                  baptised in one of those churches. If you are an adult
                  thinking about being baptised, you might like to join our
                  Journey in Faith.
                </p>
                <p>
                  <strong> Contact</strong> ​Deacon Barry or the Parish Office
                  for children Father Victor for adults
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  Holy Communion (the Eucharist)
                </h2>
                <div className="reflection-item">
                  <div className="reflection-text-content">
                    <p>
                      ​The Eucharist is the greatest of the seven sacraments
                      celebrated by the Catholic Church. At each Mass, the bread
                      and wine is consecrated, and is thus transformed to become
                      in its deepest reality the body and blood of the risen
                      Christ. As we eat the host and drink from the chalice, we
                      are nourished by Jesus himself. We are united in this most
                      intimate way to the person of Jesus and, through Him, to
                      each other. It is that simple, that mysterious, and that
                      wonderful.
                    </p>
                    <p>
                      You can learn more about the celebration of the Mass at
                      Holy Innocents on the Our liturgy page.
                    </p>
                    <p>
                      The First Holy Communion celebration for our boys and
                      girls is one of the highlights of the year for any
                      Catholic parish.
                    </p>
                    <p>
                      ​We have an enriching ‘whole family formation
                      process&apos; as part of our sacramental preparation which
                      is fun and faith filled. Preparation for the sacraments of
                      First Reconciliation and First Holy Communion is open to
                      families with a child in Year 3 and above who worship at
                      Holy Innocents’.
                    </p>
                    <p>
                      For 2025, the application process begins in September when
                      parents are asked to complete an application form, details
                      of which can be found in the Parish Newsletter. Once an
                      application form is received, parents will be invited to
                      meet with Father Victor and the catechists at the
                      beginning of November.
                    </p>
                  </div>
                  <div className="reflection-img">
                    <Image
                      src="/assets/images/other-image/sacramental-2.jpg"
                      alt="About"
                      width={145}
                      height={331}
                    />
                  </div>
                </div>
                <p>
                  Preparation begins in November, with a Parental Preparation
                  Day, details of which can be found on the application form.
                  Preparation sessions for children begin in January and run
                  until June. The sessions take place at the church on Sunday
                  mornings during term time, followed by Mass at 10:30am, with
                  an adult accompanying their child to every session.
                </p>
                <p>
                  Contact: If you have any questions or queries please email:
                  <strong>
                    {" "}
                    <a href="mailto:holyinnocentsfhc@gmail.com">
                      holyinnocentsfhc@gmail.com
                    </a>
                  </strong>
                </p>
                <p>
                  (If you are an adult who has not received Holy Communion in a
                  Catholic church, you might like to join Journey in Faith.)
                </p>
                <p>Contact Father Victor for adults</p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">Confirmation</h2>

                <p>
                  The Sacrament of Confirmation is usually conferred by a
                  bishop. He lays his hands on those being confirmed and anoints
                  them on the forehead with holy oil. By these signs the grace
                  of their Baptism is completed. They are filled with the Holy
                  Spirit and the many gifts He has to offer, as the apostles
                  were at Pentecost, and they are united more firmly with Christ
                  and His Church.
                </p>
                <p>
                  We invite young people thinking about receiving the Sacrament
                  of Confirmation to attend Youth Alpha first, as the
                  &quot;gateway&quot; to a Confirmation journey. This is open to
                  all teenagers, from 12 and 13 year olds in Year 9 up to age
                  19.
                </p>
                <p>
                  Youth Alpha, which we run each year, offers a welcoming, fun
                  and lively environment for the young people to explore their
                  faith and to decide whether they are called to be disciples of
                  Jesus Christ. Towards the end of the Youth Alpha course, we
                  will talk to those who have not been confirmed to help them
                  decide if they are ready to be confirmed.
                </p>
                <p>
                  If they are, they will be invited to sessions to prepare them
                  for Confirmation. The celebration of Confirmation with our
                  young people is one of the highlights in the parish calendar.
                </p>
                <p>
                  The preparation of adults for the Sacrament of Confirmation
                  takes place in the context of Journey in Faith.
                </p>
                <p>
                  <strong>Contact</strong> Father Victor for adults via the
                  Parish Office for young people
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">Journey in Faith </h2>

                <p>
                  Not only babies and children come to faith in Jesus Christ,
                  receive the sacraments of initiation, and become part of our
                  Catholic community – many adults do as well. We call the route
                  that they take the &apos;Journey in Faith&apos;.
                </p>
                <p>
                  You may have little or no faith background at all; you may
                  have been baptised into the Catholic Church but not received
                  the other sacraments of initiation; or you may come from
                  another Christian tradition. Journey in Faith (or to give it
                  its formal name, the &apos;Rite of Christian Initiation of
                  Adults&apos;) can help you to learn more about Jesus and what
                  it means to be His disciple; and to explore the Catholic faith
                  in a relaxed and informal atmosphere, without any commitment.
                </p>
                <p>
                  Meetings take place weekly during school term time, usually on
                  a Monday evening from 8 pm to 9.15 pm. The meetings involve a
                  small group of &apos;enquirers&apos; and are led by Father
                  Victor and other parishioners.
                </p>
                <p>
                  <strong>Contact</strong> Father Victor
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">The sacraments of healing </h2>

                <p>
                  The Catholic Church calls the Sacrament of Reconciliation
                  (which is also referred to as &apos;Confession&apos; or the
                  &apos;Sacrament of Penance&apos;) and the Anointing of the
                  Sick (which is also referred to as the &apos;Sacrament of the
                  Sick&apos;) as &apos;sacraments of healing&apos;.
                </p>
                <p>
                  Through these sacraments, the Church continues the healing
                  work of Jesus Christ among His people.
                </p>
                <p>
                  Like everyone else, Catholics are not perfect. We lose sight
                  of God’s love for us. We do things we should not do, and we
                  fail to do things that we should. We need help to put right
                  our relationship with God and our relationships with each
                  other. By celebrating the Sacrament of Reconciliation –
                  confessing our sins to a priest, receiving absolution and
                  doing penance as a sign of our conversion – we are reconciled
                  to God and to our community.
                </p>
                <p>
                  You might think this sounds daunting, but it really is not. As
                  Pope Francis says, &apos;All should leave the confessional
                  with happiness of heart, with a face radiant with hope even
                  if, sometimes, — we know it — bathed by the tears of
                  conversion and of the joy that stems from it.&apos;
                </p>
                <p>The Sacrament of Reconciliation is available:</p>
                <ul className="section-content-ul">
                  <li className="section-content-li">
                    on Saturdays from 11 am–12 noon (only if there is a morning
                    Mass)
                  </li>
                  <li className="section-content-li">
                    on Saturdays from 5.30 pm–5.50 pm
                  </li>
                  <li className="section-content-li">
                    by appointment with Father Victor
                  </li>
                  <li className="section-content-li">
                    at our frequent penitential services.
                  </li>
                </ul>
                <p>
                  Children are prepared to receive the Sacrament of
                  Reconciliation for the first time as part of their preparation
                  for First Holy Communion. If you are an adult, the preparation
                  would normally take place in our Journey in Faith.
                </p>
                <p>
                  Catholics are required to confess grave sins at least once a
                  year. But celebration of the sacrament of Reconciliation is
                  recommended for all sins. We do not need to be grave sinners
                  for the periodic celebration of the Sacrament of
                  Reconciliation to help us on our spiritual journey. And to
                  comfort everyone who confesses, it is important to remember
                  that priests are obliged to keep secret what we tell them in
                  Confession.
                </p>
                <p>
                  <strong>Contact</strong> Father Victor
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">The Anointing of the Sick</h2>

                <p>
                  The Anointing of the Sick (sometimes called the
                  &apos;Sacrament of the Sick&apos;) brings spiritual comfort to
                  those who are seriously ill and who may be in danger of death.
                  The priest anoints the sick person with oil on the forehead
                  and on the hands, signifying the strengthening grace of God,
                  giving peace and courage. The priest also lays his hands on
                  him or her as a sign of blessing, healing of the soul and (if
                  that is God’s will) healing of the body.
                </p>
                <p>
                  Please speak to Father Victor if you, or somebody else in our
                  community, are in need of the Anointing of the Sick.
                </p>
                <p>
                  We are all in need of healing in different ways – physical,
                  mental, emotional and spiritual. That is why prayer for
                  healing is an important part of our ministry at Holy
                  Innocents. We normally hold a Healing Mass at the beginning of
                  every month (except August).
                </p>
                <p>
                  The Anointing of the Sick, as one of the seven sacraments and
                  conferred only by a priest, has a special place in that
                  ministry. ​
                </p>
                <p>
                  The Anointing of the Sick was formerly reserved for those who
                  were dying, hence previous names such as &apos;Extreme
                  Unction&apos; and the &apos;Last Rites&apos;. Now the
                  Anointing is available not just to those in imminent danger of
                  death, but to those who are seriously ill. Please speak to
                  Father Victor about this sacrament if you are facing any
                  serious illness or surgery.
                </p>
                <p>
                  <strong>Contact</strong> Father Victor
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  The sacraments at the service of communion
                </h2>

                <p>
                  The Catholic Church calls the Sacraments of Matrimony and Holy
                  Orders &quot;sacraments at the service of communion&quot;
                  because both of them are (in the words of the Catechism of the
                  Catholic Church) &quot;directed towards the salvation of
                  others; if they contribute as well to personal salvation, it
                  is through service to others that they do so&quot;.
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">Marriage</h2>
                <div className="reflection-item">
                  <div className="reflection-img">
                    <Image
                      src="/assets/images/other-image/sacramental-3.jpg"
                      alt="About"
                      width={231}
                      height={346}
                    />
                  </div>
                  <div className="reflection-text-content">
                    <p>
                      A man and a woman marry each other by expressing their
                      consent before the priest or deacon and the congregation.
                      They symbolise their union by exchanging rings. God’s
                      grace perfects the couple’s love and strengthens their
                      unity.
                    </p>
                    <p>
                      If you are reading this because you have decided to get
                      married – congratulations! There is a lot to talk about,
                      both about the practicalities of your wedding day and
                      about preparation for the life-long commitment of
                      marriage. That’s why the Diocese of Southwark requires at
                      least six months’ notice to be given before your wedding.
                    </p>
                    <p>
                      Preparation for marriage requires at least four classes,
                      one of which will be a full-day session. The remaining
                      sessions are normally in the evening at Holy Innocents’.
                    </p>
                    <p>
                      If one of you is not Catholic, he or she must request a
                      dispensation before the marriage can take place. Deacon
                      Barry will guide you through the process.
                    </p>
                    <p>
                      <strong>Contacts</strong> Deacon Barry or the Parish
                      Office{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  Holy Orders - ordination as a priest or deacon
                </h2>

                <p>
                  A man is ordained as a priest or deacon by a laying on of
                  hands by a bishop, signifying the special handing on of
                  Christ’s power. The priest is given authority to act in the
                  person of Christ by teaching, presiding at the Eucharist and
                  acting as a leader in the church community. The deacon is
                  ordained for tasks of service in the liturgical and pastoral
                  life of the Church and in charitable works.
                </p>
                <p>
                  God has blessed us over the years with wonderful priests and
                  with men from our community who have responded to His call and
                  become permanent deacons. We pray that many will follow in
                  their footsteps. If you think that you may have a calling to
                  do so, speak with Father Victor or Deacon Barry.
                </p>
                <p>
                  <strong>Contacts</strong> Father Victor or Deacon Barry
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  The consecrated life and other vocations
                </h2>

                <p>
                  God has a purpose for each of us. Each of us is encouraged to
                  think about what that purpose might be.
                </p>
                <p>
                  You may be called to the consecrated life. We are fortunate
                  indeed at Holy Innocents’ to have a community of Sisters of
                  Mercy living and working in the parish. They would be
                  delighted to talk to you about the vocation to the consecrated
                  life.{" "}
                </p>
                <p>Contacts Sister Esther via the Parish Office </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SacramentalPage;
