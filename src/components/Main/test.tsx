import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<MainPage />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correct', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
