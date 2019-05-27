import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="price">
        <div className="price__dialog">
          <div className="arrow-box">save 82%</div>
        </div>
        <div className="price__currency">$</div>
        <div className="price__dollar">1</div>
        <div className="price__cents">45</div>
        <div className="price__month">/mo</div>
      </section>
    );
  }
}

export default Price;
