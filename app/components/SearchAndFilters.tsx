"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStatuses: string[];
  onStatusChange: (statuses: string[]) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  selectedPricing: string;
  onPricingChange: (pricing: string) => void;
  onClearAll: () => void;
  totalResults: number;
}

const SearchAndFilters = ({
  searchQuery,
  onSearchChange,
  selectedStatuses,
  onStatusChange,
  selectedCategories,
  onCategoryChange,
  selectedPricing,
  onPricingChange,
  onClearAll,
  totalResults,
}: SearchAndFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const statuses = ["Active", "Beta", "Archived"];
  const categories = [
    "Language Model",
    "Assistant",
    "Image Generation",
    "Audio Processing",
    "Video Generation",
    "Development",
    "Search",
    "Productivity",
    "Content Creation",
    "Entertainment",
    "Companion",
    "Research",
  ];
  const pricingModels = ["Free", "Freemium", "Pay-per-use", "Subscription"];

  const handleStatusToggle = (status: string) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const getActiveFiltersCount = () => {
  return selectedStatuses.length + 
         selectedCategories.length + 
         (selectedPricing && selectedPricing !== "all" ? 1 : 0);
};


  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search AI agents..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 text-lg rounded-xl text-white"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="relative">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-4">
              {/* Status Filters */}
              <div>
                <Label className="text-sm font-medium mb-2 block">Status</Label>
                <div className="space-y-2">
                  {statuses.map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox
                        id={status}
                        checked={selectedStatuses.includes(status)}
                        onCheckedChange={() => handleStatusToggle(status)}
                      />
                      <Label htmlFor={status} className="text-sm">
                        {status}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filters */}
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Category
                </Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Model Filter */}
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Pricing Model
                </Label>
                <Select value={selectedPricing} onValueChange={onPricingChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All pricing models" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All pricing models</SelectItem>
                    {pricingModels.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Active Filters Display */}
        {selectedStatuses.map((status) => (
          <Badge
            key={status}
            variant="secondary"
            className="flex items-center gap-1"
          >
            Status: {status}
            
          </Badge>
        ))}

        {selectedCategories.map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="flex items-center gap-1 z-10"
          >
            {category}
            
          </Badge>
        ))}

        {selectedPricing && selectedPricing !== "all" && (
          <Badge variant="secondary" className="flex items-center gap-1">
            {selectedPricing}
            
          </Badge>
        )}

        {/* Clear All Button */}
        {(searchQuery || getActiveFiltersCount() > 0) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground z-10"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {totalResults} agent{totalResults !== 1 ? "s" : ""} found
      </div>
    </div>
  );
};

export default SearchAndFilters;
