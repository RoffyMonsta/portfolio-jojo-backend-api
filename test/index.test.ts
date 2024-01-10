/* eslint-disable import/no-extraneous-dependencies */
import request  from 'supertest';
import app, { server } from '../src';
import AppDataSource from '../src/db/data-source';

jest.mock('../src/db/data-source');
describe('App', () => {

  beforeAll(async () => {
    await (AppDataSource as any).initialize.mockResolvedValue(null);
  });

  afterAll(async () => {
    server.close();
  });

  it('should return health status', async () => {

    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('should handle invalid routes with a 404 status', async () => {
    const response = await request(app).get('/nonexistent-route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Not found' });
  });
});
