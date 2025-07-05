

import CatalogPageClient from "../CatalogPageClient";
import agentsData from "../data/mockData.json";

const CatalogPage = () => {
  // Load agents data from JSON file
  const agents = agentsData;
  return <CatalogPageClient agents={agents} />;
};

export default CatalogPage;