import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
        expect(context.text() == "Preact 하더놈<Link /><Link /><Link />").toBe(true);
		expect(context.find('h1').text() == 'Preact 하더놈').toBe(true);
		expect(context.find('Link').length == 3).toBe(true);
	});
});
