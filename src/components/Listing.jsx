import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

/**
 * формирует список из картинок и отображает его
 */
export default function Listing(props) {
  const { items } = props;
  
  return (
    <>
      <div className="item-list">
        {items.map((elem) => (
          <ListItem key={usid.rand()} item={elem} />
        ))}
      </div>
    </>
  );
}
Listing.defaultProps = { items: [] };
Listing.propTypes = {
  items: PropTypes.array.isRequired,
};
