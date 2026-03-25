export default function ReportAccess() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "32px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            color: "#002B7F",
            marginBottom: "24px",
          }}
        >
          Your Secure Report
        </h1>

        <p
          style={{
            color: "#4A5568",
            lineHeight: "1.6",
            marginBottom: "16px",
          }}
        >
          This is your secure report content. In a real implementation, this
          would contain your actual report data.
        </p>

        <div
          style={{
            backgroundColor: "#F7FAFC",
            padding: "16px",
            borderRadius: "4px",
            marginTop: "24px",
          }}
        >
          <h2
            style={{
              color: "#002B7F",
              fontSize: "18px",
              marginBottom: "16px",
            }}
          >
            Report Details
          </h2>
          <p
            style={{
              color: "#4A5568",
              marginBottom: "8px",
            }}
          >
            Report ID: ATM-2025-001
          </p>
          <p
            style={{
              color: "#4A5568",
              marginBottom: "8px",
            }}
          >
            Generated: 14 January 2025
          </p>
          <p
            style={{
              color: "#4A5568",
            }}
          >
            Status: Secure
          </p>
        </div>
      </div>
    </div>
  );
}
