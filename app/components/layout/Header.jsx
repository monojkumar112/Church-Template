"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/category-pages`);
      const data = await response.json();
      console.log("Menu data:", data);
      setCategories(data?.data || []);
    } catch (error) {
      console.error("Error fetching menu categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Helper: find category by slug
  const getPagesBySlug = (slug) => {
    const category = categories.find((cat) => cat.slug === slug);
    return category?.pages || [];
  };

  const aboutPages = getPagesBySlug("about-us");
  const fellowshipPages = getPagesBySlug("fellowship");
  const prayerIntentionsPages = getPagesBySlug("prayer-intentions");

  return (
    <>
      {/* <!-- ================= HEADER START ================= --> */}
      <div className="header-warpper">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* <!-- Brand Logo --> */}
            <a className="navbar-brand" href="/">
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                width={190}
                height={60}
              />
            </a>

            {/* <!-- Mobile Toggle --> */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-content"
              aria-expanded="false"
            >
              <div className="hamburger-toggle">
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>

            {/* <!-- Navbar Links --> */}
            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <!-- Home --> */}
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown dropdown-mega position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </a>
                  <div className="dropdown-menu shadow py-0">
                    <div className="mega-content container-fluid">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="dropdown-items pt-3 ps-3 ps-md-4">
                            <h6>
                              <strong>About Us</strong>
                            </h6>
                            <ul className="pt-2 pt-md-3">
                              {/* <li>
                                <Link
                                  href="/about-us"
                                  className="dropdown-item"
                                >
                                  About Us
                                </Link>
                              </li> */}
                              {/* <li>
                                <Link
                                  href="/leadership"
                                  className="dropdown-item"
                                >
                                  Leadership and co-responsibility
                                </Link>
                              </li> */}

                              {loading ? (
                                <li>
                                  <span className="dropdown-item text-muted">
                                    Loading...
                                  </span>
                                </li>
                              ) : aboutPages.length > 0 ? (
                                aboutPages.map((page) => (
                                  <li key={page.id}>
                                    <Link
                                      href={`/about-us/${page.slug}`}
                                      className="dropdown-item"
                                    >
                                      {page.page_title}
                                    </Link>
                                  </li>
                                ))
                              ) : null}
                              {/* <li>
                                <Link
                                  href="/father-victor-vella"
                                  className="dropdown-item"
                                >
                                  Father Victor Vella
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/deacon-barry-chalkley"
                                  className="dropdown-item"
                                >
                                  Deacon Barry Chalkley
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/deacon-dayne-du-preez"
                                  className="dropdown-item"
                                >
                                  Deacon Wayne du Preez
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/sisters-of-mercy"
                                  className="dropdown-item"
                                >
                                  Sisters of Mercy
                                </Link>
                              </li>
                              <li>
                                <Link href="/groups" className="dropdown-item">
                                  Groups
                                </Link>
                              </li>

                              <li>
                                <Link
                                  href="/our-parish-vision"
                                  className="dropdown-item"
                                >
                                  Our Parish Vision
                                </Link>
                              </li> */}
                              {/* <li>
                                <Link
                                  href="/brief-history"
                                  className="dropdown-item"
                                >
                                  Brief history of our parish
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 text-end pe-0">
                          <Image
                            src="/assets/images/menu-img.jpeg"
                            alt="menu-img"
                            className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                            width={557}
                            height={367}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Fellowship (Static title, dynamic subpages) */}
                <li className="nav-item dropdown dropdown-mega position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Fellowship
                  </a>
                  <div className="dropdown-menu shadow py-0">
                    <div className="mega-content container-fluid">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="dropdown-items pt-3 ps-3 ps-md-4">
                            <h6>
                              <strong>Fellowship</strong>
                            </h6>
                            <ul className="pt-2 pt-md-3">
                              {/* <li>
                                <Link
                                  href="/fellowship"
                                  className="dropdown-item"
                                >
                                  Fellowship
                                </Link>
                              </li> */}
                              <li>
                                <Link href="/event" className="dropdown-item">
                                  Recent events
                                </Link>
                              </li>
                              {loading ? (
                                <li>
                                  <span className="dropdown-item text-muted">
                                    Loading...
                                  </span>
                                </li>
                              ) : fellowshipPages.length > 0 ? (
                                fellowshipPages.map((page) => (
                                  <li key={page.id}>
                                    <Link
                                      href={`/fellowship/${page.slug}`}
                                      className="dropdown-item"
                                    >
                                      {page.page_title}
                                    </Link>
                                  </li>
                                ))
                              ) : null}
                              {/* <li>
                                <Link
                                  href="/getting-involved"
                                  className="dropdown-item"
                                >
                                  Getting involved
                                </Link>
                              </li>

                              <li>
                                <Link
                                  href="/families-and-youth"
                                  className="dropdown-item"
                                >
                                  Families and Youth
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/practical-and-financial"
                                  className="dropdown-item"
                                >
                                  Practical and financial
                                </Link>
                              </li> */}
                              {/* <li>
                                <Link href="/event" className="dropdown-item">
                                  Recent events
                                </Link>
                              </li> */}
                              {/* <li>
                                <Link
                                  href="/social-and-support"
                                  className="dropdown-item"
                                >
                                  Social and support
                                </Link>
                              </li>
                              <li>
                                <Link href="/mission" className="dropdown-item">
                                  Our mission
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/evangelisation"
                                  className="dropdown-item"
                                >
                                  PECS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/our-evangelisation"
                                  className="dropdown-item"
                                >
                                  Our evangelisation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/our-social-action"
                                  className="dropdown-item"
                                >
                                  Our social action
                                </Link>
                              </li> */}
                              {/* {loading ? (
                              <li>
                                <span className="dropdown-item text-muted">
                                  Loading...
                                </span>
                              </li>
                            ) : fellowshipPages.length > 0 ? (
                              fellowshipPages.map((page) => (
                                <li key={page.id}>
                                  <Link
                                    href={`/fellowship/${page.slug}`}
                                    className="dropdown-item"
                                  >
                                    {page.page_title}
                                  </Link>
                                </li>
                              ))
                            ) : null} */}
                            </ul>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 text-end pe-0">
                          <Image
                            src="/assets/images/menu-img.jpeg"
                            alt="menu-img"
                            className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                            width={557}
                            height={367}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/page/our-liturgy">
                    Liturgy
                  </Link>
                </li>
                {/* <!-- Liturgy --> */}
                <li className="nav-item dropdown dropdown-mega position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Prayer Intentions
                  </a>
                  <div className="dropdown-menu shadow py-0">
                    <div className="mega-content container-fluid">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="pt-3 ps-3 ps-md-4">
                            <ul className="pt-2 pt-md-3">
                              {loading ? (
                                <li>
                                  <span className="dropdown-item text-muted">
                                    Loading...
                                  </span>
                                </li>
                              ) : prayerIntentionsPages.length > 0 ? (
                                prayerIntentionsPages.map((page) => (
                                  <li key={page.id}>
                                    <Link
                                      href={`/intentions/${page.slug}`}
                                      className="dropdown-item"
                                    >
                                      {page.page_title}
                                    </Link>
                                  </li>
                                ))
                              ) : null}
                              {/* <li>
                                <Link
                                  href="/prayer-intentions"
                                  className="dropdown-item"
                                >
                                  Prayer Intentions
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/reflection"
                                  className="dropdown-item"
                                >
                                  A parishioner&apos;s Gospel Reflection
                                </Link>
                              </li>
                              <li>
                                <Link href="/prayer" className="dropdown-item">
                                  Prayer and Formation
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 text-end pe-0">
                          <Image
                            src="/assets/images/menu-img.jpeg"
                            alt="menu-img"
                            className="img-fluid d-none d-md-block my-0 ms-auto menu-img-item"
                            width={557}
                            height={367}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link active" href="/prayer">
                    Prayer and formation
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    href="/page/our-sacramental-life"
                  >
                    Sacramental life
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" href="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="donate-btn-item">
                <Link className="custom-btn" href="https://donate.mydona.com/holy-innocents-orpington">
                  Donate{" "}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- ================= HEADER END ================= --> */}
    </>
  );
};

export default Header;
