import React from "react";
import PropTypes from "prop-types";

/**
 * Формирует картинку с оберткой
 */

export default function ListItem(props) {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } =
    props.item;

  let nameProduct = title;
  let cur_code = currency_code;
  let remainsClass = "item-quantity ";

  if (nameProduct.length > 50) {
    nameProduct = nameProduct.slice(0, 50) + "...";
  }

  switch (currency_code) {
    case "USD":
      cur_code = `$${price}`;
      break;

    case "EUR":
      cur_code = `€${price}`;
      break;
    default:
      cur_code = `${price} ${currency_code}`;
      break;
  }

  if (quantity < 10) {
    remainsClass = remainsClass + "level-low";
  } else if (quantity < 20) {
    remainsClass = remainsClass + "level-medium";
  } else {
    remainsClass = remainsClass + "level-high";
  }

  return (
    <>
      <div className="item" data-id={listing_id}>
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} alt="preview" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{nameProduct}</p>
          <p className="item-price">{cur_code}</p>
          <p className={remainsClass}>{quantity}</p>
        </div>
      </div>
    </>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
