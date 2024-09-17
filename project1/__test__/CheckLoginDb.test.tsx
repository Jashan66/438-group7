import { checkLogin } from '@/db/db'
import * as SQLite from 'expo-sqlite';


jest.mock('expo-sqlite', () => ({
  openDatabaseAsync: jest.fn(() => ({
    prepareAsync: jest.fn(() => ({
      executeAsync: jest.fn(() => ({
        getAllAsync: jest.fn().mockResolvedValue([{ username: 'testuser', password: 'testpassword' }]),
      })),
      finalizeAsync: jest.fn(),
    })),
  })),
}));

describe('checkLogin function', () => {
  it('should return true when username and password match', async () => {
    const result = await checkLogin('testuser', 'testpassword');
    expect(result).toBe(true); 
  });



});
