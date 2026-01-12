const Experience = () => {
  return (
    <div className="relative mt-16">

      {/* ===== Vertical timeline ===== */}
      <div className="absolute left-4 top-0 w-1 h-full bg-gray-700"></div>

      {/* ===== Experience Item 1 ===== */}
      <div className="relative mb-16 group flex items-start">

        {/* Horizontal line connecting to card */}
        <div className="absolute left-4 top-8 w-16 h-1 bg-gray-700"></div>

        {/* Dot at intersection */}
        <span className="absolute left-4.5 top-8 w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-700 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#7ed957] z-10"></span>

        {/* Card */}
        <div className="ml-20 bg-[#1c1f23] rounded-md p-8 shadow-lg transition-all duration-300 group-hover:bg-[#101214] group-hover:shadow-2xl w-full">

          {/* Badge */}
          <span className="absolute top-6 right-6 bg-black text-[#7ed957] text-sm px-4 py-2 rounded-lg transition-colors duration-300 group-hover:bg-gray-800 group-hover:text-[#7ed957]">
            2022 - Present
          </span>

          <h3 className="text-2xl font-semibold text-gray mb-2 transition-colors duration-300 group-hover:text-white">
            Software Engineer
          </h3>

          <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-200">
            Freelance / Remote
          </p>

          <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
            Working as a full-stack software engineer, building scalable web
            applications using React, TypeScript, .NET Core, REST APIs,
            SQL/PostgreSQL, and Tailwind CSS. Delivered multiple production-ready
            solutions focusing on performance, clean architecture, and user
            experience.
          </p>
        </div>
      </div>

      {/* ===== Experience Item 2 ===== */}
      <div className="relative mb-16 group flex items-start">

        {/* Horizontal line connecting to card */}
        <div className="absolute left-4 top-8 w-16 h-1 bg-gray-700"></div>

        {/* Dot at intersection */}
        <span className="absolute left-4.5 top-8 w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-700 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#7ed957] z-10"></span>

        {/* Card */}
        <div className="ml-20 bg-[#1c1f23] rounded-md p-8 shadow-lg transition-all duration-300 group-hover:bg-[#101214] group-hover:shadow-2xl w-full">

          {/* Badge */}
          <span className="absolute top-6 right-6 bg-black text-[#7ed957] text-sm px-4 py-2 rounded-lg transition-colors duration-300 group-hover:bg-gray-800 group-hover:text-[#7ed957]">
            2020 - 2022
          </span>

          <h3 className="text-2xl font-semibold text-gray mb-2 transition-colors duration-300 group-hover:text-white">
            Junior Software Developer
          </h3>

          <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-200">
            On-site / Contract
          </p>

          <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
            Contributed to backend and frontend development, API integrations,
            database design, and bug fixing. Gained strong experience in C#,
            ASP.NET Core, JavaScript, SQL, and collaborative development
            workflows.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Experience;
