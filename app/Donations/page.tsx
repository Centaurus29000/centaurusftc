"use client";

export default function DonationsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#7500ff] text-center">
        Support Team Centaurus
      </h1>
      <p className="mb-8 max-w-xl text-center text-gray-700">
        Your donation helps us build, innovate, and inspire the next generation of engineers and leaders. Thank you for supporting our journey!
      </p>
      <div className="rounded-xl shadow-lg overflow-hidden bg-white">
        <iframe
          src="https://hcb.hackclub.com/donations/start/centaurus-ftc"
          style={{ border: "none" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          height="936px"
          width="512px"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}