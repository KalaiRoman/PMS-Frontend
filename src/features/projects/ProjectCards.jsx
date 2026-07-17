import images from "../../constants/images-constant";
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineVisibility,
} from "react-icons/md";

const MAX_VISIBLE_AVATARS = 4;

const styles = {
  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60vh",
    color: "#9ca3af",
    fontSize: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    position: "relative",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "18px 16px 14px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    overflow: "hidden",
  },
  colorDot: (color) => ({
    position: "absolute",
    top: "-14px",
    right: "-4px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "3px solid #ffffff",
    background: color || "#2563EB",
  }),
  title: {
    margin: "0 0 8px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
    paddingRight: "20px",
  },
  leadRow: {
    fontSize: "13px",
    marginBottom: "6px",
  },
  greyText: {
    color: "#9ca3af",
  },
  leadName: {
    color: "#374151",
    fontWeight: 500,
  },
  desc: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 10px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    lineHeight: 1.4,
    minHeight: "39px",
  },
  avatarStack: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "8px",
  },
  avatarWrap: (isFirst) => ({
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "2px solid #ffffff",
    marginLeft: isFirst ? 0 : "-10px",
    flexShrink: 0,
    overflow: "hidden",
  }),
  userImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
  },
  avatarExtra: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "2px solid #ffffff",
    marginLeft: "-10px",
    flexShrink: 0,
    background: "#f3f4f6",
    color: "#4b5563",
    fontSize: "11px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    marginBottom: "8px",
  },
  iconBtn: (color) => ({
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid #d3d3d3",
    background: "#ffffff",
    cursor: "pointer",
    padding: 0,
    fontSize: "14px",
    color,
  }),
};

function ProjectCards({ data }) {
  const projects = data?.project?.projectArray || [];

  if (projects.length === 0) {
    return <div style={styles.emptyState}>No Data Found</div>;
  }

  return (
    <div style={styles.grid}>
      {projects.map((item, i) => {
        const users = item?.users || [];
        const visibleUsers = users.slice(0, MAX_VISIBLE_AVATARS);
        const extraCount = users.length - visibleUsers.length;

        return (
          <div
            className="pro-card"
            style={styles.card}
            key={item?.id ?? i}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={styles.colorDot(item?.color)} />

            <h3 style={styles.title}>{item?.projectName}</h3>

            <div style={styles.leadRow}>
              <span style={styles.greyText}>Lead: </span>
              <label style={styles.leadName}>{item?.projectLead}</label>
            </div>

            <p style={styles.desc}>{item?.description}</p>

            <div style={styles.avatarStack}>
              {visibleUsers.map((user, idx) => (
                <div style={styles.avatarWrap(idx === 0)} key={user?.id ?? idx}>
                  <img
                    src={images[idx % images.length]}
                    style={styles.userImg}
                    alt={user?.name || "user"}
                  />
                </div>
              ))}
              {extraCount > 0 && (
                <div style={styles.avatarExtra}>+{extraCount}</div>
              )}
            </div>

            <div style={styles.actions}>
              <button
                style={styles.iconBtn("#2563EB")}
                title="View"
                onMouseEnter={(e) => (e.currentTarget.style.background = "#eff6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                <MdOutlineVisibility />
              </button>
              <button
                style={styles.iconBtn("#16A34A")}
                title="Edit"
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0fdf4")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                <MdOutlineEdit />
              </button>
              <button
                style={styles.iconBtn("#DC2626")}
                title="Delete"
                onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;