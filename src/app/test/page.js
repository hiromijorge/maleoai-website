export default function SecureNote() {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8f9fa;
          }

          .container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }

          .header {
            padding: 32px;
          }

          .logo {
            margin-bottom: 32px;
          }

          .logo img {
            width: 120px;
            height: auto;
          }

          .shield-icon {
            width: 80px;
            height: 80px;
            margin: 20px 0;
            color: #2B6DEF;
          }

          h1 {
            color: #002B7F;
            font-size: 32px;
            font-weight: bold;
          }

          .metadata {
            margin: 16px 0;
          }

          .metadata-row {
            margin: 8px 0;
            color: #4A5568;
          }

          .metadata-row a {
            color: #2B6DEF;
            text-decoration: none;
            margin-left: 4px;
          }

          .blue-bar {
            height: 12px;
            background-color: #002B7F;
            margin-top: 24px;
          }

          .content {
            padding: 32px;
            padding-top: 0px;
          }

          .details h2 {
            color: #4A5568;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .details p {
            color: #4A5568;
            line-height: 1.6;
            margin: 16px 0;
          }

          .bullet-list {
            list-style-type: disc;
            padding-left: 20px;
            margin: 16px 0;
          }

          .bullet-list li {
            color: #4A5568;
            margin: 8px 0;
          }

          .warning-box {
            background-color: #FFF5F5;
            border: 1px solid #FED7D7;
            padding: 16px;
            margin: 24px 0;
            border-radius: 4px;
          }

          .warning-box p {
            color: #FF4444;
            margin: 0;
          }

          .button {
            display: block;
            width: 100%;
            padding: 16px;
            background-color: #002B7F;
            color: white;
            text-align: start;
            text-decoration: none;
            border-radius: 4px;
            border: none;
            font-size: 16px;
            cursor: pointer;
            margin: 24px 0;
            transition: background-color 0.2s;
          }

          .button:hover {
            background-color: #001f5c;
          }

          .link-text {
            color: #4A5568;
          }

          .link-text a {
            color: #2B6DEF;
            text-decoration: none;
          }

          .support-text {
            color: #4A5568;
            margin-top: 24px;
          }

          .signature {
            margin-top: 24px;
            color: #4A5568;
          }
        `}
      </style>

      <div className="container">
        <div className="header">
          <div className="logo">
            <img src="/atumcell-logo.svg" alt="Atumcell" />
          </div>

          <img
            src="/shield-icon.svg"
            alt="Security Shield"
            className="shield-icon"
          />

          <h1>Your Report is Sealed and Secure!</h1>

          <div className="metadata">
            <div className="metadata-row">
              Sender email
              <a href="mailto:sender_email@example.com">
                sender_email@example.com
              </a>
            </div>
            <div className="metadata-row">
              Date created<a href="#">14 January 2025 09:27:53</a>
            </div>
          </div>

          <div className="blue-bar"></div>
        </div>

        <div className="content">
          <div className="details">
            <h2>Details</h2>
            <p>
              Your cybersecurity report from AtumScan is securely stored and
              available through AtumSeal.
            </p>
            <ul className="bullet-list">
              <li>If a password is required, please ask the sender for it</li>
            </ul>
          </div>

          <div className="warning-box">
            <p>
              Once you open the note, avoid closing or refreshing the page, as
              the note will be permanently destroyed.
            </p>
          </div>

          <ul className="bullet-list">
            <li>Access your report using the button below</li>
          </ul>

          <a href="/test/report" className="button">
            Access your Report
          </a>

          <ul className="bullet-list">
            <li>
              Or using this link:{" "}
              <a href="/test/report">[AtumSeal Secure Link]</a>
            </li>
          </ul>

          <div className="support-text">
            For support or inquiries, feel free to contact us at
            <a href="#"> [Support email / Phone number]</a>.
          </div>

          <div className="signature">
            Stay secure,
            <br />
            The AtumScan Team
          </div>
        </div>
      </div>
    </>
  );
}
