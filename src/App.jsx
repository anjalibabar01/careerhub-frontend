import { Routes, Route } from "react-router-dom";

// ================= PUBLIC PAGES =================
import Home from "./pages/public/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResumeTips from "./pages/public/ResumeTips";
import InterviewPreparation from "./pages/public/InterviewPreparation";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import TermsConditions from "./pages/public/TermsConditions";

// ================= RECRUITER PAGES =================
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import PostJob from "./pages/recruiter/PostJob";
import MyJobs from "./pages/recruiter/MyJobs";
import EditJob from "./pages/recruiter/EditJob";
import Applicants from "./pages/recruiter/Applicants";
import RecruiterProfile from "./pages/RecruiterProfile";

// ================= JOB SEEKER PAGES =================
import JobSeekerDashboard from "./pages/jobseeker/JobSeekerDashboard";
import BrowseJobs from "./pages/jobseeker/BrowseJobs";
import SavedJobs from "./pages/jobseeker/SavedJobs";
import MyApplications from "./pages/jobseeker/MyApplications";
import JobSeekerProfile from "./pages/jobseeker/JobSeekerProfile";

// ================= ROUTE PROTECTION =================
import ProtectedRoute from "./components/routes/ProtectedRoute";
import RecruiterRoute from "./components/routes/RecruiterRoute";
import JobSeekerRoute from "./components/routes/JobSeekerRoute";
import CareerAdvice from "./pages/public/CareerAdvice";

function App() {
  return (
    <Routes>
      <Route
  path="/career-advice"
  element={<CareerAdvice />}
/>
      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Footer Pages */}
      <Route path="/resume-tips" element={<ResumeTips />} />
      <Route
        path="/interview-preparation"
        element={<InterviewPreparation />}
      />
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />
      <Route
        path="/terms"
        element={<TermsConditions />}
      />

      {/* ================= RECRUITER ROUTES ================= */}

      <Route
        path="/recruiter/dashboard"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterDashboard />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/post-job"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <PostJob />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/jobs"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <MyJobs />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/edit-job/:id"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <EditJob />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/applications"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <Applicants />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/profile"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterProfile />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      {/* ================= JOB SEEKER ROUTES ================= */}

      <Route
        path="/jobseeker/dashboard"
        element={
          <ProtectedRoute>
            <JobSeekerRoute>
              <JobSeekerDashboard />
            </JobSeekerRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <JobSeekerRoute>
              <BrowseJobs />
            </JobSeekerRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobseeker/saved-jobs"
        element={
          <ProtectedRoute>
            <JobSeekerRoute>
              <SavedJobs />
            </JobSeekerRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-applications"
        element={
          <ProtectedRoute>
            <JobSeekerRoute>
              <MyApplications />
            </JobSeekerRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobseeker/profile"
        element={
          <ProtectedRoute>
            <JobSeekerRoute>
              <JobSeekerProfile />
            </JobSeekerRoute>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;