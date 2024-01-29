// pages/api/send-email.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import db from "@/db"; // Adjust the import path based on your db.js location
import { welcomeMessage, contactMessage } from '@/constants';
export async function POST(req: Request) {
    try {
      const data = await req.json();

      let contact = data.contact;

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NM_USER,
          pass: process.env.NM_PASSWORD,
        },
      });

      if (contact) {
        const { firstName, lastName, message } = data;

    
        let mailOptions = {
          from: process.env.NM_USER,
          to: process.env.NM_USER,
          subject: 'Blog',
          text: contactMessage(firstName, lastName, message),
        };

        await transporter.sendMail(mailOptions);

      } else {
        const { email } = data;
        const existingEmails = await db
          .selectFrom("subscribers")
          .select(["email"])
          .where("email", "=", email)
          .execute();

        if (existingEmails.length === 0) {
            await db
                .insertInto("subscribers")
                .values({ email: email })
                .execute();
            console.log(`Email ${email} inserted.`);
            let mailOptions = {
              from: process.env.NM_USER,
              to: email,
              subject: 'Blog',
              text: welcomeMessage(),
            };
    
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'Sent', status: "success" });

          }
          return NextResponse.json({ message: 'Already Subscribed', status: "success"  });

        }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending email' });
    }
}
