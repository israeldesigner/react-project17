import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render POstCard correct', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });

  it('should mathc snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
