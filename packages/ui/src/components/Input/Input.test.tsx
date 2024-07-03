import { screen, fireEvent, waitFor, render } from '@testing-library/react';

import { Input, InputMask } from './Input';

describe('<Input />', () => {
  it('should renders component successfully', () => {
    render(<Input placeholder="Nome completo" />);
    const text = screen.getByPlaceholderText('Nome completo');

    expect(text).toBeInTheDocument();
  });

  it('should render input mask component successfully', () => {
    render(
      <InputMask
        placeholder="Birthdate"
        id="birthdate"
        name="birthdate"
        format="####/##/##"
        defaultValue="1997/12/13"
      />
    );

    const input = screen.getByPlaceholderText('Birthdate');

    expect(input).toHaveValue('1997/12/13');
  });
});