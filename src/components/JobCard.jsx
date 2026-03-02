import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";

function JobCard({ job, statusColor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
      style={{
        background: "linear-gradient(145deg, rgba(20, 20, 30, 0.95), rgba(12, 12, 18, 0.98))",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Header with company and link */}
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{job.company}</h4>
        {job.link && (
          <a 
            href={job.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      
      {/* Role */}
      <p className="text-sm text-gray-300 mb-3">{job.role}</p>
      
      {/* Location */}
      {job.location && (
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{job.location}</span>
        </div>
      )}
      
      {/* Date Applied */}
      {job.dateApplied && (
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(job.dateApplied).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      )}
      
      {/* Salary */}
      {job.salary && (
        <p className="text-sm font-medium" style={{ color: statusColor }}>
          {job.salary}
        </p>
      )}
      
      {/* Notes preview */}
      {job.notes && (
        <p className="text-xs text-gray-500 mt-3 line-clamp-2 border-t border-white/5 pt-3">
          {job.notes}
        </p>
      )}
    </div>
  );
}

export default JobCard;
