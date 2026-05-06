import { Coins, FileCode, Link2, Shield } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const Blockchain = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Blockchain"
    subtitle="Smart contracts, tokenization, and decentralized applications — built securely."
    intro="From DeFi protocols to enterprise tokenization, we build blockchain systems that are secure by design. Our engineers work across EVM chains, Solana, and permissioned ledgers, with formal verification and audit-grade rigor."
    highlights={[
      "Audited smart contracts with zero post-launch incidents",
      "EVM, Solana, and Hyperledger Fabric expertise",
      "Tokenization frameworks for real-world assets",
      "Wallet, custody, and key management integrations",
    ]}
    features={[
      { icon: FileCode, title: "Smart Contracts", description: "Solidity, Rust, and Move — written for security, gas, and clarity." },
      { icon: Link2, title: "dApps & Protocols", description: "End-to-end decentralized apps with great UX." },
      { icon: Coins, title: "Tokenization", description: "ERC-20/721/1155, RWA frameworks, and compliant issuance." },
      { icon: Shield, title: "Security & Audits", description: "Internal audits, fuzzing, and formal verification." },
    ]}
  />
);
export default Blockchain;
