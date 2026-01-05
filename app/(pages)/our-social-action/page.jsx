"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";

const LeadershipPage = () => {
  const handleDownload = () => {
    const fileUrl =
      "/assets/files/message_re_foodbank_donal_osullivan_march_2020.pdf"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "message_re_foodbank_donal_osullivan_march_2020.pdf"; // name shown when downloading
    link.click();
  };
  const handleDownload2 = () => {
    const fileUrl = "/assets/files/parish_update_may_2018_vs_3__2_.pdf"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "parish_update_may_2018_vs_3__2_.pdf"; // name shown when downloading
    link.click();
  };
  const data = {
    title: "Leadership and co-responsibility",
    description: `Co-responsibility requires a change in mentality, particularly with regard to the role of the laity in the Church, who should be considered not as ‘collaborators’ with the clergy, but as persons truly ‘co-responsible’ for the being and activity of the Church  - Pope Benedict XVI`,
  };
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <div
              className="section-content-list"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="groups-content">
                <h5> Our social action</h5>
                <p>
                  An authentic faith – which is never comfortable or completely
                  personal – always involves a deep desire to change the world,
                  to transmit values, to leave this earth somehow better that we
                  found it - Pope Francis
                </p>
              </div>
              <p>
                ​​Jesus healed lepers and blind beggars. He ate with sinners and
                invited himself to dinner with Zacchaeus, the hated tax
                collector. He chatted amicably with an outcast Samaritan woman.
                In these and many other ways, He reached out to those on the
                margins of society; to people whom others would prefer to
                forget. And He calls on us to do the same.
              </p>
              <p>
                This is why social action is such an important part of our
                mission at Holy Innocents’, as it is for every Catholic parish.
                We can’t meet every need in the world; but that doesn’t stop us
                trying to do what we can.
              </p>
              <p>
                In this section, you can read about various social action groups
                and causes which are supported by people in the parish. As you
                can see, they give the people of Holy Innocents’ many different
                ways of becoming involved; new members and supporters for these
                various groups and activities are always welcome.
              </p>
              <p>
                But they tell only part of the story. Hardly a week goes by
                without our parishioners responding generously to appeals for
                money or practical help from many other good causes. In recent
                times, these have ranged from overseas missions to local women’s
                refuges, from supporting Palestinian Christians and parishes in
                other parts of the world to thinking about how we can help those
                in our community who suffer from issues related to their mental
                well-being.
              </p>
            </div>
            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Bromley Borough Foodbank</h2>
                  <p>
                    Holy Innocents’ is a strong supporter of the{" "}
                    <span>
                      {" "}
                      <a
                        href="https://bromleyborough.foodbank.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bromley Borough Foodbank
                      </a>{" "}
                    </span>
                    , recognising the great work it does in providing for those
                    in need in the area. We have weekly collections of items
                    which are delivered to the food bank and we also provide
                    support in response to specific requests and holiday needs
                    such as at Easter and Christmas.
                  </p>
                  <p>
                    Contact Donal O&apos;Sullivan or via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                  <p>See pdf below for urgent update March 3 2020</p>
                  <div className="d-flex align-items-center gap-2 mt-3 mb-4">
                    <FaRegFileAlt size={30} />
                    <button onClick={handleDownload} className="custom-btn">
                      Download File
                    </button>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Catholic Fund for Overseas Development (CAFOD)
                  </h2>
                  <div className="liturgy-item-list ">
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/cafod-tab-logo.gif"}
                        width={152}
                        height={63}
                        alt="leader-ship-1"
                      />
                    </div>
                    <div className="liturgy-item-contents">
                      <p>
                        Our local branch of CAFOD supports the work of this
                        leading Catholic aid agency, raising funds to support
                        appeals for help in the developing world and raising
                        awareness of the continuing needs. The parish
                        enthusiastically supports CAFOD’s Lenten and other Fast
                        Day appeals and there is a slot for donations in the
                        interior porch by the newspapers.
                      </p>
                    </div>
                  </div>
                  <p>
                    CAFOD is the official Catholic aid agency for England and
                    Wales. Across the world it brings hope and compassion to
                    poor communities, standing side by side with them to end
                    poverty and injustice. CAFOD works with people of all faiths
                    and none.
                  </p>
                  <p>
                    Inspired by the Word of God and Catholic social teaching,
                    and the experiences and hopes of people living in poverty,
                    CAFOD works for a safe, sustainable and peaceful world.
                  </p>
                  <p>
                    <strong>Contact</strong> The{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Catholic Women&apos;s League (CWL)
                  </h2>
                  <p>
                    The CWL unites Catholic women in friendship and encourages
                    members to use their skills and talents in the service of
                    the Church and the community at local, national and
                    international levels.
                  </p>
                  <p>
                    We have an active CWL section in the parish. It does lots of
                    fundraising for various causes and is also involved in our
                    prayer life, for example inviting parishioners into members’
                    homes during May to pray the rosary together.
                  </p>
                  <p>
                    CWL meetings are held at 2pm on the last Thursday of each
                    month other than August and December. There is a short
                    business meeting followed by social meeting, which may
                    include a speaker or demonstration. The programme of
                    meetings is displayed on the noticeboard in the church.
                    (Noticeboard is pending.)
                  </p>
                  <p>
                    <strong>Contact</strong>Gerry Fane via the
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Churches Together In Orpington (CTIO)
                  </h2>
                  <p>
                    Holy Innocents’ is proud to be part of Churches Together in
                    Orpington, which brings together the Christian churches in
                    the Orpington area. CTIO is responsible for various
                    initiatives, including Street Pastors, and also organises an
                    annual Walk of Witness on Good Friday. For over 30 years we
                    have hosted an annual Epiphany Carol Service for CTIO,
                    involving many of the member churches.
                  </p>

                  <p>
                    <strong>Contact </strong> Cecilia Skudder via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Hospital ministry</h2>
                  <p>
                    A small team of our eucharistic ministers visits Catholic
                    patients in our local hospitals and distributes Holy
                    Communion to them, usually on Thursday and Sunday each week.
                    This pastoral service to those in need is a natural
                    extension of the eucharistic ministry of the parishioners
                    involved.
                  </p>

                  <p>
                    <strong>Contact</strong> Roni Brand (for Thursdays)via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Justice and Peace Group</h2>
                  <p>
                    Our Justice and Peace group seeks to raise the profile and
                    increase awareness of these important aspects of Christian
                    theology and how they should impact on our daily lives. It
                    aims to act as a catalyst within the parish for encouraging
                    projects centring on the idea of &quot;Living Simply&quot;,
                    building on the themes developed by Pope Francis in his
                    encyclical Laudato Si.
                  </p>
                  <p>
                    ​The Group also works towards enhancing the support we
                    already provide as a parish to particular communities in
                    other parts off the world; and finding ways to help those
                    nearer to home who are enduring the privations of poverty
                    and homelessness.
                  </p>
                  <div className="d-flex get-involoed-its gap-3">
                    <p>
                      <strong> Contact</strong>
                    </p>{" "}
                    <p>
                      Russell Brockett (020 8467 8931 or via the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      )
                      <br />
                      Ian Wilson (07753621069 or via the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      )
                    </p>
                  </div>
                  <p>
                    See pdf below on Parish update on Living Simply <br />
                    May 2018
                  </p>
                  <div className="d-flex align-items-center gap-2 mt-3 mb-4">
                    <FaRegFileAlt size={30} />
                    <button onClick={handleDownload2} className="custom-btn">
                      Download File
                    </button>
                  </div>
                </li>

                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Missio (formerly APF or the Association for the Propagation
                    of the Faith)
                  </h2>
                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <p>
                        Nearly 100 parishioners are members of Missio,
                        supporting the overseas missions by their prayer and by
                        their financial donations collected in the familiar red
                        boxes, ideal for small change (or unwanted National
                        Lottery winnings!).
                      </p>
                    </div>
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/missio-logo.jpg"}
                        width={297}
                        height={92}
                        alt="leader-ship-1"
                      />
                    </div>
                  </div>
                  <p>
                    Missio is part of a worldwide fundraising body. It plays a
                    crucial role supporting the local Church overseas and
                    sharing the light of Christ by training priests, building
                    churches and combating injustice, disease, poverty and
                    exploitation in 157 countries.
                  </p>
                  <p>
                    Members return their red boxes for the contents to be
                    collected and counted each spring and autumn; and receive
                    the magazine Mission Today.
                  </p>
                  <p>
                    <strong>Contact </strong> <strong>Moira Kelly via</strong>{" "}
                    the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    St Vincent de Paul Society (SVP)
                  </h2>

                  <div className="liturgy-item-list pb-4 align-liader">
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/svp-logo-new.jpg"}
                        width={224}
                        height={101}
                        alt="leader-ship-1"
                      />
                    </div>
                    <div className="liturgy-item-contents">
                      <p>
                        The SVP is an international Christian voluntary
                        organisation dedicated to tackling poverty and
                        disadvantage by providing practical assistance to those
                        in need. Our local branch (or ‘Conference’) of the SVP
                        is very active and well-supported by the parish. Members
                        visit and support one-parent families, re-housed
                        persons, the frail or vulnerable elderly and young,
                        fugitives from violent relationships or societies, and
                        immigrant refugees.
                      </p>
                    </div>
                  </div>
                  <p>
                    An annual appeal for funds is made to the parish. Monies
                    donated in response to that appeal and at other times are
                    spent helping those who are being visited, either for
                    necessary items or vouchers, during the year or at
                    Christmas; and support is given to parishes in India with
                    which we are twinned.
                  </p>
                  <p>
                    Our local Conference meets on one Wednesday evening a month
                    at 7.30 pm in the Parish Centre.
                  </p>
                  <p>
                    Holy Innocents&apos; is ‘twinned’ with St. Augustine’s &
                    Infant Jesus Conferences, both in Kerala, India. We have
                    supported several projects there, such as providing sewing
                    machines, goats, education and interest-free loans to
                    families to set them up in business. See our St
                    Augustine&apos;s Housing project.
                  </p>
                  <p>
                    ‘Friends of the SVP’ has been launched by the SVP for those
                    wishing to make annual donations. You can find a “Become a
                    Friend” form in the church porch and an application form
                    will be sent to you, or you can apply directly to SVP (5th
                    Floor 291-299 Borough High St, London SE1 1JG; tel: 020 7407
                    4644 or by email).{" "}
                  </p>
                  <p>
                    Contact{" "}
                    <span>
                      <Link href={"/contact-us"}> ​Father Victor</Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    ​Minnie Vinnies (Branch of Young Vincentians){" "}
                  </h2>
                  <p>
                    The Parish Mini Vinnies were commissioned at the end of
                    September 2019. <br /> Aged between the age of 7 and 11
                    years they usually meet after 10am Mass every Sunday.
                  </p>
                  <p>
                    Mini Vinnies is about doing good works in the community, but
                    it is also about young people meeting to talk and share
                    ideas and concerns, to have fun and to support each other.{" "}
                    <br />
                    The Vinnies model of ‘See, Think, Do’ is a great way to get
                    young people thinking and talking about their spirituality;
                    by connecting their beliefs and values with service
                    activities and issues in their community, they can help make
                    their faith real, meaningful and relevant.
                  </p>
                  <p>
                    Typically the group will meet regularly and will set goals
                    on what they want to do and achieve. The group will look at
                    why they need to do something and how they will do it.
                  </p>
                  <p>
                    During this time of lock down and isolation we have been
                    unable to meet. <br /> SVP Youth team have been adding
                    activities to the SVP Mini Vinnies hub.
                  </p>
                  <p>
                    These activities are accessible through the link{" "}
                    <span>
                      <a
                        href="https://www.svp.org.uk/mini-vinnies/activities"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.svp.org.uk/mini-vinnies/activities
                      </a>
                    </span>
                  </p>
                  <p>
                    <strong>Contact </strong>{" "}
                    <strong>
                      {" "}
                      <span>
                        <Link href={"/contact-us"}> Parish office</Link>
                      </span>{" "}
                    </strong>
                  </p>
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/mission"} className="custom-btn">
                  Back to Our mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;
