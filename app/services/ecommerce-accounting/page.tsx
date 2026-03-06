import ServiceLayout from "@/components/sections/ServiceLayout";

export default function EcommerceAccounting() {
  return (
    <ServiceLayout
      title="E-Commerce Accounting"
      tagline="Specialized accounting support for Shopify, Amazon, Stripe, and modern online businesses."
      description="We provide complete financial clarity for e-commerce businesses by integrating platforms, reconciling transactions, and generating real-time financial insights across multiple marketplaces."
      bullets={[
        "Shopify & Amazon Integration",
        "Stripe & Payment Gateway Reconciliation",
        "Inventory Accounting",
        "Cost of Goods Sold (COGS) Analysis",
        "Multi-Currency Reporting",
      ]}
    />
  );
}
