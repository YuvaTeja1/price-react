import "./styles.css";

export default function App() {
  return (
    <>
      <div className="container"></div>
      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="static">
        <h3 className="heading">Our Pricing</h3>
        <p className="text1">Annually</p>
        <p className="text2">Monthly</p>
        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="card1"></div>
      <h4 className="master">Master</h4>
      <h6 className="dollar1">$</h6>
      <p className="price1">19.99</p>
      <div className="line1"></div>
      <p className="storage1">500 GB Storage</p>
      <div className="line2"></div>
      <p className="allow1">5 Users Allowed</p>
      <div className="line3"></div>
      <p className="send1">Send up to 3 GB</p>
      <div className="line4"></div>
      <button className="btn1">Learn More</button>

      <div className="card2"></div>
      <h4 className="prof">Professional</h4>
      <h6 className="dollar2">$</h6>
      <p className="price2">24.99</p>
      <div className="line11"></div>
      <p className="storage2">1 TB Storage</p>
      <div className="line21"></div>
      <p className="allow2">5 Users Allowed</p>
      <div className="line31"></div>
      <p className="send2">Send up to 10 GB</p>
      <div className="line41"></div>
      <button className="btn2">Learn More</button>

      <div className="card3"></div>
      <h4 className="master2">Master</h4>
      <h6 className="dollar3">$</h6>
      <p className="price3">39.99</p>
      <div className="line12"></div>
      <p className="storage3">2 TB Storage</p>
      <div className="line22"></div>
      <p className="allow3">10 Users Allowed</p>
      <div className="line32"></div>
      <p className="send3">Send up to 20 GB</p>
      <div className="line42"></div>
      <button className="btn3">Learn More</button>
    </>
  );
}
