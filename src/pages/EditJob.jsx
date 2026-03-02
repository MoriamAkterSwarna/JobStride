
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Briefcase, Building2, DollarSign, MapPin, Link2, FileText, Calendar, Clock, FileUp } from "lucide-react";
import { useJobs } from "../context/JobContext";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, updateJob } = useJobs();
  
  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    company: job?.company || "",
    role: job?.role || "",
    salary: job?.salary || "",
    location: job?.location || "",
    link: job?.link || "",
    dateApplied: job?.dateApplied || "",
    followUpDate: job?.followUpDate || "",
    status: job?.status || "Applied",
    notes: job?.notes || "",
    resumeLink: job?.resumeLink || "",
    coverLetterLink: job?.coverLetterLink || "",
  });

  if (!job) {
    return (
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedJob = {
      ...formData,
      updatedAt: new Date().toISOString(),
      activity: [
        ...job.activity,
        {
          id: `a${Date.now()}`,
          type: "updated",
          description: "Job details updated",
          timestamp: new Date().toISOString(),
        },
      ],
    };
    
    updateJob(id, updatedJob);
    navigate(`/job/${id}`);
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span style={{ color: "hsl(187, 100%, 50%)" }}>Edit Job</span>
          </h1>
          <p className="text-gray-400">Update your job application details</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-linear-to-br from-purple-100/50 to-cyan-200/80 border border-gray-700"
        >
          {/* Company */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building2 className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="e.g. Google, Stripe, Vercel"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
              Role / Job Title *
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="e.g. Senior Frontend Engineer"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Two columns: Salary & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Salary */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <DollarSign className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Salary Range
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g. $150,000 - $200,000"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Remote, San Francisco"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Job URL */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Link2 className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
              Job Posting URL
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://company.com/careers/job-id"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Two columns: Date Applied & Follow Up Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Applied */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Date Applied *
              </label>
              <input
                type="date"
                name="dateApplied"
                value={formData.dateApplied}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Follow Up Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Follow Up Date
              </label>
              <input
                type="date"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="Applied" className="bg-white">Applied</option>
              <option value="Interview" className="bg-white">Interview</option>
              <option value="Rejected" className="bg-white">Rejected</option>
            </select>
          </div>

          {/* Two columns: Resume Link & Cover Letter Link */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Resume Link */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <FileUp className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Resume Link
              </label>
              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="Link to resume"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Cover Letter Link */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
                Cover Letter Link
              </label>
              <input
                type="url"
                name="coverLetterLink"
                value={formData.coverLetterLink}
                onChange={handleChange}
                placeholder="Link to cover letter"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4" style={{ color: "hsl(187, 100%, 35%)" }} />
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Add any notes about this application..."
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(270, 100%, 60%))",
              boxShadow: "0 4px 20px hsla(187, 100%, 50%, 0.3)",
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditJob;