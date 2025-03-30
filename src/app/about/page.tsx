"use client";

export default function About() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-2xl animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Application
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our amazing dashboard application. Our app is designed to
            give you insights into team performance, interactive charts, and a
            responsive UI that adapts seamlessly to all devices.
          </p>
          <p className="text-gray-700 mb-6">
            With powerful tools and an intuitive design, you can monitor team
            performance, track progress, and make data-driven decisions. We are
            constantly enhancing our features to provide you with the best
            experience possible.
          </p>
          <div>
            <a
            //   href="/"
              className="text-blue-500 hover:underline font-semibold"
            >
              Show More
            </a>
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
      </div>
    );
  }
  