import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
// import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to improve memory retention? and how to fix it without AI",
    tags: [
      { _id: "1", name: "memory" },
      { _id: "2", name: "learning" }
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg"
    },
    upvotes: 20,
    views: 150,
    answers: [],
    createdAt: new Date("2023-12-15")
  },
  {
    _id: "2",
    title: "Best practices for writing clean code?",
    tags: [
      { _id: "3", name: "coding" },
      { _id: "4", name: "best-practices" }
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "https://example.com/janesmith.jpg"
    },
    upvotes: 35,
    views: 200,
    answers: [],
    createdAt: new Date("2024-01-10")
  },
  {
    _id: "3",
    title: "How to deploy a React app to production?",
    tags: [
      { _id: "5", name: "React" },
      { _id: "6", name: "deployment" }
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "https://example.com/alicejohnson.jpg"
    },
    upvotes: 15,
    views: 100,
    answers: [],
    createdAt: new Date("2024-02-20")
  },
  {
    _id: "4",
    title: "What are the benefits of using TypeScript?",
    tags: [
      { _id: "7", name: "TypeScript" },
      { _id: "8", name: "javascript" }
    ],
    author: {
      _id: "4",
      name: "Bob Williams",
      picture: "https://example.com/bobwilliams.jpg"
    },
    upvotes: 25,
    views: 180,
    answers: [],
    createdAt: new Date("2024-02-05")
  }
];


export default async function Home() {
  // const result = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="sm:hidden md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        
        {questions.length > 0 ?
          questions.map((question) => (
            <QuestionCard 
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
          : <NoResult 
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />}
      </div>
    </>
  );
}
