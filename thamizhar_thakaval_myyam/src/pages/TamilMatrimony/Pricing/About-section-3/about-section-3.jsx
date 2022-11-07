import "./about-section-3.css";
// import browse from "../../../../Assets/Client/browse.png";
// import best from "../../../../Assets/Client/best.png"

const AboutSection3 = ({image, title, description}) => {
  return (
    <section className="pricesection3-main-container">
      <div className="pricesection3-right-container">
        <div className="pricesection3-right-content-warp">
          <div className="pricesection3-right-title">{title}</div>
          <div className="pricesection3-right-content">
            <table>
              <tr>
                <th>USER</th>
                <th>DESCRIPTION</th>
                <th>COST PER PROFILE(to download)</th>
              </tr>
              <tr>
                <td>Individual (Female)</td>
                <td>No registration fee for the first 6 months</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Individual (Male)</td>
                <td>No registration fee for the first 3 months</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Agents</td>
                <td>No registration fee**</td>
                <td>50</td>
              </tr>
              <tr>
                <th></th>
                <th>AFTER THE INITIAL LAUNCHING OFFERS</th>
                <th></th>
              </tr>
              <tr>
                <td>Ladies</td>
                <td>For 3 months subscription (1000 rupees)</td>
                <td>25 profiles free*</td>
              </tr>
              <tr>
                <td>Total Limit</td>
                <td>For 3 months subscription (1500 rupees)</td>
                <td>25 profiles free*</td>
              </tr>
            </table>

            <p>* After free trail Female & Male individual members can also continue using our services without membership fee on the basis of pay per profile (downloading) (60 & 70 rupees respectively)</p>
            <p>** Agents can share the profiles that they have with them with TTM @ 30 rupees per profile.
Disclaimer: Background verifications for matrimony purposes are done only on a discreet manner unlike credit verifications. They can be considered only as basic indicators. So one cannot rely 100% on these report while deciding on the background of a profile because these reports are likely to be ambiguous, so it is the members who have the responsibility to cross check each profiles thoroughly before entering into any agreement.</p>

<table>
              <tr>
                <th>S.NO</th>
                <th>TYPE OF VERIFICATION</th>
                <th>Cost per verification(one address)</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>Discreet address verification</td>
                <td>500.00 (within TN)</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Employment details verification (need company name & address with designation)</td>
                <td>500.00 (within TN)</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Education verification (need the degree certificate copy & college name & address)</td>
                <td>750.00 (within TN)</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Horoscope Matching service (need copies of both horoscopes)</td>
                <td>750.00</td>
              </tr>
              
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection3;
