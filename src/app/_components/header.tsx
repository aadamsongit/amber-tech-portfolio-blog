import Link from "next/link";

const Header = () => {
  return (
    <div className="relative mb-12 mt-8">
      {/* Gradient background banner */}
      <div
        className="absolute inset-0 rounded-xl z-0"
        style={{
          background:
            "linear-gradient(135deg, #1e0a3c 0%, #8e2de2 40%, #ff00ff 70%, #0a001a 100%)",
        }}
      ></div>

      {/* Title */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg px-6 py-8 md:px-12 md:py-12">
        <Link href="/" className="hover:underline">
          Amber Builds: Tech Blog 2025
        </Link>
      </h1>
    </div>
  );
};

export default Header;
