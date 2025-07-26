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
    <div className="max-w-[30%]">
      {/* Main Card */}
      <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="p-8 text-center space-y-6">
          {/* Header Image */}
          <img 
            src={image}
            alt={`${title} - ${description}`}
            className="w-full h-auto rounded-lg"
          />

          {/* Badges */}
          <div className="flex justify-center space-x-3">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 text-sm font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Bottom Info Bar */}
      <div className="bg-gray-900 rounded-b-xl px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-gray-400 text-xs">{url}</span>
          <div className="flex items-center space-x-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <div className="flex items-center space-x-4 text-gray-400">
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
          <p className="text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}