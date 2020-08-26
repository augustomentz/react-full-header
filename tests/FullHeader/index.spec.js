import React from 'react'
import { expect } from 'chai';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import FullHeader from '../../src/Components/FullHeader'

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
	it('Should have header tag when mount', () => {
		const wrapper = shallow(<FullHeader />);

		expect(wrapper.find('header')).to.have.length(1);
	})

	describe('Title', () => {
		it('Should have h1 when title passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' />);
	
			expect(wrapper.find('h1')).to.have.length(1);
		})
	
		it('Should not have h1 when title is not passed', () => {
			const wrapper = shallow(<FullHeader />);
	
			expect(wrapper.find('h1')).to.have.length(0);
		})
	
		it('Should have h1 with the title passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' />);
	
			expect(wrapper.find('h1').props().children).to.be.equal('TDD');
		})
	})

	describe('Subtitle', () => {	
		it('Should have h2 when title passed', () => {
			const wrapper = shallow(<FullHeader subtitle='JS com TDD na prática' />);
	
			expect(wrapper.find('h2')).to.have.length(1);
		})
	
		it('Should not have h2 when title is not passed', () => {
			const wrapper = shallow(<FullHeader />);
	
			expect(wrapper.find('h2')).to.have.length(0);
		})
	
		it('Should have h2 with the title passed', () => {
			const wrapper = shallow(<FullHeader subtitle='JS com TDD na prática' />);
	
			expect(wrapper.find('h2').props().children).to.be.equal('JS com TDD na prática');
		})
	})

	describe('BgColor', () => {	
		it('Should have background-color equal #ccc when none is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' />);
	
			expect(wrapper).to.have.style('background-color').equal('#ccc');
		})

		it('Should have background-color equal #000 when bgColor is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' bgColor='#000' />);
	
			expect(wrapper).to.have.style('background-color').equal('#000');
		})
	})

	describe('TextColor', () => {	
		it('Should have text-color equal #fff when none is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' />);
	
			expect(wrapper).to.have.style('color').equal('#fff');
		})

		it('Should have text-color equal #ff000 when textColor is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' textColor='#ff000' />);
	
			expect(wrapper).to.have.style('color').equal('#ff000');
		})
	})

	describe('Font', () => {	
		it('Should have font equal sans-serif when none is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' />);
	
			expect(wrapper).to.have.style('font-family').equal('sans-serif');
		})

		it('Should have font equal open-sans when Font is passed', () => {
			const wrapper = shallow(<FullHeader title='TDD' font='open-sans' />);
	
			expect(wrapper).to.have.style('font-family').equal('open-sans');
		})
	})

	describe('BgImage', () => {	
		it('Should have background-image equal empty when none is passed', () => {
			const wrapper = shallow(<FullHeader />);
	
			expect(wrapper).to.have.style('background-image').equal('url()');
		})

		it('Should have background-image equal bg.jpg when passed', () => {
			const wrapper = shallow(<FullHeader bgImage="bg.jpg" />);
	
			expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
		})
	})

	describe('Video', () => {	
		it('Should have video tag when video is passed', () => {
			const wrapper = shallow(<FullHeader video='myvideo.mp4' />);
	
			expect(wrapper.find('video')).to.have.length(1);
		})
	
		it('Should not have video tag when video is not passed', () => {
			const wrapper = shallow(<FullHeader />);
	
			expect(wrapper.find('video')).to.have.length(0);
		})
	
		it('Should have video tag with the video passed', () => {
			const wrapper = shallow(<FullHeader video='myvideo.mp4' />);
	
			expect(wrapper.find('video').props().src).to.be.equal('myvideo.mp4');
		})
	})
})