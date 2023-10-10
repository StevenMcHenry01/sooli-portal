"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ProfileDropdown() {
  const [profile, setProfile] = useState<any>({
    avatarUrl: undefined,
    email: undefined,
    firstName: undefined,
  });
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setProfile({
          avatarUrl: user.user_metadata?.avatar_url,
          email: user.email,
        });
      }
    };

    getProfile();
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {profile.email && (
          <Button variant="outline">
            {profile.email}
            {profile.avatarUrl ? (
              <Image
                alt="Profile picture"
                className="ml-2 rounded-full"
                width={24}
                height={24}
                src={profile?.avatarUrl || User}
              />
            ) : (
              <div className="ml-2 grid h-6 w-6 place-content-center rounded-full bg-gray-300">
                <User className="center h-5 w-5 text-gray-500" />
              </div>
            )}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {}}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
