import { useEffect, useState } from "react";
import { getDashboard } from "../services/apiDashboard";
import Box from "./Box";
import CreateModal from "./CreateModal";

function DashboardGrid() {
    const [dashboard, setDashboard] = useState(null);
    useEffect(() => {
        getDashboard().then((data) => setDashboard(data));
    },[])
    
    
  return (
    <div className="flex flex-wrap bg-gray-50 font-medium rounded-md border-none gap-2">
      <CreateModal />
      {dashboard?.map((feedback) => (
        <Box key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}
export default DashboardGrid;
