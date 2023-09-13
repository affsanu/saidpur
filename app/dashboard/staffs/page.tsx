"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

type Props = {}

const StaffsPage = (props: Props) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
      if (session?.status === "unauthenticated") {
          router.push("/");
      }
  }, [session?.status, router]);
  return (
    <div>StaffsPage</div>
  )
}

export default StaffsPage