import PropTypes from "prop-types";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mb-4" />
      <h3 className="text-base  text-gray-500 mb-2 flex text-center font-bold text-gray ">
        {benefit.title}
      </h3>
      <p className="text-gray-400 text-xs text-center text-black-87 leading-7">
        {benefit.description}
      </p>
    </div>
  );
};

BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BenefitCard;
