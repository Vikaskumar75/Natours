exports.createUser = (req, res) => {
  res
    .status(500)
    .json({ status: 'error', message: 'This api is not implemented yet' });
};

exports.getAllUsers = (req, res) => {
  res
    .status(500)
    .json({ status: 'error', message: 'This api is not implemented yet' });
};

exports.getuser = (req, res) => {
  const id = req.params.id * 1;
  console.log(`ID: ${id}`);
  res
    .status(500)
    .json({ status: 'error', message: 'This api is not implemented yet' });
};

exports.updateUser = (req, res) => {
  const id = req.params.id * 1;
  console.log(`ID: ${id}`);
  res
    .status(500)
    .json({ status: 'error', message: 'This api is not implemented yet' });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;
  console.log(`ID: ${id}`);
  res
    .status(500)
    .json({ status: 'error', message: 'This api is not implemented yet' });
};
