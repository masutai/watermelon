"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AmericanToBritish } from "@/types/amerian2british";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  answer: string;
};

export default function QuizForm({ words }: { words: AmericanToBritish[] }) {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<AmericanToBritish | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      answer: ""
    }
  });

  useEffect(() => {
    getNextQuestion();
  }, []);

  // 以前出した問題を除外して、新しい問題を取得する。全問終了したら、メッセージを表示する
  const getNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentQuestion(words[randomIndex]);
    form.reset();
    setIsCorrect(null);
  };

  const onSubmit = (values: FormValues) => {
    if (currentQuestion && values.answer === currentQuestion.british_spelling) {
      setIsCorrect(true);
      setTimeout(() => {
        getNextQuestion();
      }, 1500);
    } else {
      setIsCorrect(false);
    }
  };

  if (!currentQuestion) return <p>読み込み中...</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {currentQuestion.american_spelling}をイギリス英語に直してください
              </FormLabel>
              <FormControl>
                <Input placeholder="回答を入力" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提出</Button>
        {isCorrect !== null && (
          <p>{isCorrect ? "正解！次の問題に進みます。" : "不正解。もう一度試してください。"}</p>
        )}
      </form>
    </Form>
  );
}
