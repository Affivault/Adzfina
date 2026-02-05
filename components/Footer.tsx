import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear() /* 2026 will render when current year is 2026 */} Adzfina. All
              rights reserved.
            </p>

            {/* Social icons section removed per design change.
                Any click handlers related to social links should be removed from the component. */}
          </div>
        </div>
      </div>
    </footer>
  );
}