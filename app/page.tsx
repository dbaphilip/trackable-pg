import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const wip = await prisma.issue.count({ where: { status: "WIP" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <IssueSummary open={open} wip={wip} closed={closed} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow-primary p-3">
            <LatestIssues />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5rem" }} className="row">
        <div className="py-3 border-top border-bottom fs-1 mb-5 text-secondary-emphasis text-center">
          This database is transient. It is refreshed every 15 minutes to remove
          potentially offensive content. Thank you.
        </div>
      </div>
    </div>
  );
}
