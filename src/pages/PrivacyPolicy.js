import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/privacypolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="maininde">
      <div className="upper_cover">
        <h1>Privacy Policy</h1>
      </div>
      <div className="mainContent">
        <div className="sectionsPrivacy">
          <h1>Who We are</h1>
          <p>
            Our website address is{" "}
            <span>
              {
                <Link to="//eyekoneclass.lk" target="_blank">
                  &nbsp;https://eyekoneclass.lk
                </Link>
              }
            </span>{" "}
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Our Commitment:</h1>
          <p>
            Our Privacy Policy was developed as an extension of our commitment
            to combine the highest-quality products and services with the
            highest level of integrity in dealing with our clients and partners.
            The Policy is designed to assist you in understanding how we
            collect, use and safeguard the personal information you provide to
            us and to assist you in making informed decisions when using our
            site and our products and services. This statement will be
            continuously assessed against new technologies, business practices
            and our customers' needs.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>What Information Do We Collect?</h1>
          <p>
            When you visit our Web site you may provide us with two types of
            information: personal information you knowingly choose to disclose
            that is collected on an individual basis and Web site use
            information collected on an aggregate basis as you and others browse
            our Web site.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Email Information</h1>
          <p>
            In addition to providing the foregoing information to our partners,
            if you choose to correspond further with us through email, we may
            retain the content of your email messages together with your email
            address and our responses. We provide the same protections for these
            electronic communications that we employ in the maintenance of
            information received by mail and telephone.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>How Do We Use the Information That You Provide to Us?</h1>
          <p>
            Broadly speaking, we use personal information for purposes of
            administering our business activities, providing customer service
            and making available other products and services to our customers
            and prospective customers. Occasionally, we may also use the
            information we collect to notify you about important changes to our
            Web site, new services and special offers we think you will find
            valuable. The lists used to send you product and service offers are
            developed and managed under our traditional corporate standards
            designed to safeguard the security and privacy of our customers’
            personal information. As a customer, you will be given the
            opportunity, at least once annually, to notify us of your desire not
            to receive these offers.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>What Are Cookies?</h1>
          <p>
            Cookies are a feature of the Web browser software that allows Web
            servers to recognize the computer used to access a Web site. Cookies
            are small pieces of data that are stored by a user’s Web browser on
            the user’s hard drive. Cookies can remember what information a user
            accesses on one Web page to simplify subsequent interactions with
            that Web site by the same user or to use the information to
            streamline the user’s transactions on related Web pages. This makes
            it easier for a user to move from Web page to Web page and to
            complete commercial transactions over the Internet. Cookies should
            make your online experience easier and more personalized.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>How Do We Use Information We Collect from Cookies?</h1>
          <p>
            We use Web site browser software tools such as cookies and Web
            server logs to gather information about our Web site users’ browsing
            activities, in order to constantly improve our Web site and better
            serve our customers. This information assists us to design and
            arrange our Web pages in the most user-friendly manner and to
            continually improve our Web site to better meet the needs of our
            customers and prospective customers.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Notice of New Services and Changes</h1>
          <p>
            Occasionally, we may also use the information we collect to notify
            you about important changes to our Website, new services and special
            offers we think you will find valuable. As our client, you will be
            given the opportunity to notify us of your desire not to receive
            these offers by clicking on a response box when you receive such an
            offer or by sending us a request.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Disclose Information to Outside Parties</h1>
          <p>
            We may provide aggregate information about our customers, sales, Web
            site traffic patterns and related Web site information to our
            affiliates or reputable third parties, but this information will not
            include personally identifying data, except as otherwise provided in
            this Privacy Policy.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Legally Compelled Disclosure of Information</h1>
          <p>
            We may disclose information when legally compelled to do so, in
            other words, when we, in good faith, believe that the law requires
            it or for the protection of our legal rights.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Other Web Sites Linked to Our Web Site</h1>
          <p>
            We are not responsible for the practices employed by Web sites
            linked to or from our Web site nor the information or content
            contained therein. Often links to other Web sites are provided
            solely as pointers to information on topics that may be useful to
            the users of our Web site. Please remember that when you use a link
            to go from our Web site to another Web site, our Privacy Policy is
            no longer in effect. Your browsing and interaction on any other Web
            site, including Web sites which have a link on our Web site, is
            subject to that Web site’s own rules and policies. Please read over
            those rules and policies before proceeding.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Embedded content from other websites:</h1>
          <p>
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website. These websites may collect data about you, use
            cookies, embed additional third-party tracking, and monitor your
            interaction with that embedded content, including tracking your
            interaction with the embedded content if you have an account and are
            logged in to that website.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Your Consent</h1>
          <p>
            By using our Web site you consent to our collection and use of your
            personal information as described in this Privacy Policy. If we
            change our privacy policies and procedures, we will post those
            changes on our Web site to keep you aware of what information we
            collect, how we use it and under what circumstances we may disclose
            it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
