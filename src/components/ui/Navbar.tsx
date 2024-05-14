import React from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.upgrad.com/" className="text-xl font-bold text-gray-800 mr-8">
            <img src="/images/upgrad-logo.svg" alt="UpGrad Logo" width="120" height="60" />
          </a>
          <button className="font-bold bg-red-500 text-white px-6 py-3 rounded-md mr-8 hover:bg-white hover:text-red-500 hover:ring-2 hover:ring-red-500">
            Courses ↓
          </button>
        </div>
        <div className="hidden md:flex space-x-10">
          <div className="flex items-center space-x-7 "> {/* Wrap links in a flex container */}
            <a href="https://www.upgrad.com/refer-and-earn/" className="text-gray-700 hover:text-red-400 font-bold" style={{ fontSize: '0.9rem' }}>REFER AND EARN</a>
            <a href="https://www.upgradabroad.com/?utm_source=upGrad&amp;utm_medium=Referral&amp;utm_campaign=IND_ACQ_WEB_upGrad_Referral_SAV_SAV_GENERAL_upGrad-WebClick-Organic_INDM" className="text-gray-700 hover:text-red-400 font-bold" style={{ fontSize: '0.9rem' }}>STUDY ABROAD</a>
            <a href="https://www.upgrad.com/free-masterclass/" className="text-gray-700 hover:text-red-400 font-bold" style={{ fontSize: '0.9rem' }}>FREE MASTERCLASS</a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-red-400 font-bold" style={{ fontSize: '0.9rem' }}>MORE</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>Career at upGrad</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>Hire from upGrad</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400"  style={{ fontSize: '0.8rem' }}>upGrad for Bussiness</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>upGrad blogs</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>upGrad Tutorials</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>Resources</DropdownMenuItem>
              <DropdownMenuItem  className="text-gray-700 hover:text-red-400" style={{ fontSize: '0.8rem' }}>Experience Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 font-bold" style={{ fontSize: '0.9rem' }}> {/* Adjusted margin-left for alignment */}
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
