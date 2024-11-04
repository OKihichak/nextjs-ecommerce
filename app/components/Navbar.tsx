"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            O<span className="text-primary">Kihichak</span>
          </h1>
        </Link>

        {/* Toggle button for mobile menu */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link className="text-lg text-primary font-semibold" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-white shadow-md border-b lg:hidden">
            <div className="flex flex-col gap-6 p-4">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => setIsMenuOpen(false)}>
                  {pathname === link.href ? (
                    <Link className="text-lg text-primary font-semibold" href={link.href}>
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
