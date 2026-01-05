import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-logo-wrapper">
                  <div className="footer-logo">
                    <a href="#" className="footer-img">
                      <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={248}
                        height={60}
                      />
                    </a>
                  </div>
                  <p>Strickland Way, Orpington, Kent, BR6 9UE</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-quick-link">
                  <div className="search-item-wrapp">
                    <div className="footer-quick-title">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="footer-quick-search">
                      <form onSubmit={handleSearch}>
                        <div className="search-from">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                          />
                          <button type="submit" className="search-btn">
                            <FiSearch />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/https://www.rcsouthwark.co.uk">
                            Diocese of Southwark{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/fellowship/getting-involved">
                            {" "}
                            Get Involved{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us/leadership-and-co-responsibility">
                            {" "}
                            ​Our Leadership{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/liturgy"> Our Liturgy </Link>
                        </li>
                        <li>
                          <Link href="/fellowship/our-mission">
                            ​Our Mission{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/sacramental"> Our Sacraments </Link>
                        </li>
                        <li>
                          <Link href="/families-and-youth"> Our Youth </Link>
                        </li>
                        <li>
                          <Link href="/reflection">
                            {" "}
                            Parishioner Gospel Reflection{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us/groups"> Parish Groups </Link>
                        </li>
                        <li>
                          <Link href="/about-us/brief-history-of-our-parish">
                            {" "}
                            Parish History{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="footer-link-list">
                        <li>
                          <Link href="/about-us/our-parish-vision">
                            {" "}
                            Parish Vision{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/fellowship/parish-evangelisation-cells-pecs">
                            Parish Evangelisation Cells{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/intentions/prayer-intentions">
                            {" "}
                            Prayer Intentions{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.churchservices.tv/">
                            {" "}
                            Streaming Masses{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <p>© 2025 All Rights Reserved</p>
              <p className="pt-2">
                Design And Developed By{" "}
                <span>
                  <a
                    href="https://www.womenindigital.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Women In Digital
                  </a>
                </span>{" "}
                |{" "}
                <span>
                  <a
                    href="https://luminadev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lumina Dev
                  </a>
                </span>{" "}
              </p>
            </div>

            <div className="footer-social">
              <h3>Follow Link</h3>
              <div className="footer-social-media">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/HolyInnocentsCC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/assets/images/icon/facebook.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@frvictorvellapecsteachings6138"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/assets/images/icon/youtube.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
