import { rest } from "msw";

export const handlers = [
  rest.get("/favicon.ico", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [],
        page: 1,
        total: 10,
        perPage: 5,
      })
    );
  }),
];
