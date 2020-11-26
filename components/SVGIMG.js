import { motion } from "framer-motion";

const SVGIMG = () => {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity:0,
    //   pathLength: 0,
    },
    visible: {
      opacity: 1,
    //   pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <motion.svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        xlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 500 500'
        enableBackground='new 0 0 500 500'
        xml='preserve'
        width='55px'
        height='55px'
        fill='white'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          variants={pathVariants}
          d='M496,362.8L386.5,308l101.8-50.9h0l7.7-3.9V124.6l0,0l-4.3-2.1L250,1.7L4,124.6v9.5V236v7.7v9.5v7.7V380l11.3-5.6
        l115.5-57.8L242,372.3v7.7v35.3v71.3v12.5l11.4-5.1h0.1h0.1l18.6-9.5L496,372.3V362.8z M258,355.1V253.2l111.3-55.7l101.9,50.9
        L258,355.1z M481,236l-94.3-47.1l21.2-10.5l73.2-36.5V236z M20,141.9l94.1,47.1L20,236V141.9z M20,355.1V261l94.1,47.1L20,355.1z
        M148.1,308l-35.9-18l-83-41.5l101.7-50.9L242,253.2v101.8L148.1,308z M250.1,239.9L29.2,129.4L250.1,19l220.9,110.5l-64.7,32.4
        L250.1,239.9z M258,474.2V372.3l111.3-55.7l101.9,50.9L258,474.2z'
        />
      </motion.svg>
    </div>
  );
};

export default SVGIMG;
