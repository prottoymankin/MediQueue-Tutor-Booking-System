import { Avatar } from "@heroui/react";

const TestimonialCard = ({ data }) => {
  const { name, role, image, review } = data;
  
  return (
    <div 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4"
    >
      <div className="flex items-center gap-2">
        <Avatar>
          <Avatar.Image alt={name} src={image.src} className="object-cover" />
          <Avatar.Fallback>{name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-50">
            {name}
          </p>

          <p className="text-muted text-sm">{role}</p>
        </div>
      </div>
      
      <p className="italic text-slate-600 dark:text-slate-400">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;