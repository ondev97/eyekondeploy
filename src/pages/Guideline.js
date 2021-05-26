import React from "react";
import "../assets/css/guideline.css";

export default function Guideline() {
  return (
    <div className="maininde">
      <div className="upper_cover">
        <h1>Our Guidelines</h1>
      </div>
      <div className="main-box-outer">
        <div className="main-box lang">
          <h2>Last Update</h2>
          <p>2021 May 20</p>
        </div>
        <div className="main-box">
          <h2>
            Eyekon eClass සදහා log වීමේදී "Unable to log in with provided
            credentials" ලෙස error message එකක් පැමිණීම.
          </h2>
          <p>
            මෙයට හේතුව වනුයේ, ඔබ විසින් ඔබගේ student account සදහා log වීමට භාවිත
            කරන ලද username (class number) හෝ password එකෙහි කුමන හෝ දෝෂයක්
            පැවතීමයි. එම තොරතුරු නිවැරදි දැයි හොදින් පරීක්ෂා කර නැවත වරක් log
            වීමට උත්සාහ කරන්න. එහෙත් එම ගැටලුව පවතීනම්, ඔබගේ දැනට පවතින password
            එක අලුත් password එකක් දක්වා වෙනස් (change/reset) කලයුතු වේ. ඒ සදහා
            ඔබ Log In බොත්තම අසල ඇති "Forgot Password" මත click කරන්න ඉන්පසු ඔබ
            Eyekon eClass account එක සැදීමට භාවිත කරන ලද email ලිපිනය ඇතුලත්
            කරන්න. ඉන්පසු එම email ලිපිනයට password reset link එකක් පැමිණේ. එම
            link එක click කර ඔබට ඔබගේ password එක change කරගත හැක.
          </p>
        </div>
      </div>
    </div>
  );
}
