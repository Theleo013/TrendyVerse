import React, { useEffect } from "react";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import Styles from "@/pages/Home/home.module.scss";
import { InfinitySpin } from "react-loader-spinner";
import HomeSlider from "@/shared/components/Sliders/HomeSlider";
import ProductCard from "@/shared/components/ProductCard";
import RenderIf from "@/shared/components/RenderIf";
import { useGetProductsQuery } from "@/redux/api/products";
import PageTitle from "@/shared/components/PageTitle";
import CategoryMenu from "@/shared/components/CategoryMenu";
import { Link } from "react-router-dom";
import heartIcon from "/assets/icons/heart-icon.svg";
import DeliveryCard from "@/shared/components/DeliveryCard";
import { urls } from "@/shared/urls";
import Timer from "@/shared/components/Timer";

const Home = () => {
  const { data, isFetching, isError, error } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  const [showAll, setShowAll] = React.useState(false);

  const filteredDataMain = showAll ? data.slice(0, 16) : data?.slice(0, 4);
  const filteredDataTop = showAll ? data.slice(0, 16) : data?.slice(4, 8);
  const filteredDataExplore = showAll ? data.slice(0, 16) : data?.slice(8, 12);

  const PS5 = data?.find((item) => Number(item.id) === 23);
  const Hat = data?.find((item) => Number(item.id) === 24);
  const Speakers = data?.find((item) => Number(item.id) === 25);
  const Parfume = data?.find((item) => Number(item.id) === 26);
  const JBL = data?.find((item) => Number(item.id) === 27);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScrollPosition");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={Styles.homeContainer}>
      <RenderIf condition={isFetching}>
        <div className={Styles.loadingContainer}>
          <h2>Loading...</h2>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      </RenderIf>
      <RenderIf condition={!isFetching && isError}>
        <h2>{error?.data?.massage || "Not api connected"}</h2>
      </RenderIf>

      <RenderIf condition={!isFetching && !isError && data?.length}>
        <div className={Styles.sliderContainer}>
          <HomeSlider />
        </div>
        <div className={Styles.ProductCardContainer}>
          <div className={Styles.pageTitle}>
            <PageTitle headingTitle={"Today's"} description={"Flash Sales"} />
          </div>
          <div className={`${Styles.productCard} ${CustomContainer.container}`}>
            {filteredDataMain?.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                views={item.views}
                percent={"50%"}
                heartIcon={heartIcon}
              />
            ))}
          </div>
          <div className={Styles.showAllButton}>
            <button onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? "Show Less Products" : "Show All Products"}
            </button>
          </div>
          <div className={Styles.categoryMenu}>
            <PageTitle
              headingTitle={"Categories"}
              description={"Browse By Category"}
            />
            <CategoryMenu />
          </div>
          <div className={Styles.topSellingContainer}>
            <div className={Styles.topSellingTitle}>
              <div>
                <PageTitle
                  headingTitle={"This Month"}
                  description={"Best Selling Products"}
                />
              </div>
              <div className={Styles.showAllButton}>
                <button onClick={() => setShowAll((prev) => !prev)}>
                  {showAll ? "View Less" : "View All"}
                </button>
              </div>
            </div>
            <div
              className={`${Styles.topSellingContent} ${CustomContainer.container}`}
            >
              {filteredDataTop?.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  views={item.views}
                  percent={"60%"}
                  heartIcon={heartIcon}
                />
              ))}
            </div>
          </div>
          <div
            className={`${Styles.flashProductContainer} ${CustomContainer.container}`}
          >
            <div className={Styles.flashContentContainer}>
              <span>Categories</span>
              <h2>Enhance Your Music Experience</h2>
              <div className={Styles.timer}>
                <Timer />
              </div>
              {JBL && (
                <Link to={urls.PRODUCT_ID.replace(":id", JBL.id)}>Buy Now</Link>
              )}
            </div>
            <div className={Styles.flashImage}>
              <img
                src="/assets/images/products/MusicMachine.png"
                alt="music-machine"
              />
            </div>
          </div>
          <div className={Styles.exploreProductsContainer}>
            <div className={Styles.pageTitleExplore}>
              <PageTitle
                headingTitle={"Our Products"}
                description={"Explore Our Products"}
              />
            </div>
            <div
              className={` ${Styles.exploreContent} ${CustomContainer.container}`}
            >
              {filteredDataExplore?.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  views={item.views}
                  percent={"30%"}
                  heartIcon={heartIcon}
                />
              ))}
            </div>
            <div className={Styles.showAllButton}>
              <button onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? "Show Less Products" : "Show All Products"}
              </button>
            </div>
          </div>
          <div className={Styles.newArrivalContainer}>
            <div className={Styles.pageTitleArrival}>
              <PageTitle
                headingTitle={"Featured"}
                description={"New Arrival"}
              />
            </div>
            <div
              className={`${Styles.newArrivalWrapper} ${CustomContainer.container}`}
            >
              <div className={Styles.ps5Container}>
                <img
                  src="/assets/images/arrivalProducts/ps5.png"
                  alt="ps5-image"
                />
                <div className={Styles.ps5Content}>
                  <h4>PlayStation 5</h4>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  {PS5 && (
                    <Link to={urls.PRODUCT_ID.replace(":id", PS5.id)}>
                      Shop Now
                    </Link>
                  )}
                </div>
              </div>
              <div className={Styles.arrivalProductsContainer}>
                <div className={Styles.hat}>
                  <img
                    src="/assets/images/arrivalProducts/woman.png"
                    alt="hat-image"
                  />
                  <div className={Styles.hatContent}>
                    <h4>Women's Collections</h4>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    {Hat && (
                      <Link to={urls.PRODUCT_ID.replace(":id", Hat.id)}>
                        Shop Now
                      </Link>
                    )}
                  </div>
                </div>
                <div className={Styles.innerProductsWrapper}>
                  <div className={Styles.speaker}>
                    <img
                      src="/assets/images/arrivalProducts/speakers.png"
                      alt="speakers-image"
                    />
                    <div className={Styles.speakerContent}>
                      <h4>Speakers</h4>
                      <p>Amazon wireless speakers</p>
                      {Speakers && (
                        <Link to={urls.PRODUCT_ID.replace(":id", Speakers.id)}>
                          Shop Now
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className={Styles.parfume}>
                    <img
                      src="/assets/images/arrivalProducts/parfume.png"
                      alt="parfume-image"
                    />
                    <div className={Styles.parfumeContent}>
                      <h4>Perfume</h4>
                      <p>Gucci intense oud edp</p>
                      {Parfume && (
                        <Link to={urls.PRODUCT_ID.replace(":id", Parfume.id)}>
                          Shop Now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DeliveryCard />
          {/* <div></div> */}
        </div>
      </RenderIf>
    </div>
  );
};

export default Home;
