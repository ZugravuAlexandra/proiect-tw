const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname)); // Adaugă această linie pentru a servi fișierele statice din directorul curent

app.get('/', (req, res) => {
  // Verifică dacă utilizatorul este autentificat
  if (req.session.user && req.session.user.isLoggedIn) {
    // Utilizatorul este autentificat, afișează pagina de binevenire
    res.send(`Bine ai venit, ${req.session.user.username}! <a href="/logout">Logout</a>`);
  } else {
    // Utilizatorul nu este autentificat, afișează pagina de login
    res.sendFile(__dirname + '/abonament.html');
  }
});

app.post('/login', (req, res) => {
  const { username, password, email } = req.body;

  // Verifică credențialele utilizatorului și e-mailul folosind regex
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (usernameRegex.test(username) && passwordRegex.test(password) && emailRegex.test(email)) {
    // Credențialele și e-mailul sunt valide
    if (username === 'admin' && password === 'password') {
      // Setează informațiile în sesiune
      req.session.user = {
        username,
        email,
        isLoggedIn: true
      };
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  // Șterge informațiile din sesiune
  req.session.destroy();
  res.redirect('/');
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});



app.listen(port, () => {
  console.log(`Serverul a pornit și ascultă pe portul ${port}`);
});
