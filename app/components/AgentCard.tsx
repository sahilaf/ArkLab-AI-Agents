import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/15 text-green-300 border-green-500/30";
      case "Beta":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "Archived":
        return "bg-gray-500/15 text-gray-300 border-gray-500/30";
      default:
        return "bg-gray-500/15 text-gray-300 border-gray-500/30";
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Free":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "Freemium":
        return "bg-violet-500/15 text-violet-300 border-violet-500/30";
      case "Pay-per-use":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      case "Subscription":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
      default:
        return "bg-gray-500/15 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <Card
      className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/30 hover:scale-[1.02] cursor-pointer group bg-gradient-to-br from-[#0f1c10]/50 via-[#1e1a0f]/40 to-[#142a12]/40 border border-[#2f3b2f]/30 backdrop-blur-sm relative overflow-hidden ">
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-start justify-between">
          
          <div className="flex flex-col gap-1.5">
            <Badge className={`text-xs font-medium ${getStatusColor(agent.status)}`}>
              {agent.status}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
          {agent.name}
        </CardTitle>
        <CardDescription className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {agent.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-xs border-slate-600/40 text-slate-300 bg-slate-800/30 font-medium"
          >
            {agent.category}
          </Badge>
          <Badge className={`text-xs font-medium ${getPricingColor(agent.pricingModel)}`}>
            {agent.pricingModel}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
