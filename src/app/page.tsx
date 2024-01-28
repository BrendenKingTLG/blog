"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomList from "@/components/BottomList";
import ContactForm from "@/components/ContactForm";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between bg-white">
        <HomeHero />
        <ContactForm />
      </main>
      <BottomList />
      <Footer />
    </div>
  );
}
