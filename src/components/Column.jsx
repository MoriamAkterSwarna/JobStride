import JobCard from "./JobCard";
import { columnConfig } from "../config/boardConfig";

function Column({ status, jobs }) {
  const config = columnConfig[status];
  
  return (
    <div
      className="rounded-2xl p-5 min-h-105 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${config.glow}, rgba(10, 10, 15, 0.95))`,
        border: `1px solid ${config.border}`,
        boxShadow: `0 0 40px ${config.glow}, 0 20px 50px rgba(0, 0, 0, 0.4)`,
      }}
    >
      {/* Glow effect at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${config.glow}, transparent 70%)`,
        }}
      />

      {/* Column Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: config.dot,
              boxShadow: `0 0 10px ${config.dot}`,
            }}
          />
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            {status}
          </h3>
        </div>
        <span
          className="text-xs font-bold px-3 py-1.5 rounded-lg"
          style={{
            background: `${config.dot}20`,
            color: config.dot,
            border: `1px solid ${config.dot}40`,
          }}
        >
          {jobs.length}
        </span>
      </div>

      {/* Jobs */}
      <div className="space-y-4 relative z-10">
        {jobs.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-12">
            No jobs in this stage
          </p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} statusColor={config.dot} />)
        )}
      </div>
    </div>
  );
}

export default Column;
