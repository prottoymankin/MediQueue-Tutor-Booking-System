import { Avatar } from "@heroui/react";

const TestimonialCard = ({ data }) => {
  const { name, role, image, review } = data;
  
  return (
    <div 
      className="border border-primary duration-200 p-6 rounded-2xl hover:scale-[1.05] shadow-md hover:shadow-[8px_8px_0_#023760] space-y-4 transition"
    >
      <div className="flex items-center gap-2">
        <Avatar>
          <Avatar.Image alt={name} src={image.src} className="object-cover" />
          <Avatar.Fallback>{name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-muted text-sm">{role}</p>
        </div>
      </div>
      
      <p className="italic text-primary">"{review}"</p>
    </div>
  );
};

export default TestimonialCard;