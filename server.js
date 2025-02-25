import { createRequire } from "module";
const require = createRequire(import.meta.url);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

// CORS middleware (Cross-Origin Resource Sharing)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// **Login Endpoint**
server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get("users").value();

  // Register'dan gelen verilerle uyumlu bir kullanıcıyı bul
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({
        error:
          "User information is incorrect. Please enter the correct username and password.",
      });
  }

  // Giriş başarılıysa
  res.json({
    id: user.id,
    username: user.username,
    token: `mock-token-${user.id}`,
  });
});

// **Register Endpoint**
server.post("/register", (req, res) => {
  const {
    email,
    password,
    confirm,
    username,
    nickname,
    prefix,
    phone,
    gender,
  } = req.body;
  const users = router.db.get("users").value();

  // **Aynı email veya username ile kullanıcı var mı kontrol et**
  const existingUser = users.find(
    (u) => u.email === email || u.username === username
  );
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User with this email or username already exists" });
  }

  // **Şifre ve şifre onayı eşleşmiyorsa hata ver**
  if (password !== confirm) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  // Yeni kullanıcı oluştur
  const newUser = {
    id: users.length + 1,
    email,
    username,
    password,
    nickname,
    prefix,
    phone,
    gender,
    token: `mock-token-${users.length + 1}`,
  };

  // Kullanıcıyı db.json'a ekle
  router.db.get("users").push(newUser).write();

  res.json({
    id: newUser.id,
    email: newUser.email,
    username: newUser.username,
    token: newUser.token,
  });
});

// Varsayılan middleware ve router
server.use(middlewares);
server.use(router);

// **Sunucuyu Başlatma**
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
