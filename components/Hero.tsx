import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  bgClass?: string;
  // No onClick props — interactivity removed, keep cursor-pointer for visual affordance
};

function StatCard({ title, value, bgClass = "bg-white" }: StatCardProps) {
  // Use consistent sizing and layout for all cards
  return (
    <div
      className={`cursor-pointer ${bgClass} rounded-lg p-6 shadow-sm flex flex-col justify-between min-h-[160px]`}
      aria-hidden="true"
    >
      <div className="flex items-start justify-between">
        <div className="text-sm font-medium text-gray-500">{title}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
          <p className="mt-2 text-lg text-gray-600">Snapshot of key metrics</p>
        </div>

        {/* Grid of stat cards - ensure consistent sizing and alignment for all cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Users" value="12,340" />
          <StatCard title="New Signups" value="1,120" />
          {/* Total Revenue card: keep same classes as other cards so dimensions match exactly */}
          <StatCard title="Total Revenue" value="$1,240,000" bgClass="bg-black text-white" />
          <StatCard title="Conversion Rate" value="4.2%" />
        </div>

        {/* Visual dashboard diagram (non-interactive) */}
        <div className="mt-8">
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            {/* Keep cursor-pointer so it looks interactive but remove onClick handlers and interactive logic */}
            <div className="cursor-pointer select-none">
              {/* Sidebar and topbar visuals — all click handlers removed */}
              <div className="flex gap-6">
                <div className="w-48 rounded-md bg-white p-4">Sidebar (visual)</div>
                <div className="flex-1 space-y-4">
                  <div className="h-12 rounded-md bg-white p-4">Topbar (visual)</div>
                  <div className="h-64 rounded-md bg-white p-4">Main content (visual)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}