import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";

import ContentLoader from "react-content-loader";
import Cart from "../cart/Cart";

const Favorite = () => {
  const { favorite, onAddFavorite, onAddItem, loading } =
    React.useContext(AppContext);

  const renderItems = () => {
    return loading.length > 0
      ? favorite.map((item, i) => {
          return (
            <Cart
              {...item}
              onAddFavorite={onAddFavorite}
              key={i}
              onAddItem={onAddItem}
            />
          );
        })
      : [...Array(5)].map((item, i) => {
          return (
            <ContentLoader
              key={i}
              speed={2}
              width={210}
              height={260}
              viewBox="0 0 150 188"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
              <rect x="0" y="105" rx="4" ry="4" width="150" height="15" />
              <rect x="0" y="125" rx="4" ry="4" width="90" height="15" />
              <rect x="0" y="160" rx="4" ry="4" width="80" height="24" />
              <rect x="117" y="153" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
          );
        });
  };
  return (
    <>
      {favorite.length > 0 ? (
        <>
          <div className="d-flex align-center">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img className="cu-p" src="img/btn-left.svg" alt="back" />
            </Link>
            <h1 className="ml-10">Мои закладки</h1>
          </div>
          <div className="cart-wrapper">{renderItems()}</div>
        </>
      ) : (
        <div className="text-center cart-favorite">
          <img
            width={70}
            height={70}
            src="img/marker.jpg"
            alt="empty"
            className="cart-empty-img m-auto d-block"
          />
          <h2>Закладок нет :(</h2>
          <p>Вы ничего не добавляли в закладки</p>
          <Link to={process.env.PUBLIC_URL + "/"}>
            <button className="greenButton">
              <img src="img/btn-back.svg" alt="btn-back" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Favorite;
