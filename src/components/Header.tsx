import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

interface MenuItem {
    name: string;
    href: string;
    subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '#',
        subItems: [
            { name: 'Engineering', href: '/engineering' },
            { name: 'Procurement', href: '/procurement' },
            { name: 'Construction', href: '/construction-services' },
            { name: 'Offshore Installation', href: '/offshore-installation' },
            { name: 'Onshore Installation', href: '/onshore-installation' },
            { name: 'Asset Management', href: '/asset-integrity-management' },
            { name: 'Pipeline and Equipment Hot Taps & Line Stop', href: '/pipeline-hot-taps-line-stop' },
            { name: 'Laser Scanning', href: '/laser-scanning' },
            { name: 'Fabrication', href: '/fabrication' },
        ],
    },
    {
        name: 'Galleries',
        href: '#',
        subItems: [
            { name: 'Hot Tap Gallery', href: '/hot-tap-gallery' },
            { name: 'QPDUP Gallery', href: '/qpdup-gallery' },
            { name: 'Miscellaneous Gallery', href: '/miscellaneous-gallery' },
        ],
    },
    { name: 'QHSE', href: '/qhse' },
    { name: 'Nigerian Content', href: '/nigerian-content' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        const handlePathChange = () => {
            setCurrentPath(window.location.pathname);
            setMobileMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('popstate', handlePathChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('popstate', handlePathChange);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const isActiveLink = (href: string): boolean => {
        if (href === '/') return currentPath === '/';
        return href !== '#' && currentPath.startsWith(href);
    };

    const toggleSubmenu = (itemName: string) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(itemName)) {
                newSet.delete(itemName);
            } else {
                newSet.add(itemName);
            }
            return newSet;
        });
    };

    const commonLinkClasses = (isActive: boolean): string => `
        transition-colors duration-200
        ${isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}
    `;

    const MobileMenuItem: React.FC<{ item: MenuItem; depth?: number }> = ({ 
        item, 
        depth = 0 
    }) => {
        const isExpanded = expandedItems.has(item.name);
        const hasSubItems = Boolean(item.subItems?.length);
        const isActive = isActiveLink(item.href);
        
        return (
            <div className="w-full">
                <div 
                    className={`flex items-center justify-between w-full ${
                        depth > 0 ? 'pl-4' : ''
                    }`}
                >
                    <a
                        href={!hasSubItems ? item.href : undefined}
                        onClick={(e) => {
                            if (hasSubItems) {
                                e.preventDefault();
                                toggleSubmenu(item.name);
                            } else {
                                setMobileMenuOpen(false);
                            }
                        }}
                        className={`flex-1 py-4 text-base font-medium ${commonLinkClasses(isActive)}`}
                    >
                        {item.name}
                    </a>
                    {hasSubItems && (
                        <button
                            onClick={() => toggleSubmenu(item.name)}
                            className="p-3 hover:bg-gray-100 rounded-full"
                            aria-expanded={isExpanded}
                        >
                            <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                    isExpanded ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                    )}
                </div>
                {hasSubItems && item.subItems && (
                    <div
                        className={`overflow-hidden transition-all duration-200 ${
                            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
                        }`}
                    >
                        <div className="border-l-2 border-gray-100 ml-4 mt-1">
                            {item.subItems.map((subItem) => (
                                <MobileMenuItem
                                    key={subItem.name}
                                    item={subItem}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const MenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
        <button
            onClick={onClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
            {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
            ) : (
                <Menu className="w-6 h-6 text-gray-600" />
            )}
        </button>
    );

    return (
        <>
      <header 
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="/" className="relative z-50">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto transition-transform hover:scale-105"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <a
                                        href={item.href}
                                        className={`py-2 text-sm font-medium inline-flex items-center ${commonLinkClasses(isActiveLink(item.href))}`}
                                    >
                                        {item.name}
                                        {item.subItems && item.subItems.length > 0 && (
                                            <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                                        )}
                                    </a>
                                    {item.subItems && item.subItems.length > 0 && (
                                        <div className="absolute left-0 mt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                                            <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-100">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-2 text-sm rounded-md ${
                                                            isActiveLink(subItem.href)
                                                                ? 'bg-red-50 text-red-600'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                                                        }`}
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden relative z-50">
                            <MenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Container */}
                <div
                    className={`fixed inset-0 lg:hidden z-40 transition-all duration-300 ${
                        mobileMenuOpen ? 'visible' : 'invisible'
                    }`}
                >
                    {/* Overlay */}
                    <div 
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    
                    {/* Mobile Menu Content */}
                    <div
                        className={`absolute top-0 right-0 w-full max-w-sm h-screen bg-white transform transition-transform duration-300 ease-out ${
                            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        {/* Menu Header */}
                        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
                            <div className="h-12" />
                        </div>
                        
                        {/* Scrollable Menu Items */}
                        <div className="overflow-y-auto h-[calc(100vh-73px)] pb-20">
                            <nav className="p-4 space-y-1">
                                {menuItems.map((item) => (
                                    <MobileMenuItem key={item.name} item={item} />
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="h-20" />
        </>
    );
};

export default Header;