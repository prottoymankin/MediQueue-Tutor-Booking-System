const WhyChooseCard = ({ data }) => {
  const { title, description, icon } = data;

  return (
    <div className="space-y-2">
      <div className="bg-primary flex items-center justify-center h-15 rounded-full text-white text-3xl w-15">
        {icon}
      </div>
      <h3 className="font-bold text-primary text-2xl">{title}</h3>
      <p className="hyphens-auto text-justify text-muted">{description}</p>
    </div>
  );
};

export default WhyChooseCard;