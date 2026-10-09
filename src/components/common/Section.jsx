import Badge from "./Badge";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import purpleBg from "../../assets/purple-bg.svg";

const Section = ({
  tag,
  headingStart,
  highlight,
  headingEnd,
  line1,
  line2,
  buttonText,
  buttonLink,
  bgImage = purpleBg,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <section
        className="flex h-161 w-7xl items-center justify-center rounded-section bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="content flex flex-col items-center gap-7.5">
          <div className="headings flex flex-col items-center gap-5">
            <div className="heading-para flex flex-col items-center gap-3.25">
              <Badge text={tag} />
              <Heading start={headingStart} highlight={highlight} end={headingEnd} />
            </div>
            <Paragraph line1={line1} line2={line2} />
          </div>
          <Button text={buttonText} link={buttonLink} />
        </div>
      </section>
    </div>
  );
};

export default Section;
