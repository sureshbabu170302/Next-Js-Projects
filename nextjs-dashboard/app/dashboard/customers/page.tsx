import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const customers = [
  {
    id: 1,
    name: "Michael Novotny",
    email: "Michael@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Delba de Oliveira",
    email: "delba@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Balazs Orban",
    email: "balazs@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Lee Robinson",
    email: "lee02@example.com",
    status: "Active",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      {/* Customer Section */}
      <div>
        <div>
          <h1
            className={`${lusitana.className} text-2xl text-gray-800 md:text-3xl`}
          >
            Customer Statistics
          </h1>
          <p className="mt-2 text-gray-600">
            Detailed statistics about dashboard customers
          </p>

          {/* Statistics Grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Customers */}
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h2 className={`${lusitana.className} text-xl text-blue-500`}>
                Total Customers
              </h2>
              <p className="mt-4 text-3xl font-semibold text-gray-800">1,230</p>
            </div>

            {/* Active Customers */}
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h2 className={`${lusitana.className} text-xl text-green-500`}>
                Active Customers
              </h2>
              <p className="mt-4 text-3xl font-semibold text-gray-800">820</p>
            </div>

            {/* Inactive Customers */}
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h2 className={`${lusitana.className} text-xl text-red-500`}>
                Inactive Customers
              </h2>
              <p className="mt-4 text-3xl font-semibold text-gray-800">410</p>
            </div>

            {/* Average Revenue per Customer */}
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h2 className={`${lusitana.className} text-xl text-purple-500`}>
                Avg. Revenue per Customer
              </h2>
              <p className="mt-4 text-3xl font-semibold text-gray-800">$245</p>
            </div>
          </div>
        </div>
        {/* Customer Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="rounded-lg border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className={`${lusitana.className} text-xl text-blue-500`}>
                {customer.name}
              </h2>
              <p className="mt-2 text-gray-600 text-wrap">{customer.email}</p>
              <p
                className={`mt-4 font-semibold ${
                  customer.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {customer.status}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Customer ID: {customer.id}
                </span>
                <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400">
                  <span>Details</span>
                  <ArrowRightIcon className="w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
