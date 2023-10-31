import Card from "./Card.jsx";
import accuracy from "../assets/accuracy.jpg";
import max_time from "../assets/max_time.jpg";
import testCase from "../assets/testCases.jpg"

function Performance() {
  return (
    <div className="performance-cards">
      <span data-aos="fade-up"  data-aos-duration="600" className="performance-heading">Performance</span>
      <div className="performance-cards-fr">
        <Card img={testCase} name="2200 TestCases"></Card>
        <Card img={accuracy} name="95%"></Card>
        <Card img={max_time} name="2 sec Max-Time"></Card>
      </div>
    </div>
  );
}

export default Performance;
