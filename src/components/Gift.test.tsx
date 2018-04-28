import * as Enzyme from 'enzyme';
import * as React from 'react';
import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = Enzyme.shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and a present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { currentTarget: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing intp the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { currentTarget: { value: present } });
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
