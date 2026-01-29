import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/email-security", label: "Email Security" },
  { href: "/endpoint-security", label: "Endpoint Security" },
  { href: "/bundles", label: "Bundles" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/cart", label: "Cart" }
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-block">
          <span className="logo-mark">24</span>
          <div className="logo-text">
            <span className="logo-title">twunnyfour</span>
            <span className="logo-subtitle">cybersecurity components</span>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="header-underline" />
    </header>
  );
}
