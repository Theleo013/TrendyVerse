import React, { useEffect, useState } from "react";
import Styles from "@/pages/CategoryPage/categoryPage.module.scss";
import heartIcon from "/assets/icons/heart-icon.svg";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { InfinitySpin } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { useLazyGetCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "@/shared/components/CategoryCard";
import RenderIf from "@/shared/components/RenderIf";
import { urls } from "@/shared/urls";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [trigger, { data, isFetching, isError, error }] =
    useLazyGetCategoriesQuery();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      trigger(categoryName);
    }
  }, [categoryName, trigger]);

  useEffect(() => {
    if (data && categoryName) {
      setCategoryProducts(
        data.categories
          ? data.categories[categoryName] || []
          : data[categoryName] || []
      );
    }
  }, [data, categoryName]);

  return (
    <div className={Styles.categoryPageContainer}>
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
        <h2>{error?.data?.message || "API connection error"}</h2>
      </RenderIf>
      <RenderIf
        condition={!isFetching && !isError && categoryProducts.length > 0}
      >
        <div className={Styles.categoryNavigateLinks}>
          <Link className={Styles.categoryLinkHome} to={urls.HOME}>
            Home
          </Link>
          /
          <Link className={Styles.categoryLinkProduct} to={urls.CATEGORY}>
            {categoryName}
          </Link>
        </div>
        <div
          className={`${Styles.categoryCardContainer} ${CustomContainer.container}`}
        >
          {categoryProducts && categoryProducts.length > 0 ? (
            categoryProducts.map((item) => (
              <CategoryCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.desc}
                price={item.price}
                views={item.views}
                percent={"60%"}
                heartIcon={heartIcon}
              />
            ))
          ) : (
            <h2>Not found products</h2>
          )}
        </div>
      </RenderIf>
    </div>
  );
};

export default CategoryPage;
