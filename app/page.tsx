import LatestIssues from "./LatestIssues";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="fs-1 mb-5 text-secondary-emphasis text-center">
          This database is refreshed every 15 minutes to remove potentially
          offensive content. Thank you.
        </div>

        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="shadow-primary p-3">
            <h1 className="ms-1 brico fw-bold">Newest</h1>
            <LatestIssues />
          </div>
        </div>
      </div>
    </div>
  );
}
