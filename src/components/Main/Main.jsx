import AboutUs from "../AboutUs/AboutUS";
import CollectionsDiv from "../CollectionsDiv/CollectionsDiv";
import "./Main.css";
import MoreInCatalog from "../MoreInCatalog/MoreInCatalog";

function Main() {
  return (
    <main className="main">
      <div className="some-text-div">
        Часто используемый в печати и вэб-дизайне. Lorem Ipsum является
        стандартной "рыбой" для текстов на латинице начала XVI века. В то время
        некий безымянный печатник
      </div>
      <AboutUs />
      <MoreInCatalog />
      <CollectionsDiv />
    </main>
  );
}

export default Main;
