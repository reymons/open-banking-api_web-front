import "@testing-library/jest-dom";
import { restServer } from "./server";

beforeAll(() => restServer.listen());
afterEach(() => restServer.resetHandlers());
afterAll(() => restServer.close());
