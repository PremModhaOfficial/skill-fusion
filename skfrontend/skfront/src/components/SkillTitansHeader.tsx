

const SkillTitansHeader = ({ onClick }: { onClick: Function }) => {
  return (
    <a
      href="#register"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="bg-red-600 text-white py-3 px-4 flex justify-center items-center w-full hover:bg-red-700 transition-colors duration-300 cursor-pointer"
    >
      <div className="text-lg font-semibold text-center sticky top-10 z-11">
        Register for Skill Titans Season 2
      </div>
    </a>
  );
};

export default SkillTitansHeader;
