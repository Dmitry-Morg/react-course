import { Link, useParams } from "react-router-dom";

const Filters = () => {
  const { filter: activeFilter = "all" } = useParams();
  // const activeFilter = useSelector(selectActiveFilter)

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem" }}>
      <Link to="/all" style={{ color: activeFilter === "all" ? "red" : "black" }}>
        All
      </Link>

      <Link to="/active" style={{ color: activeFilter === "active" ? "red" : "black" }}>
        Active
      </Link>

      <Link to="/completed" style={{ color: activeFilter === "completed" ? "red" : "black" }}>
        Completed
      </Link>
    </div>
  );
};

export default Filters;
