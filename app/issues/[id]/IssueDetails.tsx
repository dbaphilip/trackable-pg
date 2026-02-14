import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@/app/generated/prisma/browser";

interface Props {
  issue: Issue;
}

export default function IssueDetails({ issue }: Props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1 className="brico fw-bold" style={{ fontSize: "3rem" }}>
          {issue.title}
        </h1>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-3">
            <IssueStatusBadge status={issue.status} />
          </div>

          <span className="fs-3">{issue.createdAt.toDateString()}</span>
        </div>
      </div>

      <div className="col-md-6">
        <div
          className="lh-1 fs-2 p-2 brico shadow-secondary"
          dangerouslySetInnerHTML={{ __html: issue.description }}
        />
      </div>
    </div>
  );
}
