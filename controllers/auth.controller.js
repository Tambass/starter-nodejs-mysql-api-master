exports.postAuthRegister = async (req, res) => {
  const email = req.body.email;
  console.log("coucou");
  await querysql(
    "SELECT email FROM user WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log("result:", result);
      }
    }
  );
};
