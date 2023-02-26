// const { user } = require("firebase-functions/v1/auth");
const { db } = require("../util/admin");
const { generateToken } = require("../util/token");
const { getEscrowQuestionId } = require("../util/contracts");

exports.getAllQuestions = (req, res) => {
  db.collection("questions")
    .orderBy("createdAt", "desc")
    .get()
    .then((docList) => {
      let questions = [];
      docList.forEach((doc) => {
        questions.push({
          questionId: doc.id,
          body: doc.data().body,
          questionerUid: doc.data().questionerUid,
          questioneeUid: doc.data().questioneeUid,
          contractAddress: doc.data().contractAddress,
          createdAt: doc.data().createdAt,
          answerId: doc.data().answerId,
          rewardTokenType: doc.data().rewardTokenType,
          rewardTokenAmount: doc.data().rewardTokenAmount,
          purchasePrice: doc.data().purchasePrice,
        });
      });
      return res.status(200).json(questions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getAllQuestionsByDescPrice = (req, res) => {
  db.collection("questions")
    .orderBy("purchasePrice", "desc")
    .get()
    .then((docList) => {
      let questions = [];
      docList.forEach((doc) => {
        questions.push({
          questionId: doc.id,
          body: doc.data().body,
          questionerUid: doc.data().questionerUid,
          questioneeUid: doc.data().questioneeUid,
          contractAddress: doc.data().contractAddress,
          createdAt: doc.data().createdAt,
          answerId: doc.data().answerId,
          rewardTokenType: doc.data().rewardTokenType,
          rewardTokenAmount: doc.data().rewardTokenAmount,
          purchasePrice: doc.data().purchasePrice,
        });
      });
      return res.status(200).json(questions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

/*
  Speed up by using uid's list of questionsfor and questionsto
*/
exports.getAllQuestionsForUser = (req, res) => {
  db.collection("questions")
    .orderBy("createdAt", "desc")
    .get()
    .then((docList) => {
      let questions = [];
      docList.forEach((doc) => {
        if (doc.data().questioneeUid == req.params.uid) {
          questions.push({
            questionId: doc.id,
            body: doc.data().body,
            questionerUid: doc.data().questionerUid,
            questioneeUid: doc.data().questioneeUid,
            contractAddress: doc.data().contractAddress,
            createdAt: doc.data().createdAt,
            answerId: doc.data().answerId,
            rewardTokenType: doc.data().rewardTokenType,
            rewardTokenAmount: doc.data().rewardTokenAmount,
            purchasePrice: doc.data().purchasePrice,
          });
        }
      });
      return res.status(200).json(questions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getAllQuestionsByUser = (req, res) => {
  db.collection("questions")
    .orderBy("createdAt", "desc")
    .get()
    .then((docList) => {
      let questions = [];
      docList.forEach((doc) => {
        if (doc.data().questionerUid == req.params.uid) {
          questions.push({
            questionId: doc.id,
            body: doc.data().body,
            questionerUid: doc.data().questionerUid,
            questioneeUid: doc.data().questioneeUid,
            contractAddress: doc.data().contractAddress,
            createdAt: doc.data().createdAt,
            answerId: doc.data().answerId,
            rewardTokenType: doc.data().rewardTokenType,
            rewardTokenAmount: doc.data().rewardTokenAmount,
            purchasePrice: doc.data().purchasePrice,
          });
        }
      });
      return res.status(200).json(questions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.postUnactivatedQuestion = async (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Body must not be empty" });
  }
  if (req.user.uid == req.body.questioneeUid) {
    return res.status(400).json({ body: "Cannot ask yourself question" });
  }

  const secretToken = generateToken();

  // no contract address yet!!!
  let newQuestion = {
    body: req.body.body,
    questionerUid: req.user.uid,
    questioneeUid: req.body.questioneeUid,
    createdAt: new Date().toISOString(),
    contractAddress: null,
    answerId: null,
    rewardTokenType: req.body.rewardTokenType,
    rewardTokenAmount: req.body.rewardTokenAmount,
    purchasePrice: 0,
    secretToken: secretToken,
  };

  const upperCaseRewardTokenType = req.body.rewardTokenType.toUpperCase();
  const fetchPriceUrl = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${upperCaseRewardTokenType}-USDT`;
  const axios = require("axios");
  let resQuestion;
  axios
    .get(fetchPriceUrl)
    .then((token) => {
      const price = token.data.data.price;
      const totalPrice = price * Number(req.body.rewardTokenAmount);
      newQuestion.purchasePrice = totalPrice;
    })
    .then(() => {
      return db.collection("questions").add(newQuestion);
    })
    .then((doc) => {
      resQuestion = newQuestion;
      resQuestion.questionId = doc.id;
      // includes secretToken
      return res.status(200).json(resQuestion);
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

/**
 *
 * @param {smartContractAddress} req
 */

exports.updateActivateQuestion = async (req, res) => {
  const questionId = await getEscrowQuestionId(req.params.contractAddress);

  // const questionId = req.params.questionId;
  let questionerUid;
  let questioneeUid;
  let question;

  db.doc(`/questions/${questionId}`)
    .get()
    .then((doc) => {
      console.log("questiondata: ", doc);
      if (!doc.exists) {
        return res
          .status(404)
          .json({ error: "Escrow SC QuesitonId not found in database" });
      }
      question = doc.data();
      console.log("questiondata: ", question);
      questionerUid = question.questionerUid;
      questioneeUid = question.questioneeUid;
      return doc.ref.update({ contractAddress: req.params.contractAddress });
    })
    .then(() => {
      return db.doc(`/users/${questionerUid}`).get();
    })
    // can use Promise.all to do concurrent updates.
    .then((userData) => {
      console.log("userData:! ", userData.data());
      const newQuestionsAsked = userData.data().questionsAsked;
      newQuestionsAsked.push(questionId);
      return userData.ref.update({ questionsAsked: newQuestionsAsked });
    })
    .then(() => {
      return db.doc(`/users/${questioneeUid}`).get();
    })
    .then((userData) => {
      const newQuestionsFor = userData.data().questionsFor;
      newQuestionsFor.push(questionId);
      return userData.ref.update({ questionsFor: newQuestionsFor });
    })
    .then(() => {
      // excludes secretToken
      return res.status(200).json({
        questionId: questionId,
        body: question.body,
        questionerUid: question.questionerUid,
        questioneeUid: question.questioneeUid,
        createdAt: question.createdAt,
        answerId: question.answerId,
        rewardTokenType: question.rewardTokenType,
        rewardTokenAmount: question.rewardTokenAmount,
        purchasePrice: question.purchasePrice,
      });
    });
};

// exports.postOneQuestion = (req, res) => {
//   if (req.body.body.trim() === "") {
//     return res.status(400).json({ body: "Body must not be empty" });
//   }
//   if (req.user.uid == req.body.questioneeUid) {
//     return res.status(400).json({ body: "Cannot ask yourself question" });
//   }
//   let newQuestion = {
//     body: req.body.body,
//     questionerUid: req.user.uid,
//     questioneeUid: req.body.questioneeUid,
//     contractAddress: req.body.contractAddress,
//     createdAt: new Date().toISOString(),
//     answerId: null,
//     rewardTokenType: req.body.rewardTokenType,
//     rewardTokenAmount: req.body.rewardTokenAmount,
//     purchasePrice: 0,
//   };

//   const upperCaseRewardTokenType = req.body.rewardTokenType.toUpperCase();
//   const fetchPriceUrl = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${upperCaseRewardTokenType}-USDT`;
//   const axios = require("axios");
//   let resQuestion;

//   axios
//     .get(fetchPriceUrl)
//     .then((token) => {
//       const price = token.data.data.price;
//       const totalPrice = price * Number(req.body.rewardTokenAmount);
//       newQuestion.purchasePrice = totalPrice;
//     })
//     .then(() => {
//       db.collection("questions")
//         .add(newQuestion)
//         .then((doc) => {
//           resQuestion = newQuestion;
//           resQuestion.questionId = doc.id;
//         })
//         .then(() => {
//           db.doc(`/users/${resQuestion.questionerUid}`)
//             .get()
//             .then((userData) => {
//               const newQuestionsAsked = userData.data().questionsAsked;
//               newQuestionsAsked.push(resQuestion.questionId);
//               return userData.ref.update({ questionsAsked: newQuestionsAsked });
//             });
//         })
//         .then(() => {
//           db.doc(`/users/${resQuestion.questioneeUid}`)
//             .get()
//             .then((userData) => {
//               const newQuestionsFor = userData.data().questionsFor;
//               newQuestionsFor.push(resQuestion.questionId);
//               return userData.ref.update({ questionsFor: newQuestionsFor });
//             });
//         })
//         .then(() => {
//           return res.status(200).json(resQuestion);
//         });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "something went wrong" });
//       console.error(err);
//     });
// };

// Fetch one question
exports.getQuestion = (req, res) => {
  db.doc(`/questions/${req.params.questionId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Question not found" });
      }
      const question = doc.data();
      return res.status(200).json({
        body: question.body,
        questionerUid: question.questionerUid,
        questioneeUid: question.questioneeUid,
        createdAt: question.createdAt,
        answerId: question.answerId,
        rewardTokenType: question.rewardTokenType,
        rewardTokenAmount: question.rewardTokenAmount,
        purchasePrice: question.purchasePrice,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getAllQuestionPurhcasedByUser = (req, res) => {
  db.doc(`/users/${req.user.uid}`)
    .get()
    .then((doc) => {
      return doc.data().questionsPurchased;
    })
    .then((questionsPurchased) => {
      const questionsPromises = [];
      questionsPurchased.forEach((questionPurchased) => {
        questionsPromises.push(db.doc(`/questions/${questionPurchased}`).get());
      });
      return Promise.all(questionsPromises);
    })
    .then((questionsData) => {
      const questionsPurchased = [];
      questionsData.forEach((questionData) => {
        const question = questionData.data();
        questionsPurchased.push({
          body: question.body,
          questionerUid: question.questionerUid,
          questioneeUid: question.questioneeUid,
          createdAt: question.createdAt,
          answerId: question.answerId,
          rewardTokenType: question.rewardTokenType,
          rewardTokenAmount: question.rewardTokenAmount,
          purchasePrice: question.purchasePrice,
        });
      });
      return res.status(200).json(questionsPurchased);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};