"use client";
import { Avatar, Button, ButtonGroup } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { authClient } from "@/lib/auth-client";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending, } = authClient.useSession()
  const userData = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  }


  return (
    <div className="border-b px-2 py-3">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
        {isPending ? "..." :
          userData ? <div className="flex justify-between items-center gap-4">
            <Avatar>
              <Avatar.Image alt={userData?.name} src={userData?.image}
               referrerPolicy="no-referrer"
                />
              <Avatar.Fallback>{userData?.name[0]}</Avatar.Fallback>
            </Avatar>
            <h2 className="text-sm">Hello, {userData?.name}</h2>
            <Button onClick={handleSignOut} variant="danger" ><MdOutlineLogout />Logout</Button>
          </div> :
            <ButtonGroup className="">
              <Button>
                <Link href={"/signin"}>SignIn</Link>
              </Button>
              <Button variant="secondary">
                <Link href={"/signup"}>SignUp</Link>
              </Button>
              
            </ButtonGroup>
        }
      </nav>
    </div>
  );
};

export default Navbar;