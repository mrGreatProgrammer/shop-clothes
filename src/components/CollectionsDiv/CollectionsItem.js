function CollectionsItem(props) {
  return (
    <div className="colections__item">
      <div className="colections__item-img">
        <h3>{props.am.id}</h3>
      </div>
      <div className="colections__item-info">
        <p className="colections__item-info-txt">
          {props.am.itemName}
        </p>
        <p className="colections__item-info-price">
          {props.am.price}<span className="colections__item-currency"> руб.</span>
        </p>
      </div>
    </div>
  );
}

export default CollectionsItem;