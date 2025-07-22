'use client';
import React from 'react';

export default function page() {
    return (
        <footer className="bg-[#1e1e2f] text-white px-6 py-4 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left flex items-center justify-center gap-2 ">
                <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
                <h2 className="text-sm text-gray-400">Michelle Gonzales</h2>
            </div>
            <div className="flex gap-4 text-gray-300">
                {/* <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a> */}
            </div>
        </div>
      </footer>
    )
}