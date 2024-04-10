"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import NotificationCard from "@/components/setting/notification-card"
import ProfileCard from "@/components/setting/profile-card"
import SecurityCard from "@/components/setting/security-card"
import WalletCard from "@/components/setting/wallet-card"

export default function MainPanel() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<string>(searchParams.get("tab") || "profile")

  useEffect(() => {
    setTab(searchParams.get("tab") || "profile")
  }, [searchParams])

  return tab === "profile" ? (
    <ProfileCard />
  ) : tab === "wallet" ? (
    <WalletCard />
  ) : tab === "security" ? (
    <SecurityCard />
  ) : tab === "notifications" ? (
    <NotificationCard />
  ) : (
    <></>
  )
}
