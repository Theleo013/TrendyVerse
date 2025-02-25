import React from "react";
import Styles from "@/pages/Home/home.module.scss";
import HomeSlider from "@/shared/components/Sliders/HomeSlider";
import ProductCard from "@/shared/components/ProductCard";
import RenderIf from "@/shared/components/RenderIf";
import { useGetProductsQuery } from "@/redux/api/products";
import PageTitle from "@/shared/components/PageTitle";
import CategoryMenu from "@/shared/components/CategoryMenu";
import { Link } from "react-router-dom";
import heartIcon from "/assets/icons/heart-icon.svg";
import viewIcon from "/assets/icons/view-icon.svg";
import DeliveryCard from "@/shared/components/DeliveryCard";

const Home = () => {
  const { data, isFetching, isError, error } = useGetProductsQuery();

  const [showAll, setShowAll] = React.useState(false);

  const filteredDataMain = showAll
    ? data
    : data?.filter((item) => item.id >= 1 && item.id <= 4);

  const filteredDataTop = showAll
    ? data
    : data?.filter((item) => item.id >= 5 && item.id <= 8);

  const filteredDataExplore = showAll
    ? data
    : data?.filter((item) => item.id >= 9 && item.id <= 16);

  return (
    <div className={Styles.homeContainer}>
      <RenderIf condition={isFetching}>
        <h2>Loading...</h2>
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
          <div className={Styles.productCard}>
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
                viewIcon={viewIcon}
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
            <div className={Styles.topSellingContent}>
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
                  viewIcon={viewIcon}
                />
              ))}
            </div>
          </div>
          <div className={Styles.flashProductContainer}>
            <div className={Styles.flashContentContainer}>
              <span>Categories</span>
              <h2>Enhance Your Music Experience</h2>
              <div>Time</div>
              <button>Buy Now</button>
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
            <div className={Styles.exploreContent}>
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
                  viewIcon={viewIcon}
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
            <div className={Styles.newArrivalWrapper}>
              <div className={Styles.ps5Container}>
                <h4>PlayStation 5</h4>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <Link>Shop Now</Link>
              </div>
              <div className={Styles.arrivalProductsContainer}>
                <div className={Styles.womens}>
                  <h4>Women's Collections</h4>
                  <p>Featured woman collections that give you another vibe.</p>
                  <Link>Shop Now</Link>
                </div>
                <div className={Styles.innerProductsWrapper}>
                  <div className={Styles.speaker}>
                    <h4>Speakers</h4>
                    <p>Amazon wireless speakers</p>
                    <Link>Shop Now</Link>
                  </div>
                  <div className={Styles.parfume}>
                    <h4>Perfume</h4>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <Link>Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <DeliveryCard />
          </div>
        </div>
      </RenderIf>
    </div>
  );
};

export default Home;
