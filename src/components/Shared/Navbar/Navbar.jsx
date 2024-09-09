import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-white">
      <div className="hidden lg:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.path}
            className={`capitalize font-medium hover:text-primary hover:border-b-2 hover:border-primary transition-all ${
              link.path === pathname && "border-b-2 border-primary text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
