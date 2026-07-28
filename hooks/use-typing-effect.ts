"use client";

import { useEffect, useState } from "react";

const TYPING_SPEED_MS = 60;
const DELETING_SPEED_MS = 30;
const PAUSE_MS = 1800;

export function useTypingEffect(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length] ?? "";

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, TYPING_SPEED_MS);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((current) =>
          isDeleting
            ? currentWord.slice(0, current.length - 1)
            : currentWord.slice(0, current.length + 1),
        );
      },
      isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}
