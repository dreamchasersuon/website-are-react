import React, { Component } from 'react';
import './NavigationHeader.css';
import './Button.css';

class NavigationHeader extends Component {
  handleClick(){
    let background = document.getElementsByClassName('BodyDivisorBlack-MainGroup')[0],
      gallery = document.getElementsByClassName('Gallery')[0];

      gallery.style.display = 'flex';
      background.style.filter = 'blur(5px)';
  }
  render() {
    return(
          <nav className="MainGroup-Nav">
            <div className="Nav-AdjustPosition_wrapper">
              <div className="AdjustPosition-InitialsLogo_wrapper">
                <a href="https://www.instagram.com/konstantin.rudenko.art/" rel="noreferrer noopener" target="_blank"><h1 className="InitialsLogo-Name">Konstantin
                  <svg className="MainSvg" width="30" height="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9863 75H64.0137C70.0716 75 75 70.0716 75 64.0137V10.9863C75 4.9284 70.0716 0 64.0137 0H10.9863C4.9284 0 0 4.9284 0 10.9863V64.0137C0 70.0716 4.9284 75 10.9863 75ZM4.39453 10.9863C4.39453 7.35168 7.35168 4.39453 10.9863 4.39453H64.0137C67.6483 4.39453 70.6055 7.35168 70.6055 10.9863V64.0137C70.6055 67.6483 67.6483 70.6055 64.0137 70.6055H10.9863C7.35168 70.6055 4.39453 67.6483 4.39453 64.0137V10.9863Z" fill="rgba(255, 255, 255, 1)"></path>
                      <path d="M37.5 57.2754C48.4039 57.2754 57.2754 48.4039 57.2754 37.5C57.2754 26.5961 48.4039 17.7246 37.5 17.7246C26.5961 17.7246 17.7246 26.5961 17.7246 37.5C17.7246 48.4039 26.5961 57.2754 37.5 57.2754ZM37.5 22.1191C45.9812 22.1191 52.8809 29.0188 52.8809 37.5C52.8809 45.9812 45.9812 52.8809 37.5 52.8809C29.0188 52.8809 22.1191 45.9812 22.1191 37.5C22.1191 29.0188 29.0188 22.1191 37.5 22.1191Z" fill="rgba(255, 255, 255, 1)"></path>
                      <path d="M59.4727 22.1191C63.1073 22.1191 66.0645 19.162 66.0645 15.5273C66.0645 11.8927 63.1073 8.93555 59.4727 8.93555C55.838 8.93555 52.8809 11.8927 52.8809 15.5273C52.8809 19.162 55.838 22.1191 59.4727 22.1191ZM59.4727 13.3301C60.684 13.3301 61.6699 14.316 61.6699 15.5273C61.6699 16.7387 60.684 17.7246 59.4727 17.7246C58.2613 17.7246 57.2754 16.7387 57.2754 15.5273C57.2754 14.316 58.2613 13.3301 59.4727 13.3301Z" fill="rgba(255, 255, 255, 1)"></path>
                  </svg></h1></a>
                  <a href="https://www.facebook.com/profile.php?id=100005225081366&ref=br_rs" rel="noreferrer noopener" target="_blank"><h1 className="InitialsLogo-Surname">
                      <svg className="MainSvg" width="30" height="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9863 75H35.4492V48.3398H26.6602V39.5508H35.4492V28.5645C35.4492 22.5065 40.3776 17.5781 46.4355 17.5781H57.4219V26.3672H48.6328C46.2095 26.3672 44.2383 28.3384 44.2383 30.7617V39.5508H57.0253L55.5605 48.3398H44.2383V75H64.0137C70.0716 75 75 70.0716 75 64.0137V10.9863C75 4.9284 70.0716 0 64.0137 0H10.9863C4.9284 0 0 4.9284 0 10.9863V64.0137C0 70.0716 4.9284 75 10.9863 75ZM4.39453 10.9863C4.39453 7.35168 7.35168 4.39453 10.9863 4.39453H64.0137C67.6483 4.39453 70.6055 7.35168 70.6055 10.9863V64.0137C70.6055 67.6483 67.6483 70.6055 64.0137 70.6055H48.6328V52.7344H59.2833L62.2129 35.1562H48.6328V30.7617H61.8164V13.1836H46.4355C37.9543 13.1836 31.0547 20.0832 31.0547 28.5645V35.1562H22.2656V52.7344H31.0547V70.6055H10.9863C7.35168 70.6055 4.39453 67.6483 4.39453 64.0137V10.9863Z" fill="rgba(255, 255, 255, 1)"></path>
                  </svg>Rudenko</h1></a>
            </div>
            <div className="Button_opened" onClick={this.handleClick}>gallery</div>
        </div>
      </nav>
    );
  }
}

export default NavigationHeader;
