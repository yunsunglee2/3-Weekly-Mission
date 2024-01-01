import MainSearch from "./MainSearch";
import MainFile from "./MainFile";
import './main.css';


function Main() {
  const handleClick = function(site){
    const link = site;
    window.open(link, '_blank');
  }
  
  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch />
        </div>
        <div className="item02">
          <MainFile value="image1" onClick={handleClick} i={0}/>
          <MainFile value="image2" onClick={handleClick} i={1}/>
          <MainFile value="image3" onClick={handleClick} i={2}/>
          <MainFile value="image4" onClick={handleClick} i={3}/>
          <MainFile value="image5" onClick={handleClick} i={4}/>
          <MainFile value="image6" onClick={handleClick} i={5}/>
          <MainFile value="image7" onClick={handleClick} i={6}/>
          <MainFile value="image8" onClick={handleClick} i={7}/>
          <MainFile value="image9" onClick={handleClick} i={8}/>
        </div>
      </div>
    </div>
  )
}

export default Main;