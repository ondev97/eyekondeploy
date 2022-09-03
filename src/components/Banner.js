import introCover from "../img/introIsland.jpg";

function Banner({ setisBanner }) {
  //banner close function
  const closeBanner = (e) => {
    e.target.className.includes("modelBannerBg") && setisBanner(false);
  };
  return (
    <div className="modelBannerBg" onClick={closeBanner}>
      <div className="modelBannerInner">
        <button onClick={() => setisBanner(false)}>
          <i className="fas fa-times"></i>
        </button>
        <img src={introCover} alt="Island First" />
      </div>
    </div>
  );
}

export default Banner;
