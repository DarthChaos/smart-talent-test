"use client";

import Container from "@/layouts/container";

import "react-toastify/dist/ReactToastify.css";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const actualPath = usePathname().split("/")[1];
  const router = useRouter();
  const { activeUser } = useAppSelector(({ auth }) => auth);

  console.log(actualPath);

  if (activeUser?.role !== "ADMIN") router.push("/errors/no-permissions");

  return <Container>{children}</Container>;
}
