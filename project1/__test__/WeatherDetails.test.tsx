import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WeatherDetails from '@/components/utils/WeatherDetails';

describe('WeatherDetails Component', () => {
  it('renders correctly with weather data', () => {
    const mockWeatherData = {
      location: {
        name: 'New York',
        country: 'USA',
        localtime: '2024-09-16 14:00',
      },
      current: {
        temperature: 22,
        weather_descriptions: ['Partly Cloudy'],
        wind_speed: 10,
        wind_dir: 'N',
        pressure: 1012,
        humidity: 65,
        cloudcover: 20,
        feelslike: 21,
        uv_index: 5,
        visibility: 10,
        precip: 0,
      },
    };

    const { getByText, getByTestId } = render(
      <WeatherDetails weatherData={mockWeatherData} />
    );

    expect(getByText('New York, USA')).toBeTruthy();
    expect(getByText('Local Time: 2024-09-16 14:00')).toBeTruthy();
    expect(getByText('22°C')).toBeTruthy();
    expect(getByText('Partly Cloudy')).toBeTruthy();
    expect(getByText('Wind: 10 km/h N')).toBeTruthy();
    expect(getByText('Feels Like: 21°C')).toBeTruthy();
    expect(getByText('Humidity: 65%')).toBeTruthy();
    expect(getByText('Pressure: 1012 mb')).toBeTruthy();
    expect(getByText('Cloud Cover: 20%')).toBeTruthy();
    expect(getByText('Precipitation: 0 mm')).toBeTruthy();
    expect(getByText('Visibility: 10 km')).toBeTruthy();
    expect(getByText('UV Index: 5')).toBeTruthy();

    expect(getByTestId('favorite-button')).toBeTruthy();
  });

  it('displays error message when weather data is missing', () => {
    const { getByText } = render(<WeatherDetails weatherData={undefined} />);

    expect(getByText('No weather data available.')).toBeTruthy();
  });

  it('toggles favorite state when favorite button is pressed', () => {
    const mockWeatherData = {
      location: {
        name: 'New York',
        country: 'USA',
        localtime: '2024-09-16 14:00',
      },
      current: {
        temperature: 22,
        weather_descriptions: ['Partly Cloudy'],
        wind_speed: 10,
        wind_dir: 'N',
        pressure: 1012,
        humidity: 65,
        cloudcover: 20,
        feelslike: 21,
        uv_index: 5,
        visibility: 10,
        precip: 0,
      },
    };

    const mockOnFavoriteToggle = jest.fn();
    
    const { getByTestId } = render(
      <WeatherDetails weatherData={mockWeatherData} onFavoriteToggle={mockOnFavoriteToggle} />
    );

    const favoriteButton = getByTestId('favorite-button');

    fireEvent.press(favoriteButton);

    expect(mockOnFavoriteToggle).toHaveBeenCalledWith('New York');
  });
});
