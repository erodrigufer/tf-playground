module.exports.handler = async (event) => {
  console.log("Event: ", event);
  let responseMessage = "ero: Hello, World!";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "x-secret-key": "xxxxxxxxxxxxx---no-way-I-am-sending-the-key",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
