/* ================================================================
   EDIT HERE when a book is published: paste its Kindle page link into
   `amazon` (for example "https://www.amazon.com/dp/B0XXXXXXXX"), and the
   paperback and hardcover pages into `paperback` and `hardcover`.
   That one change does three things:
     - aftermomordad.com/N (printed and QR-coded inside the books) now goes
       straight to that book's Amazon page;
     - every "Buy" button for that book on this site goes to Amazon;
     - until then, those buttons say "Tell me when it's out" and lead
       to the sign-up.
   build_site.py keeps these links when it rebuilds the site. Rebuild
   after pasting, so "In preparation" changes to "Out now".
   ================================================================ */
const BOOKS = [
  { n: 1, word: "One", title: "The First Month", url: "/books/the-first-month/",
    when: "The first month", line: "Who to call, what to find, what can wait.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 2, word: "Two", title: "Being in Charge", url: "/books/being-in-charge/",
    when: "Months 1 to 9", line: "Executor or administrator duties, with or without a will.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 3, word: "Three", title: "Their Money", url: "/books/their-money/",
    when: "Months 1 to 12", line: "Benefits, accounts, taxes, debts.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 4, word: "Four", title: "Their House", url: "/books/their-house/",
    when: "Months 3 to 15", line: "Stay or sell, and clearing a life.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 5, word: "Five", title: "Siblings and the Estate", url: "/books/siblings-and-the-estate/",
    when: "Months 1 to 18", line: "Family, fairness, and who gets what.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 6, word: "Six", title: "Your Surviving Parent", url: "/books/your-surviving-parent/",
    when: "Months 3 to 24", line: "When the other parent is now alone.",
    amazon: "", paperback: "", hardcover: "" },
  { n: 7, word: "Seven", title: "The Second Parent", url: "/books/the-second-parent/",
    when: "After the second death", line: "When the other parent dies too: the last estate, and the family after.",
    amazon: "", paperback: "", hardcover: "" },
];

/* "How long has it been?": the first book is "start here". */
const WHEN = [
  { label: "Less than a month", start: 1, also: [2] },
  { label: "1 to 6 months", start: 2, also: [3, 5] },
  { label: "6 to 12 months", start: 3, also: [4, 5] },
  { label: "12 to 18 months", start: 4, also: [5, 6] },
  { label: "18 months or more", start: 6, also: [5] }
];
