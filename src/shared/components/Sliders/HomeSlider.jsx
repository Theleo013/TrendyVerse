import React from "react";
import Styles from "@/shared/components/Sliders/sliders.module.scss";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { useGetProductsQuery } from "@/redux/api/products";
import RenderIf from "../RenderIf";

const HomeSlider = () => {
  const { data: products, isFetching, isError, error } = useGetProductsQuery();

  return (
    <React.Fragment>
      <RenderIf condition={isFetching}>
        <h2>Loading...</h2>
      </RenderIf>
      <RenderIf condition={!isFetching && isError}>
        <h2>{error?.data?.message || "API bağlantısı yok"}</h2>
      </RenderIf>
      <RenderIf condition={!isFetching && !isError && products?.length > 0}>
        <Carousel arrows infinite={false}>
          {products.slice(18, 22).map((product) => (
            <div key={product.id}>
              <div className={Styles.contentStyle}>
                <div className={Styles.productTitle}>
                  <h3>{product.name}</h3>
                </div>
                <div className={Styles.imageContainer}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={Styles.shopButton}>
                  <Link to={`/product/${product.id}`}>Buy now &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </RenderIf>
    </React.Fragment>
  );
};

export default HomeSlider;
