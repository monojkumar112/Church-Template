"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";

const PrayerIntentionsPage = () => {
  const handleDownload = () => {
    const fileUrl = "/assets/files/all_saints_yc_2025.docx"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "all_saints_yc_2025.docx"; // name shown when downloading
    link.click();
  };
  const handleDownload2 = () => {
    const fileUrl = "/assets/files/cto_prayers_for_november_2025.docx"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cto_prayers_for_november_2025.docx"; // name shown when downloading
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
            <div className="groups-content-pryer">
              <h2 className="section-title-2">Prayer intentions</h2>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/pages/preyer-1.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Pope Leo X1V</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="team-item">
                    <div className="team-img">
                      <Image
                        src={"/assets/images/pages/preyer-2.png"}
                        width={419}
                        height={419}
                        alt={"Team Member"}
                      />
                    </div>
                    <div className="team-content">
                      <h3>Archbishop of Southwark John Wilson</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    The Holy Father&apos;s prayer intentions for this month
                  </h2>

                  <p>
                    NOVEMBER <br /> For the prevention of suicide. <br /> Let us
                    pray that those who are tempted to commit suicide might find
                    the support, care and love they need in their community, and
                    be open to the beauty of life
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Cycle of Prayer Intentions Ordinary Time (Autumn){" "}
                  </h2>

                  <p>
                    Students and Teachers: especially on Education Day (Second
                    Sunday in September)
                  </p>
                  <p>
                    For the spread of the Gospel:- especially in England & Wales
                    on Evangelii Gaudium (Home Mission) Sunday (3rd Sunday in
                    September & on World Mission Day, (Penultimate Sunday in
                    October)
                  </p>
                  <p>
                    For the Harvest, the Fruits of Human Work & for the Reverent
                    Use of Creation:- especially on World Day of Prayer for the
                    Care of Creation (1st September) and on the Sunday between
                    22nd & 28th September or whenever Harvest Festivals are
                    held.
                  </p>
                  <p>
                    For Justice & Peace in the World:- especially on Harvest
                    Fast Day (CAFOD), (1st Friday in October)
                  </p>
                  <p>
                    For All Victims of War:- especially on Remembrance Sunday
                    (2nd Sunday in November)
                  </p>
                  <p>
                    For Young People:- especially on Youth Day (Christ the King)
                  </p>
                  <p>
                    For Prisoners and their Families:-especially on the Day of
                    Prayer for Prisoners and their families (2nd Sunday in
                    October) and during Prisons’ Week ( 2nd week in October)
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Bidding prayers</h2>
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
                    ​Prayer Intentions for Churches Together Orpington (CTO)
                  </h2>
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
                    For your friends who are sick
                  </h2>
                  <p>
                    We remember in our prayers the sick, the housebound and
                    their carers.
                  </p>
                  <p>
                    We remember in our prayers the sick, the housebound and
                    their carers. <br /> In particular, we pray for: In
                    particular, we pray for: Martha Hall, Vera Greene, Miriam
                    Cappelle, Marie-Stella Polloni-Watson, Joanna Noss, Luisa
                    Capp, Jo James, Mary Hayes, Alan Ruel, Shirley Warner,
                    Brenda Connelly, Conrad Goveas, Mary MacPherson and all in
                    hospital.
                  </p>
                  <p>
                    Please contact Father Victor if you know of a parishioner
                    who is ill, injured or in hospital, or notice that someone
                    has not been in contact for a while.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Recently died</h2>
                  <p>
                    Monica Andrews RIP, Terri Goodman RIP; Sandra Nertney RIP
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    ​ Deceased Anniversaries .... Rest in Peace 7th - 14th
                    November incl.
                  </h2>
                  <p>
                    Bridget Mulvihill, Albert King, Patricia Keown, Felicita
                    Enoch, Ethel Tomes, Lewis Webster, Bridget Bell, Claire
                    Merry, Frances Merron, Amedeo Pini, Alex Simmons and Betty
                    Dougal,
                  </p>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Parishioner&apos;s Personal Intentions
                  </h2>
                  <p>
                    6th November 2025 <br />
                    We pray in thanksgiving for all priests, especially the
                    newly ordained, that they be given the strength to live up
                    to their vocation, enthuse their congregations and lead many
                    to Christ. May many more vocations be given for the
                    priesthood and religious life. Amen.{" "}
                  </p>
                  <p>
                    6th November 2025
                    <br />
                    We pray for those seeking legal asylum or permission to stay
                    in the UK. May they receive a just decision and be given
                    financial help. Amen.
                  </p>
                  <p>
                    6th November 2025 <br /> We pray for those who are hurting
                    from humiliation, particularly in childhood. May the Lord
                    console and comfort them and save them from all dangers.
                    Amen.
                  </p>
                  <p>
                    6th November 2025 <br /> ​We pray for all those with mental
                    health problems, especially those suffering from dementia.
                    May the Lord send His healing love on them and their caring
                    families. Amen.{" "}
                  </p>
                  <p>
                    6th November 2025 <br /> We pray for all expectant mothers,
                    that their babies will be delivered safely with no harm to
                    child or mother. Amen.{" "}
                  </p>
                  <p>
                    6th November 2025 <br /> We pray for recovering addicts,
                    that the Lord will strengthen them in their resolve against
                    falling back into the use of drugs or alcohol. Amen.
                  </p>
                  <p>
                    6th November 2025 <br /> ​We pray for those grieving for
                    lost loved ones. May they be consoled in their loss. Amen.
                  </p>
                  <p>
                    6th November 2025 <br /> ​We pray for the homeless. May they
                    be given help and be safe at all times. Amen.
                  </p>
                  <p>
                    6th November 2025 <br />
                    We pray for the repose of the souls of parishioners who have
                    recently died. May they rest in peace and their families be
                    consoled in their loss. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for many more parishioners
                    to join in a cell and realise the benefits and joys from
                    belonging and how it will help them in evangelising. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for all those who receive
                    no respect from those who hold racist attitudes. May all
                    mankind see the oneness of us all under God. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for those at risk of
                    domestic violence. May they be safe from any harm, the
                    abusive partner seeking help. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the seriously ill of
                    the parish and for those awaiting surgery. May the Lord heal
                    them and make surgery possible soon. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for all those who died
                    recently. May the Lord have mercy on their souls and give
                    consolation and comfort to the grieving families and
                    friends. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray that all peoples will
                    receive the blessings of the Lord, which will lead all to
                    salvation with the Holy Spirit touching all hearts, bringing
                    them to repentance and conversion. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for all marriages, that all
                    work along with Christ and never be separated because of any
                    marital crisis. We pray that all the decisions made are to
                    strengthen unions, marriages, inner healing, concerns and
                    emotional injuries. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> ​I ask for prayers for my wife, her
                    health (hair loss) and our marriage. For a house for the
                    family we are building. For my work, the conversion of my
                    bosses and that we do not lack clients. For the priest who
                    guides me, E, T and his needs. For the health of all of us
                    (my eyes/sight). Thank you very much for your prayers. Thank
                    you from the bottom of my heart. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray heavenly Father, help me,
                    You know my pain, You always know what was happened because
                    You see everything from a most hidden corner. I come with a
                    broken heart, Father, You know how long I have waited a
                    reconciliation for me and him. God if you deign, please God
                    soften and touch the heart of the person to whom I refer. I
                    can’t touch his heart, but Lord you can. Please bless those
                    who hate me, don&apos;t let their hatred make them proud.
                    God You are able to do all things. You are God my Saviour,
                    and my hope is in You all day long. Please make this miracle
                    happen for me. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the people of the
                    Ukraine, may justice and peace be given to this country at
                    War, saving them from further harm from unwarranted
                    aggression. May the Lord protect those fleeing and may other
                    countries give them safe haven. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for those who choose to
                    take their own lives. May the Lord have mercy on their souls
                    and grant the family and friends consolation in their grief.
                    Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for more vocations to the
                    Priesthood, that men who are being called will respond to
                    the Lord&apos;s invitation. Amen.{" "}
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for our politicians that
                    they respect each other, not hurt each other but work
                    together for the greater good of the Country. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the seriously ill and
                    ask for their healing and peace in all hearts. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the repose of the souls
                    of the dead and for the consolation of grieving families.
                    May the Lord comfort them. Amen.
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the people in Ukraine
                    that God will find a way to help them and bring them the
                    succour they so desperately need for their families. May the
                    Lord bring peace to this troubled land. May those who wage
                    war change their hearts to realise the error of their ways.
                    Amen
                  </p>
                  <p>
                    30th October 2025 <br /> We pray for the son of a
                    parishioner who has a serious bowel disease. May the Lord
                    heal him in mind and body. Amen
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray the assisted dying bill
                    will not become Law, that all people will recognise the
                    dignity of every human life. Amen.
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for forgiveness that the UK
                    parliament has passed a law decriminalising abortion up to
                    birth.{" "}
                  </p>
                  <p>
                    23rd October 2025 <br /> ​We pray for T and his wife, that
                    they be blessed with a baby. Amen.{" "}
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for the Churches Together
                    (CTO) Mission in Orpington for every believer to invite
                    someone to a Mass or service, that the Lord will touch
                    hearts and bring many to know and love Him. Amen.{" "}
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for parishioners waiting
                    for treatment, that surgery and other forms of care take
                    place without any further delay. Amen.
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for a lady who would like
                    to have faith. May the Holy Spirit find a way to grant this
                    lady&apos;s wish. Amen.
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for a parishioner, that he
                    will be healed from his affliction and return to good
                    health. Amen.
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray that our nation will turn
                    back to Jesus to accept Him as Lord and live in His way,
                    helping the marginalised and the most vulnerable. Amen
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray that knife and gun crime
                    will cease, that differences will be discussed without
                    resort to violence and the Lord will have mercy on all
                    victims and comfort the grieving. Amen.{" "}
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for the parents of all who
                    have lost children at any stage of pregnancy, childhood or
                    adulthood. May all be consoled in their grief at their loss.
                    Amen.
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray that the Holy Spirit will
                    fill all hearts with zeal and love for the Lord. Amen.{" "}
                  </p>
                  <p>
                    23rd October 2025 <br /> We pray for the sick and
                    housebound, that they be safe and well. Amen.{" "}
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for those seeking homes,
                    that their search be successful and landlords only charge a
                    just and fair rent. Amen
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for those seeking
                    employment that the right job will be available to them
                    Amen.
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for the souls of recently
                    died parishioners. May the Lord comfort their grieving
                    spouses and family. Amen.
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for the persecuted Church,
                    that the Lord protects His faithful and changes the hearts
                    of their oppressors. Amen.
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for those who have not
                    returned to regular attendance at Mass, that they realise
                    all precautions are being taken for their safety and the
                    Lord is waiting for them, but being understanding of their
                    fear we pray for their peace of mind. Amen.{" "}
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for those who are having
                    surgery and or treatments for cancer and other ailments. May
                    the Lord guide comfort and support the patients and their
                    families. Amen.{" "}
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for those receiving
                    diagnosis of disease with a poor prognosis. May the Lord
                    heal, comfort and support them through all the difficulties
                    ahead to give them the peace of Christ. Amen
                  </p>
                  <p>
                    16th October 2025 <br /> We pray for all new births
                    especially if the child has life-affecting health issues.
                    May the Lord help the families through any difficulties that
                    may lay ahead. Amen.
                  </p>
                  <p>
                    9th October 2025 <br /> We pray for peace particularly
                    between Palestine and Israel, that forgiveness, true
                    penitence and Justice will reign and God&apos;s love will
                    touch every heart to bring about reconciliation of
                    differences. Amen{" "}
                  </p>
                  <p>
                    9th October 2025 <br /> ​We pray for those who are suffering
                    mental stress. May they receive the support and care they
                    need, Amen
                  </p>
                  <p>
                    9th October 2025 <br /> We pray for those people who have
                    turned away from their faith. May the Holy Spirit lead them
                    back to Him to find the love of God is there for them
                    always. Amen.
                  </p>
                  <p>
                    9th October 2025 <br /> May we recognise when certain
                    relationships are not healthy for the integrity of our souls
                    and curtail them. Amen,.
                  </p>
                  <p>
                    9th October 2025 <br /> We pray for those grieving for loved
                    ones who have died by suicide. May the Lord have mercy on
                    the souls of those who have died and grant consolation and
                    peace to those grieving. Amen
                  </p>
                  <p>
                    9th October 2025 <br /> ​We pray for those in pathological
                    grief, may they be consoled and comforted and move on in
                    their lives to come to terms with their loss. Amen.
                  </p>
                  <p>
                    9th October 2025 <br /> We pray for peace between Israel and
                    Palestine, that a willingness on both sides will seek
                    reconciliation and justice for all residents of that
                    beleaguered land. Amen.{" "}
                  </p>
                  <p>
                    9th October 2025 <br /> We pray for the unemployed, those
                    who have mounting debts and face hardships, that they find
                    gainful jobs and rebuild their lives. Amen.
                  </p>
                  <p>
                    9th October 2025 <br /> Father you say, ask and it will be
                    given to you; seek and you will find; knock and the door
                    will be open to you. God, You always know what was happened
                    because You see everything in a most hidden corner, I come
                    with a broken heart, I depend on you and still hope, if God
                    deign, please God soften and touch the heart of D for me.
                    Amen
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for the souls of Charles,
                    Robin, Hannah, Lucy, Brigid, friends of parishioners. May
                    the Lord console and comfort the grieving and have mercy on
                    those who have died. Amen.{" "}
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for those who are grieving.
                    May the Lord comfort and console them. Amen.{" "}
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray that all will be able to
                    trust in God&apos;s love and mercy, keep the faith and
                    continue to pray when things in their lives are stressful
                    and hard to understand. Amen.
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for those suffering from
                    dementia. May the Lord send His Holy Spirit down on them to
                    heal, comfort and support them, bringing their families
                    strength and consolation at this so difficult time. Amen{" "}
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for Paul, friend of
                    parishioner, who has had both legs amputated. May the Lord
                    comfort Paul and give him the strength he needs to recover
                    and learn to walk again. May the family be supported as they
                    care for him. Amen.{" "}
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray that the parishioners are
                    inspired by the Lord to visit a Parish Evangelisation Cell
                    meeting so they will realise just how their spiritual life
                    will be enhanced by becoming a member. Amen
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for Ernesto and Yasmine,
                    that they come to know, love and accept Jesus Christ as
                    their Lord and Saviour. Amen
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for the soul of Humberto
                    Ernesto, may he rest in peace in the glory of our God. Amen
                  </p>
                  <p>
                    2nd October 2025 <br /> We pray for unborn babies that they
                    remain safe in their mother&apos;s womb and that all will
                    acknowledge the wonderful gift for God that they are and
                    life is sacred from conception to natural death. Amen
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for the repose of the
                    soul of ML and the consolation and comfort of his wife and
                    family. Amen.{" "}
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for those with mental
                    health issues, that they be reassured by the Lord and be
                    consoled and comforted. Amen
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for the sick in the
                    parish, that the Lord will bring them healing and comfort
                    those that care for them. Amen .
                  </p>
                  <p>
                    25th September 2025 <br /> We pray that those living
                    together have harmony in their lives and not discord. May
                    all appreciate and care for each other. Amen.
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for those suffering from
                    dementia and their carers. May the Lord console those who
                    see their loved ones so forgetful that even their spouse is
                    unknown to them. May the Lord comfort all the family at this
                    difficult time. Amen.{" "}
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for all Countries of the
                    world, that the people be allowed to be democratic and go
                    about their lives in safety. Amen
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for the persecuted in all
                    parts of the world, that they be protected and cared for and
                    be allowed to practice their faith in safety. Amen
                  </p>
                  <p>
                    25th September 2025 <br /> We pray that all councils will
                    work for the benefit of the common good, help those in dire
                    need and act judiciously in all matters. Amen.
                  </p>
                  <p>
                    25th September 2025 <br /> We pray for the repose of the
                    soul of R, friend of parishioners, who has died. We pray for
                    comfort and consolation for his wife, son, family and all
                    friends. Amen
                  </p>
                  <p>
                    18th September 2025 <br /> We pray for P as she has
                    treatment. May the Lord heal and restore her to full health.
                    Amen.
                  </p>
                  <p>
                    18th September 2025 <br /> We pray for those who have
                    committed suicide, that the Lord have mercy on their soul
                    and that He console and comfort the grieving family and
                    friends. Amen
                  </p>
                  <p>
                    18th September 2025 <br /> We pray for all those in chronic
                    pain that the Lord grants healing and resolution of their
                    situation. Amen.
                  </p>
                  <p>
                    18th September 2025 <br />
                    <br /> We pray for expectant mothers, that they have safe
                    confinements and healthy babies. Amen.
                  </p>
                  <p>
                    18th September 2025 <br />
                    <br /> We pray for those who are grieving. May the Lord
                    comfort and console all those grieving. Amen.
                  </p>
                  <p>
                    18th September 2025 <br /> We pray for people to return to
                    the Church for Mass putting their fears behind them. Amen
                  </p>
                  <p>
                    18th September 2025 <br /> We pray for the repose of the
                    soul of Sister Joan Mulvihill. May the Lord comfort those
                    grieving for her. Amen.
                  </p>
                  <p>
                    ​​​​​19 November 2020 <br /> We pray for the repose of the
                    soul of Don Pigi Perini, founder of the Parish
                    Evangelisation System (PECS) in Europe who died today. May
                    he rest in peace in the glory of the Lord. May the Lord
                    console those who are grieving for him. Amen
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrayerIntentionsPage;
