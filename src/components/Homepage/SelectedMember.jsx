import React from "react";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";

const SelectedMember = ({ selectedMember, setSelectedMember }) => {
  return (
    <motion.div
      id="selected-member-card"
      key="member-card"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full gap-4 flex flex-col md:flex-row justify-between p-4"
    >
      <div className="member-img h-[25rem] w-full md:w-[20rem] flex justify-center items-center rounded-3xl border-2 border-white">
        <img
          src={selectedMember.image}
          alt="image of team member"
          className="w-full h-full rounded-3xl object-center object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 md:h-[25rem] bg-black text-white rounded-2xl p-10 justify-center md:w-[60%] border-2 border-black">
        <div className="text-white text-5xl font-extrabold tracking-wide">
          {selectedMember.name}
        </div>
        <div className="text-3xl">{selectedMember.role}</div>
        <div className="border-2 border-gray-800 rounded-xl p-4 text-xl w-full text-center mt-[4rem] font-light">
          {selectedMember.bio}
        </div>
      </div>
      <motion.div
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-[4rem] p-2 w-full md:w-[4rem] text-white rounded-full bg-black hover:cursor-pointer flex justify-center items-center"
        onClick={() => setSelectedMember(null)}
      >
        <IoArrowBack size={30} />
      </motion.div>
    </motion.div>
  );
};

export default SelectedMember;