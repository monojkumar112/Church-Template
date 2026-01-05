import DynamicSection from "../../components/section/DynamicSection";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church Orpington - Holy Innocents' Catholic Church - Single Page",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
const DynamicPage = async ({ params }) => {
  const { category, slug } = await params;

  return (
    <>
      <DynamicSection category={category} slug={slug} />
    </>
  );
};

export default DynamicPage;
