import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from 'vitest';

import { server } from '@/works/node';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
