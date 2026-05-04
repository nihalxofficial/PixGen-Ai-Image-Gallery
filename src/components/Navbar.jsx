"use client";
import { Avatar, Button, ButtonGroup } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import { MdOutlineLogout, MdMenu, MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const userData = session?.user;
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-photos", label: "All Photos" },
    { href: "/pricing", label: "Pricing" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <>
      <div className="border-b bg-white dark:bg-gray-950 px-4 py-3 sticky top-0 z-50 shadow-sm">
        <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <Link href="/" className="flex gap-2 items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src={logo}
              alt="pixgen logo"
              loading="eager"
              width={32}
              height={32}
              className="object-cover h-auto w-auto"
              priority
            />
            <h3 className="font-black text-lg sm:text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              PixGen
            </h3>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ) : userData ? (
              <div className="flex items-center gap-4">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={userData?.name || "User avatar"}
                    src={userData?.image || undefined}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback className="text-xs">
                    {userData?.name?.[0] || "U"}
                  </Avatar.Fallback>
                </Avatar>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Hello, {userData?.name?.split(" ")[0] || userData?.name}
                </h2>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  color="danger"
                  size="sm"
                  startContent={<MdOutlineLogout size={16} />}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <ButtonGroup size="sm">
                <Button variant="outline">
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button color="primary">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </ButtonGroup>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <MdClose className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <MdMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 pt-16 px-4 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-4">
              {isPending ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              ) : userData ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="md">
                      <Avatar.Image
                        alt={userData?.name || "User avatar"}
                        src={userData?.image || undefined}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>
                        {userData?.name?.[0] || "U"}
                      </Avatar.Fallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {userData?.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {userData?.email}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="flat"
                    color="danger"
                    fullWidth
                    startContent={<MdOutlineLogout size={18} />}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" fullWidth>
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button color="primary" fullWidth>
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;