import CollectionsItem from "./CollectionsItem";

const myCollections = [
  {
    id: 1,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 2,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 3,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 4,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 5,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 6,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 7,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 8,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
  {
    id: 9,
    itemName: "Свитер махровый Свитер махровый Свитер махровый",
    price: "2 550.00",
  },
];

function CollectionsSlider() {
  return (
    <div className="colections-slider">
      {myCollections.map((item) => (
        <CollectionsItem am={item} key={item.id} />
      ))}
    </div>
  );
}

export default CollectionsSlider;
