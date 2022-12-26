import { rest } from "msw";

const items = [
  {
    id: 1,
    title: "Web Development",
    content: "Learn about Polymer",
    created_at: "Mon Apr 26 06:01:55 +0000 2015",
    is_complete: true,
  },
  {
    id: 2,
    content: "Watch Pluralsight course on Docker",
    created_at: "Tue Mar 02 07:01:55 +0000 2015",
    title: "Web Development",
    is_complete: true,
  },
  {
    id: 3,
    content: "Complete presentation prep for Aurelia presentation",
    created_at: "Wed Mar 05 10:01:55 +0000 2015",
    title: "Web Development",
    is_complete: false,
  },
  {
    id: 4,
    content: "Instrument creation of development environment with Puppet",
    created_at: "Fri June 30 13:00:00 +0000 2015",
    title: "Web Development",
    is_complete: false,
  },
  {
    id: 5,
    content: "Transition code base to ES6",
    created_at: "Mon Aug 01 10:00:00 +0000 2015",
    title: "Web Development",
    is_complete: false,
  },
];

export const handlers = [
  rest.get("/favicon.ico", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items,
        pagination: {
          page: 1,
          total: 1,
          limit: 1,
        },
      })
    );
  }),

  rest.post("todo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "1",
        title: "What is Lorem Ipsum?",
        content:
          "Lorem Ipsum is simply dummy content of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy content ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      })
    );
  }),

  rest.patch("todo/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "1",
        title: "What is Lorem Ipsum?",
        content:
          "Lorem Ipsum is simply dummy content of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy content ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      })
    );
  }),

  rest.delete("todo/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
