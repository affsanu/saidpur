"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

type Props = {}

const MenusPage = (props: Props) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
      if (session?.status === "unauthenticated") {
          router.push("/");
      }
  }, [session?.status, router]);
  return (
    <div>MenusPage</div>
  )
}

export default MenusPage