export async function signUp(req, res) {
  const {nome, email, senha} = req.body;
  const passwordHash = bcrypt.hashSync(senha, 10);

  
}