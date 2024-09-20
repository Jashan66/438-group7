import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '@/app/(tab)/home'; // Adjust the import based on your project structure
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('HomeScreen Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly initially', () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    expect(getByPlaceholderText('Search for a city...')).toBeTruthy();
    expect(getByText('Welcome!')).toBeTruthy();
  });

  it('updates search query when typing', () => {
    const { getByPlaceholderText } = render(<HomeScreen />);
    const searchInput = getByPlaceholderText('Search for a city...');
    
    fireEvent.changeText(searchInput, 'Monterey');
    expect(searchInput.props.value).toBe('Monterey');
  });

//   it('calls fetchWeatherData on submit', async () => {
//     // Mocking the fetch call
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve({
//           location: { name: 'Monterey', country: 'USA' },
//           current: { temperature: 22, weather_descriptions: ['Partly Cloudy'] },
//         }),
//       })
//     );

//     const { getByPlaceholderText, getByText } = render(<HomeScreen />);
//     const searchInput = getByPlaceholderText('Search for a city...');

//     fireEvent.changeText(searchInput, 'Monterey');
//     fireEvent.submitEditing(searchInput);
    
//     await waitFor(() => {
//       expect(getByText('Monterey, USA')).toBeTruthy();
//       expect(getByText('22°C')).toBeTruthy();
//       expect(getByText('Partly Cloudy')).toBeTruthy();
//     });
//   });
});
