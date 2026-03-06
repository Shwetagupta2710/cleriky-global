import ServiceLayout from "@/components/sections/ServiceLayout";

export default function AccountingBookkeeping() {
  return (
    <ServiceLayout
      title="Accounting & Bookkeeping"
      tagline="Reliable offshore accounting support for CPA firms seeking scalable and efficient financial management."
      description="Our accounting and bookkeeping services help CPA firms streamline financial operations while maintaining accurate and audit-ready records. We ensure every transaction is recorded, reconciled, and reported with complete transparency."
      bullets={[
        "General Ledger Management",
        "Accounts Payable & Receivable",
        "Bank Reconciliations",
        "Month-End & Year-End Closing",
        "Financial Statement Preparation",
      ]}
    />
  );
}
