// file location
// src/api.js

export const getTransactionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { customerId: 1, amount: 120, date: "2025-01-15" },
        { customerId: 1, amount: 80, date: "2025-01-18" },
        { customerId: 2, amount: 150, date: "2025-01-12" },
        { customerId: 2, amount: 45, date: "2025-01-20" },
        { customerId: 3, amount: 90, date: "2025-01-25" },
        { customerId: 3, amount: 160, date: "2025-02-05" },
        { customerId: 1, amount: 180, date: "2025-02-10" },
        { customerId: 2, amount: 95, date: "2025-02-18" },
        { customerId: 3, amount: 110, date: "2025-03-05" }
      ]);
    }, 1000);
  });
};
