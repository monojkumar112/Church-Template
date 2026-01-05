"use client";
import React, { useState, useEffect } from "react";
import Banner from "../section/Banner";
import Image from "next/image";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import HowToFind from "../pages/home/HowToFind";

const ContactUs = () => {
  const data = {
    title: "Parish Contacts",
  };
  // get  home data from api
  const [homeData, setHomeData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setHomeData(payload[0]);
    };
    load();
  }, [baseUrl]);
  //fetch teams data from api if needed
  const [teamsData, setTeamsData] = useState();

  useEffect(() => {
    const loadTeams = async () => {
      const res = await fetch(`${baseUrl}/api/teams`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setTeamsData(payload.teams);
    };
    loadTeams();
  }, [baseUrl]);
  console.log('Teams Data:', teamsData);

  //get contact us data from api
  const [contactInfoData, setContactInfoData] = useState();

  useEffect(() => {
    const loadContactInfo = async () => {
      const res = await fetch(`${baseUrl}/api/contact-info`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setContactInfoData(payload);
    };
    loadContactInfo();
  }, [baseUrl]);
  

  return (
    <>
      <Banner data={data} />

      <section
        className="team contact-us-team "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="team-wrapper">


            {teamsData?.length > 0 && teamsData?.map((team, index) => (
              <div className="team-item-name" key={index}>
                <h2>{team?.name}</h2>
                <div className="row justify-content-center">
                  {team?.members?.map((member, i) => (
                    <div className="col-md-4 col-lg-3 mb-4" key={i}>
                      <div className="team-item">
                        <div className="team-img">
                          <Image
                            src={member?.profile_image}
                            width={416}
                            height={416}
                            alt={member?.name}
                          />
                        </div>
                        <div className="team-content">
                          <h3>{member?.name}</h3>
                          <p>{member?.role}</p>
                          <ul className="team-social-list">
                            <li>
                              <a
                                href={`mailto:${member?.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaRegEnvelope />
                                <span>{member?.email ?? "N/A"}</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href={`tel:${member?.phone ?? "N/A"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaPhoneAlt />
                                <span>{member?.phone ?? "N/A"}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}


            <div className="team-item-content">
              {contactInfoData?.contact_info && (
                <div dangerouslySetInnerHTML={{ __html: contactInfoData.contact_info }} />
              )}

            </div>
          </div>
        </div>
      </section>

      <HowToFind data={homeData} />
    </>
  );
};

export default ContactUs;
