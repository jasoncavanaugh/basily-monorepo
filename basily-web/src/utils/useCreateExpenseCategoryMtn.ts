/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@tanstack/react-query";
import { type BaseColor } from "./tailwind-colors";
import { type ExpenseCategory } from "./types";

export function use_create_expense_category_mtn({
  on_success,
}: {
  on_success: (data: ExpenseCategory) => void;
}) {
  return useMutation({
    mutationFn: async (input: { name: string; color: BaseColor }) => {
      const resp = await fetch("/api/create_expense_category", {
        method: "POST",
        body: JSON.stringify({
          name: input.name,
          color: input.color,
        }),
      });
      if (!resp.ok) {
        throw new Error();
      }
      return resp.json() as Promise<ExpenseCategory>;
    },
    onSuccess: on_success,
  });
}
