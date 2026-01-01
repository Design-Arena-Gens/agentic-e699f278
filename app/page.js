const highlights = [
  {
    title: 'Pro-privacy jurisdiction',
    body: 'Members are not listed on public filings. Only the organizer and registered agent appear on the Articles of Organization, preserving anonymity.'
  },
  {
    title: 'Low cost structure',
    body: 'State filing is USD 100 online with a USD 60 annual report. Most registered agents charge USD 50–150 per year.'
  },
  {
    title: 'Protective statutes',
    body: 'Wyoming pioneered the LLC and codified strong charging order protection and lifetime duration. Series LLCs and close LLCs are optional add-ons.'
  }
];

const formationSteps = [
  {
    name: 'Pre-formation prep',
    detail: 'Select a unique name, confirm trademark clearance, determine member structure, and draft an internal term sheet for capital contributions and voting.'
  },
  {
    name: 'Registered agent',
    detail: 'Engage a Wyoming-based commercial registered agent authorized to receive service of process 9am–5pm MST; many offer mail forwarding and compliance reminders.'
  },
  {
    name: 'Articles of Organization',
    detail: 'File online with the Secretary of State or submit by mail. Include the company name, registered agent, principal office, and optional organizer information.'
  },
  {
    name: 'Operating agreement',
    detail: 'Adopt a detailed OA covering capital contributions, profit allocations, fiduciary waivers (if desired), buy-sell mechanics, and dissolution triggers.'
  },
  {
    name: 'Federal + state IDs',
    detail: 'Obtain an EIN from the IRS (Form SS-4). Register for Wyoming sales/use tax only if you will have in-state nexus or employees.'
  },
  {
    name: 'Banking + compliance stack',
    detail: 'Open a dedicated bank account, configure bookkeeping software, and implement a compliance calendar for filings, licenses, and annual report fees.'
  }
];

const complianceChecklist = [
  'Maintain a Wyoming physical or commercial office via the registered agent.',
  'File the annual report and license tax (USD 60 minimum) by the first day of the anniversary month.',
  'Document member resolutions for major transactions to preserve charging order protection.',
  'Renew any required local business licenses (e.g., city of Cheyenne) if operating on the ground.',
  'Track beneficial ownership reporting obligations under the Corporate Transparency Act (FinCEN BOI).'
];

const taxProfile = [
  {
    title: 'Pass-through default',
    detail: 'Single-member LLCs are disregarded; multi-member LLCs are taxed as partnerships unless an election is made for C-corp or S-corp treatment.'
  },
  {
    title: 'No state income tax',
    detail: 'Wyoming does not levy corporate or personal income tax. Out-of-state owners owe tax in their home jurisdictions based on sourcing rules.'
  },
  {
    title: 'Sales & use tax',
    detail: 'Statewide base rate is 4% with local add-ons up to 2%. Remote sellers need to monitor economic nexus thresholds (USD 100k sales or 200 transactions).' 
  },
  {
    title: 'Franchise & gross receipts',
    detail: 'No franchise or gross receipts tax. Annual license tax is the primary recurring state-level fee.'
  }
];

const costTable = [
  { item: 'Articles of Organization (online filing)', amount: '$100 one-time' },
  { item: 'Registered agent service', amount: '$50–$150 annually' },
  { item: 'Annual report & license tax', amount: '$60 minimum' },
  { item: 'Certificate of Good Standing (optional)', amount: '$10 per request' },
  { item: 'Mail forwarding / virtual office (optional)', amount: '$120–$300 annually' }
];

const advancedStrategies = [
  {
    title: 'Holding company for multi-state operations',
    description: 'Use the Wyoming LLC as a parent entity with subsidiaries registered where operations occur. Maintains privacy and isolates liabilities while allowing local compliance.'
  },
  {
    title: 'Series LLC structuring',
    description: 'Wyoming allows protected series. Draft an operating agreement with distinct capital accounts, managers, and asset ledgers for each series to preserve separateness.'
  },
  {
    title: 'Asset protection layering',
    description: 'Pair a Wyoming holding LLC with downstream revocable trusts or tenancy-in-common structures. Enforce internal controls and arm’s-length agreements to withstand veil-piercing.'
  }
];

const faq = [
  {
    question: 'Do I have to live in Wyoming to form an LLC there?',
    answer: 'No residency is required. You only need a registered agent with a Wyoming street address available during business hours.'
  },
  {
    question: 'How quickly can I form a Wyoming LLC?',
    answer: 'Online filings are approved immediately upon payment. Mail submissions take 10–15 business days. Factor in time to obtain an EIN (same-day for online applications).' 
  },
  {
    question: 'Is an operating agreement legally required?',
    answer: 'The state does not mandate it, but investors, banks, and courts expect one. It is critical for multi-member governance and for single-member asset protection.'
  },
  {
    question: 'What is the Corporate Transparency Act impact?',
    answer: 'Most Wyoming LLCs formed after Jan 1, 2024 must file beneficial ownership information with FinCEN within 30 days. Existing entities have until Jan 1, 2025.'
  },
  {
    question: 'Can I convert an existing business into a Wyoming LLC?',
    answer: 'Yes. Wyoming supports statutory conversion from corporations or LLCs in other states. Alternatively, domesticate or merge into a newly formed Wyoming LLC.'
  }
];

const resources = [
  { label: 'Wyoming Secretary of State Business Division', url: 'https://sos.wyo.gov/Business/Default.aspx' },
  { label: 'Online Filing Portal', url: 'https://wyobiz.wyo.gov' },
  { label: 'Wyoming Annual Report Filing', url: 'https://wyobiz.wyo.gov/Business/AnnualReport.aspx' },
  { label: 'IRS EIN Application', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online' },
  { label: 'FinCEN Beneficial Ownership Reporting', url: 'https://www.fincen.gov/boi' }
];

function Section({ title, badge, children }) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {badge && <span className="badge">{badge}</span>}
      </header>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <main>
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="badge">Wyoming LLC Field Guide</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Everything You Need to Know About a Wyoming LLC</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--muted)' }}>
            Investor-grade overview of why founders, investors, and asset protection strategists choose Wyoming for limited liability companies. Covers formation, taxation, compliance, privacy, and advanced structuring tactics.
          </p>
        </header>

        <Section title="Why Wyoming" badge="Highlights">
          <div className="grid three">
            {highlights.map(({ title, body }) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Formation Arcade" badge="Step-by-step">
          <div className="grid two">
            {formationSteps.map(({ name, detail }) => (
              <div className="card" key={name}>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Compliance Playbook" badge="Governance">
          <ul className="list">
            {complianceChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Tax Position" badge="Fiscal">
          <div className="grid two">
            {taxProfile.map(({ title, detail }) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Cost Model" badge="Budgeting">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Cost Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map(({ item, amount }) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Advanced Strategies" badge="Expert Mode">
          <div className="grid">
            {advancedStrategies.map(({ title, description }) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Frequently Asked Questions" badge="FAQ">
          <div className="grid">
            {faq.map(({ question, answer }) => (
              <div className="card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key Takeaways" badge="Snapshot">
          <blockquote>
            Wyoming LLCs optimize privacy, low recurring costs, and strong liability protection. Pair statewide benefits with disciplined governance, comprehensive operating agreements, and timely compliance to preserve the veil and appeal to investors.
          </blockquote>
        </Section>
      </main>

      <footer>
        <strong>Official Resources</strong>
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {resources.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
