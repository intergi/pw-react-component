import React from "react";
import { Ramp, RampUnit } from "@playwire/pw-react-component";

export default class App extends React.Component {
  constructor () {
    super();
    this.publisherId = localStorage.getItem('publisher_id') || '343';
    this.websiteId = localStorage.getItem('website_id') || '926';
    this.forcePath = localStorage.getItem('force_path');
  }

  handleGo = () => {
    if (this.nextPublisherId)
      localStorage.setItem('publisher_id', this.nextPublisherId);
    if (this.nextWebsiteId)
      localStorage.setItem('website_id', this.nextWebsiteId);
    if (this.nextWebsiteId)
      localStorage.setItem('force_path', this.forcePath);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Ramp publisherId={this.publisherId} id={this.websiteId} forcePath={this.forcePath}/>
        <div className="demo-main">
          <RampUnit type="leaderboard_atf" cssclassName="leaderboard" />

          <div className="row">
            <div className="main-content col-lg-8">
              <h1>Example Article Title</h1>
              <hr className="demo-sep" />
              <section
                className="demo-content-article"
                style={{
                  background: "white",
                  padding: "10px",
                  marginRight: "10px",
                }}
              >
                <p>
                  Bacon ipsum dolor amet jerky filet mignon short loin
                  tenderloin. Bresaola pork loin frankfurter beef ribs boudin
                  doner chuck meatball flank tri-tip landjaeger. Spare ribs ham
                  hamburger tongue prosciutto ball tip cow jowl meatloaf tail
                  salami. Capicola bacon porchetta doner, flank pork belly jowl
                  corned beef kielbasa shoulder.
                </p>
                <p>
                  Kevin leberkas tenderloin, filet mignon beef ribs sirloin
                  meatloaf t-bone swine. Doner boudin rump kielbasa, cow
                  landjaeger ground round brisket biltong venison short ribs
                  andouille. Tongue ball tip boudin, shank ham hock strip steak
                  cupim burgdoggen swine prosciutto ribeye bresaola tenderloin
                  alcatra. Capicola salami pork belly alcatra jowl sirloin
                  bacon. Shank spare ribs sirloin pork loin bresaola ham hock
                  prosciutto landjaeger picanha shankle cow drumstick ham.
                </p>
                <blockquote>
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur
                </blockquote>
                <RampUnit type="med_rect_btf" />
                <p>
                  Bacon ipsum dolor amet jerky filet mignon short loin
                  tenderloin. Bresaola pork loin frankfurter beef ribs boudin
                  doner chuck meatball flank tri-tip landjaeger. Spare ribs ham
                  hamburger tongue prosciutto ball tip cow jowl meatloaf tail
                  salami. Capicola bacon porchetta doner, flank pork belly jowl
                  corned beef kielbasa shoulder.
                </p>
                <p>
                  Kevin leberkas tenderloin, filet mignon beef ribs sirloin
                  meatloaf t-bone swine. Doner boudin rump kielbasa, cow
                  landjaeger ground round brisket biltong venison short ribs
                  andouille. Tongue ball tip boudin, shank ham hock strip steak
                  cupim burgdoggen swine prosciutto ribeye bresaola tenderloin
                  alcatra. Capicola salami pork belly alcatra jowl sirloin
                  bacon. Shank spare ribs sirloin pork loin bresaola ham hock
                  prosciutto landjaeger picanha shankle cow drumstick ham.
                </p>
                <RampUnit type="med_rect_btf" />
                <blockquote>
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur consectetur
                  consectetur consectetur consectetur consectetur
                </blockquote>
              </section>
            </div>
            <section className="sidebar col-lg-4">
              <h2>Sidebar Content</h2>
              <RampUnit
                selectorId="pwMedRectAtf"
                type="med_rect_atf"
                cssclassName="med_rect"
              />
              <p>
                Kevin leberkas tenderloin, filet mignon beef ribs sirloin
                meatloaf t-bone swine. Doner boudin rump kielbasa, cow
                landjaeger ground round brisket biltong venison short ribs
                andouille. Tongue ball tip boudin, shank ham hock strip steak
                cupim burgdoggen swine prosciutto ribeye bresaola tenderloin
                alcatra. Capicola salami pork belly alcatra jowl sirloin bacon.
                Shank spare ribs sirloin pork loin bresaola ham hock prosciutto
                landjaeger picanha shankle cow drumstick ham.
              </p>
              <hr />
              <h2>Sidebar Content</h2>
              <p>
                Kevin leberkas tenderloin, filet mignon beef ribs sirloin
                meatloaf t-bone swine. Doner boudin rump kielbasa, cow
                landjaeger ground round brisket biltong venison short ribs
                andouille. Tongue ball tip boudin, shank ham hock strip steak
                cupim burgdoggen swine prosciutto ribeye bresaola tenderloin
                alcatra. Capicola salami pork belly alcatra jowl sirloin bacon.
                Shank spare ribs sirloin pork loin bresaola ham hock prosciutto
                landjaeger picanha shankle cow drumstick ham.
              </p>
              <hr />
            </section>
          </div>
        </div>
        <div className="row" style={{paddingBottom: '50px', display: 'block'}}>
          <p>Publsiher ID:
            <input placeholder={this.publisherId} onChange={(e) => {this.nextPublisherId = e.target.value}}/>
          </p>
          <p>Website ID:
            <input placeholder={this.websiteId} onChange={(e) => {this.nextWebsiteId = e.target.value}}/>
          </p>
          <p>Force Path:
            <input onChange={(e) => {this.forcePath = e.target.value}}/>
          </p>
          <button type="button" onClick={this.handleGo}>Go!</button>
        </div>
      </div>
    );
  }
}
