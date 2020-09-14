import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.json({ ok: true });
});

export { router };
