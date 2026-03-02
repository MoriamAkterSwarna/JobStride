
import { useParams, useNavigate } from "react-router";
import { useJobs } from "../context/JobContext";
import { 
  ArrowLeft, 
  Building2, 
  Briefcase, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ExternalLink, 
  FileText, 
  Clock, 
  Edit, 
  Trash2,
  Activity
} from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, deleteJob } = useJobs();

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400">Job not found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-cyan-400 hover:text-cyan-300"
          >
            Go back home
          </button>
        </div>
      </section>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(job.id);
      navigate("/");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-job/${job.id}`);
  };

  const statusColors = {
    Applied: "hsl(187, 100%, 50%)",
    Interview: "hsl(45, 100%, 50%)",
    Rejected: "hsl(0, 80%, 55%)",
  };

  const statusColor = statusColors[job.status] || statusColors.Applied;

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Main Card */}
        <div
          className="rounded-2xl p-8 mb-6"
          style={{
            background: "linear-gradient(180deg, rgba(25, 25, 35, 0.95), rgba(12, 12, 18, 0.98))",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6" style={{ color: statusColor }} />
                <h1 className="text-2xl md:text-3xl font-bold text-white">{job.company}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-400" />
                <p className="text-lg text-gray-300">{job.role}</p>
              </div>
            </div>
            {job.link && (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: `${statusColor}20`,
                color: statusColor,
                border: `1px solid ${statusColor}40`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: statusColor }}
              />
              {job.status}
            </span>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Location */}
            {job.location && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                  <p className="text-white">{job.location}</p>
                </div>
              </div>
            )}

            {/* Salary */}
            {job.salary && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <DollarSign className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Salary</p>
                  <p className="text-white">{job.salary}</p>
                </div>
              </div>
            )}

            {/* Date Applied */}
            {job.dateApplied && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <Calendar className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Date Applied</p>
                  <p className="text-white">
                    {new Date(job.dateApplied).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Follow Up Date */}
            {job.followUpDate && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Follow Up</p>
                  <p className="text-white">
                    {new Date(job.followUpDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Notes */}
          {job.notes && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Notes</h3>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-gray-300 whitespace-pre-wrap">{job.notes}</p>
              </div>
            </div>
          )}

          {/* Activity Timeline */}
          {job.activity && job.activity.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-gray-400" />
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Activity</h3>
              </div>
              <div className="space-y-3">
                {job.activity.map((act) => (
                  <div 
                    key={act.id} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                    <div>
                      <p className="text-sm text-gray-300">{act.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(act.timestamp).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-white/10">
            <button
              onClick={handleEdit}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(200, 100%, 45%))",
                boxShadow: "0 4px 20px hsla(187, 100%, 50%, 0.3)",
              }}
            >
              <Edit className="w-5 h-5" />
              Edit Job
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-red-400 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;