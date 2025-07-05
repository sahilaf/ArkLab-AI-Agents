// store/agentSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}

interface AgentState {
  allAgents: Agent[];
  filteredAgents: Agent[];
  searchQuery: string;
  statuses: string[];
  categories: string[];
  pricing: string;
}

const initialState: AgentState = {
  allAgents: [],
  filteredAgents: [],
  searchQuery: "",
  statuses: [],
  categories: [],
  pricing: "all",
};

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents(state, action: PayloadAction<Agent[]>) {
      state.allAgents = action.payload;
      filterAgents(state);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      filterAgents(state);
    },
    setStatuses(state, action: PayloadAction<string[]>) {
      state.statuses = action.payload;
      filterAgents(state);
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
      filterAgents(state);
    },
    setPricing(state, action: PayloadAction<string>) {
      state.pricing = action.payload;
      filterAgents(state);
    },
    clearAllFilters(state) {
      state.searchQuery = "";
      state.statuses = [];
      state.categories = [];
      state.pricing = "all";
      filterAgents(state);
    },
  },
});

function filterAgents(state: AgentState) {
  const { allAgents, searchQuery, statuses, categories, pricing } = state;
  const query = searchQuery.toLowerCase();

  state.filteredAgents = allAgents.filter((agent) => {
    const matchesQuery =
      agent.name.toLowerCase().includes(query) ||
      agent.description.toLowerCase().includes(query);

    const matchesStatus =
      statuses.length === 0 || statuses.includes(agent.status);

    const matchesCategory =
      categories.length === 0 || categories.includes(agent.category);

    // ← Treat "all" as no filter
    const matchesPricing =
      pricing === "all" ||
      agent.pricingModel.toLowerCase() === pricing.toLowerCase();

    return matchesQuery && matchesStatus && matchesCategory && matchesPricing;
  });
}

export const {
  setAgents,
  setSearchQuery,
  setStatuses,
  setCategories,
  setPricing,
  clearAllFilters,
} = agentSlice.actions;

export default agentSlice.reducer;
