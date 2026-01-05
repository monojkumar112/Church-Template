import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church - History of the Parish - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const BriefHistoryPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <div className="groups-content">
              <h5> Brief history of our parish</h5>
              <p>
                The site on which the church is built was part of a 60 acre
                estate bought in 1891 by the diocese to build orphanages for
                local children. St. Joseph’s and St Anne’s orphanages were built
                in 1893 to house and educate orphans and homeless children from
                Southeast London. There were 120 boys and 146 girls living at
                these premises.
              </p>
              <p>
                Although there had been a railway station at Orpington since
                1868, the area was largely rural at that time as the map below
                shows.
              </p>
            </div>
            <div className="father-img">
              <Image
                src="/assets/images/pages/orpington-1912_orig.jpg"
                alt="Father Victor Vella"
                width={800}
                height={800}
              />
              <small className="d-flex justify-content-center pt-2  ">
                The map above shows Orpington in 1912 (from Bacon’s map of
                Greater London).
              </small>
            </div>
            <p>
              St. Mary’s Cray was the largest village in the area and the first
              railway station was built there in 1860.The only place of worship
              was at St. Mary’s at the Chislehurst Mission which had existed
              since 1852. Mass was celebrated in St. Mary’s Cray since 1873 in
              the local school, and in 1875 had its first resident priest. The
              parish bought three cottages at the junction of the High Street
              and Blacksmiths Lane and Our Lady of the Crays church was built
              next to the school.
            </p>
            <p>
              As ​prosperity grew in post-war England and social attitudes
              changed, the need for orphanages declined and in 1954 St Anne’s
              orphanage becomes a primary school and St Joseph’s a secondary
              school.
            </p>

            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <h2 className="section-title-2">Frances Ellis</h2>
                      <p>
                        In 1907 the wealthy philanthropist, Miss Frances
                        Elizabeth Ellis, provided the funds for a chapel to be
                        built in Orpington and in 1909 Holy Innocents&apos;
                        chapel opened on a site between the two orphanages.
                      </p>
                      <p>
                        The chapel served the residents of Orpington and with
                        continued population growth in Orpington, the
                        congregation increased and the chapel finally became the
                        Catholic Parish Church in 1971.
                      </p>
                      <p>
                        ​Frances Ellis was born into a wealthy family in
                        Brighton in 1846 and raised as an Anglican. She was left
                        a considerable fortune by her father, and devoted much
                        of her adult life to caring for her blind mother and
                        infirm sister. During the 1890’s, Miss Ellis began to
                        buy sites and give money to found new churches in the
                        Southwark diocese.
                      </p>
                    </div>
                    <div className="liturgy-img-item">
                      <Image
                        src={
                          "/assets/images/pages/francesellis-232x300-1_orig.jpg"
                        }
                        width={232}
                        height={300}
                        alt="leader-ship-1"
                      />
                      <small className="d-flex justify-content-center pt-2  ">
                        Miss Frances Ellis (1846-1930)
                      </small>
                    </div>
                  </div>
                  <p>
                    Although few records remain, her method seems to have been
                    to find a core group of the faithful in a “frontier” area,
                    and then to work with them and with the diocese to establish
                    a new church. Miss Ellis herself generally bought the sites,
                    as well as giving generously to the construction. The
                    prospective parishioners also contributed, as did the
                    diocese. Financial provision was made in every case for a
                    presbytery, but never for a school.
                  </p>
                  <p>
                    Miss Ellis was instrumental in setting up at least 22
                    churches in South London and others elsewhere in the
                    southeast of England, including Abbey Wood, Bermondsey,
                    Brixton, Carshalton, Catford, Charlton, Clapham, Earlsfield,
                    Forest Hill, Herne Hill, Kennington, Norbury, Norwood,
                    Nunhead, Orpington, Peckham, Stockwell, Streatham, Tooting
                    and Wallington.{" "}
                  </p>
                  <div className="father-img">
                    <Image
                      src="/assets/images/pages/st-josephs-orphanage2_orig.jpg"
                      alt="Father Victor Vella"
                      width={798}
                      height={386}
                    />
                    <small className="d-flex justify-content-center pt-2  ">
                      St Joseph&apos;s Orphanage in Sevenoaks Road, Orpington
                    </small>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">​Rebuilding the church</h2>

                  <p>
                    In 1978, the land on which the orphanages and the original
                    Holy Innocents Church stood was found to be suffering from
                    serious subsidence and the closure of the buildings became
                    necessary. The land was redeveloped as St Joseph&apos;s
                    Estate and some of the new roads were named after prominent
                    sisters and brothers associated with the old orphanages.
                  </p>
                  <p>
                    A decision was made to rebuild the church. A competition was
                    held to choose a design for the new church, parish centre
                    and presbytery, under the auspices of the Royal Institute of
                    British Architects.
                  </p>
                  <p>
                    Six entries were received, and early in 1979, the winner was
                    announced as architect Michael Blee Whittaker Partnership.
                    The architects described the design as ‘a facetted random
                    helix’, with overlapping roofs around a central cluster of
                    columns, the ‘axis mundi’. The church was surrounded by
                    ancillary spaces at the west, with the presbytery and the
                    parish centre forming a three-sided courtyard at the east.
                  </p>
                  <div className="father-img">
                    <Image
                      src="/assets/images/pages/img-7193_1_orig.jpg"
                      alt="Father Victor Vella"
                      width={1066}
                      height={800}
                    />
                    <small className="d-flex justify-content-center pt-2  ">
                      The new church under construction with St Anne&apos;s and
                      the old church behind
                    </small>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Video from 1980 of the old and new Churches
                  </h2>
                  <h2 className="section-title-2">
                    See link to video...{" "}
                    <a
                      href="https://www.youtube.com/watch?v=TjB0W6Hswrk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      holy innocents
                    </a>
                  </h2>

                  <p>
                    On 11 May 1980, Archbishop Bowen laid the foundation stone
                    in the form of a slate plinth for the tabernacle stand. In
                    October 1980, the 4 metre high terminal cross was blessed
                    and then raised to its position. On 3 August 1981, an
                    inscribed slate stone was placed south of the west entrance,
                    commemorating the completion of the church. The cost of the
                    contract was £537,320.
                  </p>
                  <p>
                    The bell from the old chapel was installed in the belfry.
                    The burials in the orphanages’ private cemetery for
                    children, priests, brothers, sisters, staff and some
                    parishioners were reinterred in the garden of the new
                    church, with a single large memorial.
                  </p>
                  <p>
                    Holy Innocents&apos; Roman Catholic Church was both
                    consecrated and opened on the same day, 20 September 1981,
                    with Archbishop Michael Bowen conducting the ceremony. In
                    his sermon, the Archbishop remarked that it was the ambition
                    of every parish priest to build a new church and he
                    congratulated Father Michael Phelan on achieving this aim.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Continuing building works</h2>
                  <p>
                    In June 1981 the clergy moved into the new presbytery.
                    However, within a month, watermarks appeared on the walls. A
                    series of remedial works followed for over 20 years, without
                    rectifying the problems of damp and water ingress. A new
                    presbytery in a sympathetic style was built at the east
                    corner of the complex and was occupied by December 2000.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Interesting features of the church
                  </h2>
                  <p>
                    ​ The church and roof are covered in Westmorland slate. The
                    church is roughly a semicircle and around the circumference
                    are ancillary spaces in low, lean-to blocks, surrounding the
                    central steeply pitched roof. The worship space is ringed by
                    three halls named St Joseph’s, Our Lady of Mercy, and
                    Trinity. The Stations of the Cross, painted rectangular
                    casts recessed into the walls, are located throughout the
                    building. ​
                  </p>
                  <p>
                    The roof structure is seven-sided, each side overlapping
                    with the next with a narrow window in between them. Panelled
                    in timber, the roof sections centre on a central cluster of
                    timber columns, the so-called ‘axis mundi’. North of the
                    sanctuary on the east wall is a three-part bronze sculpture
                    group of the Massacre of the Holy Innocents by parishioner
                    Nesta McGavin. Just to the right is a shallow niche with a
                    statue of the Virgin with the Child beside the east window.{" "}
                  </p>
                  <p>
                    The altar is a solid block of Cumbrian slate weighing about
                    two tons, and it is set on a small pedestal clad in the same
                    material. Behind the altar hangs a large timber crucifix
                    which was retained from the old church. Behind the Altar is
                    the Unity Chapel containing the tabernacle which is set
                    inside the ring of central columns, with an iron chandelier
                    above. It is set on a black slate stone on top of a tiled
                    pedestal. The slate is engraved with the inscription: ‘Love
                    one another, as I have loved you. This stone was laid by
                    Archbishop Michael Bowen on Sunday May 11, 1981. Iron and
                    glass lanterns are suspended from the roof throughout the
                    worship space.
                  </p>
                  <p>
                    The stained glass window is a permanent memorial, chosen by
                    parishioners to honour Father Michael Phelan. The design
                    shows the Holy Innocents as birds flying to the Cross. There
                    is an explanation of the memorial by the artist Margaret
                    Traherne, an internationally recognised stained glass window
                    designer, on the column to the left of the window. Just
                    below it is the Peace Window, a panel with the words ‘Pax
                    Tecum’, designed by Hugh Wootton.
                  </p>
                  <p>
                    The organ was specially designed for the new church by Herr
                    Spath of West Germany. It is a two-manual tracker action
                    pipe organ, and is particularly suited for the music of the
                    period of J S Bach. It is perfect for the accompaniment of
                    congregational singing, which it supports but cannot drown.
                  </p>
                  <div className="father-img">
                    <Image
                      src="/assets/images/pages/wedding_1_orig.png"
                      alt="Father Victor Vella"
                      width={736}
                      height={490}
                    />
                    <small className="d-flex justify-content-center pt-2  ">
                      A wedding at the church in 2012
                    </small>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2 text-center pb-5">
                    Parish Priests
                  </h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="father-img">
                        <Image
                          src="/assets/images/pages/parish-1.png"
                          alt="Father Victor Vella"
                          width={820}
                          height={880}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="father-img">
                        <Image
                          src="/assets/images/pages/parish-2.png"
                          alt="Father Victor Vella"
                          width={820}
                          height={880}
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className="section-title-2">
                    Father Michael Phelan, 1955-1984
                  </h2>
                  <p>
                    Father Michael Phelan attended St John’s seminary in
                    Wonersh, Surrey in 1932 and was ordained in 1938. He served
                    as curate at Morden for a short time until appointed
                    assistant to Father Healy at the Rescue Society. After the
                    end of the war Father Phelan was moved to Worthing where he
                    served as curate until 1955 when he was appointed Priest in
                    Charge at Holy Innocents&apos;. With Mr Bingham Towner as
                    architect, he built a new Presbytery at the far side of the
                    car park behind the church which, when the land at Orpington
                    was later sold by the Diocese, was purchased by the Sisters
                    of Mercy and is now St Anne&apos;s Convent.
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Canon John McNamara, 1984 to 1990
                  </h2>

                  <p>
                    Canon John McNamara was appointed Parish Priest of Holy
                    Innocents&apos; by Archbishop Michael Bowen in 1984 to
                    succeed Father Michael Phelan. He wrote about his own time
                    in the parish: &quot;The first concern was to clear the debt
                    on the recently built new church. The response from
                    parishioners was remarkable and it was cleared within about
                    three years. We soon instituted lay ministers of Holy
                    Communion to be followed latterly by the ordination of two
                    married Deacons, the Reverends Austin Martin and James
                    Burleigh. We also recruited a team of hospital visitors who
                    were most helpful and popular with patients. There was, and
                    still is, a vibrant sense of openness and community in the
                    congregation.&quot; Sadly Canon John had to relinquish his
                    role due to ill health, but he now lives in the parish and
                    remains a much-loved and respected member of our parish
                    community. More about Canon John McNamara
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Canon John Watts, 1991 to 2008
                  </h2>

                  <p>
                    Canon John Watts was ordained in the parish of Our Lady of
                    the Annunciation, Addiscombe, in 1972. His first two
                    curacies were at Whitstable and Camberwell. In 1978 he was
                    appointed to St. John&apos;s Seminary, Wonersh where he
                    taught for the next thirteen years. In 1991 he was appointed
                    Parish Priest to Holy Innocents’, Orpington. The following
                    year he became the Director of the Permanent Diaconate
                    Programme for the Diocese. This is a post he held until June
                    2004. In November 2004 Archbishop MacDonald appointed him
                    Dean of the Bromley Deanery. He also served on the Chapter
                    of Canons, as Canon Penitentiary; he was the Chairman of the
                    Council of Priests and an Advocate of the Southwark
                    Tribunal.
                  </p>
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/about-us"} className="custom-btn">
                  ​ Return to About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BriefHistoryPage;
