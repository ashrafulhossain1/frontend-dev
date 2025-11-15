"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "../../lib/services";

const ServiceDetails = () => {
    const { id } = useParams(); // get dynamic id from URL
    const service = servicesData.find((s) => s.id === parseInt(id));

    if (!service) {
        return <p className="text-center mt-10 text-red-500">Service not found.</p>;
    }

    return (
        <div className="container mx-auto py-12 px-4">
            {/* Back Link */}
            <Link href="/services">
                <button className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    &larr; Back to Services
                </button>
            </Link>

            {/* Service Content */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-1/2">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded shadow-lg object-cover"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                    <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                    <p className="text-gray-700 text-lg mb-4">{service.description}</p>
                    <h2 className="text-2xl font-semibold mb-2">Details</h2>
                    <p className="text-gray-600">{service.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
