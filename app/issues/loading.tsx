import Skeleton from "../components/Skeleton";

export default function LoadingIssuesPage() {
  const rows = [1, 2, 3];
  return (
    <div className="container">
      <table className="fs-3 shadow-primary table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Issue</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th scope="row"></th>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
