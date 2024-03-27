import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Progress } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import pcaLogo from '../assets/pcalogo.png';

const Landing = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          navigate("/login");
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <motion.img
        src={pcaLogo}
        alt=""
        style={{ width: '200px', height: 'auto' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        style={{ width: '50%', overflow: 'hidden' }} 
        initial={{ width: '0%' }}
        animate={{ width: `${50}%` }}
        transition={{ duration: 0.5 }}
      >
        <Progress mt={2} colorScheme='green' size='sm' hasStripe value={progress} />
      </motion.div>
    </Box>
  );
};

export default Landing;
