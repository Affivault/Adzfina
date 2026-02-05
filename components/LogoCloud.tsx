import React from "react";

export default function LogoCloud() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-600">
            Trusted by Leading Financial Affiliates
          </h2>
          <div className="mt-2 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1">
            <span className="text-sm font-medium text-indigo-700">300+ Affiliates</span>
          </div>

          {/* Logo grid removed per design change - only the header/badge remains */}
        </div>
      </div>
    </section>
  );
}