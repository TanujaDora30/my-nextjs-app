"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HelpCenterDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-gray-600">
        Help Center
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/blog" className="w-full">
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/whats-new" className="w-full">
            What's New
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/knowledge-base" className="w-full">
            Knowledge Base
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

