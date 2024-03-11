import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from './authService';

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDashboardData(userId);
        setUserData(response.data.userData);
        // Handle success
      } catch (error) {
        console.error('Fetch Dashboard Error:', error.response.data.error);
        // Handle error
      }
    };

    fetchData();
  }, [userId]);

  // Render user dashboard data
};
