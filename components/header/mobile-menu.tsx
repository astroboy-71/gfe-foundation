"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar"
import { link as linkStyles } from "@nextui-org/theme"
import clsx from "clsx"
import { useLocale } from "next-intl"

import { siteConfig } from "@/config/site"

import WalletConnectButton from "./wallet-connect-button"

export default function MobileMenu() {
  const locale = useLocale()
  let pathname = usePathname()
  if (pathname.startsWith("/" + locale)) {
    pathname = pathname.slice(locale.length + 1)
  }

  return (
    <NavbarMenu>
      <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className="group"
            data-active={pathname === item.href}
          >
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </div>
      <div className="mb-8 mt-auto">
        <WalletConnectButton />
      </div>
    </NavbarMenu>
  )
}
