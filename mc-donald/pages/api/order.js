import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, push, child, get } from "firebase/database";
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

const sendOrderEmail = (order) => {
  const options = {
    from: `MrDonald's`,
    to: email,
    subject: "Ваш заказ из MrDonald's",
    html: `
    <div>
      <h2>Добрый день</h2>
      <h3>Ваш заказ</h3>
    </div>
    
    `,
  };

  transporter.sendMail(options);
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
  const body = req.body;

  const newOrderKey = push(child(ref(database), "orders")).key;
  set(ref(database, "orders/" + newOrderKey), body);
  //console.log(body);

  const rowId = newOrderKey;
  const dbRef = ref(database);

  get(child(dbRef, `orders/${rowId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.status(200).json(snapshot.val());
      } else {
        res.status(200).json({ data: "No data available" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500);
    });
}
