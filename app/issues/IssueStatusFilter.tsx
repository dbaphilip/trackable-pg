"use client";

import { useRouter } from "next/navigation";
import { Status } from "../generated/prisma/enums";

const statuses: { label: string; value: "" | Status }[] = [
  { label: "All", value: "" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "WIP" },
];

export default function IssueStatusFilter() {
  const router = useRouter();

  return (
    <div>
      <select
        onChange={(e) => {
          const query = e.target.value ? `?status=${e.target.value}` : "";
          router.push(`/issues${query}`);
        }}
        className="brico fw-bold fs-3 shadow-primary form-select"
      >
        {statuses.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
