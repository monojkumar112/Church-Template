import AllNotice from "../components/section/AllNotice";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - All Notices",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
const AllNoticePage = () => {
  return (
    <>
      <AllNotice />
    </>
  );
};

export default AllNoticePage;
