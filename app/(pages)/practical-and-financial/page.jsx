import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church  - Practical and Financial Fellowship - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const PracticalAndFinancialPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div
            className="leader-ship-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="groups-content">
              <h5>Practical and financial groups and activities</h5>
              <p>
                Now you are Christ’s body, and individually parts of it. Some
                people God has designated in the church to be, first, apostles;
                second, prophets; third, teachers; then, mighty deeds; then
                gifts of healing, assistance, administration, and varieties of
                tongues - 1 Cor 12:27-28
              </p>
            </div>
            <p>
              ​A parish, like any other organisation, needs people to deal with
              practicalities – which is why Saint Paul includes
              &apos;administration&apos; in his list of gifts with which God
              blesses His Church.
            </p>
            <p>
              In this section, we introduce some of the groups of people who
              deal with a myriad of important practical and financial matters
              here at Holy Innocents&apos;. You would be very welcome if you
              would like to help.
            </p>

            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Cleaners</h2>

                  <p>
                    One set of volunteers comes in on Saturday morning to keep
                    the interior of our church, halls and porch area clean,
                    maintain the holy water and votive candles, and set out
                    extra chairs for Sunday Masses. A second group regularly
                    cleans the sanctuary area; and a separate rota of volunteers
                    keep our beautiful altar linen clean and ironed.
                  </p>
                  <p>
                    There is a rota for the Saturday morning cleaners. Each
                    volunteer is attached to a group, which is asked to clean
                    about once a month.
                  </p>
                  <div className="d-flex get-involoed-its gap-3">
                    <p>
                      <strong> Contact</strong>
                    </p>{" "}
                    <p>
                      Louise Munro via the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      for the sanctuary cleaners
                      <br />
                      The{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      for the Saturday cleaners
                    </p>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Collection counters</h2>
                  <p>
                    We are fortunate to have a generous parish, which means a
                    lot of notes and coins to be counted and prepared for
                    banking after every weekend Mass. Our collection counters
                    meet each week to do the counting, record amounts included
                    in Gift Aid envelopes (which support the reclaim of income
                    tax already paid) and arrange for the banking of the cash
                    that has been collected.
                  </p>
                  <p>
                    <strong> Contact</strong>{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>{" "}
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Finance Committee</h2>
                  <p>
                    Every parish is required by canon law to have a finance
                    committee.
                  </p>
                  <p>
                    Our parish Finance Committee works with Father Victor to
                    manage the parish’s money, property and resources; to set
                    and manage the parish budget; and to report our annual
                    accounts to the Diocese. The committee meets around six
                    times a year.
                  </p>
                  <p>
                    The Finance Committee constructs a budget, monitors in-year
                    expenditure, ensures that accounts are complete and
                    accurate, makes sure that the annual returns to the Diocese
                    are complete and audited, and exercises appropriate internal
                    controls over the parish accounts.
                  </p>
                  <p>
                    <strong> Contact</strong> Maria Nethercott via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                    )
                  </p>{" "}
                </li>

                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Fire wardens</h2>{" "}
                  <div className="liturgy-item-list pb-4 align-liader">
                    <div className="liturgy-item-contents">
                      <p>
                        It is important that we consider fire and other safety
                        issues on a continuing basis, particularly before each
                        major celebration, and that we have people on hand who
                        know what to do in an emergency.
                      </p>
                      <p>
                        <strong>Contact</strong> via the{" "}
                        <span>
                          <Link href={"/contact-us"}>Parish Office </Link>
                        </span>{" "}
                      </p>
                    </div>
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/fire-warden.jpg"}
                        width={110}
                        height={146}
                        alt="leader-ship-1"
                      />
                    </div>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Gardeners</h2>
                  <p>
                    A group of volunteers meet every Wednesday morning at 8.45
                    am, weather permitting, to spend a couple of hours keeping
                    the grounds of our church tidy and attractive. This involves
                    trimming the hedges, mowing the lawns, weeding and keeping
                    the paths and car park clear of leaves.
                  </p>
                  <p>
                    No green fingers are required, just a willingness to help
                    keep our parish grounds beautiful. A good way to keep fit,
                    meet other gardeners and enjoy the great outdoors.
                  </p>
                  <p>
                    <strong> Contact</strong> Mick Low via the{" "}
                    <span>
                      <Link href={"/contact-us"}> Parish Office </Link>
                    </span>{" "}
                    )
                  </p>{" "}
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Gift Aid</h2>
                  <div className="liturgy-item-list pb-4 align-liader">
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/gift-aid-it-imageg.png"}
                        width={267}
                        height={127}
                        alt="leader-ship-1"
                      />
                    </div>
                    <div className="liturgy-item-contents">
                      <p>
                        As with every charitable organisation, an important
                        element of our income as a parish is provided through
                        the government&apos;s Gift Aid scheme. This allows the
                        church to reclaim 25p on every £1 donated by a UK
                        taxpayer who has signed the relevant form.
                      </p>
                    </div>
                  </div>
                  <p>
                    <strong> Contact</strong> Paul Simmer{" "}
                    <span>
                      <a href="mailto:orpingtongac2@rcaos.org.uk ">
                        orpingtongac2@rcaos.org.uk
                      </a>
                    </span>{" "}
                    or via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                    )
                  </p>{" "}
                  <p>
                    Download the{" "}
                    <span>
                      <Link href={"/giftaid"}>Gift Aid form</Link>
                    </span>{" "}
                    and details with{" "}
                    <span>
                      <a
                        href="/assets/files/Gift_Aid_QR_Code.pdf"
                        download="Gift_Aid_QR_Code.pdf"
                      >
                        QR Code
                      </a>
                    </span>
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Pamphlets and periodicals</h2>

                  <p>
                    Catholic Truth Society (CTS) pamphlets are available in the
                    racks near the front door of the church, along with a wide
                    range of Christian information.
                  </p>

                  <div className="d-flex get-involoed-its gap-3">
                    <p>
                      <strong> Contact</strong>
                    </p>{" "}
                    <p>
                      via the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      for pamphlets for the sanctuary cleaners
                      <br />
                      The{" "}
                      <span>
                        <Link href={"/contact-us"}> Parish Office </Link>
                      </span>
                      for periodicals
                    </p>
                  </div>
                </li>

                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Parish premises and Parish Complex
                  </h2>
                  <p>
                    ​Over the years, the state of our church buildings had been
                    a matter of constant concern. For a number of years now,
                    building a new Parish Complex to replace the ageing Parish
                    Centre attached to the main church building had to be
                    deferred, with priority being given to major, and costly,
                    roof and other repairs.
                  </p>
                  <p>
                    Our new Parish Complex, with the benefit of a loan from the
                    Diocese, was completed in 2020.
                  </p>
                  <p>
                    Thank you to a group of parishioners who brought their
                    professional and other skills to bear in dealing with
                    continuing maintenance issues and taking forward the idea of
                    the new Parish Complex.
                  </p>
                  <p>
                    <strong> Contact</strong> via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                    for maintenance )
                  </p>{" "}
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Safeguarding Team</h2>
                  <p>
                    We take safeguarding of our children and vulnerable adults
                    very seriously. Clear diocesan guidelines are available to
                    those who may be affected, and we enforce these as
                    necessary.
                  </p>
                  <p>
                    Anyone who takes on a ministry at Holy Innocents’, or on
                    behalf of the parish, with children or vulnerable adults
                    needs to be cleared through the Disclosure and Barring
                    Service (previously known as a CRB check). Our Safeguarding
                    Team works with Father Victor on these matters.
                  </p>
                  <p>
                    ​Read the{" "}
                    <a
                      href="/assets/files/child_protection_concerns.pdf"
                      download="child_protection_concerns.pdf"
                    >
                      Concerns
                    </a>{" "}
                    document if:
                  </p>
                  <ul className="section-content-ul">
                    <li className="section-content-li">
                      you have concerns about the way a child or vulnerable
                      adult is being treated, or
                    </li>
                    <li className="section-content-li">
                      you are a child who needs someone to talk to, or
                    </li>
                    <li className="section-content-li">
                      you need advice on child or vulnerable adult safeguarding
                      issues.
                    </li>
                  </ul>
                  <p>
                    ​We also have{" "}
                    <a
                      href="/assets/files/child_protection_guidelines.pdf"
                      download="child_protection_guidelines.pdf"
                    >
                      Guidelines
                    </a>{" "}
                    on working with children and young people within the parish
                    which we require those who work in relevant areas to adhere
                    to.
                  </p>
                  <p>
                    If groups or individuals wish to take children or young
                    people from the parish on an outing, they must first consult
                    with Father Victor. After approval is granted, use our
                    adaptable{" "}
                    <a
                      href="/assets/files/child_protection_model_consent_form.pdf"
                      download="child_protection_model_consent_form.pdf"
                    >
                      Model Consent Form
                    </a>{" "}
                    .
                  </p>
                  <p>
                    <strong> Contact</strong> Andrew Leong Safe-guarding
                    orpingtonsg3@safeguardrcaos.org.uk or via the
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>{" "}
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Website and Communications Team
                  </h2>
                  <div className="liturgy-item-list pb-4 align-liader">
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/holy-innocents-logo-rgb.jpg"}
                        width={117}
                        height={140}
                        alt="leader-ship-1"
                      />
                    </div>
                    <div className="liturgy-item-contents">
                      <p>
                        The Communications Team manages the content and
                        development of our newsletter, porch noticeboards,
                        website and Facebook page.
                      </p>
                      <p>
                        Our website is one of our main means of communication
                        with visitors, potential new members and existing
                        parishioners.
                      </p>
                    </div>
                  </div>
                  <p>
                    <strong> Contact</strong> Chair of the Communications Team
                    <span>
                      <a href="mailto:orpingtoncc@rcaos.org.uk">
                        orpingtoncc@rcaos.org.uk
                      </a>
                    </span>{" "}
                  </p>{" "}
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/fellowship"} className="custom-btn">
                  Return to Our Fellowship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticalAndFinancialPage;
