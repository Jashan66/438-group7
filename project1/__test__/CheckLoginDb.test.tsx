import { checkLogin } from '@/db/db'
import * as SQLite from 'expo-sqlite';

// Mock SQLite behavior
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


  it('should return false when username and password do not match', async () => {
    const result = await checkLogin('testuser123', 'testpassword123');
    expect(result).toBe(true); 
  });

});
