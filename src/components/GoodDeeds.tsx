"use client";

import { useState } from "react";

type Category = {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    subcategories: {
        name: string;
        tasks: { id: number; title: string; description: string }[];
    }[];
};

const categories: Category[] = [
    {
        id: "transportation",
        title: "Transportation",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "emerald",
        description: "Verified via App Extensions/GPS",
        subcategories: [
            {
                name: "Active Commuting",
                tasks: [
                    { id: 1, title: "Cycle to Work", description: "Record a bike trip of at least 2 miles." },
                    { id: 2, title: "The 'Last Mile' Walk", description: "Get off public transport one stop early and walk the rest." },
                    { id: 3, title: "Stair Master", description: "Opt for stairs instead of the elevator (verified by altimeter sensors)." },
                    { id: 4, title: "Morning Jog", description: "Log a 20-minute run before 9:00 AM." },
                    { id: 5, title: "Bike to Grocery", description: "Use a bike for a shopping trip (detected via speed and location)." },
                    { id: 6, title: "Walking School Bus", description: "Parents walking a group of kids to school." },
                    { id: 7, title: "Rainy Day Rider", description: "Cycle or walk in the rain (verified by weather API + movement)." },
                    { id: 8, title: "The Weekend Wander", description: "A 5-mile hike on a local trail." },
                    { id: 9, title: "Lunch Break Power Walk", description: "15 minutes of continuous walking during midday." },
                    { id: 10, title: "Night Rider", description: "Cycling with lights on after sunset." },
                ],
            },
            {
                name: "Public & Shared Transit",
                tasks: [
                    { id: 11, title: "Bus Commuter", description: "Take the bus instead of driving (verified by transit API + speed)." },
                    { id: 12, title: "Train Traveler", description: "Log a journey on a local rail network." },
                    { id: 13, title: "Subway Specialist", description: "Use underground transit for city travel." },
                    { id: 14, title: "Carpooler", description: "Share a ride (verified by two app users in the same moving vehicle)." },
                    { id: 15, title: "Ferry Commute", description: "Use water-based public transit." },
                    { id: 16, title: "Shared Scooter", description: "Use a licensed e-scooter sharing service." },
                    { id: 17, title: "Shared Bike", description: "Use a city bike-share dock." },
                    { id: 18, title: "Park & Ride", description: "Drive to a transit hub and take the train." },
                    { id: 19, title: "Low-Carbon Long Distance", description: "Take a coach/bus for inter-city travel instead of flying." },
                    { id: 20, title: "Electric Vehicle (EV) Charge", description: "Charge an EV at a public station (verified by Geofence)." },
                ],
            },
        ],
    },
    {
        id: "cleanup",
        title: "Environmental Cleanup",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        ),
        color: "teal",
        description: "Before & After Photos verified by AI",
        subcategories: [
            {
                name: "Community Spaces",
                tasks: [
                    { id: 21, title: "Park Bench Scrub", description: "Removing graffiti or grime from a public bench." },
                    { id: 22, title: "Playground Sweep", description: "Clearing glass or litter from a kids' play area." },
                    { id: 23, title: "Storm Drain Clear", description: "Removing leaves/trash blocking a street drain." },
                    { id: 24, title: "Curb Appeal", description: "Weeding the cracks in a public sidewalk." },
                    { id: 25, title: "Bus Stop Shine", description: "Cleaning the glass or seat of a local bus stop." },
                    { id: 26, title: "Community Garden Weed", description: "Clearing a patch in a shared garden." },
                    { id: 27, title: "Alleyway Cleanup", description: "Removing dumped items from a back alley." },
                    { id: 28, title: "Public Statue Dust", description: "Gently cleaning a local monument." },
                    { id: 29, title: "Signage Rescue", description: "Cleaning a dirty or obscured street sign." },
                    { id: 30, title: "Riverbank Rescue", description: "Removing plastic from a 10-meter stretch of bank." },
                ],
            },
            {
                name: "Nature & Wildlife",
                tasks: [
                    { id: 31, title: "Forest Floor Sweep", description: "Picking up non-organic trash on a trail." },
                    { id: 32, title: "Beach Micro-plastic Hunt", description: "A bucket of tiny plastic bits collected." },
                    { id: 33, title: "Invasive Species Pull", description: "Removing a specific invasive plant (e.g., ivy/kudzu)." },
                    { id: 34, title: "Bird Feeder Refill", description: "Cleaning and filling a public bird feeder." },
                    { id: 35, title: "Tree Guard Repair", description: "Fixing a broken fence around a young tree." },
                    { id: 36, title: "Pond Surface Skim", description: "Removing floating debris from a local pond." },
                    { id: 37, title: "Dune Protection", description: "Repairing a small section of sand dune fencing." },
                    { id: 38, title: "Wildflower Seeding", description: "Preparing a patch of dirt and planting native seeds." },
                    { id: 39, title: "Insect Hotel Build", description: "Constructing a bug house from natural scraps." },
                    { id: 40, title: "Hedge Trim", description: "Taming an overgrown public hedge blocking a path." },
                ],
            },
        ],
    },
    {
        id: "wellbeing",
        title: "Personal Wellbeing",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "lime",
        description: "Photo/Sensor Verified Tasks",
        subcategories: [
            {
                name: "Mindfulness & Mental Health",
                tasks: [
                    { id: 41, title: "The 'Digital Detox'", description: "Photo of phone in a timed lock-box." },
                    { id: 42, title: "Morning Sunlight", description: "Photo of the sunrise or early light (verified by time)." },
                    { id: 43, title: "Daily Journaling", description: "Photo of a completed handwritten journal page." },
                    { id: 44, title: "Meditative Space", description: "Photo of a tidy, calm meditation corner you created." },
                    { id: 45, title: "Nature Connection", description: "Photo of a beautiful plant/animal spotted today." },
                    { id: 46, title: "Healthy Meal Prep", description: "Before/After of raw ingredients vs. a balanced meal." },
                    { id: 47, title: "Water Intake", description: "Photo of a 2L bottle empty by the end of the day." },
                    { id: 48, title: "Reading Time", description: "Photo of a finished chapter in a physical book." },
                    { id: 49, title: "Gratitude List", description: "A photo of 3 things you are grateful for written down." },
                    { id: 50, title: "Stress-Free Zone", description: "Organizing a cluttered desk for mental clarity." },
                ],
            },
            {
                name: "Creativity & Learning",
                tasks: [
                    { id: 51, title: "Skill Build", description: "Before/After of a craft project (e.g., knitting, woodcraft)." },
                    { id: 52, title: "Language Lesson", description: "Screenshot of a completed Duolingo/learning streak." },
                    { id: 53, title: "Plant Parent", description: "Before/After of a wilting plant being revived." },
                    { id: 54, title: "Home Repairs", description: "Fixing a leaky tap or squeaky door." },
                    { id: 55, title: "Musical Practice", description: "Recording 30 seconds of practice (audio verify)." },
                    { id: 56, title: "Art Therapy", description: "A photo of a painting or sketch completed today." },
                    { id: 57, title: "Puzzle Master", description: "Before/After of a finished jigsaw puzzle." },
                    { id: 58, title: "Sustainable Fashion", description: "Repairing a hole in a piece of clothing." },
                    { id: 59, title: "DIY Natural Cleaner", description: "Photo of homemade vinegar/lemon cleaner." },
                    { id: 60, title: "Zero-Waste Shopping", description: "Photo of jars/bags used at a bulk store." },
                ],
            },
        ],
    },
    {
        id: "community",
        title: "Community Connection",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: "cyan",
        description: "Photo Proof of Kindness",
        subcategories: [
            {
                name: "Helping Individuals",
                tasks: [
                    { id: 61, title: "Meal for a Neighbor", description: "Photo of a home-cooked meal being delivered." },
                    { id: 62, title: "Groceries for Seniors", description: "A photo of a grocery receipt + delivery." },
                    { id: 63, title: "Lawn Mowed for Others", description: "Before/After of a neighbor's overgrown yard." },
                    { id: 64, title: "Dog Walk", description: "Photo of walking a neighbor's or shelter dog." },
                    { id: 65, title: "Care Package", description: "Photo of a box for a local food bank." },
                    { id: 66, title: "Handwritten Note", description: "A letter sent to someone in a nursing home." },
                    { id: 67, title: "Street Library Fill", description: "Adding 3 books to a 'Little Free Library.'" },
                    { id: 68, title: "Snow Shovel", description: "Clearing a neighbor's driveway." },
                    { id: 69, title: "Tech Support", description: "Helping an elder with a device (Photo of the setup)." },
                    { id: 70, title: "Tutoring", description: "A photo of a study session (Privacy-protected)." },
                ],
            },
            {
                name: "Public Service",
                tasks: [
                    { id: 71, title: "Recycling Sort", description: "Photo of correctly sorted bins at a community center." },
                    { id: 72, title: "Cigarette Butt Cleanup", description: "A jar filled with discarded butts." },
                    { id: 73, title: "Leaf Raking", description: "Bags of leaves collected from a public path." },
                    { id: 74, title: "Fountain Clean", description: "Removing coins/trash from a public fountain." },
                    { id: 75, title: "Graffiti Cover", description: "Painting over a tagged wall (with permission)." },
                    { id: 76, title: "Bike Rack Repair", description: "Cleaning or tightening a public bike rack." },
                    { id: 77, title: "Information Booth", description: "Volunteering at a local event (Photo of lanyard)." },
                    { id: 78, title: "Tool Library Donation", description: "Donating a used tool to a community shed." },
                    { id: 79, title: "Poster Removal", description: "Taking down old, peeling flyers from a pole." },
                    { id: 80, title: "Community Fridge Clean", description: "Tidying and checking dates in a shared fridge." },
                ],
            },
        ],
    },
    {
        id: "sustainability",
        title: "Sustainability & Energy",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        color: "green",
        description: "Photo/API Verified Tasks",
        subcategories: [
            {
                name: "Household Greenery",
                tasks: [
                    { id: 81, title: "Compost Flip", description: "Photo of a healthy compost bin being turned." },
                    { id: 82, title: "Drip Irrigation", description: "Setting up a water-saving garden system." },
                    { id: 83, title: "Rain Barrel Install", description: "Before/After of a rain collection setup." },
                    { id: 84, title: "Solar Light Install", description: "Adding solar pathway lights to a garden." },
                    { id: 85, title: "Window Insulation", description: "Adding film or seals to stop heat leaks." },
                    { id: 86, title: "LED Swap", description: "Before/After of old bulbs vs. new LED ones." },
                    { id: 87, title: "Thermostat Turn-down", description: "Photo of thermostat at an eco-friendly temp." },
                    { id: 88, title: "Clothesline Usage", description: "Photo of clothes drying outside (No dryer)." },
                    { id: 89, title: "Meat-Free Monday", description: "Photo of a delicious vegan/vegetarian dinner." },
                    { id: 90, title: "Bulk Buying", description: "Photo of 5+ items bought in reusable containers." },
                ],
            },
            {
                name: "Waste Reduction",
                tasks: [
                    { id: 91, title: "Battery Recycling", description: "Photo of batteries at a proper drop-off point." },
                    { id: 92, title: "E-Waste Drop-off", description: "Bringing an old laptop/phone to a recycler." },
                    { id: 93, title: "Textile Recycling", description: "Photo of old clothes at a textile bin." },
                    { id: 94, title: "Refurbished Purchase", description: "Photo of a second-hand/refurbished item." },
                    { id: 95, title: "Plastic-Free Bathroom", description: "Swapping plastic bottles for soap bars." },
                    { id: 96, title: "Metal Straw Usage", description: "Using a reusable straw at a cafe." },
                    { id: 97, title: "Compostable Packaging", description: "Photo of a purchase with zero plastic." },
                    { id: 98, title: "Repair Cafe", description: "Bringing an item to be fixed instead of thrown out." },
                    { id: 99, title: "Seed Saving", description: "Photo of dried seeds from this year's harvest." },
                    { id: 100, title: "Smart Power Strip", description: "Installing a strip that kills 'vampire' power." },
                ],
            },
        ],
    },
];

export default function GoodDeeds() {
    const [activeCategory, setActiveCategory] = useState<string>("transportation");
    const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

    const activeData = categories.find((c) => c.id === activeCategory);

    return (
        <section id="good-deeds" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                        100 Good Deeds
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Earn <span className="gradient-text">HABI Tokens</span> For Your Actions
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Complete eco-friendly tasks and earn rewards. Each action is verified through AI,
                        GPS, photos, or sensor data to ensure authenticity.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setExpandedSubcategory(null);
                            }}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all ${activeCategory === category.id
                                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                                }`}
                        >
                            {category.icon}
                            <span className="hidden sm:inline">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                {activeData && (
                    <div className="animate-fade-in-up">
                        {/* Category Header */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">{activeData.title}</h3>
                            <p className="text-slate-400">{activeData.description}</p>
                        </div>

                        {/* Subcategories */}
                        <div className="space-y-6">
                            {activeData.subcategories.map((subcategory) => (
                                <div
                                    key={subcategory.name}
                                    className="glass rounded-2xl overflow-hidden"
                                >
                                    {/* Subcategory Header */}
                                    <button
                                        onClick={() =>
                                            setExpandedSubcategory(
                                                expandedSubcategory === subcategory.name ? null : subcategory.name
                                            )
                                        }
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                                <span className="font-bold">{subcategory.tasks.length}</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-white">{subcategory.name}</h4>
                                        </div>
                                        <svg
                                            className={`w-5 h-5 text-slate-400 transition-transform ${expandedSubcategory === subcategory.name ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Tasks List */}
                                    <div
                                        className={`grid gap-3 px-6 transition-all duration-300 ${expandedSubcategory === subcategory.name
                                                ? "pb-6 max-h-[2000px] opacity-100"
                                                : "max-h-0 opacity-0 overflow-hidden"
                                            }`}
                                    >
                                        {subcategory.tasks.map((task) => (
                                            <div
                                                key={task.id}
                                                className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl hover:bg-white/[0.05] transition-colors group"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                    {task.id}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-white font-medium mb-1">{task.title}</h5>
                                                    <p className="text-sm text-slate-400">{task.description}</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full">
                                                        +HABI
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">100</div>
                        <div className="text-sm text-slate-400">Total Tasks</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">5</div>
                        <div className="text-sm text-slate-400">Categories</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">AI</div>
                        <div className="text-sm text-slate-400">Verified</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">∞</div>
                        <div className="text-sm text-slate-400">Rewards</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
