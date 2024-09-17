import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '@/components/utils/WeatherCard';

// Mocking the Lucide icons
jest.mock('lucide-react-native', () => {
    const React = require('react');
    const { Text } = require('react-native'); // Use require instead of import
    return {
      Sun: () => <Text>Sun Icon</Text>,
      CloudRain: () => <Text>CloudRain Icon</Text>,
      Cloud: () => <Text>Cloud Icon</Text>,
      CloudSnow: () => <Text>CloudSnow Icon</Text>,
      CloudLightning: () => <Text>CloudLightning Icon</Text>,
    };
  });
  

describe('WeatherCard', () => {
  it('renders the city, condition, and temperature correctly', () => {
    const { getByText } = render(
      <WeatherCard city="New York" condition="Sunny" temperature={25} />
    );

    // Check if the city is rendered
    expect(getByText('New York')).toBeTruthy();

    // Check if the condition is rendered
    expect(getByText('Sunny')).toBeTruthy();

    // Check if the temperature is rendered
    expect(getByText('25°C')).toBeTruthy();
  });

  it('renders the correct weather icon based on condition', () => {
    const { getByText } = render(
      <WeatherCard city="Seattle" condition="Rainy" temperature={18} />
    );

    // Since we are not testing the actual icon component, we just check if the mocked icon is rendered
    expect(getByText('CloudRain Icon')).toBeTruthy();
  });
});
