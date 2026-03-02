import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { statusFilters, columnConfig } from "../config/boardConfig";
import Column from "./Column";

function Board() {
  const { jobs, loading } = useJobs();
  const [activeStatus, setActiveStatus] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    return activeStatus === "All" || job.status === activeStatus;
  });

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">Loading jobs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: "hsl(187, 100%, 50%)" }}>Applications</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Organize your job search with our intuitive kanban board
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-10">
          <div 
            className="flex items-center gap-1 p-1.5 rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeStatus === status
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                style={
                  activeStatus === status
                    ? {
                        background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(200, 100%, 45%))",
                        boxShadow: "0 4px 20px hsla(187, 100%, 50%, 0.35)",
                      }
                    : {}
                }
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(columnConfig).map((status) => (
            <Column
              key={status}
              status={status}
              jobs={filteredJobs.filter((job) => job.status === status)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Board;