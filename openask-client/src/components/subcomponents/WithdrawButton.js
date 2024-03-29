import React from "react";
import { Box, Typography, Backdrop } from "@mui/material";
import { withdrawEthPayment } from "../functions/withdrawEthPayment";
import axios from "axios";
import confetti from "canvas-confetti";

const WithdrawButton = (props) => {
  const {
    contractAddress,
    bountyId,
    contributionId,
    questionId,
    accessToken,
    setAccessError,
    setOpenWithdraw,
    setAskLoaderWithdrawText,
    withdrawn,
  } = props;

  const withdraw = async () => {
    try {
      setOpenWithdraw(true);
      const txHash = await withdrawEthPayment(
        contractAddress,
        bountyId,
        contributionId,
        setAskLoaderWithdrawText
      );
      console.log("TX Hash: ", txHash);
      const data = await putWithdraw(questionId);
      setOpenWithdraw(false);
      confetti({
        zIndex: "3002",
        particleCount: 300,
        spread: 150,
        shapes: ["circle", "square"],
        origin: {
          y: 0.65,
        },
      });
      refreshPage();
    } catch (error) {
      setOpenWithdraw(false);
      console.log(error);
      throw new Error(error);
    }
  };

  // PUT Withdraw
  const putWithdraw = async (questionId) => {
    try {
      const data = await axios.put(
        `https://us-central1-open-ask-dbbe2.cloudfunctions.net/api/question-withdrawn/${questionId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Answer TX Hash added to Backend.");
      return data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        setAccessError(true);
      }
      throw new Error(error);
    }
  };

  // Refresh Page
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <>
      <Box
        className={withdrawn ? "withdrawn" : "withdraw"}
        onClick={(event) => {
          event.stopPropagation();
          withdraw();
        }}
      >
        <Typography>{withdrawn ? "Withdrawn" : "Withdraw"}</Typography>
      </Box>
    </>
  );
};

export default WithdrawButton;
