"use client";

import {Avatar, Button, Dropdown, Label} from "@heroui/react";
import { RiLogoutCircleRLine, RiUser3Line  } from "react-icons/ri";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileDropDown = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          toast.success("Sign out successfull.");
        },
      },
    })
  }

  return (
    <Dropdown>
      <Button aria-label="Menu" className={"w-0"}>
        <Avatar>
          <Avatar.Image 
            alt={user?.name} 
            className="object-cover" 
            src={user?.image} 
          />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="my-profile" textValue="My Profile">
            <Link href={"/my-profile"}>
              <Label className="flex gap-2 items-center text-base text-primary">
                <RiUser3Line />
                My Profile
              </Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item 
            id="sign-out" 
            textValue="Sign out"
            onAction={handleSignOut}
          >
            <Label 
              className="flex gap-2 items-center justify-start text-base text-primary"
            >
              <RiLogoutCircleRLine />
              Sign out
            </Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ProfileDropDown;