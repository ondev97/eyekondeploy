import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeAccount } from "../actions";
import { loadStDetails } from "../actions/stDetailsAction";
import cov from "../img/cover.jpg";
import features1 from "../img/features/1.png";
import features2 from "../img/features/2.png";
import features3 from "../img/features/3.png";
import features4 from "../img/features/4.png";
// import instructor from "../img/svg/instructor.svg";
// import learning from "../img/svg/learning.svg";
// import support from "../img/svg/support.svg";
// import pencil from "../img/svg/pencil.svg";
// import video from "../img/svg/video.svg";
// import contract from "../img/svg/contract.svg";
// import get from "../img/get.jpg";
import "../assets/css/home.css";
import "../assets/css/mediaFiles/homemedia.css";
import { Link } from "react-router-dom";
// import AllSubCard from "../components/AllSubCard";
import Axios from "axios";
import FeaturesBox from "../components/FeaturesBox";

export default function Home() {
  const dispatch = useDispatch();
  const [allSubDetails, setallSubDetails] = useState([]);
  const [statistics, setstatistics] = useState({
    students: 0,
    courses: 0,
    teachers: 0,
    subjects: 0,
  });

  useEffect(() => {
    dispatch(activeAccount());
    dispatch(loadStDetails());
    Axios.get(`${process.env.REACT_APP_LMS_MAIN_URL}/course-api/latestsub/`)
      .then((res) => {
        setallSubDetails([...res.data]);
      })
      .catch((err) => {});
    Axios.get(`${process.env.REACT_APP_LMS_MAIN_URL}/course-api/stat/`)
      .then((res) => {
        setstatistics(res.data);
      })
      .catch((err) => {});
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="maininde">
      <div className="uppercover">
        <div className="cov_text">
          <h1>
            Eyekon eClass <br />
            <span>වෙතින් ශ්‍රී ලාංකීය දූ දරුවන් වෙත සෙනෙහසින්</span>
          </h1>
          <p>
            ශ්‍රී ලාංකීය දු දරුවන්ගේ අධ්‍යාපනය වෙනුවෙන් නිරතුරුවම කැපවුන Eyekon
            eClass හරහා ඔබගේ විෂයට අදාල ලංකාවේ ප්‍රවීන ගුරුවරුන් සමග සම්බන්ද
            වෙමින් නිවසේ සිට සුරක්ෂිතව අධ්‍යාපන කටයුතු සිදු කරන්න.
          </p>
          <Link to={"#"}>
            <button>Guidelines</button>
          </Link>
          <div className="simple_footer">
            <h3>
              COPYRIGHT © EYEKON INSTITUTE | PROUDLY POWERED BY
              <span>
                {
                  <Link to="//helamid.com" target="_blank">
                    &nbsp;HELAMID
                  </Link>
                }
              </span>
            </h3>
          </div>
        </div>
        <div className="cov_img">
          <img src={cov} alt="image" />
        </div>
      </div>
      {/* <div className="cards_section">
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={instructor} alt="instructor"/>
                    </div>
                    <h3>Expert Instructors</h3>
                    <p>Meet Best Instructors Around the Island and Enroll for Best Lessons of them. </p>
                </div>
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={support} alt="support"/>
                    </div>
                    <h3>Customer Support</h3>
                    <p>24/7 Reliable and Efficient Customer Support. Contact us for any Technical Issue you Faced </p>
                </div>
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={learning} alt="learning"/>
                    </div>
                    <h3>Remote Learning</h3>
                    <p>Stay Safe at Home Learn Whatever You Want. Select, Enroll and It's Good to Go.</p>
                </div>
            </div>
            <div className="popular_subjects">
                <div className="main_container_co">
                    <div className="row_he">
                        <h1>Popular Subjects</h1>
                        <Link to={'/allsubjects'}><button>Browse More</button></Link>
                    </div>
                    <div className="subject_area">
                        {
                            allSubDetails.map((tdata,index)=> <AllSubCard key={index} subject={tdata}/>)
                        }
                    </div>
                </div>
            </div>
            <div className="mid_free">
                <h3>Start today for getting Improve <span>Your knowledge</span></h3>
                <h1>You can be your own guiding star with our help!</h1>
                <button>Get Started</button>
            </div>
                      */}
      <div className="inde_counter">
        <div className="main_inde_counter">
          <div className="wr">
            <div className="counter_colu">
              <h2>Students</h2>
              <h3>{statistics.students}+</h3>
            </div>
            <div className="counter_colu">
              <h2>Subjects</h2>
              <h3>{statistics.subjects}+</h3>
            </div>
            <div className="counter_colu">
              <h2>Instructors</h2>
              <h3>{statistics.teachers}+</h3>
            </div>
            <div className="counter_colu">
              <h2>Courses</h2>
              <h3>{statistics.courses}+</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="line">
        <h1>
          ඔබ Eyekon eClass තෝරාගත යුත්තේ ඇයි?
          <br />
          <span>Why do you choose Eyekon eClass?</span>
        </h1>
      </div>
      <div className="features-container">
        <FeaturesBox
          image={features1}
          heading="Live Streaming"
          para="ගුරුවරුන්ට Eyekon eClass වෙබ් අඩවිය හරහා Live Classes පැවත්විය හැක. සිසුන්ට තම ශිෂ්‍ය ගිණුම (student account) හරහා Live Classes සදහා සම්බන්ද විය හැක. ගුරුවරයාට සිසුවා සමග සම්බන්ද වෙමින් ඉගැන්වීම් කටයුතු සිදු කල හැකි අතර මෙය සිසුන්ට සජීවී පන්ති කාමරයක අත්දැකීම සමීප කරවයි."
        />
        <FeaturesBox
          image={features2}
          heading="Video Embedded"
          para="Live Classes සදහා සම්බන්ද විය නොහැකි සිසුන් වෙනුවෙන් ඔබගේ ගුරුවරයා පාඩම්මාලා සදහා අදාළ සියලු recording videos Eyekon eClass වෙබ් අඩවිය වෙත upload කර තබනු ලැබේ. සිසුන්ට තම ශිෂ්‍ය ගිණුම (student account) හරහා එම පාඩම්මාලා තමන්ට පහසු වේලාවක අධ්‍යනය කල හැක. "
        />
        <FeaturesBox
          image={features3}
          heading="Content Privacy Protection"
          para="ගුරුවරුන් විසින් Eyekon eClass වෙබ් අඩවිය සදහා එක් කරනු ලබන සියලු අන්තර්ගතයන් (video contents) හි පුර්ණ අයිතිය අදාල ගුරුවරයා සතු වේ. එම අන්තර්ගතයන් (video contents) සිසුන්ට හෝ වෙන කිසිදු තෙවන පාර්ශවයකට කිසිලෙසක share කිරීමට හෝ download කිරීමට නොහැක."
        />
        <FeaturesBox
          image={features4}
          heading="Login Sessions"
          para="සිසුන්ගේ සියලු පෞද්ගලික දත්ත Eyekon eClass වෙබ් අඩවිය තුල සුරක්ෂිත වේ. සිසුන්ට කිසිවිටෙක තමන්ගේ Eyekon eClass ශිෂ්‍ය ගිණුම (student account) තවත් සිසුන් අතරේ හුවමාරු කරගෙන භාවිතා කල නොහැක. එලෙස හුවමාරු කරගෙන භාවිතා කළහොත් එම student account ස්වයන්ක්‍රියව අක්‍රිය (block) වීම සිදුවේ."
        />
      </div>
      {/*
            <div className="get_start_sec">
                <div className="main_get_start">
                    <div className="get_start_column">
                        <h1>Get Started With Eyekon LMS</h1>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={pencil} alt="pencil"/>
                            </div>
                            <div className="row_columnt">
                                <h3>Sign up in Website</h3>
                                <p> Register with your Email, Give a Username and a Password and Enjoy the Experience! </p>
                            </div>
                        </div>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={contract} alt="contract"/>
                            </div>
                            <div className="row_columnt">
                                <h3>Enroll your courses</h3>
                                <p> Choose a Subject Explore Courses inside the Find the Key then Enroll to Courses. </p>
                            </div>
                        </div>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={video} alt="video"/>
                            </div>
                            <div className="row_columnt">
                                <h3>Start from now</h3>
                                <p>Why are you waiting to Register Right Now and Start your Journey with Us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="get_start_column">
                        <img src={get} alt="get"/>
                    </div>
                </div>
            </div> */}
    </div>
  );
}
