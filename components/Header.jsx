import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, LayoutDashboard } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 
        supports-[backdrop-filter]:bg-background/60'>

            <nav className='container mx-auto flex h-16 items-center justify-between px-4'>
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50}
                        className="h-12 py-1 w-auto object-contain" />
                </Link>

                <div className='flex items-center gap-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboard className='h-4 w-4' />
                                <span className='hidden md:block'> Industry Insights</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                             <Button>
                                <ChevronDown className='h-4 w-4' />
                                <span className='hidden md:block'> Services </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Resume</DropdownMenuItem>
                            <DropdownMenuItem>Quiz</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>


            </nav>

            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header
