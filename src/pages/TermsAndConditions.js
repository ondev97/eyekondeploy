import React, { useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="maininde">
      <div className="upper_cover">
        <h1>Terms and Conditions</h1>
      </div>
      <div className="mainContent">
        <div className="sectionsPrivacy">
          <p>
            Welcome to the user agreement (the "Agreement" or "User Agreement")
            for eyekoneclass.lk or eyekoneclass.com (eyekoneclass). This
            Agreement describes the terms and conditions applicable to your use
            of our products and services. If you do not agree to be bound by the
            terms and conditions of this Agreement, you are not permitted to
            access our website, resources, or services. eyekoneclass may be used
            interchangeably throughout this User Agreement. The terms "we",
            "ours", or "us" may be used interchangeably throughout this
            agreement and refer to eyekoneclass. You must read, agree with and
            accept all of the terms and conditions contained in this User
            Agreement and the Privacy Policy, which include those terms and
            conditions expressly set out below and those incorporated by
            reference, before you may become a member of eyekoneclass.{" "}
          </p>
          <p>
            We may amend this Agreement at any time by posting the amended terms
            on the Site. Except as stated below, all amended terms shall
            automatically be effective 30 days after they are initially posted
            on the Site.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Copyrighted Materials:</h1>
          <p>
            This web site, and materials contained within, are subject to the
            protection of Sri Lanka and international copyright laws. Users may
            not reproduce any of these materials without the prior written
            permission of eyekoneclass.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Minimum Age:</h1>
          <p>
            Services are available only to individuals who can form legally
            binding contracts under applicable law. Without limiting the
            foregoing, our services are not available to minors. You must be AT
            LEAST 18 years old to access the eyekoneclass website, resources,
            and services.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Liability:</h1>
          <p>
            In no event shall eyekoneclass be liable for any punitive, special,
            direct, indirect, incidental, or consequential damages, whether
            arising under contract, warranty, or tort (including negligence or
            strict liability) or any other theory of liability. Applicable law
            may not allow the limitation or exclusion of liability or incidental
            or consequential damages, so the above limitation or exclusion may
            not apply to you. eyekoneclass's liability for damages, regardless
            of the form of the action, shall not exceed the fee paid for the
            service. We cannot be held responsible for factors beyond our
            control that may interfere with our ability to provide access to our
            website. Such factors include, but are not limited to server
            downtime, password/verification problems, or network outages beyond
            our servers. eyekoneclass does not warrant that the functions
            contained in the materials, resources or services offered will be
            uninterrupted or error-free, that defects will be corrected, or that
            this site is free of viruses or other harmful elements. In no event
            will eyekoneclass be liable to any party for any direct, indirect,
            punitive, special, incidental or other consequential damages arising
            directly or indirectly from any use of the products or resources
            contained within the eyekoneclass website. All products and
            resources are provided "as is" and without warranties.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Termination:</h1>
          <p>
            These Terms of Use are effective until terminated by either party.
            You may terminate these Terms of Use by destroying all copies and
            installations of products and services obtained from us. The
            agreement will automatically and immediately terminate without
            notice should you violate any terms of this agreement. Violating our
            Terms Of Use, Copyrights, or any of our licensing restrictions, will
            result in termination of membership, and forfeiture of all reseller
            licenses, without notice or refund.
          </p>
          <p>
            Users agree to comply with all applicable domestic and international
            laws, statutes, ordinances and regulations regarding use of the
            eyekoneclass website
          </p>
          <p>
            Membership is non-transferable and non-refundable. Additionally,
            users agree to abide by any and all licensing rules or restrictions
            that have been created by the owners of the works contained within
            the eyekoneclass website. Violating our Terms Of Use, Copyrights, or
            any of our licensing restrictions, will result in termination of
            membership, and forfeiture of all reseller licenses, without notice
            or refund. Furthermore, Use of this website constitutes acceptance
            of the Legal Agreement and Terms Of Use.
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Warranties:</h1>
          <p>
            <b>
              eyekoneclass makes NO WARRANTIES express or implied and
              specifically, does not warrant FITNESS FOR SPECIFIC PURPOSE or
              WARRANTY OF MERCHANTABILITY of any product or service.
            </b>
          </p>
        </div>
        <div className="sectionsPrivacy">
          <h1>Communications from eyekoneclass:</h1>
          <p>
            By joining, or utilizing the eyekoneclass website, you give us
            permission to contact you periodically via email with regards to
            your membership, or any other reason. If you wish to no longer
            receive communications from us, you will need to cancel your
            membership or communication with us. If any provision of this
            agreement is void or unenforceable in whole or in part, the
            remaining provisions of this Agreement shall not be affected
            thereby. eyekoneclass reserves the right to amend this agreement at
            any time.
          </p>
          <p>
            {" "}
            eyekoneclass reserves the right to amend this agreement at any time.
          </p>
        </div>
        <p>
          eyekoneclass reserves the right to amend these “Terms and Conditions”
          at any time.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
