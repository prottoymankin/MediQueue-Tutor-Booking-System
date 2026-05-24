import { Label } from "@heroui/react";

const DateInput = ({ label, setterFunc, value }) => {
  const handleChange = (e) => {
    setterFunc(e.target.value);
  }

  return (
    <div className="flex flex-col gap-1">
      <Label>{label}</Label>
      <input
        className="px-3 py-2 bg-white dark:bg-[#1A1A1E] max-w-sm md:w-2xs rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        type="date"
        value={value}
      />
    </div>
  );
};

export default DateInput;