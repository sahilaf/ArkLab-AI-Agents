"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setAgents,
  setSearchQuery,
  setStatuses,
  setCategories,
  setPricing,
  clearAllFilters,
} from "@/store/agentSlice";
import SearchAndFilters from "./components/SearchAndFilters";
import AgentCard from "./components/AgentCard";
import { motion } from "framer-motion";

interface Props {
  agents: any[];
}

const CatalogPageClient = ({ agents }: Props) => {
  const dispatch = useDispatch();
  const { filteredAgents, searchQuery, statuses, categories, pricing } =
    useSelector((state: RootState) => state.agents);

  useEffect(() => {
    dispatch(setAgents(agents));
  }, [agents, dispatch]);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6">
      <SearchAndFilters
        searchQuery={searchQuery}
        onSearchChange={(q) => dispatch(setSearchQuery(q))}
        selectedStatuses={statuses}
        onStatusChange={(s) => dispatch(setStatuses(s))}
        selectedCategories={categories}
        onCategoryChange={(c) => dispatch(setCategories(c))}
        selectedPricing={pricing}
        onPricingChange={(p) => dispatch(setPricing(p))}
        onClearAll={() => {
          dispatch(clearAllFilters());
        }}
        totalResults={filteredAgents.length}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AgentCard agent={agent} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPageClient;
