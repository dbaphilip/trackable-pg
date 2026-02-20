"use client";

import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@/app/generated/prisma/browser";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import { useState } from "react";

interface Props {
  issue: Issue;
}

export default function IssueDetails({ issue }: Props) {
  const [error, setError] = useState(false);

  return (
    <>
      <div className="col-md-6">
        <h1 className="brico fw-bold" style={{ fontSize: "3rem" }}>
          {issue.title}
        </h1>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-3">
            <IssueStatusBadge status={issue.status} />
          </div>

          <span className="text-secondary brico fw-bold fs-4">
            {issue.createdAt.toDateString()}
          </span>
        </div>
      </div>

      <div className="col-md-6">
        {/* Issue Description */}
        <div
          className="lh-1 fs-2 p-2 brico shadow-secondary"
          dangerouslySetInnerHTML={{ __html: issue.description }}
        />

        {/* Issue Actions: Buttons */}
        <div className="mt-4 d-flex justify-content-between">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton
            issueId={issue.id}
            onError={(hasError) => setError(hasError)}
          />
        </div>

        {/* Delete Error Alert */}
        {error && (
          <div
            className="mt-5 fs-4 alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Oops!</strong>{" "}
            <span className="brico fs-4">The issue could not be deleted.</span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setError(false)}
            ></button>
          </div>
        )}
      </div>
    </>
  );
}
