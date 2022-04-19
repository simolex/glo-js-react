import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, push, child } from "firebase/database";
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const { email, pass } = require("../../creditals/config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

transporter.use("compile", htmlToText());

const sendOrderEmail = (data) => {
  const options = {
    from: `MrDonald's <${email}>`,
    to: data.email,
    subject: "Ваш заказ из MrDonald's",
    html: `
      <div>
        <h2>Добрый день, ${data.nameClient}</h2>
        <h3>Ваш заказ</h3>
        <ul>
          ${data.order.map(
            ({ name, count, price }) =>
              `<li>${name} - ${count} шт., цена: ${price * count} руб.</li>`
          )}
        </ul>
        <p>Итого: ${data.order.reduce((sum, item) => sum + item.price * item.count, 0)} руб.</p>
        <small>Ожидайте курьера.</small>
      </div>
    `,
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(info.envelope);
      console.log("Error sendmail: " + err);
    }
  });
};

const firebaseConfig = {
  apiKey: process.env.VERCEL_FIREBASE_API_KEY,
  authDomain: process.env.VERCEL_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VERCEL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VERCEL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VERCEL_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VERCEL_FIREBASE_APP_ID,
  databaseURL: process.env.VERCEL_FIREBASE_DATABASE_URL,
};

const appFirebase = initializeApp(firebaseConfig);
const database = getDatabase(appFirebase);

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const newOrderKey = push(child(ref(database), "orders")).key;
  const order = req.body;

  set(ref(database, "orders/" + newOrderKey), order);

  sendOrderEmail(order);
}
