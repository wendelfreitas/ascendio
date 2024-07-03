import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('<Label />', () => {
  it('should render component label successfully', () => {
    render(<Label id="terms1">Wendel Freitas</Label>);
    const text = screen.getByText('Wendel Freitas');

    expect(text).toBeInTheDocument();
  });
});
