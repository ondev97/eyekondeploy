import React from "react";
import features1 from "../img/features/1.png";
import features2 from "../img/features/2.png";
import features3 from "../img/features/3.png";
import features4 from "../img/features/4.png";
import "../assets/css/features.css";
import FeaturesBox from "../components/FeaturesBox";

export default function Features() {
  return (
    <div className="maininde">
      <div className="upper_cover">
        <h1>Our Features</h1>
      </div>
      <div className="features-container">
        <FeaturesBox
          image={features1}
          heading="Live Streaming"
          para="සිසුන්ට වෙබ් අඩවිය හරහා Live Classes සදහා සම්බන්ද විය හැක. ගුරුවරයාට සිසුවා සමග සම්බන්ද වෙමින් ඉගැන්වීම් කටයුතු සිදු කල හැකි අතර මෙය සිසුන්ට සජීවී පන්ති කාමරයක අත්දැකීම සමීප කරවයි."
        />
        <FeaturesBox
          image={features2}
          heading="Video Embedded"
          para="Live Classes සදහා සම්බන්ද විය නොහැකි සිසුන් වෙනුවෙන් ඔබගේ ගුරුවරයා පාඩම්මාලා සදහා අදාළ සියලු recording videos වෙබ් අඩවියට upload කර තබනු ලැබේ. සිසුන්ට එය තමන්ට පහසු වේලාවක අධ්‍යනය කල හැක."
        />
        <FeaturesBox
          image={features3}
          heading="Content Privacy Protection"
          para="ගුරුවරුන් විසින් වෙබ් අඩවිය සදහා එක් කරනු ලබන සියලු අන්තර්ගතයන් (video contents) සුරක්ෂිත වේ. සිසුන්ට හෝ වෙන කිසිදු තෙවන පාර්ශවයකට එය කිසිලෙසක share කිරීමට හෝ download කිරීමට නොහැක."
        />
        <FeaturesBox
          image={features4}
          heading="Login Sessions"
          para="සිසුන්ට කිසිවිටෙක තමන්ගේ ශිෂ්‍ය ගිණුම (student account) තවත් සිසුන් අතරේ හුවමාරු කරගෙන භාවිතා කල නොහැක. එලෙස හුවමාරු කරගෙන භාවිතා කළහොත් එම student account ස්වයන්ක්‍රියව අක්‍රිය (block) වීම සිදුවේ."
        />
      </div>
    </div>
  );
}
