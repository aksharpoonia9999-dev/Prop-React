const Paragraph = ({ line1, line2 }) => {
  return (
    <p className="text-center text-base leading-body text-white/80">
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
    </p>
  );
};

export default Paragraph;
