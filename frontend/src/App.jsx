import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
      <BrowserRouter>
        <div className="flex min-h-screen bg-[#09090f]">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1">

            <Routes>

              {/* Dashboard */}
              <Route
                  path="/"
                  element={<Dashboard />}
              />

              {/* AI Assistant */}
              <Route
                  path="/assistant"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        AI Assistant 🤖
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Your personal AI assistant.
                      </p>
                    </div>
                  }
              />

              {/* Study Coach */}
              <Route
                  path="/study"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        Study Coach 📚
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Personalized study planning and progress.
                      </p>
                    </div>
                  }
              />

              {/* DSA Coach */}
              <Route
                  path="/dsa"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        DSA Coach 💻
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Practice DSA and track your progress.
                      </p>
                    </div>
                  }
              />

              {/* Career */}
              <Route
                  path="/career"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        Career Copilot 💼
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Resume, jobs and skill-gap analysis.
                      </p>
                    </div>
                  }
              />

              {/* Interview */}
              <Route
                  path="/interview"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        AI Interview 🎤
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Practice technical and HR interviews.
                      </p>
                    </div>
                  }
              />

              {/* Documents */}
              <Route
                  path="/documents"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        Documents 📄
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Upload and interact with your documents.
                      </p>
                    </div>
                  }
              />

              {/* Japan Mode */}
              <Route
                  path="/japan"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        Japan Mode 🇯🇵
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Prepare for Japanese jobs and interviews.
                      </p>
                    </div>
                  }
              />

              {/* Analytics */}
              <Route
                  path="/analytics"
                  element={
                    <div className="p-8 text-white">
                      <h1 className="text-3xl font-bold">
                        Analytics 📊
                      </h1>

                      <p className="mt-3 text-gray-400">
                        Track your learning and career progress.
                      </p>
                    </div>
                  }
              />

            </Routes>

          </main>

        </div>
      </BrowserRouter>
  );
}

export default App;