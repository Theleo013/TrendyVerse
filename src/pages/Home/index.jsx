import React from "react";
import Styles from "@/pages/Home/home.module.scss";
import Slider from "@/shared/components/Slider";
import ProductCard from "@/shared/components/ProductCard";
import RenderIf from "@/shared/components/RenderIf";
import { useGetProductsQuery } from "@/redux/api/products";

const Home = () => {
  const { data, isFetching, isError, error } = useGetProductsQuery();
  return (
    <>
      <div>
        <Slider />
      </div>
      <div className={Styles.productCard}>
        <RenderIf condition={isFetching}>
          <h2>Loading...</h2>
        </RenderIf>
        <RenderIf condition={!isFetching && isError}>
          <h2>{error?.data?.massage || "Not api connected"}</h2>
        </RenderIf>
        <RenderIf condition={!isFetching && !isError && data?.length}>
          {data?.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              views={item.views}
            />
          ))}
        </RenderIf>
      </div>
    </>
  );
};

export default Home;
