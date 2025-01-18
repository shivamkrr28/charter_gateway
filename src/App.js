import React, { useEffect, useState } from 'react';
import { getTransactionData } from './api';

// Function to calculate reward points based on the amount spent
export const countRewardPoints = (amount) => {
  let points = 0;
  
  if (amount > 100) {
    points += (amount - 100) * 2;  
    points += 50;  
  } else if (amount >= 50) {
    points += (amount - 50);  
  }
  
  return points;
};

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardPoints, setRewardPoints] = useState({});
  
  useEffect(() => {
    const getDataTransaction = async () => {
      const data = await getTransactionData();
      setTransactions(data);
    };
    getDataTransaction();
  }, []);

  useEffect(() => {
    // count reward points for each customer
    const points = transactions.reduce((acc, transaction) => {
      const customerId = transaction.customerId;
      const pointsForTransaction = countRewardPoints(transaction.amount);
      
      // Add the points for each customer per month
      const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
      const yearMonth = `${month} ${new Date(transaction.date).getFullYear()}`;
      
      if (!acc[customerId]) {
        acc[customerId] = { total: 0, months: {} };
      }
      
      // count points per month
      if (!acc[customerId].months[yearMonth]) {
        acc[customerId].months[yearMonth] = 0;
      }
      
      acc[customerId].months[yearMonth] += pointsForTransaction;
      acc[customerId].total += pointsForTransaction;
      
      return acc;
    }, {});
    
    setRewardPoints(points);
  }, [transactions]);

  return (
    <div>
      <h1>Reward Points</h1>
      {Object.keys(rewardPoints).map((customerId) => (
        <div key={customerId}>
          <h2>Customer {customerId}</h2>
          {Object.keys(rewardPoints[customerId].months).map((month) => (
            <p key={month}>
              {month}: {rewardPoints[customerId].months[month]} points
            </p>
          ))}
          <p>Total points: {rewardPoints[customerId].total}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
