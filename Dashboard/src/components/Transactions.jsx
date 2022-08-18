import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";


import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {


    return (
        <div className="b   "
        >
            <div className="b">
                <div className="b">
                    <p className="b">From: {shortenAddress(addressFrom)}</p>


                    <p className="b">To: {shortenAddress(addressTo)}</p>

                    <p className="b">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="b">Message: {message}</p>
                        </>
                    )}
                </div>
             
                <div className="b">
                    <p className="b">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="b">
            <div className="b">
                {currentAccount ? (
                    <h3 className="b">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="b">
                        Connect your account to see the latest transactions
                    </h3>
                )}

                <div className="b">
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionsCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;