import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WeatherCard from '@/components/utils/WeatherCard';

jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Sun: (props) => <Text {...props}>Sun Icon</Text>,
    CloudRain: (props) => <Text {...props}>CloudRain Icon</Text>,
    Cloud: (props) => <Text {...props}>Cloud Icon</Text>,
    CloudSnow: (props) => <Text {...props}>CloudSnow Icon</Text>,
    CloudLightning: (props) => <Text {...props}>CloudLightning Icon</Text>,
    Star: (props) => <Text {...props}>Star Icon</Text>, 
  };
});
  

describe('WeatherCard', () => {
  it('renders the city, condition, and temperature correctly', () => {
    const { getByText } = render(
      <WeatherCard city="New York" condition="Sunny" temperature={25} />
    );

    expect(getByText('New York')).toBeTruthy();

    expect(getByText('Sunny')).toBeTruthy();

    expect(getByText('25°C')).toBeTruthy();
  });

  it('renders the correct weather icon based on condition', () => {
    const { getByText } = render(
      <WeatherCard city="Seattle" condition="Rainy" temperature={18} />
    );

    expect(getByText('CloudRain Icon')).toBeTruthy();

  });

  it('toggles the favorite state when the favorite button is pressed', () => {
    const { getByTestId } = render(
      <WeatherCard city="London" condition="Cloudy" temperature={15} />
    );

    const starIcon = getByTestId('star-icon');
    expect(starIcon.props.color).toBe('#CCCCCC'); 

    const favoriteButton = getByTestId('favorite-button');
    fireEvent.press(favoriteButton); 

    const updatedStarIcon = getByTestId('star-icon');
    expect(updatedStarIcon.props.color).toBe('#FFD700'); 
  });
});
