const Heading = ({ start, highlight, end }) => {
  return (
    <h1 className="text-center text-heading leading-heading  text-white">
      {start} <span className="text-accent">{highlight}</span>
      <span className="block">{end}</span>
    </h1>
  );
};

export default Heading;
