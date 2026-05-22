const WhyChooseCard = ({ data }) => {
  const { title, description, icon } = data;

  return (
    <div className="border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-2 text-center text-slate-900 dark:text-slate-50">
      <div 
        className="border border-slate-900 dark:border-slate-50 flex items-center justify-center h-15 mx-auto rounded-full text-3xl w-15"
      >
        {icon}
      </div>

      <h3 className="font-bold text-xl">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
};

export default WhyChooseCard;