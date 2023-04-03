import Head from "next/head";
import MainForm from "@/components/main/\bMainForm";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submit = async (form) => {
    setIsModalOpen(true);
      const response = await fetch("/api/gpt", {
      method: "POST",
      body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok){
        modalCloseHandler();
        return;
      }
      const data = await response.json();
      setAnswer(data);
  };

  const modalCloseHandler = () => {
    setAnswer("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>자소설</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        isOpen={isModalOpen}
        answer={answer}
        onClose={modalCloseHandler}
      />
      <MainForm submit={submit}/>
    </>
  );
}
