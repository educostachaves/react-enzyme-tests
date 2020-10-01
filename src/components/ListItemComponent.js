import React from "react";
import Proptypes from "prop-types";

const ListItemComponent = ({ label, onClick }) => {
  return (
    <div>
      <button data-test="listItem" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

ListItemComponent.defaultProps = {
  label: "Default Label"
};

ListItemComponent.propTypes = {
  onCLick: Proptypes.func,
  label: Proptypes.string
}

export default ListItemComponent;
