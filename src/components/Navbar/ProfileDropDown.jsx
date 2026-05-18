"use client";

import {Avatar, Button, Dropdown, Label} from "@heroui/react";
import { RiLogoutCircleRLine, RiUser3Line  } from "react-icons/ri";
import Link from "next/link";

const ProfileDropDown = () => {
  return (
    <Dropdown>
      <Button aria-label="Menu" className={"w-0"}>
        <Avatar>
          <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Link href={"/my-profile"}>
              <Label className="flex gap-2 items-center text-base text-primary">
                <RiUser3Line />
                My Profile
              </Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label className="flex gap-2 items-center text-base text-primary">
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