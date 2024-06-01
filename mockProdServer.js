import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import testMock from '../mock/project.js';

export const setupProdMockServer = () => {
  createProdMockServer([...testMock]);
};
