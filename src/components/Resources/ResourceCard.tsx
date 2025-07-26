import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Star } from "lucide-react";

export default function GenericResourceCard({
  id,
  title,
  description,
  image,
  url,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}) {
  return (
    <div className="min-w-[280px] w-[280px] flex-shrink-0">
      {/* Main Card */}
      <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="p-5 text-center space-y-4">
          {/* Header Image */}
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="w-full h-auto"
          />

          {/* Badges */}
          <div className="flex justify-center space-x-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Bottom Info Bar */}
      <div className="bg-gray-900 rounded-b-xl px-4 py-3 flex flex-col">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-400 text-xs truncate">{url}</span>
          <h3 className="text-white font-semibold text-base whitespace-normal overflow-visible">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <div className="flex items-center space-x-4 text-gray-400 mt-1">
            <div className="flex items-center space-x-1">
              <Eye size={16} />
              <span className="text-sm">155</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star size={16} />
              <span className="text-sm">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
