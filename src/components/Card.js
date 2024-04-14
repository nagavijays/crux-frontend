'use client'

import React, { useState } from "react";


export const Card = () => {
    return (
        <div>
            <h1>Card</h1>
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">FCP</h1>
                    <p className="px-4 text-gray-500">
                        slow:  323
                        fast: 
                        average:
                        p75:
                    </p>
                </div>
                <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">IRRIGATION & DRAINAGE</h1>
                    <p className="px-4 text-gray-500">
                        slow:  23
                        fast: 
                        average:
                        p75:
                    </p>
                </div>
                <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">GARDEN BED MAINTENANCE</h1>
                    <p className="px-4 text-gray-500">
                    slow:  asdf
                        fast: 
                        average:
                        p75:
                    </p>
                </div>
                <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">GARDEN BED MAINTENANCE</h1>
                    <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                        modi
                        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                </div>
            </div>
        </div>
    );
}