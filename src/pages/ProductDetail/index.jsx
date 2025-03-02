import React from "react";
import Styles from "@/pages/ProductDetail/productDetail.module.scss";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { InfinitySpin } from "react-loader-spinner";
import { useGetProductByIdQuery } from "@/redux/api/products";
import { addToBasket } from "@/redux/features/basketSlice";
import RenderIf from "@/shared/components/RenderIf";
import { Link, useParams } from "react-router-dom";
import StarRate from "@/shared/components/StarRate";
import { useDispatch } from "react-redux";
import { urls } from "@/shared/urls";

const ProductDetail = () => {
  const { id: productId } = useParams();

  const {
    data: product,
    isFetching,
    isError,
    error,
  } = useGetProductByIdQuery(Number(productId));
  const dispatch = useDispatch();

  return (
    <div className={Styles.productContainer}>
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
        <h2>{error?.data?.message || "Not api connected"}</h2>
      </RenderIf>
      <RenderIf condition={!isFetching && !isError && product}></RenderIf>

      <div className={Styles.prductContentContainer}>
        <div className={Styles.productNavigateLinks}>
          <Link className={Styles.productLinkHome} to={urls.HOME}>
            Home
          </Link>
          /
          <Link className={Styles.productLinkProduct} to={urls.PRODUCT_ID}>
            Product
          </Link>
        </div>
        <div className={Styles.productHeadingText}>
          <h1>Product detail</h1>
        </div>
        {product?.id && (
          <div
            className={`${Styles.productWrapper} ${CustomContainer.container}`}
          >
            <div className={Styles.productImage}>
              <img src={product.image} alt={product.image} />
            </div>
            <div className={Styles.productContent}>
              <div className={Styles.productTitle}>
                <h3>{product.title}</h3>
              </div>
              <div className={Styles.productRate}>
                <StarRate />
                <span>({product.views})</span>
              </div>
              <div className={Styles.productDescription}>
                <p>{product.desc}</p>
              </div>
              <div className={Styles.productPriceWrapper}>
                <span>${product.price}</span>
                <button onClick={() => dispatch(addToBasket(product))}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
