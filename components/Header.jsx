import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, LayoutDashboard, FileText, PenBox, GraduationCap, Star as StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
import { checkUser } from '@/lib/checkUser'
import { ModeToggle } from './mode-toggle';

const Header = async () => {
    await checkUser();
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-2 h-14 flex items-center justify-between">
                <Link href="/" className="pl-0">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-black dark:bg-gradient-to-r dark:from-gray-200 dark:to-white dark:bg-clip-text dark:text-transparent">
                            Mentor<span className="text-primary">AI</span>
                        </h1>
                    </div>
                </Link>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <SignedIn>
                        <Link href="/dashboard" className="cursor-pointer">
                            <Button
                                variant="outline"
                                className="hidden md:inline-flex items-center gap-2 cursor-pointer"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                Industry Insights
                            </Button>
                            <Button variant="ghost" className="md:hidden w-10 h-10 p-0 cursor-pointer">
                                <LayoutDashboard className="h-4 w-4" />
                            </Button>
                        </Link>

                        {/* Growth Tools Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex items-center gap-2 cursor-pointer">
                                    <StarsIcon className="h-4 w-4" />
                                    <span className="hidden md:block">Growth Tools</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem asChild>
                                    <Link href="/resume" className="flex items-center gap-2 cursor-pointer">
                                        <FileText className="h-4 w-4" />
                                        Build Resume
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/ai-cover-letter"
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <PenBox className="h-4 w-4" />
                                        Cover Letter
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/interview" className="flex items-center gap-2 cursor-pointer">
                                        <GraduationCap className="h-4 w-4" />
                                        Interview Prep
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline" className="cursor-pointer">Sign In</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold",
                                },
                            }}
                            afterSignOutUrl="/"
                        />
                    </SignedIn>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Header
