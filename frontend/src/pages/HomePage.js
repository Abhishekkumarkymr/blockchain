import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const transactionDatas = [
//   {
//     senderName: "John Doe",
//     receiverName:'Alok Ranjan',
//     productTitle: "Front-end Developer",
//     price: "500",
//     deliveryStatus: "transit",
//     image:
//       "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
//   },
//   {
//     senderName: "John Doe",
//     receiverName:'Alok Ranjan',
//     productTitle: "Front-end Developer",
//     price: "500",
//     deliveryStatus: "in transit",
//     image:
//       "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
//   }
// ];

const HomePage = () => {
  const [transactionData, setTransactionData] = useState();

  const getAllData = async () => {
    try {
      const getTransaction = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getAllTransaction`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getTransaction.json();
      setTransactionData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(transactionData);

  // console.log(transactionData);

  return (
    <>
      <section className="container px-4 mx-auto py-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold  text-gray-800 dark:text-white">
              Transaction Details
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all transcation made in recent times. You can add new Transaction, adding  once you cannot edit so add with caution...
            </p>
          </div>
          <Link to={"/addtransaction"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Transaction Details
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Sender's Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Product Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Delivery Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {transactionData?.data?.map((transaction) => (
                      <tr key={transaction.senderName}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={transaction.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                <span className="text-xs italic font-semibold">from: </span>{transaction.senderName}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                              <span className="text-xs italic font-semibold">To: </span> {transaction.receiverName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {transaction.productTitle}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300 font-semibold">
                            <span>&#8377;</span>{transaction.price}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 italic">
                          {transaction.deliveryStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};//

export default HomePage;
